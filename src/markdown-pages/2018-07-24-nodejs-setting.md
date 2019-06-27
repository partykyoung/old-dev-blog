---
title: Node.js 작업환경 설정하기
tags:
  - Node.js
categories:
  - Back-end
  - Node.js
date: 2018-07-31 01:33:31
---


Node.js 프로젝트를 만들고 Webpack 설정까지 해보자.

## 시작하기 전에 필요한 것
### Node.js
[Node.js 공식사이트](https://nodejs.org/ko/)
여기서 Node.js 를 설치할 수 있다. 

### NPM 또는 Yarn
[NPM](https://www.npmjs.com/)
NPM은 Node.js Package Manger의 약자이다.  Node.js에서 사용가능한 모듈들을 패키지화시켜 모아놓은 곳 이다. npm으로 원하는 모듈들을 설치하고 관리할 수 있다. 

[Yarn](https://yarnpkg.com/lang/en/)
Yarn은 의존하는 라이브러리가 많아지면 느려지고 설치하는 시기에 따라 다른 버전을 설치할 가능성이 있는 NPM의 단점을 보완하기 위해 나왔다. npm을 대체할 수 있다.

NPM의 이슈는 NPM 최신버전에서 해결됐고 속도 차이점은 솔직히 난 잘 못느끼겠다. 이번에 Node.js를 공부하면서 Yarn이 써보고 싶어서 Yarn을 썼는데 딱히 NPM이랑 다른건 없는거 같으니 원하는걸 쓰면 되겠다. 

## 작업환경 설정
es6 개발환경을 구축하기 위해 webpack이랑 babel을 사용할 것이다. 

```
yarn init -y
yarn add --dev webpack webpack-cli babel-loader babel-core babel-preset-env
```
먼저 yarn init 또는 npm init 으로 package.json 파일을 생성해준 후 webpack과 babel 관련 모듈들을 깔아주자.

### webpack.config.js 
```javascript
const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node', // 기본은 web 이기 때문에 꼭 node로 맞춰줘야 한다. 
  externals: [nodeExternals()],
  entry: {
    server: './src/server.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/, // babel-loader로 트랜스파일시 node_modules는 제외한다. 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      }
    ]
  }
};
```
server-side에서도 webpack을 사용할 수 있도록 webpack.config.js를 작성했다. webpack-node-externals은 node_modules를 빌드과정에서 제외시키는 역할을 한다. 

### src/server.js
```javascript
import http from 'http';

const server = http.createServer();
const port = 3000;

server.listen(port, () => {
  console.log('server start!', port);
});
```
간단하게 서버쪽 소스를 작성했다. 


### package.json 
```javascript
"scripts": {
  "build": "webpack --mode production && node ./build/server.js"
},
```
빌드와 실행을 동시에 하기 위해 script에 build 명령어도 넣어주면 설정은 끝났다. 
webpack 4 버전 부터는 꼭 --mode (develop or production)를 설정해주어야한다. 

## npm run build
![실행 결과](/images/backend/nodejs-setting-1.png)
빌드도 잘되고 실행도 잘된다. 작업환경을 끝냈으니 이제 본격적으로 Node.js 공부를 해보자.

[해당 포스트에 작성된 모든 소스는 여기서 확인할 수 있다.](https://github.com/partyKyoung/nodejs-study)