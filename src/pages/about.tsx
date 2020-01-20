import React from "react"
import styled from "styled-components";

import PageTemplate from "../components/template/PageTemplate";
import Post from "../components/post/Post";

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.5;
`;

const ListWrapper = styled.ul`
  margin-top: 1rem;
  padding-left: 0;
`;

const List = styled.li`
  list-style: none;
  margin-bottom: 0.5rem;
  padding-left: 0;

  svg {
    margin-right: 0.3125rem;
  }
`;

const About = () => {
  return (
    <PageTemplate>
      <Post>
        <Title>About Me</Title>
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
              kyoungah@kyoungah.com
            </a>
          </List>
          <List>
            <a href="https://github.com/partykyoung" target="_blank">
              github
            </a>
          </List>
          <List>
            <a
              href="https://stackoverflow.com/users/11596797/youkyoung-park?tab=profile"
              target="_blank"
            >
              stackoverflow
            </a>
          </List>
          <List>
            <a
              href="https://www.linkedin.com/in/you-kyoung-park-240060104/"
              target="_blank"
            >
              linkedin
            </a>
          </List>
          <List>
            <a href="https://daily.kyoungah.com" target="_blank">
              daily blog
            </a>
          </List>
        </ListWrapper>
      </Post>
    </PageTemplate>
  )
}

export default About;
