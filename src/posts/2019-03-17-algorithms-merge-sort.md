---
title: 합병정렬
# tags:
#   - Algorithms
# categories:
#   - Base
#   - Algorithms
date: 2019-03-18 01:13:13
path: /base/algorithms/merge-sort
---

## 합병정렬

배열을 동일한 크기의 두 개의 부분배열로 분할하고 각각의 부분 배열을 순환적으로 정렬한 후, 정렬된 두 부분배열을 합병하여 하나의 정렬된 배열을 만든다.

### 분할

입력의 크기가 n인 배열을 n/2개의 원소를 가진 두 부분배열로 분할한다.

### 정복

각각의 부분배열에 대해서 합병 정렬을 순환적으로 적용하여 각 부분배열을 정렬한다.

### 결합

정렬된 두 부분배열을 합병하여 하나의 정렬된 배열을 만든다.

![합병정렬](/images/base/algorithms-merge-sort-1.png)

## 알고리즘

```c
void merge(int arr[], int sorted[], int leftIndex, int mid, int rightIndex) {
  int l_hold = leftIndex, r_hold = mid + 1;
  int resultIndex = leftIndex; // 결과 배열의 index

  while(l_hold <= mid && r_hold <= rightIndex) {
    // 부분배열 두개를 비교하여 작은 값을 선택한다.
    if (arr[l_hold] < arr[r_hold]) {
      sorted[resultIndex] = arr[l_hold];

      l_hold++;
    } else {
      sorted[resultIndex] = arr[r_hold];

      r_hold++;
    }

    resultIndex++;
  }

  // 왼쪽 부분배열에 남아있는 모든 원소를 새로은 배열로 이동시킨다.
  while (l_hold <= mid) {
    sorted[resultIndex] = arr[l_hold];

    resultIndex ++;
    l_hold ++;
  }

  // 오른쪽 부분배열에 남아있는 모든 원소를 새로은 배열로 이동시킨다.
  while (r_hold <= rightIndex) {
    sorted[resultIndex] = arr[r_hold];

    resultIndex ++;
    r_hold ++;
  }


  // 원본 배열에 정렬된 배열을 이동 시킨다.
  for (int i = leftIndex; i <= rightIndex; i++) {
    arr[i] = sorted[i];
  }
}

void mergeSort (int arr[], int sorted[], int leftIndex, int rightIndex) {
  if (leftIndex < rightIndex) {
    // 각각 n/2크기를 가진 두 부분배열로 나누기 위해 가운데 값 정함.
    int mid = (leftIndex + rightIndex) / 2;

    // 왼쪽 부분배열의 순환호출
    mergeSort(arr, sorted, leftIndex, mid);

    // 오른쪽 부분배열의 순환호출
    mergeSort(arr, sorted, mid + 1, rightIndex);

    // 정렬된 두 부분배열의 합병
    merge(arr, sorted, leftIndex, mid, rightIndex);
  }
}
```

## 성능 분석

### 합병 함수 수행 시간

합병 함수 수행 시간 = 부분배열[n/2] + 부분배열[n/2] = 배열[n]

두 부분 배열을 합병하면 최악의 경우 결과 배열엔 n + m개의 원소가 저장되는에 이때 최악의 경우 n + m - 1회의 비교가 필요하다.

- 최소 비교횟수: $\frac{n}{2}$
- 최대 비교횟수: ($\frac{n}{2}$ + $\frac{n}{2}$ - 1) = n - 1;
  => 입력 데이터 개수만큼의 저장 장소가 추가로 필요하다.

결국 합병을 하는데 걸리는 시간은 입력 크기 n에 비례하므로 Θ(n)이 된다.

### 합병 정렬 수행 시간

합병 정렬 수행시간 = 크기 n/2인 두번의 합병 정렬 순환 호출 + 한번의 합병

T(1) = 1;
T(n) = T($\frac{n}{2}$) + T($\frac{n}{2}$) + Θ(n);

=> T(n) = 2T($\frac{n}{2}$) + Θ(n)
=> T(n) = O($n log n$)

## Reference

[방송대 컴퓨터과학과 알고리즘 4강](http://press.knou.ac.kr/goods/textBookView.do?condCmdtCode=9788920026935&condLscValue=001&condYr=&condSmst=)
