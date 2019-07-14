---
title: 이벤트 핸들링
tags: ["front-end", "react.js"]
date: 2019-02-09 23:48:14
description: 유저가 웹 브라우저에서 DOM 요소들과 상호 작용하는 것을 이벤트(event)라고 한다.
path: /front-end/reactjs/event
---

## 이벤트

유저가 웹 브라우저에서 DOM 요소들과 상호 작용하는 것을 이벤트(event)라고 한다.

### javascript

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>이벤트</title>
  </head>
  <body>
    <div id="number">1</div>
    <button type="button" onclick="changeNumber()">클릭</button>

    <script>
      function changeNumber() {
        const div = document.getElementById("number")

        let number = parseInt(div.innerText)

        number += 1

        div.innerHTML = number
      }
    </script>
  </body>
</html>
```

<iframe height="265" style="width: 100%;" scrolling="no" title="javascript event" src="//codepen.io/partykyoung/embed/bzwKgJ/?height=265&theme-id=0&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/partykyoung/pen/bzwKgJ/'>javascript event</a> by partyKyoung
  (<a href='https://codepen.io/partykyoung'>@partykyoung</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### react

React의 이벤트 시스템은 웹 브라우저의 HTML 이벤트와 인터페이스가 동일하기 때문에 사용법이 꽤 비슷하다.

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

### 이벤트 사용시 주의 사항

- 이벤틑 이름은 camelCase로 작성하기
  onclick이나 onchagne등의 이벤트 이름을 React에서는 onClick, onChagne ... 이런 식으로 작성해야 한다.

- 이벤트에 함수 형태의 객체를 전달하기
  HTML에서는 이벤트를 설정할 때 큰 따옴표 안에 실행할 코드를 넣지만 리액트에서는 함수 형태의 객체를 전달한다. 화살표 함수로 바로 전달해도 되고 렌더링 부분 외부에 함수를 작성해서 전달해도 된다.

- DOM 요소에만 이벤트 설정 가능
  DOM 요소에는 이벤트를 설정할 수 있지만 직접 만든 컴포넌트에는 이벤트를 설정시 props로 전달되기 때문에 자체적으로 이벤트를 사용할 순 없다. 대신 전달받은 props를 컴포넌트 내부의 DOM에서 이벤트로 설정 가능하다.

### 이벤트 바인딩

![함수가 가리키는 this](../images/frontend/reactjs-event-1.png)
JavaScript 에서 함수를 선언하면 함수는 자기 자신을 가리키는 this 를 생성하며, 함수 호출 시, this 는 전역 객체를 바인딩 하게 된다.

```javascript
export default class MyComponent extends Component {
  state = {
    number: 0,
  }

  handleUpdate() {
    const { number } = this.state

    // state 업데이트
    this.setState({
      number: number + 1,
    })
  }

  // ... 생략
}
```

![함수 바인딩이 되어있지 않기 때문에 함수 실행 시 오류가 발생한다.](../images/frontend/reactjs-event-2.png)
리액트도 JavaScript이기 때문에 위의 코드 처럼 컴포넌트에 임의 메서드를 만들면 기본적으로 this에 접근할 수 없다.

```javascript
export default class MyComponent extends Component {
  // ... 생략

  constructor() {
    super()

    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate() {
    const { number } = this.state

    // state 업데이트
    this.setState({
      number: number + 1,
    })
  }

  // ... 생략
}
```

컴포넌트의 생성자 메서드인 constructor에서 각 메서드를 this와 바인딩 해주어야 한다. 메서드에서 this를 사용할 수 있도록 메서드에 this를 묶어주는 것이다.

```javascript
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

  // ... 생략
}
```

바벨의 transform-class-properties 문법을 사용하여 화살표 함수 형태로 메서드를 정의할 수 있다.
화살표 함수는 함수를 둘러싸고 있는 영역의 this를 함수 내부에서 this로 그대로 사용한다.

### typescript

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

## Reference

[리액트를 다루는 기술](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791160505238&orderClick=LAG&Kc=)
[react 컴포넌트에서 constructor 내부에 이벤트 함수를 바인딩 해줘야 하는 이유](https://2dubbing.tistory.com/66)
[컴포넌트 이벤트 연결(바인딩)](https://www.zerocho.com/category/React/post/578232e7a479306028f43393)
