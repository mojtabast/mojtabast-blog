import React from 'react'

import App from '../components/App'
import Navigation from '../components/Navigation'
import PostsList from '../components/PostsList'
import Footer from '../components/Footer'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {

  return <App>
    <Navigation />
    <div className="page-content">
      <PostsList edges={edges} />
    </div>
    <Footer />
  </App>
}

export default IndexPage


export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            date
            path
            title
            summary
          }
        }
      }
    }
  }
`;
