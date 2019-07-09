---
title: Hexo 에서 Gatsby로 블로그 마이그레이션 하기
date: 2019-07-04
# tags:
#   - etc
# categories:
#   - Etc
path: /etc/blog-migration
---

```
npm install -g gatsby-cli
```

```
gatsby new gatsby-site
```

```
gatsby develop
```

markdown 파일에 path 필요

```md
---
title: Hexo 에서 Gatsby로 블로그 마이그레이션 하기
date: 2019-07-04
# tags:
#   - etc
# categories:
#   - Etc
path: /etc/blog-migration
---
```

## blogTemplate

```js
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

```js
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

```js
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

```
yarn add typescript @types/react @types/react-dom gatsby-plugin-typescript @types/react-helmet
```

```
yarn add gatsby-plugin-styled-components styled-components babel-plugin-styled-components
```

```
yarn add gatsby-plugin-global-styles @nfront/global-styles


```

https://medium.com/maxime-heckel/getting-started-with-typescript-on-gatsby-8544b47c1d27
