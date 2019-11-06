import React from 'react';
import { Link } from "gatsby";

import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const NotFound = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  text-align: center;
`;

const HomeButton = styled(Link)`
  display: block;
  margin-top: 1rem;
  padding: 1rem;
`;

const NotFoundPage = () => {
  return (
    <Wrapper>
      <NotFound>
        앗, 없는 페이지 입니다. X_X
        <br/>
        <HomeButton to="/">첫 페이지로 돌아가기</HomeButton>
      </NotFound>
    </Wrapper>
  )
}

export default NotFoundPage;
