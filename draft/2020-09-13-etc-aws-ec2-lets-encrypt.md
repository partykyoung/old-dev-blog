---
title: AWS EC2에 무료 SSL 인증서(Let's Encrypt) 적용하기
date: 2020-09-13 22:38:58
categories:
  - etc
tags:
  - etc
  - aws
---

## HTTPS

HTTP(Hypertext Transfer Protocol)란 HTML로 작성된 문서를 주고받기 위한 프로토콜(통신규약)을 의미한다. 웹브라우저가 HTTP를 통하여 서버로부터 웹페이지를 요청하면 서버는 이 요청에 응답하여 필요한 정보를 웹브라우저에게 전달하게 된다.

하지만 HTTP는 보안에 취약하다. 암호화가 되어있지 않은 통신이기 때문에 도청이 가능하며 통신 상대를 확인하지 않기 때문에 위장이 가능하고 완전성을 증명할 수 없기 때문에 변조가 가능하다. 이를 방지하기 위해 HTTPS가 등장했다.

HTTPS는 HTTP에 암호화나 인증 등의 구조를 더하여 보안을 강화한 버전이다. HTTPS는 통신에서 일반 텍스트를 이용하는 대신에, SSL이나 TLS 프로토콜을 통해 세션 데이터를 암호화한다. 따라서 데이터의 적절한 보호를 보장한다.

## SSL 인증서

SSL 인증서는 클라이언트와 서버간의 통신을 제3자가 보증해주는 전자화된 문서이다.

웹브라우저가 서버에 접속할 때 서버는 제일 먼저 SSL 인증서를 제공한다. 웹브라우저는 이 SSL 인증서를 발급한 CA(Certificate Authority)가 CA 리스트에 있는지 확인한다. 확인 결과

웹 브라우저가 서버에 접속할 때 서버는 제일 먼저 인증서를 제공한다. 브라우저는 이 인증서를 발급한 CA가 자신이 내장한 CA의 리스트에 있는지를 확인한다. 확인 결과 서버를 통해서 다운받은 인증서가 내장된 CA 리스트에 포함되어 있다면 해당 CA의 공개키를 이용해서 인증서를 복호화 한다. CA의 공개키를 이용해서 인증서를 복호화 할 수 있다는 것은 이 인증서가 CA의 비공개키에 의해서 암호화 된 것을 의미한다. 해당 CA의 비공개 키를 가지고 있는 CA는 해당 CA 밖에는 없기 때문에 서버가 제공한 인증서가 CA에 의해서 발급된 것이라는 것을 의미한다. CA에 의해서 발급된 인증서라는 것은 접속한 사이트가 CA에 의해서 검토되었다는 것을 의미하게 된다. CA의 검토를 통과했다는 것은 해당 서비스가 신뢰 할 수 있다는 것을 의미한다.

SSL 인증서를 사용하면 통신 내용이 공격자에게 노출되는 것을 막을 수 있고 클라이언트가 접속하려는 서버가 신뢰할 수 있는 서버인지를 판단할 수 있으며 통신 내용 위조를 막을 수 있다.

> CA(Certificate Authority): 클라이언트와 서버가 모드 신뢰하는 제 3자 인증기관.

## 적용하기

### EC2 탄력적 IP 설정하기

탄력적 IP 주소는 사용자가 계정에 연결할 수 있는 퍼블릭 IPv4 주소이다.

EC2 인스턴스의 Public IP는 고정 IP가 아니기 때문에 EC2 인스턴스를 중지하고 재시작하면 IP주소가 바뀐다.

![](../images/etc/aws-ec2-lets-encrypt-1.png)

EC2 서비스 메뉴에서 탄력적 IP 탭을 선택한다. 탄력적 IP 주소를 발급받는다

![](../images/etc/aws-ec2-lets-encrypt-2.png)

할당 버튼을 누른다.

![](../images/etc/aws-ec2-lets-encrypt-3.png)

이 탄력적 IP 주소 연결을 클릭한다.

![](../images/etc/aws-ec2-lets-encrypt-4.png)

인스턴스를 선택하고 연결 버튼을 누른다.

![](../images/etc/aws-ec2-lets-encrypt-5.png)

aws route 53 서비스로 이동하여 ip주소를 입력한다.

![aws 메일](../images/frontend/html-email-template-03.png)

![aws 메일](../images/frontend/html-email-template-03.png)

![aws 메일](../images/frontend/html-email-template-03.png)

### Certbot 발급

```
certbot-auto certonly --manual --preferred-challenges=dns --email partykyoung@gmail.com  --server https://acme-v02.api.letsencrypt.org/directory --agree-tos --debug --no-bootstrap -d wolfonair.com -d *.wolfonair.com
```

### nginx 설정

```
sudo vi /etc/nginx/sites-available/wofonair.com
```

```
server {
  listen  80;
  server_name ~.;
  return 301 https://$host$request_uri;
}

server {
  listen  443;
  server_name ~.;

  ssl     on;
  ssl_certificate /etc/letsencrypt/live/wolfonair.com/fullchain.pem;
  ssl_certificate_key     /etc/letsencrypt/live/wolfonair.com/privkey.pem;
  ssl_session_cache shared:SSL:1m;
  ssl_session_timeout  10m;
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
  ssl_ciphers HIGH:SEED:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!RSAPSK:!aDH:!aECDH:!EDH-DSS-DES-CBC3-SHA:!KRB5-DES-CBC3-SHA:!SRP;
  ssl_prefer_server_ciphers   on;

  location / {
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-NginX-Proxy true;

    proxy_pass http://127.0.0.1:4000;
    proxy_redirect off;

    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_http_version 1.1;
  }
}
```

## Reference

> - [](https://ko.wikipedia.org/wiki/HTTP)
> - [](https://ko.wikipedia.org/wiki/HTTPS)
> - [](https://opentutorials.org/course/228/4894)
> - [](https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/using-instance-addressing.html#ip-addressing-eips)
> - [(Certbot) 공짜로 HTTPS 서버를 열어보자. (feat. AWS)](https://perfectacle.github.io/2017/10/05/letsencrypt-with-certbot-feat-aws/)
> - [AWS 환경에서 LetsEncrypt 와일드 카드 인증서를 발급받아 적용하기](https://cydin.tistory.com/7)
