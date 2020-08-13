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

## VPC의 구성 요소들
### VPC
### 서브넷Subnet(n은 사용할 수 있는 가용존의 개수)
### 라우트 테이블Route Table
### 네트워크 ACLNetwork ACL
### 시큐리티 그룹Security Group
### 인터넷 게이트웨이Internet Gateway
### DHCP 옵션셋DHCP options set

## Reference 
> - [만들면서 배우는 아마존 버추얼 프라이빗 클라우드(Amazon VPC)](https://www.44bits.io/ko/post/understanding_aws_vpc)
> - [AWS VPC basic](https://blog.2dal.com/2017/09/12/aws-vpc-basic/)