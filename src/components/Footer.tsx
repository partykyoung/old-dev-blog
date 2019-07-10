import React from "react"
import styled, { theme } from "../styledComponents"

const Wrapper = styled.footer`
  position: absolute;
  width: 100%;
  height: ${({ theme }) => theme.footerHeight};
  background-color: ${({theme}) => theme.whiteColor};
  bottom: 0;
  left: 0;
  line-height: ${({ theme }) => theme.footerHeight};
  right: 0;
  text-align: center;
`

const Footer = () => {
  return (
    <Wrapper theme={theme}>
      <span>
        {`Built with `}
        <a href="href=https://www.gatsbyjs.org/" target="_blank">
          Gatsby
        </a>
        {` + `}
        <a>GitHub Pages.</a>
        {` ( `}
        <a href="https://github.com/partyKyoung/blog" target="_blank">
          source code
        </a>
      {` )`}
      </span>
    </Wrapper>
  )
}

export default Footer
