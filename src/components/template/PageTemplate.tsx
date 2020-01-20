import React from "react";
import styled from "styled-components";

import theme from '../../styles/theme';

import Header from "../layout/Header";
import Footer from "../layout/Footer";

interface LayoutProps {
  children: React.ReactNode
}

const Main = styled.main`
  padding: 1.5rem 1rem;
  margin: 0 auto;
  box-sizing: border-box;

  @media ${theme.tablet} {
    width: 750px;
  }

  @media ${theme.desktop} {
    width: 960px;
  }
`;

const PageTemplate: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
        <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default PageTemplate;
