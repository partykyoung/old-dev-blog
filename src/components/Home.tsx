import React from 'react'

import styled from '../styledComponents';

import PostLink from "../components/PostLink"

const Wrapper = styled.div`
  padding: 2rem 1rem;
`;

interface NodeTypes {
  node: {
    excerpt: string;
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      date: string
      title: string
    };
  }
}

interface HomeProps {
  count: number;
  posts: NodeTypes[];
}


const Home: React.SFC<HomeProps> = ({
  count,
  posts
}) => {

  const list = posts.map((edge: NodeTypes) => {
    return edge;
  }).slice(0, count * 20);

  return (
    <Wrapper>
      {
        list.map((post) => (
          <PostLink key={post.node.id} post={post.node} />
        ))
      }
    </Wrapper>
  )
}

export default Home
