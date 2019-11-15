import React, { useEffect } from 'react';

import Loading from '../components/Loading';

interface InfiniteScrollProps {
  children: React.ReactNode;
  isLoading: boolean;
  onLoadMore: () => void;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  children,
  isLoading,
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
    window.addEventListener('scroll', handleScroll, {passive: true});

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);  

  return (
    <>
      <ul>
        { children }
      </ul>
      {
        isLoading && <Loading />
      }
    </>
  )
}

export default InfiniteScroll
