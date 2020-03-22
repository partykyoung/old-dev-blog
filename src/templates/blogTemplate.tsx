import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';
import { DiscussionEmbed } from "disqus-react"

import "katex/dist/katex.min.css"

import theme from '../styles/theme';

import PageTemplate from '../components/template/PageTemplate';
import Seo from '../components/layout/Seo';

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
    font-weight: 600;
  }

  h4, h5, h6 {
    font-weight: 500;
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

  table {
    width: 100%;
  }

  thead {
    th, td {
      border-width: 0 0 2px;
    }
  }

  tbody {
    tr:last-child {
      th, td {
        border-bottom-width: 0;
      }
    }
  }

  th, td {
    padding: 0.5rem 0.75rem;
    border: 1px solid ${theme.gray};
    border-width: 0 0 1px;
    vertical-align: middle;
  }

  figcaption {
    color: ${theme.gray};
    font-size: 0.875rem;
    text-align: center;
  }

  iframe {
    margin-bottom: 1rem;
  }

  .gatsby-highlight {
    margin: 1.75rem 0;
    font-size: 0.875rem;
  }

  .katex-display {
    margin: 1rem 0;
    text-align: left;

    .katex {
      text-align: left;
    }
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
  const { fields, frontmatter, html } = markdownRemark
  const disqusConfig = {
    shortname: 'dev-kyoungah-com',
    config: {
      url: `${process.env.BLOG_URL}${fields.slug}`,
      identifier: fields.slug,
      title: frontmatter.title 
    }
  };

  return (
    <>
    <Seo 
      title={frontmatter.title}
      description={frontmatter.description}
      url={`${process.env.BLOG_URL}${fields.slug}`}
    />
    <PageTemplate>
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
      <DiscussionEmbed {...disqusConfig} />
      </PostComment>
    </PageTemplate>
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
      fields {
        slug
      }
    }
  }
`