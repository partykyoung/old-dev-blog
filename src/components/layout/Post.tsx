import React from 'react'
import styled, {theme} from '../../styledComponents';

const Wrapper = styled.div`
  padding: 1.5rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.whiteColor};
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);

  .blog-post-content {
    h2 {
      font-size: ${({ theme }) => theme.font24};
      margin: 1.5rem 0;
      padding-bottom: 0.3rem;
    }
    
    h3 {
      font-size: ${({ theme }) => theme.font20};
      margin: 1rem 0;
    }

    p, li {
      font-size: ${({ theme }) => theme.font16};
      word-break: keep-all;
      overflow-wrap: break-word;
      line-height: 1.8;
    }

    p {
      margin-bottom: 1rem;
    }

    ul {
      padding-left: 2em;
      list-style-type: disc;
    }

    li {
      margin-top: 0.25em;
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

export default Post
