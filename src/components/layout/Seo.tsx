/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
// import { useStaticQuery, graphql } from "gatsby"

interface SeopProps {
  description: string
  title: string
  url: string
}

const Seo: React.SFC<SeopProps> = ({ description, title, url }) => {
  return (
    <Helmet title={title}>
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      <meta name="description" content={description} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="kyoungah" />
      <meta name="twitter:site" content="@kyoungah8D" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://dev.kyoungah.com/kyoungah.png"
      />

      <meta property="og:locale" content="ko_kR" />
      <meta property="og:site_name" content="경아 개발 블로그" />
      <meta property="og:title" title={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://dev.kyoungah.com/kyoungah.png"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="376" />
      <meta property="og:image:height" content="63" />
      <meta property="og:url" content={url} />
    </Helmet>
  )
}

Seo.defaultProps = {
  description: ``,
  title: "",
  url: "",
}

export default Seo
