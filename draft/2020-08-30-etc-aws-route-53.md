---
title: AWS 도메인 설정
date: 2020-08-30 18:27:50
categories:
  - etc
tags:
 - AWS
---

## AWS Route 53

높은 가용성과 확장성이 뛰어난 클라우드 Domain Name System (DNS) 웹 서비스. 일반적인 DNS 기능 + 모니터링 기능 + 서버 로드 밸런싱 기능 + 글로벌 서버 로드 밸런싱 기능을 제공한다.

> DNS (Domain Name System): 네트워크에 연결된 호스트들은 각각 IP 주소들을 가지고 있다. 이 IP 주소는 사람이 이해하고 기억하기 어렵기 때문에 각 IP 주소마다 도메인 이름을 부여한다. DNS는 특정 도메인에 대한 요청이 들어오면 도메인에 대한 IP 주소를 반환해준다. 반대로 IP 주소에 대한 도메인 이름을 반환해 줄 수도 있다.

Route 53은 프리티어 대상이 아니므로 매달 사용한 만큼 요금이 빠져나간다. 다행히 요금은 저렴한 편이다.

## Route 53 도메인 등록

AWS에서 사용하고 있는 서비스에 도메인을 등록하기 위해서는 먼저 Route 53 서비스에 도메인을 등록해야 한다. 도메인은 AWS 서비스에서도 구매할 수 있고 카페 24나 호스팅kr 같은 국내 호스팅 서비스에서도 구매할 수 있다. 나는 국내 호스팅 서비스에서 토이 프로젝트에 사용할 wolfonair.com 도메인을 구입했다. 이 도메인을 AWS Route 53 서비스에 등록해보자.

![AWS 서비스 메뉴](../images/etc/aws-route-53-1.png)

AWS 서비스 메뉴 검색창에서 Route 53을 검색하거나 메뉴 목록에서 Route 53을 클릭하여 Route 53 대쉬보드 창으로 이동한다.

![DNS 관리](../images/etc/aws-route-53-2.png)

DNS 관리에서 호스팅 영역 생성 버튼을 클릭한다.

호스팅 영역이란 레코드의 컨테이너이다. 레코드에는 특정 도메인과(ex: example.com)과 하위 도메인(ex: api.example.com, cdn.example.com)의 트래픽을 라우팅하는 방식에 대한 정보가 포함된다. 호스팅 영역과 해당 도메인의 이름은 동일하다. 

![호스팅 영역 구성](../images/etc/aws-route-53-3.png)

소유하고 있는 도메인 이름을 입력한다. 설명은 입력해도 되고 그냥 냅둬도 된다.

퍼블릭 호스팅 영역은 누구나 인터넷에서 도메인을 입력하여 트래픽을 라우팅 할 수 있고 프라이빗 호스팅 영역은 AWS VPC 내에서만 사용할 수 있다.
때문에 프라이빗 클라우드를 만드는게 아니면 유형 부분은 따로 건드릴 필요가 없고 퍼블릭 호스팅 영역으로 그대로 두면 된다. 

쭉 내려서 호스팅 영역 생성 버튼을 눌러주면 호스팅 영역 생성이 완료된다.

![호스팅 영역 구성](../images/etc/aws-route-53-4.png)

생성이 완료되면 NS(네임서버) 레코드와 SOA(권한시작) 레코드가 자동 생성된다. 이 네임서버가 등록한 도메인이 사용할 네임서버이기 때문에 등록한 도메인의 네임서버를 Route 53의 네임서버로 교체해주어야 한다.

> 네임 서버: DNS를 운영하는 서버. 특정 도메인이 어떤 IP와 연결되었다는 것을 기록하고 이것을 다른 DNS들에게 전파하는 역할을 한다. 예를 들어 abc.com 이라는 도메인이 있으면 이 도메인을 192.168.0.1 이라는 아이피를 가진 서버와 연결을 해준다.

![네임서버 수정](../images/etc/aws-route-53-5.png)

도메인을 구입한 사이트로 이동하여 구입한 도메인의 DNS 관리 화면으로 이동한 후 네임서버 항목에 Route 53의 네임서버 4개를 입력하고 확인 또는 저장 버튼을 누르면 네임서버 수정이 완료 된다.

Route 53을 이용하면 S3, CloudFront, EC2, ELB 등 몇몇 AWS 리소스에 도메인을 쉽게 연동할 수 있다. Route 53에 도메인 등록 하는 작업을 완료 했으니 기존에 사이드 프로젝트로 사용하고 있던 CloudFront, Api gateway에 도메인을 한번 연동해보자.

### CloudFront

### Serverless Api gateway

## Reference
> - [Amazon Route53 101 - 서태호 | 강남비기너모임 : AWS Community Day](https://www.youtube.com/watch?v=Nr7nLwfvT3Y)
> - [많이 혼돈하시는 네임서버와 DNS](https://xetown.com/topics/1125037)
> - [AWS Route 53 DNS 서비스 사용하기](https://velog.io/@minholee_93/AWS-Route-53-DNS-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-8lk40vfqt4#2-route-53-%EB%8F%84%EB%A9%94%EC%9D%B8-%EB%93%B1%EB%A1%9D%ED%95%98%EA%B8%B0)
> - [리액트 앱 AWS S3, CloudFront 에 배포하기](https://react-etc.vlpt.us/08.deploy-s3.html)