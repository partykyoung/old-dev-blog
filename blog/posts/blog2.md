---
slug: '/blog/my-first-post2'
date: '2019-05-05'
title: '블로그 리팩토링2'
---

##

Gatsby 4로 리팩토링하겠다고 떵떵대다가 처음부터 다시 블로그를 만들게 생겼다...

##

root 위치에서 blog 디렉토리를 만들고 그 안에 posts 폴더도 같이 만들었다.

##

```ts{6-9}
const config: GatsbyConfig = {
  ...,
  plugins: [
    ...,
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "posts",
      "path": "./blog/posts"
    },
    __key: "pages"
  }]
};

```
