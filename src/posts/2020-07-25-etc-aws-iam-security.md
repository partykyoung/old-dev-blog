---
title: AWS IAM 보안
date: 2020-07-25 23:46:25
categories:
  - etc
tags:
  - AWS
  - IAM
---

![IAM 보안 상태](../images/etc/aws-iam-16.png)

IAM 대시보드 창에 접속하면 IAM 보안 상태를 확인할 수 있다. 좀 더 안전한 AWS 사용을 위해 각각 보안 항목들을 설정해보자.

## 루트 액세스 키 삭제
AWS SDK 또는 AWS API 등을 호출하기 위해서는 액세스 키가 필요하다. Root 사용자의 액세스 키는 모든 리소스에 무제한적으로 접근할 수 있기 때문에 사용하지 않는것이 안전하다. 

![IAM 보안 상태 항목](../images/etc/aws-iam-security-1.png)

보안상태 항목에서 루트 액세스 키 삭제 항목을 누르고 보안 자격 증명 관리 버튼을 누르면 보안 자격 증명 창으로 이동한다.

![루트 액세스키 설정](../images/etc/aws-iam-security-2.png)

액세스키 항목을 열어 액세스 키 목록을 확인할 수 있다. 액세스 키는 자동으로 생성 되는 것은 아니고 원할 때 생성을 할 수 있는 것 같다. 수정 및 삭제 역시 가능하다. 
AWS의 권장사항 대로 루트 액세스 키는 왠만하면 생성하지 말자.

## 루트 계정에서 MFA 활성화
## 개별 IAM 사용자 생성
## 그룹을 사용하여 권한 할당
## IAM 비밀번호 정책 적용

## Reference
> - [AWS 액세스 키 관리를 위한 모범 사례](https://docs.aws.amazon.com/ko_kr/general/latest/gr/aws-access-keys-best-practices.html)
> - [아마존 웹 서비스 계정 생성 후 해야하는 IAM 보안 조치](https://www.44bits.io/ko/post/first_actions_for_setting_secure_account#%EB%A3%A8%ED%8A%B8-%EC%82%AC%EC%9A%A9%EC%9E%90%EC%9D%98-%EC%95%A1%EC%84%B8%EC%8A%A4-%ED%82%A4-%EC%82%AD%EC%A0%9C)
