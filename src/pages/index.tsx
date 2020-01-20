import React, { useEffect, useState }  from "react";

import { useGlobalDispatch, useGlobalState } from '../components/context/GlobalContext';
import InfiniteScroll from "../components/ui/InfiniteScroll"
import Layout from "../components/template/PageTemplate";
import PostLink from '../components/index/PostLink';
import SEO from "../components/layout/Seo";

async function getPageList(index: number) {
  const response = await fetch(`/page/page${index}.json`);
  const posts = response.json();

  return posts;
}

const Index = () => {
  const dispatch = useGlobalDispatch();
  const { currentPage, hasMore, posts } = useGlobalState();
  const [isLoading, setLoadings] = useState(false);

  const handleScroll = () => {
    if (!dispatch) {
      return;
    }

    dispatch({
      type: 'page'
    });
  };

  const handleGetPages = async () => {
    if (!hasMore) {
      return;
    }

    if (!dispatch) {
      return;
    }

    setLoadings(true);

    const response: any = await getPageList(currentPage);
    const { numPages: totalPage, posts } = response;

    dispatch({
      type: 'posts',
      hasMore: totalPage > currentPage,
      posts: posts
    })

    setLoadings(false);
  }

  useEffect(() => {  
    handleGetPages();
  }, [currentPage, hasMore]);

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
          <ul>
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
          </ul>
          </InfiniteScroll>
        </Layout>
    </>
  )
}

export default Index;