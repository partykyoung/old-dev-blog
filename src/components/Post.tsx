import React from 'react'
import styled, {theme} from '../styledComponents';

const Wrapper = styled.div`
  padding: 1.5rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.whiteColor};
  border-radius: 4px;

  h2, h3, h4, h5 {
    font-weight: 600;
    margin: 1.5rem 0 0.75rem;
  }
  
  h2 {
    font-size: ${({ theme }) => theme.font24};
    padding-bottom: 0.3rem;
  }
  
  h3 {
    font-size: ${({ theme }) => theme.font20};
  }

  h4 {
    font-size: ${({ theme }) => theme.font18};
  }

  h5 {
    font-size: 1.0625rem;
  }

  p, li {
    font-size: ${({ theme }) => theme.font16};
    word-break: keep-all;
    overflow-wrap: break-word;
    line-height: 1.8;
  }

  p {
    margin-bottom: 1.8rem;
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
}

.gatsby-highlight {
  margin-top: 1rem;
  margin-bottom: 1.8rem;
  padding-bottom: 1rem;
  
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
