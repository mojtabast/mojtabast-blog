import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import favicon from "../../../content/assets/favicon.png";

const Head = ({ children, title, description, link }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            siteUrl
            description
            social {
              twitter
            }
          }
        }
      }
    `}
    render={data => {

      const metaTitle = title || data.site.siteMetadata.title;
      const metaDescription = description || data.site.siteMetadata.description;
      const metaUrl = link ? data.site.siteMetadata.siteUrl + link : data.site.siteMetadata.siteUrl;

      return <>
        <Helmet
          title={metaTitle}
        >
          <html lang="fa" />
          <link href="https://cdn.rawgit.com/rastikerdar/vazir-font/v19.0.0/dist/font-face.css" rel="stylesheet" type="text/css" />
          <link rel="icon" type="image/png" href={favicon}/>
          <meta
            name="description"
            content={metaDescription}
          />
          <meta
            name="og:title"
            content={metaTitle}
          />
          <meta
            name="og:url"
            content={metaUrl}
          />
          <meta
            name="og:description"
            content={metaDescription}
          />
          <meta
            name="twitter:card"
            content="summary"
          />
          <meta
            name="twitter:creator"
            content={data.site.siteMetadata.social.twitter}
          />
          <meta
            name="twitter:title"
            content={metaTitle}
          />
          <meta
            name="twitter:description"
            content={metaDescription}
          />
        </Helmet>
        {children}
      </>
    }}
  />
)

export default Head
