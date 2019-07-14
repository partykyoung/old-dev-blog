---
title: Next.js
date: 2019-05-14 21:27:26
description: CSR과 SSR이 뭔지 한번 더 정리하면서 Next.js에 대해 알아봤습니다.
path: /front-end/etc/nextjs
---

## CSR

서버 측에서 HTML, JS, 리소스를 다운로드 한 후 브라우저에서 View를 렌더링하여 보여주는 방법.

- 초기 로딩을 제외하면 서버에 view를 요청할 필요가 없으므로 화면 전환이 빠름.
- 초기 로딩속도 느림.
- SEO 적용시 문제점이 있다.

## SSR

서버 측에서 HTML & View를 생성하여 응답하는 방법.

- 초기 로딩 속도 빠름.
- SEO 적용시에 어려움이 없다.
- 서버에 계속 view를 요청해야 하므로 서버 부담 큼.

### 검색엔진 최적화(SEO)

웹 페이지 검색엔진이 자료를 수집하고 순위를 매기는 방식에 맞게 웹 페이지를 구성해서 검색 결과의 상위에 나올 수 있도록 하는 작업. 주로 meta tag를 이용해서 SEO 최적화 작업을 한다.

SSR 방식은 서버측에서 html에 콘텐츠를 채워 응답하기 떄문에 웹크롤러가 내용을 수집할 수 있으나 CSR 방식은 클라이언트에서 javaScript를 실행하여 view를 그리기 때문에 javaScript 실행 완료 전 까지 html의 콘텐츠는 비워져 있어서 웹 크롤러는 CSR 페이지를 빈 페이지로 인식하게 된다.

## Next.js

React App의 SSR을 도와주는 프레임워크.

- 서버 사이드 렌더링 기능 제공.
- 코드 스플릿 기능 제공.
- 간단한 클라이언트 사이드 라우팅 기능 제공.
- HMR(Hot Module Replacement)을 지원하는 Webpack 기반의 개발 환경 제공.
- Node.js HTTP 서버 구현 가능.
- Babel, Webpack configuration 커스터마이징 기능 제공.

## Reference

[Next.js - getting Started](https://nextjs.org/learn/basics/getting-started)
[SSR과 CSR의 차이를 알아보자](https://velog.io/@rjs1197/SSR%EA%B3%BC-CSR%EC%9D%98-%EC%B0%A8%EC%9D%B4%EB%A5%BC-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90)
[서버 사이드 렌더링(SSR)과 클라이언트 사이드 렌더링(CSR)](https://goodgid.github.io/Server-Side-Rendering-and-Client-Side-Rendering/2)
