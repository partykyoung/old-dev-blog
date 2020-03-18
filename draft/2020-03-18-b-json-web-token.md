---
title: JWT(Json Web Token)
date: 2020-03-18 23:31:00
categories:
- back-end
- etc
description:
tags:
---

## JWT(Json Web Token)
- 두 개체 간의 정보를 안전하게 JSON 객체로 전송하기 위한 간결하고 독립적인 방법을 정의하는 개방형 표준(RFC 7519).
  - 정보는 디지털 서명이 되어 있기 때문에 신뢰할 수 있다.
  - HMAC 알고리즘을 사용한 비밀키 또는 RAS이나 ECDSA를 사용하는 공개 / 개인키 쌍을 사용하여 서명할 수 있다.

## 언제 JWT를 사용할 수 있을까? 
- 인증
  - JWT를 사용하는 가장 흔한 시나리오.
  - 유저가 로그인을 했을 때, 서버에서 사용자의 정보를 담은 토큰을 발급한다. 이 후로는 유저가 서버에 요청을 할 때마다 JWT가 포함된다. 유저는 해당 토큰으로 서비스 및 자원에 접근할 수 있다.
- 정보 교환
  - JWT는 두 개체 사이에서 안전하게 정보를 전달할 수 있는 좋은 방법이다.
  - 서명이 되어 있기 때문에 발신자가 누구이고 위조가 되진 않았는지, 정보 역시 조작되진 않았는지 검증할 수 있다.

## Reference
- https://jwt.io/introduction/
- https://velopert.com/2389 
- https://icarus8050.tistory.com/12