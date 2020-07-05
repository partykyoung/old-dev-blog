---
title: javaScript 실행 컨텍스트
date: 2020-07-05 20:37:22
categories:
  - front-end
  - javaScript
description: JavaScript 실행 컨텍스트
tags:
  - front-end
  - javaScript
---

## 실행 컨텍스트

실행 가능한 자바스크립트 코드 블록이 실행되는 환경.

- 실행 컨텍스트 안에 실행에 필요한 여러가지 정보를 담고 있다.

[EcmaScript](http://dmitrysoshnikov.com/ecmascript/chapter-1-execution-contexts/)에서는 실행 컨텍스트가 형셩되는 경우를 `전역 코드, 함수 코드, eval() 코드` 로 규정하고 있다.

### 실행 컨텍스트 생성 과정

```javascript
var name = "Park";

console.log(name);

function context1() {
  var name2 = "You";

  console.log(name2);
}

function context2() {
  context1();
  var name3 = "Kyoung";

  console.log(name3);
}

context2();

/* 실행결과 */
// "Park"
// "You"
// "Kyoung"
```

위의 코드를 예시로 들어보자.

https://ui.dev/javascript-visualizer/

## Reference

https://www.youtube.com/watch?v=Nt-qa_LlUH0
https://velog.io/@04_miffy/2020-01-21-0201-%EC%9E%91%EC%84%B1%EB%90%A8
http://dmitrysoshnikov.com/ecmascript/chapter-1-execution-contexts/
