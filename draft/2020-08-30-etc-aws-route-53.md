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

### AWS Certificate Manager 설정

Route 53에 도메인을 등록하면 AWS Certificate Manageer을 사용하여 무료로 SSL 인증서를 발급받을 수 있다.

> SSL 인증서: 클라이언트와 서버간의 통신을 제3자가 보증해주는 전자화된 문서

![AWS 서비스 메뉴](../images/etc/aws-route-53-6.png)

AWS 서비스 메뉴에서 Certificate Manager을 검색하여 Certificate Manager 메뉴 대시보드 화면으로 이동한다.

![인증서 프로비저닝 선택](../images/etc/aws-route-53-7.png)

아무 인증서도 발급받지 않은 상태라면 위의 이미지와 같은 화면이 뜬다. 여기서 인증서 프로비저닝 항목 밑의 시작하기 버튼을 클릭한다.

![공인 인증서 요청 선택](../images/etc/aws-route-53-8.png)

공인 인증서 요청 항목을 선택한 후 인증서 요청 버튼을 클릭한다.

![도메인 이름 추가](../images/etc/aws-route-53-9.png)

도메인 이름 항목에 Route 53에 등록한 도메인을 입력한다. 하위 도메인도 사용하려면 '*.도메인 이름' 으로 등록해주면 된다. 도메인 입력이 완료 되었으면 확인 버튼을 클릭한다.

![검증 방법 선택](../images/etc/aws-route-53-10.png)

DNS 검증 항목을 선택한 후 다음 버튼을 클릭한다.

![태그 추가](../images/etc/aws-route-53-11.png)

태그 추가는 필수가 아니라 그냥 무시하고 검토 버튼을 눌러 다음 화면으로 넘어가도 상관없다.

![검토](../images/etc/aws-route-53-12.png)

실수한 부분이 있는지 잘 확인한 후 없으면 확인 및 요청 버튼을 클릭한다.

![검증 화면](../images/etc/aws-route-53-13.png)

도메인이 검증 보류 상태로 등록되었다.

![검증 화면 2](../images/etc/aws-route-53-14.png)

도메인 앞의 화살표 버튼을 누르면 CNAME 레코드 항목을 추가하라는 화면이 출력된다. Route 53에 등록한 도메인은 Route 53에서 레코드 생성 버튼을 클릭하여 자동으로 CNAME 레코드 항목을 생성할 수 있다. Route 53에서 레코드 생성 버튼을 클릭한다.

![Route 53에서 레코드 생성](../images/etc/aws-route-53-15.png)

생성 버튼을 클릭한다.

![Route 53에서 레코드 생성 성공](../images/etc/aws-route-53-16.png)

성공 메시지가 뜨면 완료가 된 것이다. 검증이 완료 되려면 최대 30분 정도 걸릴 수 있다고 했지만 체감상 1 ~ 2분 걸렸던 것 같다.

아쉽게도 인증서를 한번 발급하면 하면 모든 리전에 다 적용되는 것은 아니고 사용할 리전마다 새로운 인증서를 각각 요청해야 한다. 때문에 나는 아시아 태평양 (서울, ap-northeast-2), 미국 동부(버지니아 북부, us-east-1) 리전에 각각 인증서를 발급해 놓았다.

### CloudFront

![](../images/etc/aws-route-53-17.png)

### Serverless Api gateway

![](../images/etc/aws-route-53-18.png)

## Reference
> - [Amazon Route53 101 - 서태호 | 강남비기너모임 : AWS Community Day](https://www.youtube.com/watch?v=Nr7nLwfvT3Y)
> - [많이 혼돈하시는 네임서버와 DNS](https://xetown.com/topics/1125037)
> - [AWS Route 53 DNS 서비스 사용하기](https://velog.io/@minholee_93/AWS-Route-53-DNS-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-8lk40vfqt4#2-route-53-%EB%8F%84%EB%A9%94%EC%9D%B8-%EB%93%B1%EB%A1%9D%ED%95%98%EA%B8%B0)
> - [새 도메인 이름 구입한 후 AWS에서 해야할 일](https://musma.github.io/2019/09/16/what-to-do-after-you-buy-your-new-domain-on-aws.html#aws-certificate-manager-ssltls-%EC%9D%B8%EC%A6%9D%EC%84%9C-%EB%B0%9C%EA%B8%89)
> - [리액트 앱 AWS S3, CloudFront 에 배포하기](https://react-etc.vlpt.us/08.deploy-s3.html)
> - [Serverless Domain Manager](https://www.serverless.com/plugins/serverless-domain-manager)