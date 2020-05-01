---
title: Redux
date: 2020-04-01 23:26:04
categories:
  - front-end
  - etc
description:
tags:
  - front-end
  - etc
---

## Redux란?

Redux는 JavaScript App을 위한 상태관리 라이브러리 이다.

### Actions

Action은 Application에서 Store로 데이터를 보내는 데이터 묶음이다. JavaScript 객체로 표현된다.

```javascript
// type
const ADD_TODO = 'ADD_TODO'

// action
{
  type: ADD_TODO,
  text: 'Redux - Actions 정리'
}
```

Action 객체는 수행 중인 작업의 유형을 나타내는 type 속성이 필요하다. type은 대게 string 형식으로 정의한다. type을 제외한 그 외의 값들은 개발자 마음대로 넣어줄 수 있다.

### Action Creators

Action Creators는 Action을 생성하는 함수이다. Parameter을 받아서 액션을 만들어 반환한다.

```javascript
function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}
```

### Reducers

Reducer는 Store로 보낸 Action에 응답하여 state가 어떻게 변하는지를 정의한다.
Action은 일어난 일만 명세할 뿐 state가 어떻게 변하는지는 명세하지 않는다.

```javascript
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
}
```

### Store

Store은 Action과 Reducer을 가지고 오는 객체이다.

- 애플리케이션의 상태를 저장한다.
- getState() 메소드로 state 접근을 할 수 있다.
- dispatch(action) 메소드로 state 업데이트를 할 수 있다.
- subscribe(listner) 메소드로 listener를 등록할 수 있다.
  - subscribe(listner) 메소드에서 반환된 메소드로 listner 해제를 핸들링 할 수 있다.

Redux에서는 단 하나만의 store를 가질 수 있다.

> - [Redux Basics](https://redux.js.org/basics/basic-tutorial)
> - [Redux (1) 소개 및 개념정리](https://velog.io/@velopert/Redux-1-%EC%86%8C%EA%B0%9C-%EB%B0%8F-%EA%B0%9C%EB%85%90%EC%A0%95%EB%A6%AC-zxjlta8ywt)
