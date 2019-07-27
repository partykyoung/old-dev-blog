import React from "react"
import styled, { theme } from "../styledComponents"

import Header from "./Header"
import Footer from "./Footer"

interface LayoutProps {
  children: React.ReactNode
}

const Container = styled.div`
  width: 100%;
  min-width: 320px;
  min-height: ${({ theme }) =>
    `calc(100vh - (${theme.headerHeight} + ${theme.footerHeight})`});
`

const Wrapper = styled.div`
  width: 100%;
  padding: 1.5rem 1rem;
  margin: 0 auto;
  box-sizing: border-box;

  @media ${({ theme }) => theme.breakPoints.tablet} {
    width: 750px;
  }

  @media ${({ theme }) => theme.breakPoints.desktop} {
    width: 960px;
  }
`

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container theme={theme}>
        <Wrapper theme={theme}>{children}</Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export default Layout
