import React from "react";
import { graphql } from "gatsby";
import styled, {theme} from '../styledComponents';
import { Disqus } from 'gatsby-plugin-disqus';

import "katex/dist/katex.min.css"

import Layout from '../components/Layout';
import Comment from '../components/Comment';
import Post from '../components/Post';
import SEO from '../components/SEO';

const Title = styled.h1`
  font-size: ${({ theme }) => theme.font28};
  line-height: 1.2;
`

const PostData = styled.div`
  margin: 0.5rem 0 1.5rem;
  color: #b3b3b3;
  font-size: ${({ theme }) => theme.font14};
  line-height: 1.5;
`;

const Date = styled.span`
  font-size: ${({ theme }) => theme.font13};
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}: any) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
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
      <Post>
        <Title theme={theme}>{frontmatter.title}</Title>
        <PostData theme={theme}>
          <Date>{frontmatter.date}</Date>
        </PostData>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Post>
      <Comment>
        <Disqus config={disqusConfig} />
      </Comment>
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
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`