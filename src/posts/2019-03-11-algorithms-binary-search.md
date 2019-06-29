---
title: 이진 탐색
date: 2019-03-17 03:03:57
categories:
  - Base
  - Algorithms
tags: 
  - Algorithms
---


## 이진탐색
- **탐색**: 배열 형태로 주어진 데이터에서 원하는 값을 가진 데이터를 찾는 문제.
- **이진 탐색**: 정렬된 상태의 데이텅에 대해 적용 가능한 효과적인 탐색 방법.

## 탐색 방법
배열은 오름차순 정렬 되어 있다고 가정한다.

###분할
배열의 가운데 원소를 기준으로 왼쪽 부분배열과 오른쪽 부분배열로 분할한다. 탐색키 x가 가운데 원소와 같으면 가운데 원소에 해당하는 배열의 인덱스를 반환하고 종료한다.

###정복
x가 가운데 원소보다 작으면 왼쪽 부분배열을 대상으로 이진 탐색을 순환호출 하고, 크면 오른쪽 부분배열을 대상으로 이진 탐색을 순환호출한다. 탐색을 다시 수행할 때마다 탐색 범위가 절반으로 줄어든다.

### 결합. 
부분배열에 대해서 이진 탐색의 결과가 직접 반환되므로 결과를 결합할 필요가 없다. 

![이진 탐색 분할](/images/base/algorithms-binary-search-1.png)

## 알고리즘
### 재귀함수 
```c
int binarySearch(int arr[], int leftIndex, int rightIndex, int x) {
  // 탐색 실패
  if (leftIndex > rightIndex) {
    return -1;
  }

  int mid = (leftIndex + rightIndex) / 2;

  if (x == arr[mid]) {
    return mid;
  }

  if (x < arr[mid]) {
    // 왼족 배열 탐색
    return binarySearch(arr, leftIndex, mid - 1, x);
  } else {
    // 오른쪽 배열 탐색
    return binarySearch(arr, mid + 1, rightIndex, x);
  }
};
```

### 반복함수
```c
int binarySearch_Iteration(int arr[], int index, int x) {
  int leftIndex = 0, rightIndex = index - 1;
  
  while(leftIndex <= rightIndex) {
    int mid = (leftIndex + rightIndex) / 2;

    if (x == arr[mid]) {
      return mid;
    }

    if (x < arr[mid]) {
      // 왼쪽 부분배열 탐색
      rightIndex = mid - 1;
    } else {
      // 오른쪽 부분배열 탐색
      leftIndex = mid + 1;
    }
  }

  // 탐색키가 존재하지 않을 경우
  return -1; 
};
```

이진 탐색에서는 분할 될 때마다 입력 크기가 절반으로 감소 하며, 탐색 대상의 개수가 1이 되면 더는 분할이 수행되지 않고 탐색 성공 여부가 결정된다.

## 성능 분석
T(n) = 입력 크기 n에 대한 탐색 과정에서의 모든 비교 횟수의 합 = 맨 바깥 수준에서의 비교 횟수 + 순환 호출에서의 비교 횟수.

맨 바깥 수준에서의 비교 횟수는 상수이므로 1.
순환 호출에서의 비교 횟수는 비교 할 때마다 절반 씩 데이터를 나누므로 $\frac{n}{2}$.

T(n) = T($\frac{n}{2}$) + O(1)(n > 1), T(1) = 1;
T(n) = O($logn$)

## 특징
- 입력이 정렬된 리스트에 대해서만 적용이 가능하다.
- 데이터의 삽입/삭제 연산을 수행하면 데이터의 이동이 발생한다.
  - 평균 $\frac{2}{n}$개의 데이터 이동이 발생하므로 삽입/삭제가 빈번한 응용에는 부적합하다.

## Reference 
[방송대 컴퓨터과학과 알고리즘 3강](http://press.knou.ac.kr/goods/textBookView.do?condCmdtCode=9788920026935&condLscValue=001&condYr=&condSmst=)