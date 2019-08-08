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

## tsconfig.json

8.1.0 버전까지는 next.js에서 typescript를 사용하려면 next-typescrip라는 플러그인을 추가로 사용해야했으나 9버전 부터는 tsconfig.json 파일만 생성해주면 TypeScript를 사용할 수 있게 되었다.

```json
{
  "compilerOptions": {
    "allowJs": true, // js파일(js, jsx)도 컴파일 대상에 포함시킨다.
    "alwaysStrict": true, // 엄격모드에서 구문을 분석한다.
    "esModuleInterop": true, /* import * as 모듈 from ... -> import 모듈 from ... 이런 식으로 import 할 수 있게 해준다. */
    "isolatedModules": true, /* 각 파일을 별도의 모듈로 변환해준다. */
    "jsx": "preserve" /* Preserves jsx outside of Next.js. */
    "lib": [
      "dom",
      "es2017"
    ], /* List of library files to be included in the type checking. */
    "module": "esnext", // 컴파일된 모듈의 결과물을 어떤 모듈 시스템으로 할지 결정한다.
    "moduleResolution": "node" /* Determine how modules get resolved. */,
    "noEmit": true, /* Do not emit outputs. Makes sure tsc only does type checking. */,

    /* Strict Type-Checking Options, optional, but recommended. */
    "noFallthroughCasesInSwitch": true /* Report errors for fallthrough cases in switch statement. */,
    "noUnusedLocals": true /* Report errors on unused locals. */,
    "noUnusedParameters": true, // Report errors on unused parameters. */,
    "strict": true, // 모든 엄격한 타입 검사 옵션을 활성화한다.
    "target": "esnext" // 컴파일 결과물을 js의 어떤 버전으로 할 것인지 지정한다.
  }
}
```

## v8.1.0 -> v9로 업데이트 하면서 났던 이슈들

###error TS2349: Cannot invoke an expression whose type lacks a call signature.

```
// 수정 전
import * as next from 'next'

// 수정 후
import next from 'next'
```

아마 tsconfig.json의 esModuleInterop 옵션 떄문에 나는 이슈인것 같다. 위의 코드처럼 import 방식을 바꿔주면 해결된다.

### Cannot re-export a type when the '--isolatedModules' flag is provided.

```
// 수정 전
export { SomeType };

// 수정 후
import { SomeType } from "./types";
export type SomeType = SomeType;
```

역시 tsconfig.json의 isolatedModules 옵션 때문에 나는 이슈인것 같다. 위의 코드처럼 바꿔주면 된다.

```
import { WithRouterProps } from 'next/dist/client/with-router';
```

Argument of type 'ConnectedComponentClass<FunctionComponent<PageTemplateProps>, Pick<PageTemplateProps, "children" | "gaId">>'

withRouter(connnect()()) =>

```
export default compose(
  withRouter,
  connect(mapStateToProps)
)(Container);
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
