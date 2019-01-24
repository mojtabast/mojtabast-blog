import React from "react";
import { graphql } from "gatsby";


import App from '../components/App'
import Navigation from '../components/Navigation'
import Post from '../components/Post'
import Footer from '../components/Footer'

function Template({
  data
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  if( !markdownRemark ) return null;
  const { frontmatter, html, timeToRead } = markdownRemark;

  return <App>
    <Navigation />
    <Post data={{...frontmatter, timeToRead}}>
      <p
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Post>
    <Footer />
  </App>;
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        date
        path
        title
      }
    }
  }
`

export default Template
