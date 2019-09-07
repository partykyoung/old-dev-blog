---
title: React + TypeScript + Eslint + Prettier
path: /front-end/typescript/react-typescript-eslint-prettier
date: 2019-03-11 00:23:17
descriptoin: TypeScript로 만들어진 React 프로젝트에 Eslint와 Prettier을 적용하는 과정을 정리했습니다.
---

```bash
yarn add --dev @typescript-eslint/parser eslint eslint-config-airbnb eslint-config-prettier prettier
```

```bash
npm info "eslint-config-airbnb@latest" peerDependencies
```

- @typescript-eslint/eslint-plugin: TypeScript 전용 eslint 규칙을 eslint에 추가해준다.
- @typescript-eslint/parser: ESLint가 TypeScript 코드를 볼 수 있게 해준다.
- eslint-config-airbnb: airbnb 코드 스타일
- eslint-config-prettier: prettier 에서 관리 해 줄 수 있는 코드 스타일의 ESLint 규칙을 비활성화 시켜준다. -> Eslint와 prettier의 충돌을 막아준다.
- eslint-plugin-prettier: Prettier에서 인식하는 코드상의 포맷 오류를 ESLint 오류로 출력해준다.
- eslint-import-resolver-alias:

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

## typescript-eslint

버전 2.0 업데이트
