---
title: React + TypeScript + Eslint + Prettier
path: /front-end/typescript/react-typescript-eslint-prettier
date: 2019-03-11 00:23:17
descriptoin: TypeScript로 만들어진 React 프로젝트에 Eslint와 Prettier을 적용하는 과정을 정리했습니다.
---

TypeScript 관련 eslint로는 [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)와 [tslint](https://palantir.github.io/tslint/)가 있다. tslint는 [2019년 안으로 deprecated 될 예정](https://github.com/palantir/tslint/issues/4534)이라 typescript-eslint로 eslint 설정을 진행했다.

## eslint

```bash
yarn add --dev eslint @typescript-eslint/parser eslint-config-prettier prettier
```

- @typescript-eslint/parser: ESLint가 TypeScript 코드를 볼 수 있게 해준다.
- @typescript-eslint/eslint-plugin: TypeScript 전용 eslint 규칙을 eslint에 추가해준다.
- eslint-config-prettier: prettier 에서 관리 해 줄 수 있는 코드 스타일의 ESLint 규칙을 비활성화 시켜준다. -> eslint와 prettier의 충돌을 막아준다.
- eslint-plugin-prettier: Prettier에서 인식하는 코드상의 포맷 오류를 ESLint 오류로 출력해준다.

만약 create-react-app으로 react 프로젝트를 생성했다면 eslint-config-react-app 라는 패키지가 설치 및 설정이 되어 있을 것이다. 이 패키지 안에
`eslint-plugin-import`, `eslint-plugin-jsx-a11y`, `eslint-plugin-react`, `eslint-plugin-react-hooks` 이 설치 및 설정이 되어 있기 때문에 따로 설치해줄 필요가 없으나 create-react-app으로 생성한 프로젝트가 아니라면 위에 언급한 eslint 플러그인들을 다 설치해주는 것이 좋다.

- eslint-plugin-import: import/export 구문 및 import 시 패키지 나 파일의 path 오류를 잡아준다.
- eslint-plugin-jsx-a11y: JSX 규칙을 eslint에 추가해준다.
- eslint-plugin-react: react 규칙을 eslint에 추가해준다.
- eslint-plugin-react-hooks: react hooks 규칙을 eslint에 추가해준다.

### eslint-config-airbnb

```
  npm info "eslint-config-airbnb@latest" peerDependencies
```

```
yarn add --dev eslint-config-airbnb
```

## .eslintrc

```javascript
```

## .prettierrc

```json
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
}
```
