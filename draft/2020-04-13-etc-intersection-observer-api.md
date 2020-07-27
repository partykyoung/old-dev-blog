---
title: intersection-observer-api
date: 2020-04-13 17:02:01
categories:
  - front-end
  - etc
tags:
---

## Intersection observer API

Intersection observer API는 target element와 조상 element, 또는 top-level 문서의 viewport가 교차되는 지점의 변화를 비동기적으로 관찰하는 방법을 제공한다.

    - viewport: 현재 화면에 보이는 다각형(보통 직사각형)영역. 웹브라우저 용어로는 사용자에게 보여지는 영역(전체 화면 모드에서는 화면 전체)를 말한다.

intersection 정보는 다음과 같은 이유 때문에 필요하다.

- 페이지 스크롤시 이미지 또는 다른 콘텐츠들의 lazy loading.
  - lazy loading: 페이지 로드 시간에 중요하지 않은 리소스의 로딩을 늦추는 기술.
- Infinite scrolling을 사용하여 더 많은 콘텐츠를 불러올 때.
- 광고 수익을 계산하기 위해 광고의 가시성 보고.
- 사용자가 결과를 볼 것인지에 대한 여부에 기반을 둔 업무 수행 또는 애니메이션 동작 여부 결정.

## Intersection observer API 사용 방법

### Parameters

#### callback

#### options

##### root

##### rootMargin

##### threshold

### Methods

## Reference

> - https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
> - https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video?hl=ko
> - http://blog.hyeyoonjung.com/2019/01/09/intersectionobserver-tutorial/
