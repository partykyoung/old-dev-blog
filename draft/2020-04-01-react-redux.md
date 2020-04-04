---
title: redux
date: 2020-04-01 23:26:04
categories:
  - front-end
  - etc
description:
tags:
  - front-end
  - etc
---

## 굳이 Redux를 배워야하나?

옛날의 React였다면 글로벌 상태관리에 Redux가 필수 였지만 지금은 아니다. Context API도 있고 hooks도 있어서 잘 조합해서 사용하면 리덕스 대신에 사용할 수 있다. 내 블로그 역시 context api와 hooks를 조합하여 redux 대신에 사용하고 있다.

하지만 좀 더 큰 서비스에서 제대로 글로벌 상태관리를 하려면 리덕스가 아직까지는 좋은 것 같다. 생태계도 잘 구축되어 있고 redux-thunk, redux-saga 처럼 잘 만들어진 모듈이 있기 때문이다.

Mobx도 있긴 하나 Mobx를 제대로 알려면 Redux를 좀 더 제대로 알아야 하는것 같다. 때문에 다시 한번 Redux에 대해 제대로 집고 넘어가보려 한다.

## Redux란?

Redux는 javaScript App을 위한 상태관리 라이브러리 이다.

Redux는 React 또는 다른 JavaScript 라이브러리와 함께 사용할 수 있다.

### Actions

Action은 애플리케이션에서 Store로 데이터를 보내는 데이터 묶음이다. Store의 유일한 정보원이 된다.
store.dispatch() 를 사용하여 Action을 Store로 보낼 수 있다.

### Reducers

Reducer은 store에서 전송된 작업에 대응하여 state가 어떻게 변하는지를 지정한다.
action은 일어난 일만 명세할 뿐 state가 어떻게 변하는지는 명세하지 않는다.

### Store

Store은 Action과 Reducer을 가지고 오는 객체이다.

- 애플리케이션의 상태를 저장한다.
- getState() 메소드로 state 접근을 할 수 있다.
- dispatch(action) 메소드로 state 업데이트를 할 수 있다.
- subscribe(listner) 메소드로 listener를 등록할 수 있다.
  - subscribe(listner) 메소드에서 반환된 메소드로 listner 해제를 핸들링 할 수 있다.

Redux에서는 단 하나만의 store를 가질 수 있다.

https://redux.js.org/basics/basic-tutorial
