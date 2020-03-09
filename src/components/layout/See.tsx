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
      <link rel="apple-touch-icon" sizes="57x57" href="../images/favicon/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="../images/favicon/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="../images/favicon/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="../images/favicon/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="../images/favicon/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="../images/favicon/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="../images/favicon/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="../images/favicon/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="../images/favicon/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192"  href="../images/favicon/android-icon-192x192.png"  />
      <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="../images/favicon/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="../images/favicon/favicon-16x16.png" />
      <link rel="manifest" href="../static/manifest.json" />
    </Helmet>
  )
}

Seo.defaultProps = {
  description: ``,
  title: "",
  url: "",
}

export default Seo
