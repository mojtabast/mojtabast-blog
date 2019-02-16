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


  return <App title={frontmatter.title} description={frontmatter.summary} link={frontmatter.path}>
    <Navigation />
    <div className="page-content">
      <Post data={{...frontmatter, timeToRead}} isFull={true}>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Post>
    </div>
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
        summary
      }
    }
  }
`

export default Template
