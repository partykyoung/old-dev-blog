React 컴포넌트에는 lifeCycle이 존재한다. 컴포넌트 수명은 페이지에 렌더링되기 전 준비과정에서 시작하여 페이지에서 사라질 때 끝난다.

## 마운트
DOM이 생성되고 웹 브라우저상에 나타나는 것을 마운트 라고 한다.

- constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount()
 
## 업데이트 
props나 state가 바뀌거나 부모 컴포넌트가 리렌더링될 때, fourceUpdate로 강제 렌더링을 트리거할 때 업데이트가 발생한다.

- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

## 언마운트
컴포넌트를 DOM에서 제거하는 것을 언마운트 라고 한다.

- componentWillUnmount()

## 라이프사이클 종류

### render()
```javascript
rcc
```

lifeCycle 메서드 중 유일한 필수 메서드 이다.

HTML태그나 컴포넌트같은 리액트 요소들을 반환한다. 아무것도 보여주고 싶지 않으면 null 또는 false 값을 반환하면 된다. 이 메서드 안에서 this.props와 this.state에 접근할 수 있다.
이 메서드 안에서는 절대 컴포넌트의 state를 변경하면 안되고 호출될 때마다 동일한 결과를 반환해야 하며, 브라우저와 직접적으로 상호작용을 하면 안된다. DOM 정보를 가져오거나 변화를 줄 때는 componentDidMount에서 처리해야 한다.

shoudComponentUpdate 메서드가 false를 반환하면 render 메서드는 호출되지 않는다.

### constructor()
컴포넌트 생성자 메서드로 컴포넌트가 마운트되기 전에 호출된다. 이 메서드에서 state 값을 초기화 하거나 이벤트 함수들을 바인딩 할 수 있다. 해당 작업들이 필요 없다면 constructor 메서드는 생략 가능하다. 

이 메서드 안에서 super을 호출한 후에 props를 인자로 넘겨줘야 constructor 안에서 this.props에 접근할 수 있다.

### getDerivedStateFromProps()
### componentDidMount()
### shoudComponentUpdate()
### getSnapshotBeforeUpdate()
### componentDidUpdate()
### componentWillUnmount()
### componentDidCatch()