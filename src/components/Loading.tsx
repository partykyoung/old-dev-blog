import React from 'react';
import styled from 'styled-components';

import theme from '../styles/theme';

const LoadingBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 0.5rem;
    height: 0.5rem;
    margin: 2rem .3rem;
    background: ${theme.primary};
    border-radius: 50%;
    animation: 0.6s bounce infinite alternate;

    &:nth-child(2) {
      animation-delay: 0.3s;
    }

    &:nth-child(3) {
      animation-delay: 0.6s;
    }
  }

  @keyframes bounce {
    to {
      opacity: 0.3;
      transform: translate3d(0, -1rem, 0);
    }
  }
`;

const Loading = () => {
  return (
    <LoadingBar>
        <div/>
        <div/>
        <div/>
    </LoadingBar>
  )
}

export default Loading;
