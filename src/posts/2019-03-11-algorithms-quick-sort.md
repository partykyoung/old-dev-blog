---
title: 퀵 정렬
date: 2019-03-17 19:15:00
# categories:
#   - Base
#   - Algorithms
# tags:
#   - Algorithms
path: /base/algorithms/quick-sort
---

## 퀵 정렬

특정 원소를 기준으로 주어진 배열을 두 부분배열로 분할하고, 각 부분배열에 대해서 퀵 정렬을 순환적으로 적용하는 방식.
특정 원소를 **피벗** 이라고 부름. 즉, 피벗이 제자리를 잡조록 하여 정렬하는 방식. 피벗의 왼쪽 부분배열엔 피벗보다 작은 값이, 오른쪽 부분배열엔 피벗보다 큰 값이 온다.

- 피벗: 두 부분배열로 분할할 때 기준에 되는 특정 원소. 보통 주어진 배열의 첫 번째 원소로 지정한다.

### 분할

피벗을 기준으로 주어진 배열을 두 부분배열로 분할한다.

### 정복

두 부분배열에 대해서 퀵 정렬을 순환적으로 적용하여 각 부분배열을 정렬한다.

### 결합

필요 없음

![퀵정렬](../images/base/algorithms-quick-sort-1.png)

## 알고리즘

```c
void swap(int arr[], int a, int b)
{
    int temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

// 배열의 맨 오른쪽 index엔 무한대 값이 있다고 가정한다.
int partition(int arr[], int leftIndex, int rightIndex) {
// 맨 왼쪽을 피벗으로 잡기 때문에 l_hold는 피벗의 위치 + 1, r_hold는 배열의 마지막 index
  int pivot = arr[leftIndex], l_hold = leftIndex + 1, r_hold = rightIndex;

  while (l_hold <= r_hold) {
    // l_hold는 피벗보다 큰 값을 찾는다.
    while (l_hold <= rightIndex && arr[l_hold] < pivot) {
      l_hold++;
    }

    // r_hold는 피벗보다 작은 값을 찾는다.
    while (r_hold > leftIndex && arr[r_hold] >= pivot) {
      r_hold--;
    }

    if (l_hold < r_hold) {
      // arr[l_hold]와 arr[r_hold]의 값을 교환한다.
      swap(arr, l_hold, r_hold);
    }
  }

  // 피벗과 arr[r_hold]값을 교환한다.
  swap(arr, leftIndex, r_hold);

  return r_hold;
}

void quickSort(int arr[], int leftIndex, int rightIndex) {
  if (leftIndex <= rightIndex) {
    int pivot = partition(arr, leftIndex, rightIndex); // 두 부분배열로 분할

    quickSort(arr, leftIndex, pivot - 1);  // 왼쪽 부분배열에 대해 순환호출
    quickSort(arr, pivot + 1, rightIndex); // 오른쪽 부분배열에 대해서 순환호출
  }

}
```

## 성능 분석

퀵 정렬 알고리즘은 한 번의 분할과 두 번의 순환 호출로 구성된다.

### 분할 함수 수행 시간

피벗을 제외한 배열의 원소들은 피벗과 최대 2번 비교 하게 된다. 전체적으로는 입력 크기 n에 비례하는 Θ(n) 시간이 걸린다.

### 퀵 정렬 수행 시간

퀵 정렬 수행 시간 = 한 번의 분할 + 두번의 킉정렬 순환 호출.
배열 부분 시 두 부분배열의 크기가 다르기 때문에 배열이 어떤 크기의 두 부분배열로 분할되느냐에 따라 수행 시간이 다르다.

#### 최악의 경우

극심한 불균형적 분할.

- 피벗만 제자리를 잡고, 나머지 모든 원소가 하나의 부분배열로 분할되는 경우
- 피벗이 항상 부분배열의 최솟값, 또는 최댓값이 되는 경우
- 입력 데이터가 정렬되어 있고 피벗을 배열의 처음 원소로 지정한 경우

T(n) = T(n-1) + T(0) + Θ(n) (n > 0) // 한쪽은 데이터가 없으므로 T(0)
T(0) = 0

=> T(n) = T(n - 1) + Θ(n)
=> T(n) = O($n^2$)

### 최선의 경우

가장 균형적인 분할.

- 피벗을 중심으로 항상 동일한 크기의 두 부분배열로 분할되는 경우
- 피벗이 항상 부분배열의 중간값이 되는 경우

T(n) = T($\frac{n}{2}$) + T($\frac{n}{2}$) + Θ(n) (n > 1)
T(1) = 1

=> T(n) = 2T($\frac{n}{2}$) + Θ(n)
=> T(n) = O($n log n$)

### 평균적인 경우

부분배열의 모든 분할 비율에 따른 수행 시간의 평균.

- 피벗은 동일한 확률로서 분할 후 배열의 어느 곳에나 위치 가능

T(1) = T(0) = 0
T(n) = $\frac{1}{n}\sum\_{i = 1}^{n}(T(i - 1) + T(n - i)) + O(n) (n >= 2)$

=> T(n) = O($n log n$)

## 특징

- 최선/ 평균의 경우 O($n log n$)
- 최악의 경우 O($n^2$)

즉 피벗 선택의 임의성만 보장되면 평균적인 성능을 보일 가능성이 매우 높다. 그래서 배열에서 임의로 값을 선택해서 배열의 처음 원소와 서로 교환 후 정렬 수행하면 최악의 경우를 피할 가능성이 커진다.

## Reference

[방송대 컴퓨터과학과 알고리즘 3강](http://press.knou.ac.kr/goods/textBookView.do?condCmdtCode=9788920026935&condLscValue=001&condYr=&condSmst=)
