---
title: AWS IAM 및 IAM 사용자 추가하기
date: 2020-07-19 21:21:46
categories:
  - etc
description:
tags:
---

## AWS IAM

- AWS 리소스에 대한 액세스를 안전하게 제어할 수 있는 웹 서비스.
- AWS 계정 안에 IAM 그룹과 사용자를 생성해 접근제어 및 권한관리를 세분화 할 수 있다.
  - EC2만 관리할 수 있도록 권한을 주거나, 일부 S3 버킷에 대한 읽기 전용 권한만 주는 등 리소스에 따라 여러 사람에게 다양한 권한을 부여할 수 있다. 
  - 전체 권한이 아닌 필요한 권한만 주기 때문에 보안성이 높아진다.


## IAM 사용자 추가하기
AWS 계정을 처음 생성하면 Root 사용자가 생성된다. Root 사용자는 완전한 엑세스 권한이 있으며 계정을 생성할 때 사용한 이메일 주소와 암호로 로그인하여 엑세스 한다. 

AWS에서는 Root 사용자는 무제한적인 엑세스 권한이 있으니 Root 사용자로만 가능한 작업을 할 때를 제외하고는 Root 사용자 보다는 IAM 사용자를 사용하기를 권장하고 있다.
  - Root 사용자를 다수의 작업자가 공유해서 사용하는 경우 누가 어떤 작업을 했는지 구분하는 것이 불가능하다.
  - Root 사용자의 권한이 탈취되는 경우 공격자가 AWS 계정에 대한 모든 권한을 가지게 된다.
  - Root 사용자의 엑세스 키가 유출된 경우 엑세스 키를 삭제하는 것 이외에는 대응할 수 있는 방법이 없다.
    -  IAM 사용자에게 발급된 엑세스 키는 권한을 제어하는 것이 가능하며, 삭제나 재발급에 대한 부담이 적다.

그럼 IAM 사용자 계정을 추가해보자.



## Reference

https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/introduction.html
https://tech.cloud.nongshim.co.kr/2018/10/11/%EC%B4%88%EB%B3%B4%EC%9E%90%EB%A5%BC-%EC%9C%84%ED%95%9C-aws-%EC%9B%B9%EA%B5%AC%EC%B6%95-2-iam-%EC%9C%A0%EC%A0%80-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0/
https://velog.io/@minholee_93/AWS-IAM-%EC%97%AD%ED%95%A0-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
https://jybaek.tistory.com/838
https://www.44bits.io/ko/post/first_actions_for_setting_secure_account#%EB%A3%A8%ED%8A%B8-%EC%82%AC%EC%9A%A9%EC%9E%90%EC%9D%98-%EC%95%A1%EC%84%B8%EC%8A%A4-%ED%82%A4-%EC%82%AD%EC%A0%9C
