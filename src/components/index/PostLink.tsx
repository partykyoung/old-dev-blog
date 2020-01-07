import React from 'react';
import { Link } from "gatsby";
import styled from "styled-components";

import theme from '../../styles/theme';

const Wrapper = styled.li`
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
    color: ${theme.black};
    transition: color 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
  }

  h2 {
    margin-bottom: 0.5rem;
    font-size: 1.125rem;
  }

  span {
    margin-left: 0.5rem;
    font-size: 0.75rem;
    font-weight: normal;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.5;
  }
`;

interface PostsLinkProps {
  date: string;
  excerpt: string;
  slug: string;
  title: string;
}

const PostList = ({
  date,
  excerpt,
  slug,
  title
}: PostsLinkProps): JSX.Element => {
  return (
    <Wrapper>
      <Link to={slug}>
        <div>
          <h2>
            {title}
            <span>{date}</span>
          </h2>
          <p>
            {excerpt}
          </p>
        </div>
      </Link>
  </Wrapper>
  )
}

export default PostList;
