import React, { useEffect, useRef } from 'react';

interface InfiniteScrollProps {
  children: React.ReactNode;
  onLoadMore: () => void;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  children,
  onLoadMore
}) => {
  const handleScroll = () => {
    const { body, documentElement } = document;

    if (!body || !documentElement) {
      return;
    }

    const scrollHeight = Math.max(documentElement.scrollHeight, body.scrollHeight);
    const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
    const clientHeight = documentElement.clientHeight;

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
    <ul>
      { children }
    </ul>
  )
}

export default InfiniteScroll
