import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif'
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320
}
const headingAccentStyles = {
  color: '#663399'
}
const paragraphStyles = {
  marginBottom: 48
}
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30
}

const linkStyle = {
  color: '#8954A8',
  fontWeight: 'bold',
  fontSize: 16,
  verticalAlign: '5%'
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: 'none',
  marginBottom: 24
}

const descriptionStyle = {
  color: '#232129',
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25
}

const docLink = {
  text: 'TypeScript Documentation',
  url: 'https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/',
  color: '#8954A8'
}

const badgeStyle = {
  color: '#fff',
  backgroundColor: '#088413',
  border: '1px solid #088413',
  fontSize: 11,
  fontWeight: 'bold',
  letterSpacing: 1,
  borderRadius: 4,
  padding: '4px 6px',
  display: 'inline-block',
  position: 'relative' as 'relative',
  top: -2,
  marginLeft: 10,
  lineHeight: 1
}

function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
        🎉🎉🎉
      </h1>
      <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.tsx</code> to see this
        page update in real-time. 😎
      </p>
      <ul style={listStyles}>
        {data.allMarkdownRemark.edges.map((edge: any) => (
          <li key={edge.node.id} style={docLinkStyle}>
            {edge.node.frontmatter.title}
            <br />
            {edge.node.excerpt}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage
