import React, { useCallback, useEffect, useState }  from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import PostLink from "../components/PostLink"
// import Pagination from '../components/Pagination';

import styled from '../styledComponents';
import InfiniteScroll from "../components/InfiniteScroll"

const Wrapper = styled.div`
  padding: 2rem 1rem;
`;

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
  const [ posts, setPosts ] = useState<any>([]);
  const [currentNum, setCurrentNum] = useState(1);

  const handleScroll = () => {
    setCurrentNum(prevState => prevState + 1);
  };

  useEffect(() => {    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  return (
    <>
      <SEO
        url="https://dev.kyoungah.com"
        title="경아 개발 블로그"
        description="배우고 익혔던 것들을 기록하고 있습니다."
      />
      <Layout>
        <Wrapper>
        <InfiniteScroll>
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
          {/* <Pagination pageContext={pageContext}/> */}
          </InfiniteScroll>
        </Wrapper>
        </Layout>
    </>
  )
}

export default Index;