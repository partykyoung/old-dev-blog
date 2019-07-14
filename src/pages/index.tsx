import React, { Component } from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import PostLink from "../components/index/PostLink"

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

interface edgeTypes {
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
      edges: edgeTypes[]
    }
  }
}) => {
  const Posts = edges.map((edge: edgeTypes) => {
    return <PostLink key={edge.node.id} post={edge.node} />
  })

  return (
    <>
      <SEO
        url="https://dev.kyoungah.com"
        title="경아 개발 블로그"
        description="배우고 익혔던 것들을 기록하고 있습니다."
      />
      <Layout>{Posts}</Layout>
    </>
  )
}

export default Index
