import React from "react";
import { graphql } from "gatsby";
import styled, {theme} from '../styledComponents';

import Layout from '../components/Layout';
import Post from '../components/layout/Post';
import SEO from '../components/SEO';

const Title = styled.h1`
  font-size: ${({ theme }) => theme.font28};
  line-height: 1.2;
`

const Date = styled.div`
  margin: 1rem 0;
  font-size: ${({ theme }) => theme.font14};
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}: any) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  return (
    <>
    <SEO 
      title={frontmatter.title}
      description={frontmatter.description}
      url={`https://dev.kyoungah.com${frontmatter.path}`}
    />
    <Layout>
      <Post>
        <Title theme={theme}>{frontmatter.title}</Title>
        <Date>{frontmatter.date}</Date>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Post>
    </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY년 MM월 DD일")
        description
        path
        title
      }
    }
  }
`