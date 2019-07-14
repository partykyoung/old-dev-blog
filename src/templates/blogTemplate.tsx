import React from "react";
import { graphql } from "gatsby";
// import styled, {theme} from '../styledComponents';

import Layout from '../components/Layout';
import Post from '../components/layout/Post';
import SEO from '../components/SEO';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}: any) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  console.dir(data);

  return (
    <>
    <SEO 
      title={frontmatter.title}
      description={frontmatter.description}
      url={`https://dev.kyoungah.com${frontmatter.path}`}
    />
    <Layout>
      <Post>
        <h2>{frontmatter.title}</h2>
        <h2>{frontmatter.date}</h2>
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
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`