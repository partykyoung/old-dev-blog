import React from "react";
import styled from "styled-components";

import theme from '../styles/theme';

import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode
}

const Main = styled.main`
  width: 100%;
  padding: 1.5rem 1rem;
  margin: 0 auto;
  box-sizing: border-box;

  @media ${theme.tablet} {
    width: 750px;
  }

  @media ${theme.desktop} {
    width: 960px;
  }
`

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
        <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout
