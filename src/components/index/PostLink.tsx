import React from 'react';
import { Link } from "gatsby";
import styled from "styled-components";

import theme from '../../styles/theme';

const Wrapper = styled.li`
  width: 100%;
  margin-bottom: 1.25rem;
  padding: 1.5rem 1rem;
  min-height: 3.5rem;

  a {
    &:hover {      
      div {
        color: ${({theme}) => theme.link};
        transition: color 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
      }
    }  
  }

  div {
    width: 100%;
    height: 100%;
    color: ${({theme}) => theme.black};
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
    line-height: 1.75;
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
