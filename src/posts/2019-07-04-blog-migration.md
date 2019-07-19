---
title: Hexo 에서 Gatsby로 블로그 마이그레이션 하기
date: 2019-07-04
description: Hexo에서 Gatsby로 블로그 마이그레이션 하는 과정을 정리하였습니다.
path: /etc/blog-migration
---

이번 주 내내 Hexo로 만든 블로그를 Gatsby로 마이그레이션 하는 작업을 했다. Hexo도 나름 편했지만 테마를 원하는 대로 새로 만들거나 커스터마이징 하기 좀 어렵다는 단점이 있었다. 그러다가 [6월 말에 갔던 컨퍼런스](/etc/gdg-frontend-endgame)에서 몇몇 연사자 분들이 Gatsby.js를 언급하셔서 관심이 생겨 한번 찾아보았다. React.js, GraphQL 등을 사용하여 만들어진 정적 HTML 생성기 였는데 이걸 사용하면 테마는 물론 블로그 자체를 원하는대로 커스터마이징 하기 쉬울 것 같아 Gatsby.js로 블로그 마이그레이션을 결심했다.

## Gatsby 프로젝트 생성

gatsby-cli를 사용하면 아주 편리하게 gatsby 프로젝트를 생성할 수 있다.

```markdown
// 전역으로 gatsby-cli 설치
npm install -g gatsby-cli

// gatsby 프로젝트 생성
gatsby new gatsby-site

cd gatsby-site

// gatsby 개발 서버 실행
gatsby develop
```

나는 내 입맛에 맞는 테마를 만들고 싶어 기본 starter를 이용했는데 원하는 starter를 선택한 후 프로젝트를 생성할 수 도 있다. 컨퍼런스에서 Gatsby를 제일 먼저 소개해주셨던 연사자분도 [gatsby-starter-bee](https://github.com/JaeYeopHan/gatsby-starter-bee)라는 starter를 만드셨다.

## TypeScript 환경 구축하기

요즘 대세인 TypeScript을 Gatsby 프로젝트에도 적용하기로 했다. 평소 js 프로젝트에 TypeScript 환경을 설정하는 것과 비슷하다. gatsby-config.js 파일에 gatsby-plugin-typescript 플러그인만 추가해주면 된다.

```
yarn add typescript @types/react @types/react-dom gatsby-plugin-typescript @types/react-helmet
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "allowJs": true,
    "jsx": "react",
    "strict": true, // 엄격한 타입 검사 옵션을 활성화 한다.
    "esModuleInterop": true // import * as React 처럼 import 하는 것을 import React 이런 식으로 import 할 수 있도록 도와준다.
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

TypeScript 환경을 구축하고 나니 functional Component가 제대로 작동 안하는 이슈가 있었는데 [gatsby를 2.13.8 버전으로 업데이트](https://github.com/gatsbyjs/gatsby/issues/15423)하고 나니 정상 작동 되었다.

## styled-components 설정하기

회사에서 styled-component를 사용하고 있는데 이게 익숙해지니 너무 편해서 블로그에서도 사용할 수 있도록 설정했다.

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

전역 css를 설정해주려고 찾아봤더니 전역 css에 대한 플러그인도 있어서 편하게 설정할 수 있었다. @nfront/global-styles 대신에 styled-components의 createGlobalStyle 함수를 사용하고 싶었는데 인식을 제대로 하지 못하는 이슈가 있어서 그냥 @nfront/global-styles 모듈의 createGlobalStyle 함수를 사용했다.

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

Gatsby에서는 데이터소스라고 부르는데 여기서 데이터 소스는 Wordpress같은 CMS 도구가 될 수도 있고 다른 정적 사이트 생성기처럼 Markdown 파일이 될 수도 있고 API 등을 통해서 다른 곳에서 가져올 수도 있다. 플러그인 시스템이 잘 되어 있어서 다양한 데이터소스에서 데이터를 가져올 수 있다.

Gatsby는 데이터 소스라는 곳에서 GraphQL을 이용하여 데이터를 가지고 온다. 나는 이 데이터 소스를 markdown 파일이 되도록 설정 했다.

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
```

Hexo에서는 path를 따로 지정해 줄 필요가없었는데 Gatsby에서는 path를 지정해줘야한다. 이 path는 해당 포스트의 url이 된다. tags와 categories는 Hexo에서 쓰던 방식과 Gatsby에서 쓰는 방식이 다른 것 같아 일단 주석처리 해두었다.

```
yarn add gatsby-source-filesystem gatsby-transformer-remark

```

markdown 파일을 읽기 위해서는 gatsby-source-filesystem 플러그인이 필요하고 markdown 파일을 해석하기 위해서는 gatsby-transformer-remark 플러그인이 필요하다.

### blogTeplate.tsx

markdown 파일에서 가져온 정보를 뿌려주기 위한 템플릿을 만들어주자.

```javascript
// 생략...

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}: any) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  return (
    <>
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
    </>
  )
}

// grapthql을 이용하여 markdown에서 데이터를 가지고 온다.
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY년 MM월 DD일")
        path
        title
      }
    }
  }
`
```

### gatsby-config.js

```javascript
module.exports = {
  // 생략...

  plugins: [
    // 생략...
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/마크다운 파일이 있는 폴더명`,
      },
    },
    `gatsby-transformer-remark`,
    // 생략...
  ],
}
```

### gatsby-node.js

gatsby는 Node API를 사용하여 정적페이지를 생성한다. 이 API를 사용하기 위해서는 gatsby-node.js 파일에서 설정이 필요하다. 일단은 딱 기본적인 기능만 필요해서 gatsby 문서에 있는 설정 그대로 복붙해서 갖다 썼다.

```javascript
const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.tsx`)

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

## code hightlte 설정하기

code highlite 에는 prismjs를 사용했다.

```

gatsby-remark-prismjs prismjs

```

````


## package.json

```
   "deploy": "gatsby build && gh-pages -d public -b master -r https://github.com/partyKyoung/partyKyoung.github.io"

```

## Reference

[정적 사이트 생성기 Gatsby](https://blog.outsider.ne.kr/1426)

https://medium.com/maxime-heckel/getting-started-with-typescript-on-gatsby-8544b47c1d27
````
