---
title: AWS S3 호스팅
date: 2020-07-26 23:13:49
categories:
description:
tags:
---

## AWS S3

AWS S3(Simple Storage Service)는 인터넷용 스토리지 서비스 이다. 웹서비스 인터페이스를 통해 스토리지를 제공하는데 이 스토리지에 원하는 만큼의 데이터를 저장하고 보호할 수 있다.
S3는 버킷(Bucket)과 키(Key)로 구성되어 있다.

- 버킷(Bucket): 저장된 객체에 대한 컨테이너입니다. 모든 객체는 어떤 버킷에 포함됩니다.

- 키(Key): 키는 버킷 내 객체의 고유한 식별자

또한 S3를 사용하여 정적 웹 호스팅도 설정할 수 있다.

### 1. IAM 권한 추가

### 2. AWS CLI 설정

### 3. AWS S3 버킷 생성

```json
  "scripts": {
    "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js",
    "deploy": "aws s3 sync ./build s3://vlpt-sample-deploy --profile=sample-deploy-s3"
  },
```

```
yarn build
yarn deploy
```

### 4. 배포

### 4. CloudFront 설정하기

https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/install-cliv2.html

## Reference

https://medium.com/@seoyeonhwng/aws-s3%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-b0da502b0504
https://react-etc.vlpt.us/08.deploy-s3.html
