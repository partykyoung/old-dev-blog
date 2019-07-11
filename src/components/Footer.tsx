import React from "react"
import styled, { theme } from "../styledComponents"

const Wrapper = styled.footer`
  width: 100%;
  height: ${({ theme }) => theme.footerHeight};
  font-size: ${({ theme }) => theme.font14};
  background-color: ${({ theme }) => theme.whiteColor};
  line-height: ${({ theme }) => theme.footerHeight};
  text-align: center;
`

const Footer = () => {
  return (
    <Wrapper theme={theme}>
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

export default Footer
