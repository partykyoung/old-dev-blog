import React from 'react'
import styled from 'styled-components';

import Post from './Post';

const Wrapper = styled.div`
  margin-top: 2rem;    
`;

interface PostProps {
  children: React.ReactNode
}

const Comment: React.SFC<PostProps> = ({ children} ) => {
  return (
    <Wrapper>
      <Post>
        {children}
      </Post>
    </Wrapper>
  )
}

export default Comment;
