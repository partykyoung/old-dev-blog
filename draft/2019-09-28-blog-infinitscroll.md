```javascript
const Index = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: DataTypes) => {
  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  const onScroll = () => {
    console.log(123);
  };

  // 생략...
}
```
스크롤 이벤트 걸어주기 


## Reference
https://medium.com/@ghur2002/react%EC%97%90%EC%84%9C-infinite-scroll-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-128d64ea24b5
https://jbee.io/web/optimize-scroll-event/

