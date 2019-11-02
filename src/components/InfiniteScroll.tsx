import React, { useEffect } from 'react';


function getPageList(index: number) {
  fetch('/page/page.json').then( response => response.json()).then((response) => {
    console.log(response);
  }).catch((e) => {
    console.log(e);
  });
}

const InfiniteScroll = () => {
  useEffect(() => {
    getPageList(1);
  }, []);

  return (
    <div>
      ㅇㅇ
    </div>
  )
}

export default InfiniteScroll
