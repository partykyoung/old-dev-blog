import React from "react"
import styled, {theme} from "../styledComponents"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt, faBlog } from "@fortawesome/free-solid-svg-icons"

import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/Layout"
import Post from "../components/layout/Post";

const Title = styled.h1`
  font-size: ${({ theme }) => theme.font28};
  font-weight: 600;
  line-height: 1.5;
`;

const ListWrapper = styled.ul`
  margin-top: 1rem;
  padding-left: 0;
`

const List = styled.li`
  list-style: none;
  margin-bottom: 0.5rem;
  padding-left: 0;


  svg {
    margin-right: 0.3125rem;
  }
`

const About = () => {
  return (
    <Layout>
      <Post>
        <Title theme={theme}>About Me</Title>
        <p>
          웹 프론트엔드 개발자 박유경 입니다.
          <br />
          공부한 내용이나 새로 익힌 지식, 일하면서 겪은 이슈 등을 정리해서 올리고
          있습니다.
          <br />
          질문, 잘못된 내용, 오타 등의 피드백은 언제든 환영합니다!
        </p>
        <ListWrapper>
          <List>
            <a href="mailto:kyoungah@kyoungah.com" target="_blank">
              <FontAwesomeIcon icon={faAt} />
              kyoungah@kyoungah.com
            </a>
          </List>
          <List>
            <a href="https://github.com/partykyoung" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
              github
            </a>
          </List>
          <List>
            <a
              href="https://stackoverflow.com/users/11596797/youkyoung-park?tab=profile"
              target="_blank"
            >
              <FontAwesomeIcon icon={faStackOverflow} />
              stackoverflow
            </a>
          </List>
          <List>
            <a
              href="https://www.linkedin.com/in/you-kyoung-park-240060104/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              linkedin
            </a>
          </List>
          <List>
            <a href="https://daily.kyoungah.com" target="_blank">
              <FontAwesomeIcon icon={faBlog} />
              daily blog
            </a>
          </List>
        </ListWrapper>
      </Post>
    </Layout>
  )
}

export default About
