module.exports = {
  siteMetadata: {
    title: 'مجتباست',
    description: 'وبلاگ شخصی مجتبی اسپری‌پور. مطالب مرتبط با برنامه‌نویسی وب.',
    siteUrl: 'https://01.mojtabast.com',
    social: {
      twitter: '@mojtabast_fa',
    }
  },
  plugins: [
    `gatsby-plugin-flow`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: '÷',
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Mojtabast',
        short_name: 'mojtabast',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'content/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-91434436-2",
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                // This hack is copied from https://github.com/gaearon/overreacted.io/blob/518683539a5cdab97c76a8efa7a1ccc6f97e6921/gatsby-config.js#L87
                const siteUrl = site.siteMetadata.siteUrl;
                const postURL = site.siteMetadata.siteUrl + edge.node.frontmatter.path;
                const postText = `<div style="margin-top=55px; font-style: italic;">این پست در وبلاگ مجتباست منتشرشده که می‌تونید کاملش <a href="${postURL}">رو با کلیک روی این لینک بخونید.</a></div>`;

                let html = edge.node.html;
                html = html
                .replace(/href="\//g, `href="${siteUrl}/`)
                .replace(/src="\//g, `src="${siteUrl}/`)
                .replace(/"\/static\//g, `"${siteUrl}/static/`);

                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.summary,
                  date: edge.node.frontmatter.date,
                  url: postURL,
                  guid: postURL,
                  custom_elements: [{ "content:encoded": html + postText }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        title
                        date
                        summary
                        path
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Mojtabast Blog RSS Feed",
          },
        ],
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
