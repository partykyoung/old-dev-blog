---
title: 피보나치 수열
date: 2019-05-12 22:35:49
description: 첫째 및 둘째 항이 1이며 그 뒤의 모든 항은 바로 앞 두 항의 합인 수열.
path: /base/algorithms/fibonachi
---

## 피보나치 수열

f(0) = 0.
f(1) = 1.
f(n) = f(n - 1) + f(n -2), n >= 2.

피보나치 수열은 정의 자체가 최적성의 원리가 성립되는 점화식이므로 바로 동적 프로그래밍 방법을 적용할 수 있다.

2 이상인 n에 대해 f(n)은 그 소문제의 해인 f(n - 1)과 f(n - 2)의 합으로 구성되므로 f(0)과 f(1)을 먼저 테이블에 저장한 후 n을 2로부터 1씩 증가시키며 해를 구한 뒤 테이블에 저장한다. n에 어떤 값이 있더라도 f(n)을 구할 시점에는 f(n - 1)과 f(n - 2)가 항상 테이블에 저장되어 있으므로 테이블을 이용하여 즉시 f(n)을 구할 수 있다.

## 알고리즘

```c
// 50 이상의 수열에서는 int형 범위를 초과하기 때문에 double을 반환형으로 사용하였다.
double fibonachi (int num) {
  double *fiboArr = (double *) malloc(sizeof(double) * num);

  // f(0)과 f(1)을 테이블에 저장한다.
  fiboArr[0] = 0;
  fiboArr[1] = 1;

  // i를 2부터 1씩 증가시키며 f(i)의 해를 테이블에 저장된 f(i - 1)과 f(i - 2)의 합으로 계산하여 다시 테이블에 저장한다.
  for (int i = 2; i <= num; i++) {
    fiboArr[i] = fiboArr[i - 1] + fiboArr[i - 2];
  }

  return fiboArr[num];
}
```

이렇게 하면 데이터를 저장하기 위해 필요한 테이블이 O(n) 에 비례해지는 단점이 있다.

```c
double fibonachi (int num) {
  if (num == 0) {
    return 0;
  }

  if (num == 1) {
    return 1;
  }

  return fibonachi(num - 1) + fibonachi(num - 2);
}
```

재귀방식으로 구현할 수도 있으나 실행시간이 늘어난다는 단점이 있다.

## 성능 분석

동적 프로그래밍 방식으로 푸는 경우 알고리즘의 for 루프는 구하려는 피보나치 수열의 순번 n만큼 반복하므로 시간 복잡도는 O(n)이다.

순환 호출 방식으로 푸는 경우 성능은 O($n^2$) 이다.

## Reference

- [방송대 컴퓨터과학과 알고리즘 5강](http://press.knou.ac.kr/goods/textBookView.do?condCmdtCode=9788920026935&condLscValue=001&condYr=&condSmst=)
