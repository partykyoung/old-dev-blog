import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from 'styled-components';

import theme from '../../styles/theme';

const Wrapper = styled.header`
  display: flex;
  width: 100%;
  height: ${theme.headerHeight};
  padding-top: 0;
  padding-right: 1rem;
  padding-bottom: 0;
  padding-left: 1rem;
  align-items: center;
  background-color: ${theme.white};
`;

const StyledLink = styled(Link)`
  display: block;
  width: 146px;
  height: 24px;
  margin-right: auto;
`;

const Nav = styled.nav`
  margin-left: auto;
`;

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "kyoungah.png" }) {
        childImageSharp {
          fluid(maxWidth: 146) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <img src={data.placeholderImage.childImageSharp.fluid.src} alt="경아 개발 블로그 " />
}

const Header = () => {
  return (
    <Wrapper>
        <StyledLink to="/" >
          <Image />
        </StyledLink>
      <Nav>
        <Link to="/about">
          about
        </Link>
      </Nav>
    </Wrapper>
  )
}

export default Header;
