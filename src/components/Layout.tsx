import React from "react"
import styled, {theme} from '../styledComponents';

import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  min-width: 320px;

  @media ${({theme}) => theme.breakPoints.tablet} {
    width: 750px;
  }

  @media ${({theme}) => theme.breakPoints.desktop} {
    width: 960px;
  }
`;

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
    <Header />
    <Wrapper theme={theme}>
        <main role="main">{children}</main>
    </Wrapper>
    <Footer/>
    </>
  );
}

export default Layout;