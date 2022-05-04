blockchain todolist

-----본문-----

이번에 만들어 볼것은 블록체인으로 구동되는 To-do List이다. 블록체인으로 구동된다고 해서 어렵게 생각할 필요 없다. 일반적인 To-do List가 Task를 DB에 저장한다고 하면 블록체인으로 구동되는 To-do List는 Task를 블록체인에다가 저장한다. 대신에 일반 DB들은 관련인들만 확인할 수 있는 반면 블록체인은 누구든지 접근하고 확인할 수 있는 공개된 데이터베이스 라고 생각하면 편하다.

블록체인 네트워크에 데이터를 입력하고 수정하고 삭제하는 행위들은

계약(Contract)을 통해 진행되며 이러한 거래내역(Transaction)은

블록체인 블록에 기록되고 있다고 보시면 됩니다.

즉 이번에 만들 TodoList는 Smart Contract로 해야할 일을 블록체인에다 기록하는 것이라고 보면 되겠다.

## 개발환경 구축

### solidity

솔리디티는 명시적으로 스마트 컨트랙트 작성을 위해 만들어진 언어이다.

### 트러플

### 가나슈

솔리디티는 스마트 컨트랙트 작성을 위해 만들어진 언어이다. 확장자는 .sol 이다.

## 트러플

```
# npm
npm install -g truffle

# yarn
yarn global add truffle
```

프로젝트 폴더로 이동 후 truffle init

## 가나슈

가나슈 다운로드
https://trufflesuite.com/ganache/

## 컴파일

```
truffle compile
```

## Reference

https://www.geeksforgeeks.org/build-a-to-do-list-web-application-powered-by-blockchain/

https://wjrmffldrhrl.github.io/blockchain-truffle/
