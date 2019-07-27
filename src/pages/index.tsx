import React  from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import PostLink from "../components/PostLink"

import styled from '../styledComponents';

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY년 MM월 DD일")
            path
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
    id: string
    excerpt: string
    frontmatter: {
      date: string
      path: string
      title: string
    }
  }
}

const Index = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: {
  data: {
    allMarkdownRemark: {
      edges: EdgeTypes[]
    }
  }
}) => {
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
      <Layout><Wrapper>{Posts}</Wrapper></Layout>
    </>
  )
}

export default Index
