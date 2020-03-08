import React from "react";
import styled from 'styled-components';

import theme from '../../styles/theme';

const Wrapper = styled.footer`
  position: absolute;
  width: 100%;
  height: ${theme.footerHeight};
  font-size: 0.875rem;
  background-color: ${theme.white};
  line-height: ${theme.footerHeight};
  text-align: center;
  right: 0;
  bottom: 0;
  left: 0;
`

const Footer = () => {
  return (
    <Wrapper>
      <span>
        {`Built with `}
        <a href="https://www.gatsbyjs.org/" target="_blank">
          Gatsby
        </a>
        {` + `}
        <a href="https://pages.github.com/" target="_blank">GitHub Pages.</a>
        {` ( `}
        <a href="https://github.com/partyKyoung/blog" target="_blank">
          source code
        </a>
        {` )`}
      </span>
    </Wrapper>
  )
}

export default Footer;
