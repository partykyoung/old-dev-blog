import React from "react";
import styled from "styled-components";

import GlobalStyles from '../../styles/GlobalStyles';
import theme from "../../styles/theme";

import Header from "../layout/Header";
import Footer from "../layout/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const PageTemplateWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: ${theme.footerHeight};
  min-height: 100%;  

  div {
    margin-top: 1.875rem;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 0;
  }

  section {
    width: 100%;
    margin-top: 0;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 0;
    padding-top: 1.875rem;

    @media ${theme.tablet} {
      width: 750px;
    }
  }
`;

const PageTemplate: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
    <GlobalStyles theme={theme} />
    <PageTemplateWrapper>
      <Header />
        <div>
          <section>
            {children}
          </section>
        </div>
      <Footer />
    </PageTemplateWrapper>
    </>
  );
};

export default PageTemplate;
