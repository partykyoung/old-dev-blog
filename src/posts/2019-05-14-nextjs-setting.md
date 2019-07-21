---
title: create-react-app + TypeScript + Next.js
date: 2019-05-14 23:04:23
description: Next.js와 TypeScript를 사용하여 React 프로젝트 설정하기.
path: /front-end/etc/nextjs-setting
---

TypeScript + create-react-app으로 생성된 프로젝트에 Next.js를 적용해보자.

## 모듈 설치

next와 next-typescript 설치한다. next-typeScript는 next에서 TypeScript를 쓸 수 있게 도와주는 플러그인이다.

```
yarn add next @types/next
yarn add @zeit/next-typescript
```

## package.json

package.json에 next를 실행시키는 명령어를 적어준다.

```json
{
  // ...
  "scripts": {
    "dev": "next"
    // ...
  }
  // ...
}
```

## next.config.js

root 폴더에 next.config.js 파일을 생성한 후 next-typescript를 적용해준다. next에 플러그인을 적용하거나 webpack 커스터마이징을 할 때 이 파일에서 작업하면 된다.

```javascript
const withTypescript = require("@zeit/next-typescript")

module.exports = withTypescript()
```

## .babelrc 또는 package.json

.babelrc 파일을 생성해 아래와 같은 내용을 추가해준다. create-react-app으로 생성한 프로젝트는 babelrc 설정이 package.json안에 들어가 있기 때문에 따로 babelrc 파일을 생성할 필요가 없다.

```json
{
  "presets": ["next/babel", "@zeit/next-typescript/babel"]
}
```

## tsconfig.json

아래와 같이 typeScript 설정 파일을 생성해준다.

```json
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "jsx": "preserve",
    "lib": ["dom", "es2017"],
    "module": "esnext",
    "moduleResolution": "node",
    "noEmit": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "preserveConstEnums": true,
    "removeComments": false,
    "skipLibCheck": true,
    "sourceMap": true,
    "strict": true,
    "target": "esnext"
  }
}
```

## pages/index.js

첫 페이지를 만들어준다.

```javascript
import React from "react"

const Index: React.StatelessComponent = () => {
  return <div>Index Page</div>
}

export default Index
```

nextjs를 사용하려면 pages폴더가 무조건 있어야 한다. 이 pages안에 라우팅 url과 동일한 이름의 컴포넌트를 생성해야 한다. pages 컴포넌트가 next 라우팅과 동일하게 mapping 되기 때문에 이 규칙은 반드시 지켜야한다.

## 실행

아래의 명령어로 실행하면 방금 작성한 첫 페이지가 뜨는게 보일 것이다.

```
npm run dev
```

## Reference

- [zeit/next-plugins](https://github.com/zeit/next-plugins/tree/master/packages/next-typescript)
- [[nextjs] nextjs는 어떻게 동작하는가?](https://blueshw.github.io/2018/04/15/why-nextjs/)
