```

```

개인 사정으로 한동안 블로그를 방치해놓고 있다가 어느 정도 일이 정리되어 다시 블로그를 가꾸기로 했다. 원래는 기존 블로그를 유지한 채 포스팅만 계속하려고 했는데 설정 바꿀 게 있어서 Gatsby 공식문서에 들어갔다가 Gatsby가 버전 4까지 나온 것을 보고 이참에 그냥 블로그를 Gatsby 버전 4로 리팩토링하기로 마음먹었다.

블로그를 리팩토링하면서 그 과정을 한번 기록해보고자 한다.

## Gatsby?

먼저 Gatsby가 뭔지 알아보자. Gatsby는 React 기반 정적 페이지 생성 오픈소스 프레임워크 이다.

### Jamstack?

Jamstac은 웹을 더 빠르고, 더 안전하고, 더 쉽게 확장할 수 있도록 설계된 아키텍처이다. Jamstack의 Jam은 JavaScript, API, Markup을 나타낸다.

- JavaScript
  - Client의 모든 처리는 Javascript가 수행한다.
- API
  - 서버 측 작업은 재사용 가능한 API로 추상화되고 JvaScript로 HTTPS를 통해 액세스 한다.
- Markup
  - 웹사이트는 정적 HTML 파일로 제공된다. 이 HTML 파일들은 정적사이트 생성기를 사용하여 Markdown과 같은 소스 파일에서 생성할 수 있다.

## Gatsby 프로젝트 생성

Gatsby 역시 React나 Next처럼 프로젝트를 쉽게 생성할 수 있도록 cli를 제공해준다. 굳이 cli로 생성 안하고 입맛에 맞게 프로젝트를 구축해도 되지만 나는 귀찮으니 그냥 cli로 프로젝트를 생성할 것이다.
gatsby cli가 안깔려 있다면 아래의 명령어를 사용하여 gatsby cli를 먼저 설치해주자.

```
# npm
npm install -g gatsby-cli

# yarn
yarn global add gatsby-cli
```

설치를 마쳤다면 gatsby new 명령어로 프로젝트를 생성할 수 있다.

```
gatsby new
```

![gatsby new](../images/blog-refactoring-with-gatsby-1.png)

명령어를 실행하면 입맛에 맞게 옵션을 선택하여 프로젝트를 생성할 수 있다. 엄청 예전에 Gatsby로 블로그를 생성할 땐 저렇게 옵션을 선택할 수 있는 항목이 없어서 일일히 직접 설정했던 걸로 기억하는데 Gatsby도 엄청 많이 좋아졌다.

만약 기존에 존재하는 [Gatsby template](https://www.gatsbyjs.com/starters)으로 Gatsby 프로젝트를 생성하고 싶다면 gatsby new command 옆에 블로그명과 template 경로를 같이 적어서 실행하면 된다.

```
gatsby new 블로그명 테마경로

# example
gatsby new new-blog https://github.com/LekoArts/gatsby-starter-minimal-blog
```

## 배포

블로그 프로젝트를 생성했으니 배포도 한번 해보자. Vercel, Netilfy, Gatsby Gloud 등 배포 플랫폼 선택지가 꽤 늘었으나 굳이 블로그를 배포하는데 뭔가를 추가로 쓰고 싶지 않아서 기존처럼 Github Page에다 배포하기로 했다.

Github Page는 정적 페이지를 호스팅해주는 서비스이다. Github Page로 배포하려면 먼저 빌드 결과물이 업로드될 Repository가 있어야 하는데 이때 Repository의 이름은 꼭 `유저명.github.io`로 되어 있어야 한다.

Repository가 있으면 블로그 프로젝트에 gh-pages를 설치해준다.

```
# npm
npm install gh-pages

# yarn
yarn add gh-pages

```

설치가 완료되었다면 package.json의 scripts에 아래와 같은 명령어를 추가해준다.

```json{7}
"scripts": {
  "develop": "gatsby develop",
  "start": "gatsby develop",
  "build": "gatsby build",
  "serve": "gatsby serve",
  "clean": "gatsby clean",
  "deploy": "gatsby clean & gatsby build & gh-pages -d public -b master",
  "typecheck": "tsc --noEmit"
},
```

## Reference

https://www.gatsbyjs.com/docs/tutorial/part-1/
https://jamstack.org/what-is-jamstack/
https://www.gatsbyjs.com/docs/how-to/custom-configuration/eslint/
