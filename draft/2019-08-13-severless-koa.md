serverless에 express 같은 프레임워크를 사용하는 이유 -> serverless.yml에 일일히 실행하는 함수들을 작성해 주는게 귀찮아서 (?) -> Express가 전체 라우팅 로직을 다루도록

```
yarn add serverless-http
```

- serverless-http
  koa, express 등을 감싸서 serverless 작업을 할 수 있도록 도와주는 플러그인.

```
yarn add koa koa-router
yarn add -dev ts-node nodemon
```

- nodemon: 프로젝트 폴더의 파일들을 모니터링 하고 있다가 파일이 수정될 경우 자동으로 서버를 리스타트 시켜주는 도구.

## package.json

```
{
  "scripts": {
    "dev": "NODE_PATH=src NODE_ENV=development nodemon",
    "deploy:dev": "sls deploy --stage dev",
    "deploy:prod": "sls deploy --stage prod"
  }
}
```

serverless 가 전역으로 설치 되어 있어야 함. 전역 설치 안하고 해당 명령어 실행시 오류 났었음 ㅎ.

## refernce

https://www.youtube.com/watch?v=WEC6ATuP9Vo
