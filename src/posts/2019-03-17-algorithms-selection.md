---
title: 선택 문제
date: 2019-05-10 19:55:08
path: /base/algorithms/selection
description: n개의 원소가 임의의 순서로 저장된 배열에서 i번째로 작은 원소를 찾는 문제.
---

## 선택 문제

n개의 원소가 임의의 순서로 저장된 배열에서 i번째로 작은 원소를 찾는 문제.

- i = 1 이면 최솟값.
- i = n/2 이면 중간값.
- i = n 이면 최댓값.

직관적인 방법으로는 오름차순으로 정렬한 후 i 번째 원소를 찾으면 되는데 이떄 성능은 o($n log n$)이다.
또 다른 직관적인 방법으로는 최솟값 찾는 과정을 i번 반복한다. i-1번째까지는 최솟값을 찾은 후 삭제한다. 이 경우에는 최솟값을 찾는데 걸리는 시간 O(n)을 i번 반복하기 때문에 성능은 O(in)이다.

## 최솟값 찾기

각 데이터를 하나씩 모드 비교한다.

```c
int findMinimum (int arr[], int length) {
  int min = arr[0];

  for (int i = 1; i < length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}
```

n개의 데이터에서 대해서 최소한 length - 1번의 비교가 필요하므로 성능은 O(n)이다.

## 최솟값과 최대값 모두 찾기.

최솟값과 최댓값을 모두 찾으려면 최솟값을 찾은 후에 최댓값을 찾거나 최댓값을 찾은 후 최솟값을 찾으면 된다.

```c
void findMinMax(int arr[], int length) {
  int min = arr[0];
  int max = arr[1];

  // arr[0]과 arr[1]을 사용하여 최솟값/최댓값 초기화.
  if (min > max) {
    max = arr[0];
    min = arr[1];
  }

  for(int i = 2; i < length; i += 2) {
    int small = 0, large = 0;

    // 두 데이터 중에서 작은 값과 큰 값을 결정.
    if (i < length && i + 1 < length && arr[i] < arr[i + 1]) {
      small = arr[i];
      large = arr[i + 1];
    } else {
      small = arr[i + 1];
      large = arr[i];
    }

    // 작은 값과 최솟 값을 비교.
    if (small < min) {
      min = small;
    }

    // 큰 값과 최댓 값을 비교.
    if (large > max) {
      max = large;
    }
  }

  printf("최댓값: %d, 최솟값: %d\n", max, min);
}
```

위의 알고리즘을 이용하면 $(3/2 * n) - 2$번의 비교를 통해서 최솟값과 최댓값을 동시에 찾을 수 있다.

### i번째로 작은 원소 찾기: 최악 $O(n^2)$, 평균 O(n)

퀵 정렬의 분할 함수 Partition()을 이용하면 모든 원소를 정렬하지 않고도 i번째로 작은 원소를 구할 수 있다.

- i = j 일때 피벗이 찾고자 하는 i 번째 원소.
- i < j 일때 왼쪽 부분배열에 대해 순환 적용.
- i > j 일때 오른쪽 부분배열에 대해 순환 적용.

#### 분할

피벗을 기준으로 주어진 배열을 두 부분배열로 분할한다. i가 피벗의 인덱스와 같으면 피벗의 값을 반환하고 종료한다.

#### 정복

인덱스 i가 포함된 부분배열에 대해서 선택 알고리즘을 순환적으로 적용한다.

#### 결합

필요 없다.

#### 알고리즘

```c
void swap(int arr[], int a, int b) {
    int temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

// 퀵정렬에 사용된 분할 함수를 그대로 사용하면 된다.
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

int findNumber(int arr[], int leftIndex, int rightIndex, int findNum) {
    int pivot = partition(arr, leftIndex, rightIndex); // 두 부분배열로 분할

    if (findNum == pivot) {
      return arr[pivot];
    }

    if (findNum < leftIndex) {
      // 왼쪽 부분배열에 대해 순환호출
      return findNumber(arr, leftIndex, pivot - 1, findNum);

    } else {
      // 오른쪽 부분배열에 대해서 순환호출
      return findNumber(arr, pivot + 1, rightIndex, findNum);
    }
}
```

#### 성능분석

최악의 경우 = 퀵 정렬의 최악의 경우

- 분할 함수가 항상 하나의 부분배열만 생성하는 경우.
- 오름차순으로 정렬된 상태에서 i = n을 찾는 경우.
  - 분할 함수 호출할 떄 마다 피벗의 인덱스는 1씩 증가. -> Partition()을 O(n)번 호출. O($n^2$).
  - 해결책은 항상 일정한 비율의 두 부분배열로 분할 시키면 된다.

평균적인 경우에는 O(n).

### i번째로 작은 원소 찾기: 최악 O(n), 평균 O(n)

특정한 성질을 만족하도록 피벗을 선택하되 항상 일정한 비율의 두 부분배열로 분할 시킨다. 그러면 항상 하나의 부분배열만으로 분할되는 문제를 피하여 최악의 수행 시간 O($n^2$)를 개선할 수 있다.

#### 피벗 선택 방법

1. 크기가 n인 배열의 원소를 5개씩 묶어 $n/5$개의 그룹을 형성한다. 이떄 n이 5의 배수가 되지 않아 그룹을 형성하지 못한 채 남은 원소들은 그대로 남겨둔다.
2. 각 그룹에 대해서 중간 값을 찾는다.
3. $n/5$개의 중간값들을 대상으로 다시 중간값을 찾는다.
4. 이렇게 계산된 '중간값들의 중간값'을 피벗으로 사용하여 주어진 배열을 분할한다.

#### 알고리즘

```c
// 삽입 정렬 함수
void insertionSort(int arr[], int leftIndex, int rightIndex){
  int i, j, key;

  for(i = leftIndex + 1; i <= rightIndex; i++){
    key = arr[i]; // 현재 삽입될 숫자인 i번째 정수를 key 변수로 복사

    // 현재 정렬된 배열은 i-1까지이므로 i-1번째부터 역순으로 조사한다.
    // j 값은 음수가 아니어야 되고
    // key 값보다 정렬된 배열에 있는 값이 크면 j번째를 j+1번째로 이동
    for(j=i-1; j>=0 && arr[j]>key; j--){
      arr[j+1] = arr[j]; // 레코드의 오른쪽으로 이동
    }

    arr[j+1] = key;
  }
}

// 분할 함수
int partition(int arr[], int leftIndex, int rightIndex, int pivot) {
  int swapIndex = leftIndex;

  for (int i = leftIndex; i <= rightIndex; i++) {
    if (arr[i] < pivot) {
      int temp = arr[i];

      arr[i] = arr[swapIndex];
      arr[swapIndex] = temp;

      swapIndex += 1;
    }
  }

  return swapIndex - 1;
}

int selection (int arr[], int leftIndex, int rightIndex, int findIndex) {
  int arrLength = rightIndex - leftIndex + 1;
  int medianNum = arrLength / 5;

  if (0 > findIndex && findIndex > arrLength) {
    return -1;
  }

  // 배열의 길이가 5보다 같거나 작으면 findIndex - 1번째 원소를 찾아 봔한한다.
  if (arrLength <= 5) {
    insertionSort(arr, leftIndex, rightIndex);

    return arr[findIndex - 1];
  }

  int *maidanArr = (int *) malloc(sizeof(int) * medianNum);

  // 배열 arr에서 5개씩 원소를 묶어 n/5 개의 그룹을 만든 후 각 그룹에서 중간값을 구해 배열 maidanArr을 만든다.
  for (int i = 0; i < medianNum; i++) {
    maidanArr[i] = selection(arr, leftIndex + (5 * i), (leftIndex + (5 * (i+1)-1)), leftIndex + (5 * i) + 2);
  }

  // 중간값들의 중간값을 계산하기 위해 선택 함수를 순환호출한다.
  int pivot = selection(maidanArr, 0, medianNum - 1, (medianNum / 2) + 1);

  // pivot을 사용하여 배열 arr을 분할한다.
  int pivotIndex = partition(arr, leftIndex, rightIndex, pivot);
  int rank = pivotIndex - leftIndex + 1;

  if (findIndex <= rank) {
      return selection(arr, leftIndex, pivotIndex, findIndex);
  } else {
      return selection(arr, pivotIndex + 1, rightIndex, findIndex);
  }
}
```

## Reference

[방송대 컴퓨터과학과 알고리즘 4강](http://press.knou.ac.kr/goods/textBookView.do?condCmdtCode=9788920026935&condLscValue=001&condYr=&condSmst=)
[프로그래밍 면접 문제 10 : Kth Largest Element in Array](https://ronniej.sfuh.tk/kth-largest-element-array/)
