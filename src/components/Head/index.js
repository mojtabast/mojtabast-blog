import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const Head = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'وبلاگ شخصی مجتبی اسپری پور - مطالب مرتبط با برنامه‌نویسی' }
          ]}
        >
          <html lang="fa" />
          <link href="https://cdn.rawgit.com/rastikerdar/vazir-font/v19.0.0/dist/font-face.css" rel="stylesheet" type="text/css" />
        </Helmet>
        {children}
      </>
    )}
  />
)

export default Head
