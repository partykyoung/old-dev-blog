import React, { useEffect, useRef } from 'react';

interface InfiniteScrollProps {
  children: React.ReactNode;
  onLoadMore: () => void;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  children,
  onLoadMore
}) => {
  const listRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!listRef || !listRef.current) {
      return;
    }

    const scrollHeight = Math.max(document.body.scrollHeight, listRef.current.scrollHeight);
    const scrollTop = Math.max(document.body.scrollTop, listRef.current.scrollTop);
    const clientHeight = listRef.current.clientHeight;

    console.log(listRef.current.scrollHeight, document.body.scrollHeight);

    if (scrollTop + clientHeight === scrollHeight) {
      onLoadMore();
    }
  }
  useEffect(() => {    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);  

  return (
    <div ref={listRef}>
      { children }
    </div>
  )
}

export default InfiniteScroll
