import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

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
    <header>
      <h1 style={{ margin: '0 auto', width: '146px', height: '24px', textAlign: "center" }}>
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
      </h1>
    </header>
  )
}

export default Header;
