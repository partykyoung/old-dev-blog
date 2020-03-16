import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from 'styled-components';

import theme from '../../styles/theme';

const Wrapper = styled.header`
  display: flex;
  width: 100%;
  height: ${theme.headerHeight};
  padding-top: 0;
  padding-right: 2.625rem;
  padding-bottom: 0;
  padding-left: 2.625rem;
  align-items: center;
  background-color: ${theme.white};
`;

const StyledLink = styled(Link)`
  display: block;
  width: 180px;
  height: 32px;
  margin-right: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Nav = styled.nav`
  margin-left: auto;
  font-size: 1.25rem;
`;

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "kyoungah.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
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
