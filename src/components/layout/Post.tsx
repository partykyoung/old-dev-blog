import React from 'react'
import styled, {theme} from '../../styledComponents';

const Wrapper = styled.div`
padding: 1rem;
margin: 0 auto;
background-color: ${({ theme }) => theme.whiteColor};
box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
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
