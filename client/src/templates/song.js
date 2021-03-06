import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PlayBar from "../components/playBar"
import Comment from "../components/comment"

export default function SongTemplate({ data }) {
  const { html, frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <SEO title="guitar chords" />
      <PlayBar children={(
        <div className="blog-post-container">
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      )}/>
      <Comment issue={frontmatter.issue} title={frontmatter.title}/>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        issue
      }
    }
  }
`