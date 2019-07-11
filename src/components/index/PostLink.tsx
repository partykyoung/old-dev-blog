import React from 'react';
import { Link } from "gatsby";
import styled, {theme} from '../../styledComponents';

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.whiteColor};
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05), 0 0 1px rgba(0,0,0,0.1);  
  box-sizing: border-box;
  min-height: 65px;

  a {
    color: ${({theme}) => theme.blackColor};
    box-sizing: border-box;
    
    &:hover {
      color: ${({theme}) => theme.blackColor};
    }  
  }

  h2 {
    margin-bottom: 0.5rem;
    font-size: ${({theme}) => theme.font18}
  }

  span {
    margin-left: 0.5rem;
    font-size: ${({theme}) => theme.font12};
    font-weight: normal;
  }

  p {
    font-size: ${({theme}) => theme.font14};
    line-height: 1.5;
  }
`;

interface PostLInkProps {
  post: {
    excerpt: string;
    frontmatter: {
      date: string;
      path: string;
      title: string;
    };
  };
}

const PostLink: React.SFC<PostLInkProps> = ({post}) => {
  return (
    <Wrapper theme={theme}>
      <Link to={post.frontmatter.path}>
        <h2>
          {post.frontmatter.title}
          <span>{post.frontmatter.date}</span>
        </h2>
        <p>
          {post.excerpt}
        </p>
      </Link>
    </Wrapper>
  );
}

export default PostLink
