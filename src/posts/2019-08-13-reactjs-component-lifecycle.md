---
title: Lifecycle
date: 2019-08-13
description: React Lifecycle을 정리해보았습니다.
path: /front-end/reactjs/lifecycle
---

React 컴포넌트에는 lifeCycle이 존재한다. 컴포넌트 수명은 페이지에 렌더링되기 전 준비과정에서 시작하여 페이지에서 사라질 때 끝난다.

## 마운트

DOM이 생성되고 웹 브라우저상에 나타나는 것을 마운트 라고 한다.

- constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount()

## 업데이트

props나 state가 바뀌거나 부모 컴포넌트가 리렌더링될 때, fourceUpdate로 강제 렌더링을 트리거할 때 업데이트가 발생한다.

- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

## 언마운트

컴포넌트를 DOM에서 제거하는 것을 언마운트 라고 한다.

- componentWillUnmount()

## 라이프사이클 종류

### render()

<iframe height="265" style="width: 100%;" scrolling="no" title="react render" src="//codepen.io/partykyoung/embed/zYOBLJx/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/partykyoung/pen/zYOBLJx/'>react render</a> by partyKyoung
  (<a href='https://codepen.io/partykyoung'>@partykyoung</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

lifeCycle 메서드 중 유일한 필수 메서드 이다.

HTML태그나 컴포넌트같은 리액트 요소들을 반환한다. 아무것도 보여주고 싶지 않으면 null 또는 false 값을 반환하면 된다. 이 메서드 안에서 this.props와 this.state에 접근할 수 있다.
이 메서드 안에서는 절대 컴포넌트의 state를 변경하면 안되고 호출될 때마다 동일한 결과를 반환해야 하며, 브라우저와 직접적으로 상호작용을 하면 안된다. DOM 정보를 가져오거나 변화를 줄 때는 componentDidMount에서 처리해야 한다.

shoudComponentUpdate 메서드가 false를 반환하면 render 메서드는 호출되지 않는다.

### constructor()

<iframe height="265" style="width: 100%;" scrolling="no" title="react constructor" src="//codepen.io/partykyoung/embed/rNBLrqN/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/partykyoung/pen/rNBLrqN/'>react constructor</a> by partyKyoung
  (<a href='https://codepen.io/partykyoung'>@partykyoung</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

컴포넌트 생성자 메서드로 컴포넌트가 마운트되기 전에 호출된다. 이 메서드에서 state 값을 초기화 하거나 이벤트 함수들을 바인딩 할 수 있다. 해당 작업들이 필요 없다면 constructor 메서드는 생략 가능하다.

이 메서드 안에서 super을 호출한 후에 props를 인자로 넘겨줘야 constructor 안에서 this.props에 접근할 수 있다.

### static getDerivedStateFromProps()

<iframe height="265" style="width: 100%;" scrolling="no" title="react getDerivedStateFromProps" src="//codepen.io/partykyoung/embed/ZEzOjmg/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/partykyoung/pen/ZEzOjmg/'>react getDerivedStateFromProps</a> by partyKyoung
  (<a href='https://codepen.io/partykyoung'>@partykyoung</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

최초 마운트 시와 갱신 시 render() 메서드를 호출하기 직전에 호출된다. props로 받아온 값으로 state를 갱신시키는 용도로 사용한다. state를 갱신하기 위한 객체를 반환하거나 null을 반환하여 아무것도 갱신하지 않을 수 있다. 이 메서드는 컴포넌트 인스턴스에 접근할 수 없다.

### componentDidMount()

<iframe height="265" style="width: 100%;" scrolling="no" title="react componentDidMount" src="//codepen.io/partykyoung/embed/mdbEjYX/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/partykyoung/pen/mdbEjYX/'>react componentDidMount</a> by partyKyoung
  (<a href='https://codepen.io/partykyoung'>@partykyoung</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

컴포넌트를 만들고 첫 렌더링을 다 마친 후에 실행된다. 이 안에서 다른 자바스크립트 라이브러리 또는 프레임워크의 함수를 호출하거나 이벤트 등록, setTimeout, setInterval, 네트워크 같은 비동기 작업을 처리하면 된다.

### shoudComponentUpdate()

<iframe height="265" style="width: 100%;" scrolling="no" title="react shoudComponentUpdate" src="//codepen.io/partykyoung/embed/KKPMxKj/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/partykyoung/pen/KKPMxKj/'>react shoudComponentUpdate</a> by partyKyoung
  (<a href='https://codepen.io/partykyoung'>@partykyoung</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

props 또는 state를 변경했을 때 리렌더링을 시작할지 여부를 지정하는 메서드이다. 이 메서드에서는 true 또는 false를 무조건 반환해야  한다. false를 반환하면 더이상 컴포넌트 업데이트 및 리렌더링을 진행하지 않는다. 기본값 으로 true를 반환한다.

이 메서드는 오직 성능 최적화만을 위한 메서드 이다. 렌더링을 방지하는 목적으로는 이 메서드 대신 PureComponent를 사용하는 것이 좋다. 

### getSnapshotBeforeUpdate()

<iframe height="265" style="width: 100%;" scrolling="no" title="react getSnapshotBeforeUpdate" src="//codepen.io/partykyoung/embed/ZEzOMQG/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/partykyoung/pen/ZEzOMQG/'>react getSnapshotBeforeUpdate</a> by partyKyoung
  (<a href='https://codepen.io/partykyoung'>@partykyoung</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

render 메서드를 호출한 후 DOM에 변화를 반영하기 바로 직전에 호출하는 메서드이다. 이 메서드가 반환하는 값은 componentDidUpdate()에서 세번째 인자로 받을 수 있다.

### componentDidUpdate()

<iframe height="265" style="width: 100%;" scrolling="no" title="react componentDidUpdate" src="//codepen.io/partykyoung/embed/GRKqXvY/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/partykyoung/pen/GRKqXvY/'>react componentDidUpdate</a> by partyKyoung
  (<a href='https://codepen.io/partykyoung'>@partykyoung</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

리렌더링을 완료한 후 실행되는 메서드이다. 리렌더링이 일어나고 컴포넌트가 갱신되었을 때 DOM을 조작하기 위해 이 메서드를 활용하면 좋다. 

이 메서드에서 setState를 호출할 수도 있지만 조건문으로 감싸지 않으면 무한루프가 발생할 수 있다. setState를 실행하면 render가 다시 일어나고 componentDidUpdate 도 다시 발생하기 때문이다.

### componentWillUnmount()

<iframe height="265" style="width: 100%;" scrolling="no" title="react componentWillUnmount" src="//codepen.io/partykyoung/embed/RwbRYvv/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/partykyoung/pen/RwbRYvv/'>react componentWillUnmount</a> by partyKyoung
  (<a href='https://codepen.io/partykyoung'>@partykyoung</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

컴포넌트를 DOM에서 제거할 때 실행된다. 이 메서드에서 componentDidMount에서 등록한 이벤트나 타이머, 직접 생성한 DOM을 삭제해야 한다

이 메서드가 실행되면 컴포넌트는 다시 렌더링 되지 않으므로 이 메서드 안에서 setState를 호출하면 안된다.

### componentDidCatch()

<iframe height="265" style="width: 100%;" scrolling="no" title="react componentDidCatch" src="//codepen.io/partykyoung/embed/dybzoyP/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/partykyoung/pen/dybzoyP/'>react componentDidCatch</a> by partyKyoung
  (<a href='https://codepen.io/partykyoung'>@partykyoung</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

자손 컴포넌트에서 오류가 발생했을 경우 호출된다. 자식 컴포넌트에서 발생하는 에러만 잡아낼 수 있고, 자신의 에러는 잡아낼수 없다.

## Reference
- [리액트를 다루는 기술](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791160505238&orderClick=LAG&Kc=)
- [React.Component](https://ko.reactjs.org/docs/react-component.html)
- [리액트 교과서 - 컴포넌트와 라이프사이클 이벤트](https://velog.io/@kyusung/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B5%90%EA%B3%BC%EC%84%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%99%80-%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4-%EC%9D%B4%EB%B2%A4%ED%8A%B8)