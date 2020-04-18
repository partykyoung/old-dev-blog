---
title: intersection-observer-api
date: 2020-04-13 17:02:01
categories:
  - front-end
  - etc
description:
tags:
---

## Intersection Observer API

Intersection Observer API는 target element와 조상 element, 또는 top-level 문서의 viewport가 교차되는 지점의 변화를 비동기적으로 관찰하는 방법을 제공한다.

- viewport: 현재 화면에 보이는 다각형(보통 직사각형)영역. 웹브라우저 용어로는 사용자에게 보여지는 영역(전체 화면 모드에서는 화면 전체)를 말한다.

intersection 정보는 다음과 같은 이유 때문에 필요하다.

- 페이지 스크롤시 이미지 또는 다른 콘텐츠들의 lazy loading.
  - lazy loading: 페이지 로드 시간에 중요하지 않은 리소스의 로딩을 늦추는 기술.

## Reference

> - https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
> - http://blog.hyeyoonjung.com/2019/01/09/intersectionobserver-tutorial/
> - https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video?hl=ko
