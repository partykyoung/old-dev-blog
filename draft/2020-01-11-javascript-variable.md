---
title: JavaScript 변수
date: 2020-01-11 18:28:10
categories:
- Front-end
- JavaScript
description:
tags:
---

## var
### var 스코프
함수 밖에 선언한 변수는 어디서든 접근할 수 있다. 함수 안에서 선언한 변수는 함수 밖을 제외한 내부 어디서건 접근이 가능하다. 

```javascript
var a = 1 // 전역 접근 가능

if (a == 1) {
    var b = 2; // 전역 접근 가능
}

function checkScope() {
    var c = 3; // 함수 안에서 접근 가능

    if (c === 3) {
        var d = 4; // 함수 안에서 접근 가능
    }

    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // 3
    console.log(d); // 4

};

checkScope();

console.log(a); // 1
console.log(b); // 2
console.log(c); // error
console.log(d); // error
```

```javascript
for (var i = 0; i < 10; i++) {
    console.log(i); // 0, 1, 2, ..., 9
}

console.log('for loop is finished', i); // for loop is finished 10
```

### 변수 호이스팅(Hoisting)
## const 
## let