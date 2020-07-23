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
AWS 계정을 처음 생성하면 Root 사용자가 생성된다. Root 사용자는 완전한 액세스 권한이 있으며 계정을 생성할 때 사용한 이메일 주소와 암호로 로그인하여 액세스 한다. 

AWS에서는 Root 사용자는 무제한적인 액세스 권한이 있으니 Root 사용자로만 가능한 작업을 할 때를 제외하고는 Root 사용자 보다는 IAM 사용자를 사용하기를 권장하고 있다.
  - Root 사용자를 다수의 작업자가 공유해서 사용하는 경우 누가 어떤 작업을 했는지 구분하는 것이 불가능하다.
  - Root 사용자의 권한이 탈취되는 경우 공격자가 AWS 계정에 대한 모든 권한을 가지게 된다.
  - Root 사용자의 액세스 키가 유출된 경우 액세스 키를 삭제하는 것 이외에는 대응할 수 있는 방법이 없다.
    -  IAM 사용자에게 발급된 액세스 키는 권한을 제어하는 것이 가능하며, 삭제나 재발급에 대한 부담이 적다.

그럼 IAM 사용자 계정을 추가해보자.

![aws](../images/etc/aws-iam-1.png)

맨 처음 Root 사용자로 로그인 한 후 검색창에서 IAM을 입력하거나 서비스 메뉴 목록에서 IAM을 클릭하여 IAM 대시보드 창으로 이동한다. 

![aws](../images/etc/aws-iam-2.png)

사용자 항목을 클릭하여 IAM 사용자 페이지에 접속한다.

![aws](../images/etc/aws-iam-3.png)

사용자 추가 버튼을 클릭한다.

![aws](../images/etc/aws-iam-4.png)

추가할 사용자의 이름과 액세스 유형을 설정한다. 프로그래밍 방식 액세스는 액세스 키만 생성하는 방식이고 AWS
Management Console 액세스는 로그인 가능한 사용자를 생성하는 방식이다. 이 설정은 나중에 변경이 가능하다.

나는 AWS를 관리할 사용자가 필요하므로 AWS Management Console 액세스를 선택했다. 

![aws](../images/etc/aws-iam-5.png)

새로운 사용자의 권한을 설정해야 한다. 기존에 생성했던 그룹도 있고 다른 권한 설정 방법은 잘 몰라서 무난하게 그룹을 사용하여 새로운 사용자에게 권한을 주었다.

![aws](../images/etc/aws-iam-6.png)

만약 그룹이 없거나 다른 권한의 그룹이 필요하다면 그룹생성 버튼을 눌러 생성할 수 있다. AdministratorAccess는 AWS의 모든 서비스 및 리소스에 대한 엑세스 및 권한을 허용한다.

![aws](../images/etc/aws-iam-7.png)

태그를 사용하여 IAM 사용자 지정 속성을 추가할 수 있다. 요 부분은 나도 잘 모르는데다가 굳이 입력을 안해도 되기 때문에 그냥 패스했다.

![aws](../images/etc/aws-iam-8.png)

마지막으로 잘못된 부분이 있는지 한번더 확인을 한 후 사용자 만들기 버튼을 누르면 IAM 사용자가 생성된다.

![aws](../images/etc/aws-iam-9.png)

비밀번호 표시 항목을 눌러 비밀번호를 확인했다.

![aws](../images/etc/aws-iam-10.png)

IAM 사용자가 로그인 하려면 그룹 ID 또는 별칭을 알고 있어야 한다. 슛자로 된 ID 보다는 별칭이 좀 더 익히기 쉬우므로 사용자 지정 버튼을 눌러 그룹 별칭을 생성해 주자. 필수가 아니기 때문에 안해도 된다.

![aws](../images/etc/aws-iam-11.png)

원하는 별칭을 입력하고 생성 버튼을 눌러주면 이제 그룹 별칭을 이용해서 로그인도 가능해진다.

![aws](../images/etc/aws-iam-12.png)

Root 사용자 로그아웃을 한 후에 로그인 페이지로 가서 IAM 사용자를 선택하고 그룹 ID나 별칭을 입력해준다.

![aws](../images/etc/aws-iam-13.png)

방금 생성한 IAM 사용자를 입력하고 위에서 확인한 비밀번호를 같이 입력해준다.

![aws](../images/etc/aws-iam-14.png)


로그인이 성공적으로 완료되었으면 비밀번호 변경 창이 뜬다. 원하는 비밀번호를 입력한후 확인 버튼을 눌러준다.

![aws](../images/etc/aws-iam-15.png)

이렇게 IAM 사용자 생성이 완료 되었다. 앞으로 AWS에 접속할 일이 있을 땐 요 IAM 계정을 사용하면 된다. 추가로 같이 작업하고 싶은 동료가 있으면 위의 과정을 거쳐 IAM 사용자를 추가해주면 된다.

## Reference

https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/introduction.html
https://tech.cloud.nongshim.co.kr/2018/10/11/%EC%B4%88%EB%B3%B4%EC%9E%90%EB%A5%BC-%EC%9C%84%ED%95%9C-aws-%EC%9B%B9%EA%B5%AC%EC%B6%95-2-iam-%EC%9C%A0%EC%A0%80-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0/
https://velog.io/@minholee_93/AWS-IAM-%EC%97%AD%ED%95%A0-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
https://jybaek.tistory.com/838
https://www.44bits.io/ko/post/first_actions_for_setting_secure_account#%EB%A3%A8%ED%8A%B8-%EC%82%AC%EC%9A%A9%EC%9E%90%EC%9D%98-%EC%95%A1%EC%84%B8%EC%8A%A4-%ED%82%A4-%EC%82%AD%EC%A0%9C
