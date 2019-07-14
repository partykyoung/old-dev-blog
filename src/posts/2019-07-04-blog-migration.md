---
title: Hexo 에서 Gatsby로 블로그 마이그레이션 하기
date: 2019-07-04
description: Hexo에서 Gatsby로 블로그 마이그레이션 하는 과정을 정리하였습니다.
path: /etc/blog-migration
---

이번 주 내내 Hexo로 만든 블로그를 Gatsby로 마이그레이션 하는 작업을 했다.

gatsby-cli를 사용하면 아주 편리하게 gatsby 프로젝트를 생성할 수 있다.

```markdown
// 전역으로 gatsby-cli 설치
npm install -g gatsby-cli

// gatsby 프로젝트 생성
gatsby new gatsby-site

// gatsby 개발 서버 실행
gatsby develop
```

## TypeScript 환경 구축하기

```
yarn add typescript @types/react @types/react-dom gatsby-plugin-typescript @types/react-helmet
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. */,
    "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
    "allowJs": true /* Allow javascript files to be compiled. */,
    "jsx": "react" /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */,
    "strict": true /* Enable all strict type-checking options. */,
    "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
  }
}
```

### gatsby-config.js

```javascript
module.exports = {
  // 생략...

  plugins: [
    // 생략...
    `gatsby-plugin-typescript`,
    // 생략...
  ],
}
```

TypeScript 환경을 설정하니까 functional Component가 제대로 작동 안하는 이슈가 있었는데 [gatsby를 2.13.8 버전으로 업데이트](https://github.com/gatsbyjs/gatsby/issues/15423)하고 나니 정상 작동 되었다.

## styled-component 설정하기

```
yarn add gatsby-plugin-styled-components styled-components babel-plugin-styled-components
```

### gatsby-config.js

```javascript
module.exports = {
  // 생략...
  plugins: [
    // 생략...
    `gatsby-plugin-styled-components`,
    // 생략...
  ],
}
```

## 전역 css 설정

```
yarn add gatsby-plugin-global-styles @nfront/global-styles

```

### gatsby-config.js

```javascript
module.exports = {
  // 생략...
  plugins: [
    // 생략...
    {
      resolve: `gatsby-plugin-global-styles`,
      options: {
        pathToConfigModule: `src/styles/globalStyle`,
        props: {
          theme: `src/styledComponents/theme`,
          other: {
            light: true,
          },
        },
      },
    },
    // 생략...
  ],
}
```

## markdown 설정하기

```markdown
---
title: Hexo 에서 Gatsby로 블로그 마이그레이션 하기
date: 2019-07-04
# tags:
#   - etc
# categories:
#   - Etc
path: /etc/blog-migration
---

## code hilight 설정하기
```

gatsby-remark-prismjs prismjs

```

```

## blogTemplate

```typescript
import React from "react"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
```

## gatsby-config.js

```javascript
// 생략

  plugins: [
    // 생략

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`
      },
    },
    `gatsby-transformer-remark`,

    // 생략
  ],

// 생략
```

## gatsby-node.js

```javascript
const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
```

## package.json

```
   "deploy": "gatsby build && gh-pages -d public -b master -r https://github.com/partyKyoung/partyKyoung.github.io"

```

https://medium.com/maxime-heckel/getting-started-with-typescript-on-gatsby-8544b47c1d27
