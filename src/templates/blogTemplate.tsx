import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';
import { Disqus } from 'gatsby-plugin-disqus';

import "katex/dist/katex.min.css"

import theme from '../styles/theme';

import Layout from '../components/Layout';
import Comment from '../components/Comment';
import SEO from '../components/SEO';

const PostHeader = styled.div`
  margin: 2.5rem 0;
  padding-bottom: 1.75rem;
  border-bottom: 1px solid #eae9f1;

  h1 {
    font-size: 1.75rem;
  }

  span {
    font-size: 1.125rem;
    color: ${theme.gray};
  }
`;

const PostArticle = styled.article`
  font-size: 1.125rem;
  line-height: 1.75;

  h2, h3, h4, h5, h6 {
    margin-top: 2.625rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 500;
  }

  h4 {
    font-weight: 400;
  }

  ul {
    margin: 1.5rem 0;
    padding-left: 1.5rem;
    list-style-type: disc;

  }

  li {
     margin-bottom: 0.5rem;

     ul {
       margin-top: 0.5rem;
       list-style-type: circle;
     }
  }

  figcaption {
    color: ${theme.gray};
    font-size: 0.875rem;
    text-align: center;
  }

  .gatsby-highlight {
    margin: 1.75rem 0;
    font-size: 0.875rem;
  }
`;

const PostComment = styled.div`
  
  #disqus_thread {
    width: 100%;
    margin: 3rem auto 0;
  }
`;

export default function Template({
  data
}: any) {
  const { markdownRemark } = data
  const { frontmatter, slug, html, id } = markdownRemark
  const disqusConfig = {
    url: `${"https://dev.kyoungah.com"+slug}`,
    identifier: id,
    title: frontmatter.title,
  };

  return (
    <>
    <SEO 
      title={frontmatter.title}
      description={frontmatter.description}
      url={`https://dev.kyoungah.com${slug}`}
    />
    <Layout>
      <PostArticle>
        <PostHeader>
          <h1>{frontmatter.title}</h1>
          <span>{frontmatter.date}</span>
        </PostHeader>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </PostArticle>
      <PostComment>
        <Disqus config={disqusConfig} />
      </PostComment>
    </Layout>
    </>
  )
}

// grapthql을 이용하여 markdown에서 데이터를 가지고 온다.
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY년 MM월 DD일")
      }
    }
  }
`