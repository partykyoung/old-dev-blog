import React, { useEffect } from 'react';


function getPageList(index: number) {
  fetch(`/page/page${index}.json`).then( response => response.json()).then((response) => {
    console.log(response);
  }).catch((e) => {
    console.log(e);
  });
}

interface InfiniteScrollProps {
  children: React.ReactNode
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  children
}) => {
  useEffect(() => {
    getPageList(1);
  }, []);

  return (
    <div>
      { children }
    </div>
  )
}

export default InfiniteScroll
