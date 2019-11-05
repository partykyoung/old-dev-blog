configuration file 생성 명령어. 해당 프로젝트에만 eslint 를 깔았기 떄문에 아래처럼 사용함.
```
./node_modules/.bin/eslint --init
```

```
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
  },
};
```


```javascript
  settings: {
    'import/extensions': [".js",".jsx",".ts",".tsx"],
    'import/parsers': {
      '@typescript-eslint/parser': [".ts",".tsx"]
    },
    'import/resolver': {
      'node': {
        'extensions': [".js",".jsx",".ts",".tsx"]
      }
    }
  }
```