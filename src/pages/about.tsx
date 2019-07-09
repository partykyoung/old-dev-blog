import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faBlog } from'@fortawesome/free-solid-svg-icons';

import { faGithub, faLinkedin, faStackOverflow } from'@fortawesome/free-brands-svg-icons';

import Layout from "../components/Layout";

const ListWrapper = styled.ul`
  list-style: none;
`;

const List = styled.li`
  margin-bottom: 0.5rem;

  svg {
    margin-right: 0.3125rem;
  }
`;

const About = () => {
  return (
    <Layout>
      <h2>About Me</h2>
      <div>
        프론트엔드 개발자 박유경 입니다. 
      </div>
      <ListWrapper>
        <List><FontAwesomeIcon icon={faAt}/> kyoungah@kyoungah.com</List>
        <List><FontAwesomeIcon icon={faGithub}/> github</List>
        <List><FontAwesomeIcon icon={faStackOverflow}/> stackoverflow</List>
        <List><FontAwesomeIcon icon={faLinkedin}/> linkedin</List>
        <List><FontAwesomeIcon icon={faBlog}/> daily blog</List>
      </ListWrapper>
    </Layout>
  )
}

export default About;
