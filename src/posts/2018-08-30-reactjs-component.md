---
title: Component
tags:
  - React.js
categories:
  - Front-end
  - React.js
date: 2018-09-02 23:29:09
---


## Component
Component는 JavaScript function과 같다. props라고 불리는 임의의 input을 받아들이고 화면에 어떻게 나타낼지를 설명하는 React Element를 반환한다.
Component는 데이터가 주어졌을 때 이에 맞추어 UI를 만들어 주고 LifeCycle API를 이용하여 Component가 화면에서 나타날 때, 사라질 때, 변화가 일어날 때 주어진 작업들을 처리할 수 있으며 method를 만들어 특별한 기능을 붙일 수 있다.

```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        first component!
      </div>
    );
  }
}

export default App;
```
컴포넌트의 초기 코드이다. es6에 추가된 export 명령어로 컴포넌트를 모듈화 시켜 내보낼 수 있다. 

```javascript
import React, { Component } from 'react';
import App from './App';

class AppContainer extends Component {
  render() {
    return (
      <App />
    );
  }
}

export default AppContainer;
```
import 명령어로 원하는 컴포넌트를 불러와 사용할 수 있다. import 역시 es6에서 추가된 명령어 이다. 

## Reference
[Components and Props](https://reactjs.org/docs/components-and-props.html)
[리액트를 다루는 기술](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791160505238&orderClick=LAG&Kc=)