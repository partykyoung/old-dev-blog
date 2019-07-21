---
title: state
date: 2019-01-27 22:03:42
description: Component 내부에서 읽고 업데이트도 가능한 값을 사용하려면 state를 써야 한다.
path: /front-end/reactjs/state
---

## state

Component 내부에서 읽고 업데이트도 가능한 값을 사용하려면 state를 써야 한다. state는 기본 값이 미리 설정되어 있어야 하고 this.setState 메소드로 값을 업데이트 할 수 있다.

```javascript
import React, { Component } from "react"

export default class MyComponent extends Component {
  constructor(props) {
    super(props)

    // state 초기값 설정
    this.state = {
      number: 0,
    }
  }

  handleUpdate = () => {
    const { number } = this.state

    // state 업데이트
    this.setState({
      number: number + 1,
    })
  }

  render() {
    const { number } = this.state

    return (
      <div>
        {`Number: ${number}`}
        <button type="button" onClick={this.handleUpdate}>
          업데이트
        </button>
      </div>
    )
  }
}
```

<iframe height="265" style="width: 100%;" scrolling="no" title="react state" src="//codepen.io/partykyoung/embed/PVNOjm/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/partykyoung/pen/PVNOjm/'>react state</a> by partyKyoung
  (<a href='https://codepen.io/partykyoung'>@partykyoung</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### constructor

constructor는 클래스 인스턴스를 생성하고 클래스 프로퍼티를 초기화를 해주는 특수한 메소드이다. state의 초기값도 constructor에서 지정한다. constructor는 부모 클래스의 constructor를 호출하기 위해 super 키워드를 사용할 수 있다. constructor을 만들면 super 키워드를 필수로 사용해야 한다.

super 키워드에 props를 인자로 넘겨줘야 constructor 안에서 this.props에 접근할 수 있다.
만약 constructor 안이 아닌 다른 곳에서 this.props에 접근하고 싶으면 super 키워드에 props를 인자로 넘겨줄 필요가 없다.

### setState

state 값을 업데이트 할 때는 this.setState 메서드를 사용한다. state값을 업데이트 할 때는 무조건 setState로만 업데이트를 해야한다.

setState 메서드는 인자로 전달받은 state 필드를 업데이트 한 후 컴포넌트가 리렌더링하도록 트리거 하는 것 이다. 만약 직접 state에 접근하여(this.state.number = 1) 값을 수정하면 컴포넌트는 리렌더링 되지 않는다. this.forceUpdate 메소드로 강제 리렌더링을 시킬 수 있지만 이 방식은 매우 비효율적이므로 웬만하면 사용을 피해야 한다.

### transform-class-properties

```javascript
import React, { Component } from "react"

export default class MyComponent extends Component {
  state = {
    number: 0,
  }

  handleUpdate = () => {
    const { number } = this.state

    // state 업데이트
    this.setState({
      number: number + 1,
    })
  }

  render() {
    const { number } = this.state

    return (
      <div>
        {`Number: ${number}`}
        <button type="button" onClick={this.handleUpdate}>
          업데이트
        </button>
      </div>
    )
  }
}
```

transform-class-properties 문법으로 constructor 바깥에서 state를 정의할 수도 있다.

### typescript

typescript를 사용하면 state에도 타입을 지정해줄 수 있다.

```javascript
import React, { Component } from "react"

interface Props {}
interface State {
  number: number;
}

export default class MyComponent extends Component<Props, State> {
  state = {
    number: 0,
  }

  handleUpdate: any = () => {
    const { number } = this.state

    // state 업데이트
    this.setState({
      number: number + 1,
    })
  }

  render(): JSX.Element {
    const { number } = this.state

    return (
      <div>
        {`Number: ${number}`}
        <button type="button" onClick={this.handleUpdate}>
          업데이트
        </button>
      </div>
    )
  }
}
```

타입스크립트를 공부하고 있어서 타입스크립로 함수를 작성해봤다. render 함수는 JSX 객체를 리턴하기 때문에 리턴 타입에 JSX.Element를 적어주었고 나머지 이벤트 함수는 state 값만 바꿀 뿐 리턴 값이 없어서 리턴 타입으로 any를 적어 주었다.

## Reference

- [리액트를 다루는 기술](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791160505238&orderClick=LAG&Kc=)
- [React ES6 — Class constructor에서의 super()](https://medium.com/@umioh1109/react-es6-class-constructor%EC%97%90%EC%84%9C%EC%9D%98-super-9d53ba0611d9)
