---
title: create-react-app으로 생성한 React 프로젝트 TypeScript로 마이그레이션 하기
date: 2019-01-22 00:48:28
description: create-react-app으로 생성한 React 프로젝트에 TypeScript 환경을 설정해보자.
path: /front-end/typescript/react-with-typescript
---

TypeScript에 익숙해질 겸 기존에 진행하고 있던 프로젝트를 TypeScript으로 마이그레이션 해보기로 했다.
create-react-app v2로 생성한 프로젝트면 간단하게 마이그레이션 할 수 있다.

```
yarn add @types/node @types/react @types/react-dom
yarn add --dev typescript awesome-typescript-loader source-map-loader @types/jest
```

먼저 위의 모듈들을 install 해주자.

### App.tsx

```typescript
import * as React from "react"

interface Props {}
interface State {}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render(): JSX.Element {
    return <div>TypeScript</div>
  }
}
```

위의 App 컴포넌트 처럼 컴포넌트 파일들의 확장자를 tsx로 바꾸고 Props, State 타입을 지정해주면 된다.
마지막으로 index.js 파일을 index.tsx로 바꾸면 마이그레이션이 간단하게 끝난다.

여기까지는 React 공식문서를 따라 해서 문제가 없었는데 나는 yarn eject로 프로젝트 의존성을 풀어놔서 문제가 잠시 생겼었다.
컴포넌트 import시 컴포넌트 경로를 적을 때 tsx 확장자를 적지 않으면 컴포넌트를 제대로 불러오지 못하는 것이었다.

![컴포넌트를 import할 때 tsx 확장자가 없으면 프로젝트가 제대로 실행되지 않았다.](https://facebook.github.io/create-react-app/docs/adding-typescript)

빨간줄이 거슬려서 해결법을 찾아보았다.

### paths.js

```javascript
const moduleFileExtensions = [
  "web.mjs",
  "mjs",
  "web.js",
  "js",
  "web.ts",
  "ts",
  "web.tsx",
  "tsx",
  "json",
  "web.jsx",
  "jsx",
]
```

paths.js 파일을 확인해보면 분명 확장자에 ts, tsx가 있는데 제대로 확장자를 빼면 컴포넌트를 제대로 불러오지 않는것이 이상해서 webpack 설정을 보았다.

### webpack.config.js

```javascript
    resolve: {
       /* 생략 */

      extensions: paths.moduleFileExtensions.map(ext => `.${ext}`),
      // .filter(ext => useTypeScript || !ext.includes("ts")),

      /* 생략 */
```

resolve 옵션은 webpack이 알아서 경로나 확장자를 처리할 수 있게 도와준다. extensions에 넣은 확장자들은 웹팩에서 알아서 처리해주기 때문에 파일 경로를 입력할 때 확장자를 적을 필요가 없어진다.
확인 해보니 Array.filter 메소드로 TypeScript 파일들을 다 걸러내고 있길래 해당 부분을 주석처리 해주었더니 정상 작동 되었다.

진작 webpack 설정을 봤었어야 했는데 삽질을 좀 많이 했다. 흑흑... 그래도 무사히 마이그레이션 성공!

## Reference

[Adding TypeScript](https://facebook.github.io/create-react-app/docs/adding-typescript)
