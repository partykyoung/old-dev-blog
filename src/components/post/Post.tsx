import React from 'react'
import styled from "styled-components";

import theme from '../../styles/theme';

const Wrapper = styled.div`
  padding: 1.5rem;
  margin: 0 auto;
  background-color: ${theme.white};
  border-radius: 4px;

  h2, h3, h4, h5 {
    margin-top: 2.5rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  h3 {
    font-size: 1.25rem;
  }

  h4, h5 {
    font-size: 1.125rem;
  }

  p, li {
    font-size: 1rem;
    word-break: keep-all;
    overflow-wrap: break-word;
    line-height: 2;
  }

  p {
    margin-top: 0.9375rem;

    code {
      color: #ff3860;
      background: transparent;
    }
  }
}

.blog-post-content {
  a{
    color: ${theme.black};
    border-bottom: 2px solid #adc2cb;
  }

  ul {
    padding-left: 2em;
    list-style-type: disc;
  }

  li {
    margin-top: 0.25em;

    p {
      margin-bottom: 0;
    }

    ul {
      margin-top: calc(0.8125rem / 2);
      margin-left: 0.6rem;
      list-style-type: circle;
    }
  }  

  table {
    width: 100%;
    margin-bottom: 1rem;
  }

  th, td {
    border: 1px solid #dbdbdb;
    border-width: 0 0 1px;
    padding: 0.5em 0.75em;
    vertical-align: middle;
  }

  th {
    border: 0 0 1px solid #dbdbdb;
    padding: 0.5em 0.75em;
    vertical-align: top;
    border-width: 0 0 2px;
    text-align: center;
  }

  figcaption {
    margin-top: 0.3125rem;
    color: ${theme.black};
    font-size: 0.876rem
    text-align: center;
    font-style: italic;
  }
}

  .gatsby-highlight {
    pre {
      padding: 1.2em;
      margin: 1.5em 0;
      overflow: auto;  
      border-radius: 0.5rem;
    }
    
    code {
      font-size: 0.875rem;
    }
  }
`;

interface PostProps {
  children: React.ReactNode
}

const Post: React.SFC<PostProps> = ({ children} ) => {
  return (
    <Wrapper theme={theme}>
      {children}
    </Wrapper>
  )
}

export default Post;
``