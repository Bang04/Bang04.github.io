import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import PostList from "../components/post/PostList"
import PostTags from "../components/post/PostTags"
const TagTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { nodes, totalCount } = data.allMarkdownRemark

  return (
    <Layout title="Tag"  location={ `/`}>
        <section className="hero is-primary ">
          <div className="hero-body">
            <p>Tag</p>
            <p className="title">{tag}</p>
            <p className="subtitle">A collection of {totalCount } post </p>
          </div>
        </section>
        <section className="section">
         <PostList data = { data }/>
        </section>
    </Layout>
  )
}


export default TagTemplate

export const pageQuery = graphql`
query (
  $tag: String
) {
  allMarkdownRemark(
     limit: 2000
      sort: { frontmatter: { date: DESC }}
      filter: { frontmatter: { tags: { in: [$tag] } } }
  ){
  totalCount
  nodes {
    fields {
      slug
    }
      frontmatter {
        category
        tags
        title
        description
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
}
`
