---
title: 기존 React 프로젝트에 Next.js 마이그레이션 해보기.
date: 2019-05-14 23:04:23
description: Next.js와 TypeScript를 사용하여 React 프로젝트 설정하기.
path: /front-end/etc/nextjs-setting
---

TypeScript + create-react-app으로 생성된 프로젝트에 Next.js를 적용해보자. [create-next-app](https://www.npmjs.com/package/create-next-app) 이라는 훌륭한 보일러플레이트 도구가 있으니 이걸로 프로젝트를 새로 생성해서 작업하던 것을 다 옮겨도 되지만 Next.js 설정법도 알아볼겸 기존 프로젝트에 Next.js를 한번 적용해 볼 것이다.

## 모듈 설치

next를 설치한다.

```
yarn add next @types/next
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

아래의 명령어로 실행하면 방금 작성한 첫 페이지가 뜨는게 보일 것이다. Next.js 설정이 끝났으니 이제 프로젝트를 Next.js 구조에 맞게 옮기면 된다.

```
npm run dev
```

## next 8.1에서 9버전대로 업그레이드 하면서 났던 오류들.

### error TS2349: Cannot invoke an expression whose type lacks a call signature.

tsconfig.json에서 esModuleInterop를 true로 줬기 때문에 나는 오류인것 같다. 아래처럼 import 문을 고쳐주면 된다.

```javascript
// import * as next from 'next'

import next from "next"
```

### Cannot re-export a type when the '--isolatedModules' flag is provided.

이것 역시 tsconfig.json에서 isolatedModules 옵션을 true로 해줬기 때문에 나는 것 같다. 아래 처럼 export 문을 고쳐주면 된다.

```javascript
// export { SomeType };

import { SomeType } from "./types"
export type SomeType = SomeType
```

### Module '"node_modules/next/router"' has no exported member 'WithRouterProps'.

WithRouterProps를 import 할 때 나는 오류 인데 아래처럼 고쳐주면 된다. import 문을 고쳐주면 된다.

```javascript
// import { WithRouterProps } from 'next/router';

import { WithRouterProps } from "next/dist/client/with-router"
```

### Argument of type 'ConnectedComponentClass<FunctionComponent<PageTemplateProps>, Pick<PageTemplateProps, "children" | "gaId">>'

이건 정확히 원인을 모르겠는데 withRouter랑 connect 함수를 compose로 묶어주면 해결된다.

```javascript
// withRouter(connnect()()) => .. 생략

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Container)
```

## 마무리

처음 이 글을 썼을 땐 회사에서 Next.js를 쓰고 있기도 하고 한번 쯤 써보고 싶었던 프레임워크라 집에서 혼자 작업하던 토이 프로젝트에도 한번 Next.js를 적용해봤었는데 지금은 다시 도로 걷은 상태이다.

[Next 8.1 버전은 안드로이드 4.x 버전에서 제대로 작동이 안하는 이슈](https://github.com/zeit/next.js/issues/7496)가 9버전대에서는 수정되어서 9버전대로 업그레이드 했는데 이번엔 [빌드 시에 firebase/firestore 모듈과 계속 충돌이 나는 이슈](https://github.com/zeit/next.js/issues/7894)가 발생했다. 혼자서라도 고쳐 보게다고 이거 가지고 한 2주를 질질끌다가 다행히 회사에서 프로젝트 구조를 마이크로서비스 아키텍처로 바꾸면서 큰 변화가 일어나 프론트단에서도 Next.js를 걷어내기로 하고 지금은 내 토이 프로젝트에서도 걷어냈다.

너무 오픈소스에 의존하다 보면 오픈소스에 이슈나 버그가 있을 때 이것이 걸림돌이 될 것이다 라고는 생각했는데 직접 겪어보니 가슴 아팠다 ㅠ. 그렇다고 오픈소스를 사용하는게 나쁜건 아니니 오픈소스를 사용할 때 이 오픈소스가 어떻게 작동하는지 좀 더 자세히 알아보고 소스를 조금씩이라도 봐놓는 버릇을 들여놓으면 오픈소스에 이슈가 발생했을 때 도움이 될 것 같다.

## Reference

- [zeit/next-plugins](https://github.com/zeit/next-plugins/tree/master/packages/next-typescript)
- [[nextjs] nextjs는 어떻게 동작하는가?](https://blueshw.github.io/2018/04/15/why-nextjs/)
