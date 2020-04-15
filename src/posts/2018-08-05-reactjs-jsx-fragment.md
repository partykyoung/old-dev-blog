---
title: Fragment
date: 2018-08-05 06:06:13
path: /front-end/reactjs/fragment
description: JSX와 Fragment가 무엇인지 알아봅시다.
---

## JSX

```javascript
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h1>React.js</h1>
        <div>
          JSX <br /> :)
        </div>
      </div>
    );
  }
}

export default App;
```

JSX는 JavaScript XML의 약자이다. render 함수를 보면 HTML 태그 처럼 생긴 것들이 보이는데 저 부분이 JSX 이다. JSX로 컴포넌트가 화면에 어떻게 보일지 나타낼 수 있다. JSX는 HTML과 비슷해 보이지만 용도도 사용법도 다르다.

```javascript
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      /* {
        error

        <div>안녕하세요</div>
        <div>반갑습니다</div>

      } */

      <div>
        <div>안녕하세요</div>
        <div>반갑습니다</div>
      </div>
    );
  }
}

export default App;
```

![실행결과](../images/frontend/reactjs-fragment-1.png)

JSX는 컴포넌트에 여러 요소가 있다면 부모 요소 하나로 꼭 감싸야 한다. Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 DOM 트리 구조 하나여야 한다는 규칙이 있기 때문이다.
하지만 이렇게 요소들을 감싸기 위한 용도로 DOM 요소들을 추가하다보면 쓸모없는 요소들이 늘어나게 된다.

## Fragment

```javascript
import React, { Component, Fragment } from "react";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>안녕하세요</div>
        <div>반갑습니다</div>
      </Fragment>
    );
  }
}

export default App;
```

![실행결과](../images/frontend/reactjs-fragment-2.png)

Fragment는 React v16 이상의 버전에서 도입되었다. Fragment로 부모 DOM 요소를 추가하지 않고도 자식 요소들을 그룹화 할 수 있다.
Fragment를 사용하면 단지 부모 요소로만 쓰이는 불필요한 DOM을 줄일 수 있어 조금 더 빨라지고 메모리 사용량도 조금 더 적어진다. 개발자 도구로 DOM 요소를 확인 할 때도 조금 더 편리하게 확인할 수 있다.

```javascript
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <>
        <div>안녕하세요</div>
        <div>반갑습니다</div>
      </>
    );
  }
}

export default App;
```

fragments를 일일히 import 하지않고 <></>만으로도 fragments를 사용할 수 있다.

## 마무리

실무에서 React.js를 사용하면서 왜 JSX에 부모요소로 꼭 자식요소들을 감싸야 하는지 이유도 모른체 매번 써왔는데 이번에 처음부터 React.js를 공부하면서 드디어 그 이유를 알게 되었다 ㅠ...
개인적으로 부모요소 규칙때문에 짜증난적이 한두번이 아니었는데 Fragment 덕분에 많이 편해졌다. 필요한걸 쏙쏙 골라서 업데이트 해주는 React.js가 너무 좋다 :).

## Reference

> - [리액트를 다루는 기술](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791160505238&orderClick=LAG&Kc=)
> - [Fragments](https://reactjs.org/docs/fragments.html)
