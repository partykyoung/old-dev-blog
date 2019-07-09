import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled, { theme } from '../styledComponents';

const Wrapper = styled.header`
  display: flex;
  width: 100%;
  height: ${({theme}) => theme.headerHeight};
  padding: 0 1rem;
  min-width: 320px;
  align-items: center;
  box-sizing: border-box;
`;

const Title = styled.h1`
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
    <Wrapper theme={theme}>
      <Title>
        <Link
          to="/"
          style={{
            textAlign: "center",
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Image />
        </Link>
      </Title>
      <Nav>
        <Link to="/about">
          about
        </Link>
      </Nav>
    </Wrapper>
  )
}

export default Header;
