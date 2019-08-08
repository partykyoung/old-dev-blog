

```
yarn add --dev @typescript-eslint/parser eslint eslint-config-airbnb eslint-config-prettier prettier 
```

```
npm info "eslint-config-airbnb@latest" peerDependencies
```

- @typescript-eslint/eslint-plugin: TypeScript 전용 eslint 규칙을 eslint에 추가해준다.
- @typescript-eslint/parser: ESLint가 TypeScript 코드를 볼 수 있게 해준다.
- eslint-config-airbnb: airbnb 코드 스타일
- eslint-config-prettier: prettier 에서 관리 해 줄 수 있는 코드 스타일의 ESLint 규칙을 비활성화 시켜준다. -> Eslint와 prettier의 충돌을 막아준다.
- eslint-plugin-prettier: Prettier에서 인식하는 코드상의 포맷 오류를 ESLint 오류로 출력해준다.


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