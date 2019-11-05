import React, { useEffect, useRef } from 'react';

interface InfiniteScrollProps {
  children: React.ReactNode
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  children
}) => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!listRef || !listRef.current) {
      return;
    }

    const scrollHeight = Math.max(document.body.scrollHeight, listRef.current.scrollHeight);
  }, []);

  return (
    <div ref={listRef}>
      { children }
    </div>
  )
}

export default InfiniteScroll
