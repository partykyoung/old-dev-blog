import React, { Component } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import PostLink from '../components/index/PostLink';

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
`;

interface edgeTypes {
  node: {
    id: string;
    excerpt: string;
    frontmatter: {
      date: string;
      path: string;
      title: string;
    };
  };
};

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

    return (
      <PostLink key={edge.node.id} post={edge.node} />
    );
  });

  return <Layout>{Posts}</Layout>
}

export default Index;
