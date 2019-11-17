import React, { useEffect, useState }  from "react"

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import PostLink from "../components/PostLink";

import InfiniteScroll from "../components/InfiniteScroll"

interface EdgeTypes {
  node: {
    id: string
    excerpt: string
    frontmatter: {
      date: string
      title: string
    }
  }
}

async function getPageList(index: number) {
  const response = await fetch(`/page/page${index}.json`);
  const posts = response.json();

  return posts;
}

const Index = () => {
  const [isLoading, setLoadings] = useState(false);
  const [posts, setPosts ] = useState<any>([]);
  const [currentNum, setCurrentNum] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const handleScroll = () => {
    setCurrentNum(prevState => prevState + 1);
  };

  const handleGetPages = async () => {
    const response: any = await getPageList(currentNum);
    const totalPage = response.numPages;

  
    setHasMore(totalPage > currentNum);
    setPosts(posts.concat(response.posts));
    setLoadings(false);
  }

  useEffect(() => {  
    if (!hasMore) {
      return;
    }  

    setLoadings(true);
    handleGetPages();
  }, [currentNum, hasMore]);

  return (
    <>
      <SEO
        url="https://dev.kyoungah.com"
        title="경아 개발 블로그"
        description="배우고 익혔던 것들을 기록하고 있습니다."
      />
      <Layout>
        <InfiniteScroll
          isLoading={isLoading}
          onLoadMore={handleScroll}
        >
          {
            posts.map((post: any) => (
              <PostLink 
                key={post.id}
                date={post.date}
                excerpt={post.excerpt}
                slug={post.slug}
                title={post.title}
              />
            ))
          }
          </InfiniteScroll>
        </Layout>
    </>
  )
}

export default Index;