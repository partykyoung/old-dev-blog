---
title: TypeScript로 생성한 React 프로젝트에서 테스트 환경 구축 및 테스트 실행하기
date: 2019-02-14 19:30:34
description: 테스트 환경 구축 및 코드 작성 과정을 기록하였습니다.
path: /front-end/typescript/react-test
---

개인 프로젝트를 작업 하고 있던 도중 테스트 환경을 도입해보고 싶어서 열심히 끄적이다가 기록을 남기기로 했다.
TypeScript로 생성된 React 프로젝트에 테스트 환경 을 구축 해보고 테스트 까지 한번 해보자.

해당 프로젝트는 create-react-app 으로 생성되었다.

## 테스트 환경 설정

```
yarn add --dev jest @types/jest
yarn add --dev enzyme enzyme-adapter-react-16
yarn add --dev @types/enzyme @types/enzyme-adapter-react-16
```

먼저 테스트에 필요한 모듈들을 설치해주자. TypeScript 환경이기 때문에 각 모듈들의 @types도 설치해줘야 한다.

```
yarn add --dev enzyme-to-json @types/enzyme-to-json
```

스냅샷의 가독성을 위해 enzyme-to-json 모듈도 설치하였다.

### setupTest.ts

```javascript
import * as Enzyme from "enzyme"
import ReactSixteenAdapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new ReactSixteenAdapter() })
```

CRA로 만든 프로젝트라면 위의 소스 파일 처럼 테스트 설정을 해줘야 한다.
테스트 파일 작성 중 계속 오류가 발생하길래 리서치를 하던 도중 [여기에서](https://github.com/Microsoft/TypeScript-React-Starter/issues/76#issuecomment-340544510) 제시했던 대로 파일을 작성하니 정상 작동 되었다.

### package.json

```json
{
  // ... 생략
  "jest": {
    // ... 생략
    "setupTestFrameworkScriptFile": "<rootDir>/test/setupTest.ts",
    "snapshotSerializers": ["enzyme-to-json/serializer"]
    // ... 생략
  }
  // ... 생략
}
```

package.json 파일에 위에처럼 enzyme, enzyme-to-json을 위한 설정만 추가해주면 설정은 끝난다.

## 컴포넌트 작성

```javascript
import * as React from "react";
import classNames from "classnames";
import Portal from "react-minimalist-portal";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import "./Modal.scss";

interface ModalProps {
  backdropClassName: string;
  children: React.ReactNode;
  modalClassName: string;
  isOpen: boolean;
  onClose: any;
  size: string;
}

interface ModalStates {
  isOpen: boolean;
}

export default class Modal extends React.Component<ModalProps, ModalStates> {
  public static defaultProps = {
    backdropClassName: "",
    children: null,
    modalClassName: "",
    isOpen: false,
    onClose: () => {},
    size: "sm"
  };

  handleIgnoreEvent: any = event => {
    event.stopPropagation();
  };

  handleClose: any = event => {
    event.stopPropagation();

    this.props.onClose();
  };

  render(): JSX.Element {
    const {
      backdropClassName,
      children,
      isOpen,
      modalClassName,
      onClose,
      size
    } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <Portal>
        <div
          className={classNames(
            "modal-backdrop",
            { open: isOpen },
            backdropClassName
          )}
          onClick={onClose}
        >
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={300}
            transitionLeave={true}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={500}
          >
            <div
              className={classNames("modal", modalClassName, size)}
              onClick={this.handleIgnoreEvent}
            >
              <button type="button" onClick={onClose}>
                닫기
              </button>
              {children}
            </div>
          </ReactCSSTransitionGroup>
        </div>
      </Portal>
    );
  }
}
```

간단하게 모달 컴포넌트를 작성했다. 이 모달 컴포넌트를 테스트 해 볼 것이다.

## 테스트코드 작성

```javascript
import * as React from "react"
import * as Enzyme from "enzyme"
import Modal from "./Modal"

describe("<Modal />", () => {
  let component = null
  let isOpen = true

  // 모달 컴포넌트 랜더링
  it("Modal Render...", () => {
    component = Enzyme.shallow(
      <Modal
        backdropClassName="test-backdrop"
        modalClassName="test-modal"
        isOpen={isOpen}
        size="sm"
        onClose={() => {
          isOpen = false
        }}
      >
        <div>Modal Test</div>
      </Modal>
    )

    expect(component).toMatchSnapshot()
  })
})
```

맨 먼저 스냅샷 테스트코드를 작성했다.

- describe는 테스트 무리를 가지고 있는 함수이다. 두개의 parameter를 받는데 첫번째는 테스트에 붙이는 의미있는 이름이고 두번째는 여러개의 테스트를 포함한 함수이다. descirbe는 중첩해서 사용할 수도 있다.
- it은 테스트 자체가 되는 함수 이며 두개의 parameter를 받는다. 첫번째는 test의 이름이고 두번째는 테스트의 본문을 유지한다.
- expect는 여러 가지 유효성 검사기에 대한 액세스를 제공하여 여러 가지를 검증한다.
- shallow는 Enzyme에서 제공하는 rendering API 이다. rednering API에는 mount, render가 더 있는데 각각 작동하는 방식이 다르므로 [상황에 맞춰서 알맞은 것](https://medium.com/@Yohanna/difference-between-enzymes-rendering-methods-f82108f49084)을 골라서 사용하면 된다.

```javascript
describe("<Modal />", () => {
  // ... 생략

  // 모달이 닫겨 있을 때
  it("Modal close...", () => {
    component.setProps({ isOpen: false })

    expect(component.find(".modal-backdrop").exists()).toBe(false)
  })

  // 모달이 열려 있을 때
  it("Modal open...", () => {
    component.setProps({ isOpen: true })

    expect(component.find(".modal-backdrop").exists()).toBe(true)
  })

  // ... 생략
})
```

isOpen props를 받아서 모달의 출력 여부를 판단하므로 isOpen의 값에 따라 모달이 존재 하는지 안하는지 확인하는 테스트 코드를 작성 했다.
isOpen이 false 일 때는 컴포넌트의 render 함수가 null을 리턴하므로 false 값이 나와야 하고 isOpen이 true 일 때는 모달이 정상적으로 출력되므로 true 값이 나와야 한다.

- toBe 메소드는 값이 예상한 값인지 확인한다.
- find 메소드는 인자로 받은 selector을 통하여 컴포넌트 안에서 특정 DOM을 찾을 수 있게 해준다.
- exists 메소드는 찾는 노드나 selector의 존재 유무를 판단해준다.
- setProps 메소드로 root 컴포넌트의 props를 설정하고 재랜더링 할 수 있다.

```javascript
describe("<Modal />", () => {
  // ... 생략

  // 모달이 열려 있을 때
  it("Modal open...", () => {
    component.setProps({ isOpen: true })

    expect(component.find(".modal-backdrop").exists()).toBe(true)
  })

  // 모달 안을 클릭 했을 때
  it("Modal click...", () => {
    component.find(".modal").simulate("click", { stopPropagation() {} })

    const lastChild = component
      .find(".modal")
      .children()
      .last()

    console.log(lastChild.debug())
    lastChild.simulate("click", { stopPropagation() {} })

    expect(component.find(".modal").exists()).toBe(true)
  })

  // 모달 닫기 버튼을 눌러 닫을 때
  it("Modal is closing...", () => {
    component.find("button").simulate("click")

    expect(component.find(".modal-backdrop").exists()).toBe(false)
  })
})
```

이벤트가 발생했을 때 컴포넌트가 원하는 대로 작동하는지 확인하는 테스트 코드를 작성했다.
모달이 출력되었을 때 모달 및 모달 안의 자식 DOM들을 클릭했을 때도 모달이 닫기면 안되기 때문에 모달 안의 DOM을 눌렀을 떄 모달이 닫기는지 안닫기는지 테스트 하고 있다.
모달 안에서 닫기 버튼을 눌렀을 때는 모달이 닫겨야 하므로 버튼 테스트도 작성했다.
모달 안의 DOM을 클릭 할 때 stopPropagation 이벤트가 발생하므로 가짜 함수를 추가 하였다.([참조](https://github.com/airbnb/enzyme/issues/323))

- debug 메소드는 디버깅 목적으로 HTML과 유사한 wrapper 문자열을 반환한다.
- simulate 메소드는 이벤트를 시뮬레이션 한다. 첫번째 파라미터는 시뮬레이터 할 이벤트 이름을 넣고 두번째 파라미터에는 이벤트에 전달 되는 모의 이벤트 객체가 들어간다.

## 테스트

```
yarn run test
```

위의 명령어로 테스트를 실행할 수 있다.

![스냅샷 생성](../images/frontend/typescript-react-test-1.png)
테스트를 실행하면 스냅샷 폴더가 생긴다.

```javascript
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`<Modal /> Modal Render... 1`] = `
<Portal>
  <div
    className="modal-backdrop open test-backdrop"
    onClick={[Function]}
  >
    <CSSTransitionGroup
      transitionAppear={true}
      transitionAppearTimeout={300}
      transitionEnter={true}
      transitionEnterTimeout={300}
      transitionLeave={true}
      transitionLeaveTimeout={500}
      transitionName="example"
    >
      <div
        className="modal test-modal sm"
        onClick={[Function]}
      >
        <button
          onClick={[Function]}
          type="button"
        >
          닫기
        </button>
        <div>
          Modal Test
        </div>
      </div>
    </CSSTransitionGroup>
  </div>
</Portal>
`
```

이런식으로 스냅샷이 생성된다.

![테스트 성공](../images/frontend/typescript-react-test-2.png)
테스트에 성공하면 위의 스샷 처럼 성공 메시지들이 출력된다.
debug로 child elements가 제대로 출력되는지 console.log를 찍었기 떄문에 console.log 결과물이 같이 출력되었다.

![테스트 실패](../images/frontend/typescript-react-test-3.png)
테스트에 실패하면 실패한 테스트 코드 위치와 원하는 테스트 값, 실제로 나온 테스트 결과값을 보여준다.

## 마무리

테스트코드를 작성해본건 이번이 처음이라 틀린 부분이 있을 수도 있다 ㅠ. 이번 포스팅을 기회로 테스트 습관을 들이도록 노력해봐야겠다.

수정해야 할 부분이나 보완되어야 할 부분이 있으면 언제든 피드백 부탁드립니다.

[소스 코드 전체 보기](https://github.com/partyKyoung/wolfOnAir-front/tree/master/src/components/ui/Modal)

## Reference

- [Testing with TypeScript, Enzyme, and React](https://rjzaworski.com/2018/03/testing-with-typescript-react-and-enzyme)
- [Enzyme](https://airbnb.io/enzyme/)
- [[React] 테스팅 코드 작성하기](https://medium.com/@sangboaklee/react-%ED%85%8C%EC%8A%A4%ED%8C%85-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1%ED%95%98%EA%B8%B0-1c3719cee5af)
