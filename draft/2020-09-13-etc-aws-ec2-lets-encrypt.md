---
title: AWS EC2에 무료 SSL 인증서(Let's Encrypt) 적용하기
date: 2020-09-13 22:38:58
categories:
  - etc
tags:
  - etc
  - aws
---

## SSH 인증서

## HTTPS

## 적용하기

### EC2

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

> - [(Certbot) 공짜로 HTTPS 서버를 열어보자. (feat. AWS)](https://perfectacle.github.io/2017/10/05/letsencrypt-with-certbot-feat-aws/)
> - [AWS 환경에서 LetsEncrypt 와일드 카드 인증서를 발급받아 적용하기](https://cydin.tistory.com/7)
