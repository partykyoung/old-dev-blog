import React from "react";
import { graphql } from "gatsby";
import styled, {theme} from '../styledComponents';

import Layout from '../components/Layout';
import Post from '../components/layout/Post';
import SEO from '../components/SEO';

const Title = styled.h1`
  font-size: ${({ theme }) => theme.font28};
  line-height: 1.2;
  font-weight: 600;
`

const PostData = styled.div`
  margin: 0.5rem 0 1.5rem;
  color: #7a7a7a;
  font-size: ${({ theme }) => theme.font14};
  line-height: 1.5;
`;

const Date = styled.span`
  font-size: ${({ theme }) => theme.font13};

  &:after {
    display: inline-block;
    margin: 0 0.5rem;
    content: "•"
  }
`;


const Description = styled.span`
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
        <PostData theme={theme}>
          <Date>{frontmatter.date}</Date>
          <Description>{frontmatter.description}</Description>
        </PostData>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Post>
    </Layout>
    </>
  )
}

// grapthql을 이용하여 markdown에서 데이터를 가지고 온다.
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