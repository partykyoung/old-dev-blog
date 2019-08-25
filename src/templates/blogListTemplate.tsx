import React  from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import PostLink from "../components/PostLink"
import Pagination from '../components/Pagination';

import styled from '../styledComponents';

const Wrapper = styled.div`
  padding: 2rem 1rem;
`;

interface EdgeTypes {
  node: {
    id: string
    excerpt: string
    frontmatter: {
      date: string
      path: string
      title: string
    }
  }
}

const Index = ({data, pageContext}: any) => {
  const { edges } = data.allMarkdownRemark;

  const Posts = edges.map((edge: EdgeTypes) => {
    return <PostLink key={edge.node.id} post={edge.node} />
  })

  return (
    <>
      <SEO
        url="https://dev.kyoungah.com"
        title="경아 개발 블로그"
        description="배우고 익혔던 것들을 기록하고 있습니다."
      />
      <Layout>
        <Wrapper>
          {Posts}
          <Pagination pageContext={pageContext}/>
        </Wrapper>
        </Layout>
    </>
  )
}

export default Index;

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`