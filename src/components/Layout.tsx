import React from "react"
import styled, { theme } from "../styledComponents"

import Header from "./Header"
import Footer from "./Footer"

interface LayoutProps {
  children: React.ReactNode
}

const Container = styled.div`
  width: 100%;
  padding: 0.75rem;
  box-sizing: border-box;
  min-width: 320px;
  min-height: ${({ theme }) =>
    `calc(100vh - (${theme.headerHeight} + ${theme.footerHeight})`});

`

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 0.75rem auto;
  background-color: ${({ theme }) => theme.whiteColor};
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
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
