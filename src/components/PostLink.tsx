import React from 'react';
import { Link } from "gatsby";
import styled, {theme} from '../styledComponents';

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  padding: 1.5rem;
  border-radius: 4px; 
  box-sizing: border-box;
  min-height: 65px;

  a {
    &:hover {      
      div {
        color: #adc2cb;
        transition: color 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
      }
    }  
  }

  div {
    width: 100%;
    height: 100%;
    color: ${({theme}) => theme.blackColor};
    transition: color 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
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
        <div>
        <h2>
          {post.frontmatter.title}
          <span>{post.frontmatter.date}</span>
        </h2>
        <p>
          {post.excerpt}
        </p>
        </div>
      </Link>
    </Wrapper>
  );
}

export default PostLink
