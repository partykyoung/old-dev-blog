import React from "react";
import styled from "styled-components";

import PageTemplate from "../components/template/PageTemplate";

const AboutTitle = styled.h1`
margin-bottom: 0.75rem;
font-size: 1.75rem;
font-weight: 400;
`;

const AboutContent = styled.p`
font-size: 1rem;
`;

const AboutLinkTable = styled.table`
  width: 100%;
  margin-top: 1.5rem;
  padding: 0;
  font-size: 1rem;
  line-height: 1.625rem;
  border-collapse: collapse;

  tr {
    &:last-of-type {
      td {
        border-bottom: 0;
      }
    }
  }

  th,
  td {
    padding: 0.5em 0.75em;
    border-bottom: 1px solid ${({theme}) => theme.border};
    text-align: left;
  }

  th {
    border-width: 0 0 2px;
  }

  td {
    border-width: 0 0 1px;
    padding: 0.5em 0.75em;
    vertical-align: top;
  }

  strong {
    font-weight: 600;
  }
`;

const About = () => {
  return (
    <PageTemplate>
        <AboutTitle>박유경</AboutTitle>
        <AboutContent>
          웹 프론트엔드 개발자 박유경 입니다.
          <br />
          공부한 내용이나 새로 익힌 지식, 일하면서 겪은 이슈 등을 정리해서
          올리고 있습니다.
          <br />
          질문, 잘못된 내용, 오타 등의 피드백은 언제든 환영합니다!
        </AboutContent>
        <AboutLinkTable>
          <thead>
            <tr>
              <th>Site</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Contact</strong>
              </td>
              <td>
                <a
                  href="mailto:kyoungah@kyoungah.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kyoungah@kyoungah.com
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Github</strong>
              </td>
              <td>
                <a
                  href="https://github.com/partykyoung"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/partyKyoung
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Daily Blog</strong>
              </td>
              <td>
                <a
                  href="https://daily.kyoungah.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://daily.kyoungah.com
                </a>
              </td>
            </tr>
          </tbody>
        </AboutLinkTable>
    </PageTemplate>
  );
};

export default About;
