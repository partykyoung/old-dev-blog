import React from 'react'
import styled, {theme} from '../styledComponents';

const Wrapper = styled.div`
  padding: 1.5rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.whiteColor};
  border-radius: 4px;

  h2, h3, h4, h5 {
    margin-top: 2.5rem;
  }
  
  h2 {
    font-size: ${({ theme }) => theme.font24};
  }
  
  h3 {
    font-size: ${({ theme }) => theme.font20};
  }

  h4, h5 {
    font-size: ${({ theme }) => theme.font18};
  }

  p, li {
    font-size: ${({ theme }) => theme.font16};
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
    color: ${({theme}) => theme.blackColor};
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
    color: ${({theme}) => theme.grayColor};
    font-size: ${({theme}) => theme.font14};
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
      font-size: ${({ theme }) => theme.font14};
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