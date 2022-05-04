gatsby 역시 react나 next처럼 프로젝트를 쉽게 생성할 수 있도록 cli를 제공해준다. 굳이 cli로 생성안하고 입맛에 맞게 프로젝트를 구축해도 되지만 나는 귀찮으니 그냥 cli로 프로젝트를 생성할 것이다.

gatsby cli가 안깔려 있다면 아래의 명령어를 사용하여 gatsby cli를 먼저 설치해주자.

```
npm install -g gatsby-cli
```

설치를 마쳤다면 gatsby new 명령어로 프로젝트를 생성할 수 있다.

```
gatsby new
```

## 배포

예전과는 달리 배포 환경 선택지가 굉장히 많이 늘었다. Vercel, netlify, heroku... 그리고 이번에 블로그 리팩토링을 하면서 gatsby를 찾아보니 gatsby cloud까지 생겼다!
하지만 귀찮으니 그냥 github page에다 배포할거다.

개츠비 GitHub page 배포

yarn add gh-pages

"deploy": "gatsby build & gh-pages -d public -b master",
