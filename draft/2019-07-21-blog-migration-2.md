---
title: Hexo 에서 Gatsby로 블로그 마이그레이션 하기 2
date: 2019-07-21
description: Hexo에서 Gatsby로 블로그 마이그레이션 하는 과정을 정리하였습니다.
path: /etc/blog-migration-2
---

[Hexo에서 Gatsby로 블로그 마이그레이션 작업](/etc/blog-migration/)을 계속 이어 하면서 과정을 마저 정리 하였다.

이번에는 페이징 작업이랑 댓글 작업을 하였는데 역시 Gatsby 공식 문서에 관련 플러그인 문서화가 굉장히 잘되어 있어서 문제 없이 할 수 있었다.

## disqus

댓글은 disqus를 사용했다. [utterances](https://github.com/utterance/utterances)도 고려해봤는데 github 아이디가 있어아만 댓글을 쓸 수 있다는 점이 단점으로 느껴져서 그냥 disqus를 계속 사용하기로 했다.

Gatsby에서 disqus를 사용하려면 gatsby-plugin-disqus 플러그인을 설치하면 된다.

```
yarn add gatsby-plugin-disqus
```

### gatsby-config.js

plugins에 gatsby-plugin-disqus를 추가해주자.

```javascript
module.exports = {
  // 생략...
  plugins: [
    // 생략...
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `kyoungah`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
```

### blogTemplate.tsx

포스트에 관련된 정보를 blogTemplate 컴포넌트에서 호출하고 있기 때문에 여기에 댓글 컴포넌트를 삽입하기로 했다. query문 호출 부분에 id를 호출 할 수 있도록 추가해주었고 gatsby-plugin-disqus의 Disqus 컴포넌트를 사용하여 아주 쉽게 댓글 영역을 추가해주었다.

```javascript
import React from "react"
import { graphql } from "gatsby"
import styled, { theme } from "../styledComponents"
import { Disqus } from "gatsby-plugin-disqus"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}: any) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html, id } = markdownRemark
  const disqusConfig = {
    url: `${"https://dev.kyoungah.com" + frontmatter.path}`,
    identifier: id,
    title: frontmatter.title,
  }

  return (
    <>
      /** 포스트 컨텐츠 **/
      <Disqus config={disqusConfig} />
    </>
  )
}

// grapthql을 이용하여 markdown에서 데이터를 가지고 온다.
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY년 MM월 DD일")
        description
        path
        title
      }
    }
  }
`
```

## KaTeX

이전 블로그에서 수학 수식을 표현해주는 mathjax 라는 js 라이브러리를 사용하고 있었기 때문에 gatsby-remark-mathjax 라는 플러그인을 사용하려고 했으나 설정을 했음에도 불구하고 mathjax가 제대로 실행이 되질 않았다. 계속 방법을 찾아보다가 katex라는걸 알게되었는데 mathjax 처럼 역시 수학 수식을 표현해주는 js 라이브러리 였다. 혹시나 하는 마음에 적용해보았는데 다행히 mathjax와 문법(?)이 같애서 수학 수식이 원하는대로 출력되었다!

gatsby-remark-katex 플러그인을 사용하려면 gatsby-transformer-remark가 같이 필요한데 나처럼 markdown 작업 등을 미리 해놨으면 이미 설치가 되어 있을 것이다. 없으면 같이 설치해주면 된다.

```
yarn add gatsby-remark-katex katex
```

### gatsby-config.js

```js
module.exports = {
  // 생략...
  plugins: [
    // 생략...
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // 생략 ...
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
        ],
      },
    },
    // 생략...
  ],
}
```
