---
title: 서버리스와 서버리스 프레임워크.
date: 2019-07-26
description: 서버리스에 대해 알아보고 서버리스 프레임워크를 사용해보았습니다.
path: /back-end/serverless/serverless-first
---

## 서버리스
서버에서 처리하는 작업을 클라우드 기반의 서비스로 처리해서 서버 구축 및 관리 비용을 줄이는 구조.

## Faas (Function-as-a-Service)
함수를 서비스로 제공하는 형태. 

ex) aws lambda, azure functions, goolge cloud functions

### 장점
- 서버의 스케일링을 직접 할 필요 없다. 즉 확장성이 뛰어나다.
- 서버 인프라 관리, 보안에 신경 쓸 필요가 없다. 이 때문에 개발 기간이 엄청 단축된다.
- 서버 비용을 절약할 수 있다.
  - 보통의 서버는 누가 접속하던 말던 계속 서버가 켜져 있기 떄문에 불필요한 비용이 빠져나가나 서버리스는 함수를 실행할 때만 비용이 빠져나가기 때문이다.

### 단점 
- 함수로 쪼개서 작업하기 때문에 함수에서 사용할 수 있는 자원에 제한이 있다.
- FaaS 제공사의 의존도가 강하다. 만약 FaaS 아키텍처 인프라 자체에 문제가 생길 경우 직접 컨트롤 할 수 없다. 가능성은 없지만 FaaS 제공사가 망한다면 뒷감당 역시 어렵다.
- 1밀리초의 응답 시간도 이슈가 되는 분야에서는 처리 속도가 못 쫒아간다.
- 함수들은 무상태적이기 때문에 로컬 데이터를 사용할 수 없다. 
  - 데이터를 로컬 스토리지에서 읽고 쓸 수 없다.

## serverless 프레임워크

lambda에서 실행하는 코드를 deploy 하는 과정을 굉장히 쉽게 해준다.

### serverless 설치 
```
// serverless 프레임워크를 전역으로 설치한다.
npm install -g serverless
```

### serverless 프로젝트 생성

Node.js 프로젝트 형태를 가지고 있는 aws-nodejs라는 템플릿을 이용
```
serverless create --template aws-nodejs

yarn add serverless-webpack serverless-offline ts-loader typescript webpack
```
serverless config credentials --provider aws --key 액세스키ID --secret 비밀액세스키

### webpack.config.js
```js
const path = require("path");
const slsw = require('serverless-webpack');

module.exports = {
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  entry: path.join(__dirname, "src/server.ts"),
  output: {
    libraryTarget: "commonjs",
    filename: "[name].js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [{
      test: /.tsx?$/,
      loader: "ts-loader",
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  target: 'node',
}
```

### serverless.yml
```yml
# 생략...
provider:
  name: aws
  runtime: nodejs10.x
  region: ap-northeast-2
  stage: dev

plugins:
  - serverless-webpack
  - serverless-offline

functions:
  server: # server라는 함수가 실행되면 src/server 파일 안의 함수가 실행된다.
    handler: src/server 
    events:
      - http:
          path: / # 
          method: get
```

https://futurecreator.github.io/2019/03/14/serverless-architecture/
https://ndb796.tistory.com/311
https://velopert.com/3549
https://gyuha.tistory.com/515
