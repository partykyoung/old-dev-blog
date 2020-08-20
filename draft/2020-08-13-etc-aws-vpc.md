---
title: AWS VPC
date: 2020-08-13 22:53:37
categories:
- etc
description:
tags:
---

## AWS VPC(Virtual Private Cloud)
- 사용자의 AWS 계정 전용 가상 네트워크.
- 하나의 AWS 계정에서 생성되는 리소스(EC2, RDS 등)들을 묶어 논리적으로 격리된 가상 네트워크를 만든다.
- 하나의 Region에 종속되어 운영된다.
- AWS 계정을 생성하면 각 AWS 리전에 기본 VPC(Default VPC)가 함께 생성된다.
  - 기본 VPC는 준비 과정 없이 빠르게 시작하여 블로그나 간단한 웹 사이트 같은 퍼블릭 인스턴스를 시작하는 데 적합하다.
  - 직접 VPC를 디자인하고 구축할 수도 있다.

## AWS VPC 설정
원래 같으면 기본 개념을 익힌 후 설정을 하는 스타일이지만 인프라 쪽에 대한 지식이 얕다 보니 설명을 읽어도 읽어도 내기준으로는 너무 어려워서 만들어보면서 개념을 익히기로 했다. 

### VPC 생성
![AWS 서비스 메뉴](../images/etc/aws-vpc-1.png)

AWS에 로그인 후 검색창에서 VPC를 검색하거나 서비스 메뉴에서 VPC 항목을 클릭하여 VPC 대시보드로 이동한다.

![VPC 목록](../images/etc/aws-vpc-2.png)

기본 VPC가 생성되어 있는것을 확인할 수 있다. VPC 생성 버튼을 누른다.

![AWS 서비스 메뉴](../images/etc/aws-vpc-3.png)

VPC 이름과 Ipv4 CIDR 블록을 입력해준다. 

#### CIDR (Classless Inter-Domain Routing)
![AWS 서비스 메뉴](../images/etc/aws-vpc-4.png)

  - 클래스 없는 도메인 간 라우팅 기법. 
  - 주소의 영역을 여러 네트워크 영역으로 나누기 위해 IP를 묶는 방식. 
  - 여러개의 사설망을 구축하기 위해 망을 나누는 방법.
  - CIDR이 도입되기 이전에는 클래스 개념으로 IP를 할당했는데 IP 주소가 부족해지는 등의 한계가 있어서 클래스 개념을 없앤 CIDR 개념을 도입하였다.
  - 예를 들어 10.88.135.144/28 이라는 IP 주소가 있으면 첫번째 자리부터 28번째 자리까지 네트워크 주소 라는 뜻.
  
![AWS 서비스 메뉴](../images/etc/aws-vpc-5.png)

다시 VPC 목록으로 돌아오면 새로운 VPC가 생성된 것을 확인할 수 있다.

![AWS 서비스 메뉴](../images/etc/aws-vpc-6.png)

방금 생성한 VPC를 선택한 후 작업 버튼을 눌러 DNS 호스트 이름 편집 항목을 클릭한다.


![AWS 서비스 메뉴](../images/etc/aws-vpc-7.png)

DNS 호스트 이름 활성화를 체크한 후 저장 버튼을 누른다.

## Reference 
> - [만들면서 배우는 아마존 버추얼 프라이빗 클라우드(Amazon VPC)](https://www.44bits.io/ko/post/understanding_aws_vpc)
> - [AWS VPC basic](https://blog.2dal.com/2017/09/12/aws-vpc-basic/)
> - [IP 주소를 묶는 방법, CIDR란?](https://www.youtube.com/watch?v=kYiQGpPVnyI)
> - [CIDR (Classless Inter-Domain Routing)](https://cidr.xyz/)