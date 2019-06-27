---
title: TypeScript
date: 2019-01-14 22:45:44
tags:
  - TypeScript
categories:
  - Front-end
  - TypeScript
---

## TypeScript
- Microsoft에서 개발한 오픈 소스 프로그래밍 언어.
- TypeScript는 JavaScript의 Superset이다. JavaScript의 모든 기능을 사용할 수 있고 그 위에 TypeScript만의 문법을 추가한 언어이다. 
- TypeScript는 Compiled Language 이다. TypeScript 컴파일러가 TypeScript를 JavaScript로 컴파일 해준다. 때문에 Transpile이라는 용어를 사용하기도 한다.


### 정적 타입 언어 vs 동적 타입 언어
정적 타입 언어 
- 미리 타입을 지정해놓고 시작하는 언어 
  - 미리 타입을 지정해놓기 때문에 타입 에러로 인한 문제점을 초기에 발견할 수 있다.

동적 타입 언어 
- 타입이 없는 언어
- 실행 도중에 변수에 예상치 못한 타입이 들어와 오류가 생길 수 있다. 코드 덩어리가 커지면 오류를 잡아내기도 어렵고 동시 다발적으로 문제 생기는 경우가 많은데 이 때문에 정적 타입을 채용한 것이 TypeScript.
- 테스트 코드를 많이 애용하면 정적 타입 언어가 필요 없으나 테스트 커버리지를 엄청 올리는 일이 가면 갈수록 힘들어진다. 미리 타입 체킹을 하며 오류를 막아 주는 것이 TypeScript 이다.

## TypeScript 5분 튜토리얼
```
npm install -g typescript
```
TypeScript를 전역으로 설치해주자.

### helloTypeScript.ts
```typescript
function greeter(person: string) {
  return `Hello ${person}`;
}

greeter("typescript");
```
TypeScript 공식 사이트에서 튜토리얼을 보고 간단하게 작성해 보았다. 

![parameter에 타입을 지정해주면 타입이 맞지 않을 때 오류를 출력해준다.](/images/frontend/typescript-first-1.png)

![parameter에 타입을 생략하면 any로 타입이 설정된다.](/images/frontend/typescript-first-2.png)

```
tsc helloTypeScript.ts
```
tsc 명령어로 TypeScript를 컴파일 할 수 있다.

![tsc 명령어로 ts파일을 컴파일 하면 js 파일이 생성된다.](/images/frontend/typescript-first-3.png)

![컴파일된 js 파일에도 타입이 지정되어 있을까 확인해봤더니 타입이 지정되지는 않았다.](/images/frontend/typescript-first-4.png)

## Reference
[TypeScript 강좌(1) - Introduction](https://moon9342.github.io/typescript-introduction)
[타입스크립트 코리아 : 기초 세미나](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BD%94%EB%A6%AC%EC%95%84-1705-%EA%B8%B0%EC%B4%88-%EC%84%B8%EB%AF%B8%EB%82%98)
[TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
[정적언어(타입)과 동적언어(타입)](http://itmining.tistory.com/65)
