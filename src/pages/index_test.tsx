import React, { useEffect, useState }  from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import Home from "../components/Home";

import styled from '../styledComponents';

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY년 MM월 DD일")
            title
          }
        }
      }
    }
  }
`

const Wrapper = styled.div`
  padding: 2rem 1rem;
`;

interface EdgeTypes {
  node: {
    excerpt: string;
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      date: string
      title: string
    };
  }
}

interface DataTypes {
  data: {
    allMarkdownRemark: {
      edges: EdgeTypes[];
    };
  };
}

const Index = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: DataTypes) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  const onScroll = () => {
    const { body, documentElement } = document;
    const { clientHeight } = documentElement;
    const scrollHeight = Math.max(body.scrollHeight, documentElement.scrollHeight);
    const scrollTop = Math.max(body.scrollTop, documentElement.scrollTop);

    if (scrollTop + clientHeight === scrollHeight) {
      setCount(prev => prev + 1);
    }
  };

  return (
    <>
      <SEO
        url="https://dev.kyoungah.com"
        title="경아 개발 블로그"
        description="배우고 익혔던 것들을 기록하고 있습니다."
      />
      <Layout>
        <Home 
          count={count}
          posts={edges}
        />
      </Layout>
    </>
  )
}

export default Index
