---
title: Mac 개발환경 설정
date: 2019-04-25 23:46:25
description: Mac 개발환경 설정 기록.
path: /etc/development-env-setting
---

맥북을 포맷하면서 개발환경을 새로 세팅하다가 기록해놓으면 좋을 것 같아서 기록함.

## Mac

1. Homebrew 설치

- [Homebrew](https://brew.sh/index_ko)
- Mac 패키지 관리자는 Homebrew 사용 중.

2. git 설치
   ```
   brew install git
   ```

## Front-end

개인 프로젝트 진행 시 Node.js + yarn 환경을 사용함.
개발툴은 vsocde 사용함.

1. Node.js 설치

- [Node.js](https://nodejs.org/ko/)
- LTS 버전 사용 중.

2. yarn 설치

```
  brew install yarn
```

    - [yarn](https://yarnpkg.com/en/)

3. vscode 설치
   - 공통 Extensions
     - Atom One Dark Theme
     - Git History
     - Material IconTheme
     - Prettier
   - JavaScript / React.js 관련 Extensions
     - eslint
     - ES7 React/Redux/GraphQL/React-Native snippets

## C

자료구조나 알고리즘 공부 시 c로 코드를 작성 중.

1. gcc 설치

```
brew install gcc
```

2. c로 작성 중인 프로젝트 폴더에 tasks.json 파일 작성.

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "shell",
      "label": "gcc build active file",
      "command": "/usr/bin/gcc",
      "args": [
        "-g",
        "${file}",
        "-o",
        "${fileDirname}/${fileBasenameNoExtension}"
      ],
      "options": {
        "cwd": "/usr/bin"
      },
      "problemMatcher": ["$gcc"],
      "group": {
        "kind": "build",
        "isDefault": true
      }
    }
  ]
}
```

3. c 관련 vscode Extenstions 설치 필요함.

- C/C++
- Code Runner
