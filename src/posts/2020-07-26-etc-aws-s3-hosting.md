---
title: AWS S3 호스팅
date: 2020-07-26 23:13:49
categories:
  - etc
tags:
  - AWS
  - S3
---

## AWS S3

Amazon S3는 인터넷상 어디서나 원하는 양의 데이터를 저장하고 검색할 수 있도록 구축된 객체 스토리지

AWS S3(Simple Storage Service)는 인터넷용 스토리지 서비스 이다. 웹서비스 인터페이스를 통해 스토리지를 제공하는데 이 스토리지에 원하는 만큼의 데이터를 저장하고 보호할 수 있다.
S3는 버킷(Bucket)과 키(Key)로 구성되어 있다.

- 버킷(Bucket): 저장된 객체에 대한 컨테이너입니다. 모든 객체는 어떤 버킷에 포함됩니다.

- 키(Key): 키는 버킷 내 객체의 고유한 식별자

또한 S3를 사용하여 정적 웹 호스팅도 설정할 수 있다.

### IAM 권한 추가

![](../images/etc/aws-s3-hosting-1.png)

IAM 대시보드 접속

![](../images/etc/aws-s3-hosting-2.png)

사용자 추가

![](../images/etc/aws-s3-hosting-3.png)

사용자 이름, 유형 설정

![](../images/etc/aws-s3-hosting-4.png)

정책 연결

![](../images/etc/aws-s3-hosting-5.png)

태그

![](../images/etc/aws-s3-hosting-6.png)

사용자 생성 완료, 액세스 키 ID, 비밀 액세스키 저장 필요

### AWS CLI 설정

https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/install-cliv2.html

위의 링크에서 AWS CLI 설치

```
aws configure --profile IAM 사용자 이름
```

![](../images/etc/aws-s3-hosting-7.png)

### AWS S3 버킷 생성

![](../images/etc/aws-s3-hosting-8.png)
s3 메뉴로 이동

![](../images/etc/aws-s3-hosting-9.png)
버킷 만들기

![](../images/etc/aws-s3-hosting-10.png)
버킷 이름

![](../images/etc/aws-s3-hosting-11.png)
버킷 옵션

![](../images/etc/aws-s3-hosting-12.png)
버킷 권한 - 퍼블릭 설정

![](../images/etc/aws-s3-hosting-13.png)
검토

![](../images/etc/aws-s3-hosting-14.png)
생성완료 후 버킷 클릭

![](../images/etc/aws-s3-hosting-15.png)
권한

![](../images/etc/aws-s3-hosting-16.png)

```
{
  "Version":"2012-10-17",
  "Statement":[
    {
      "Sid":"AddPerm",
      "Effect":"Allow",
      "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::버킷 이름/*"]
    }
  ]
}
```

권한 주기

![](../images/etc/aws-s3-hosting-17.png)

호스팅

![](../images/etc/aws-s3-hosting-18.png)

index.html

### 배포

```json
  "scripts": {
    "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js",
    "deploy": "aws s3 sync ./build s3://버킷 이름 --profile=IAM 이름"
  },
```

```
yarn build
yarn deploy
```

### 4. CloudFront 설정하기

## Reference

https://medium.com/@seoyeonhwng/aws-s3%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-b0da502b0504
https://react-etc.vlpt.us/08.deploy-s3.html
