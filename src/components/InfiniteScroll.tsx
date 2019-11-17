import React, { useEffect } from 'react';
import SmoothScroll from 'smooth-scroll/dist/smooth-scroll';

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
    window.scrollTo(0,0);
    window.addEventListener('scroll', handleScroll, {passive: true});

    const savedScrollHeight = localStorage.getItem('scrollHeight');

    if (!savedScrollHeight) {
      return;
    }

    console.log(savedScrollHeight);

    const parsed = Number.parseInt(savedScrollHeight, 10);
    const scroll = new SmoothScroll();
    
    scroll.animateScroll(parsed);

    return () => {
      localStorage.setItem('scrollHeight', `${document.documentElement.scrollHeight}`);
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
