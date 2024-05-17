import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import PostList from "../components/post/PostList"

const TagTemplate = ({ data, pageContext   }) => {
  const { tag } = pageContext
  console.log("pageContext : "+tag);
  const tags = data.tagsGroup.group
  const { nodes, totalCount } = data.allMarkdownRemark

  return (
    <Layout title="Tag"  location={ `/`}>
        <main className="main">
          {/* <div className="hero is-small is-info ">
            <div className="hero-body">
              <p>Tag</p>
              <p className="title">{tag}</p>
              <p className="subtitle">A collection of {totalCount } post </p>
            </div>
          </div> */}
          <PostList data = { data } tags = {tags}/>
        </main>
    </Layout>
  )
}

export default TagTemplate

export const pageQuery = graphql`
query (
  $tag: String
) {
  tagsGroup: allMarkdownRemark(limit: 2000) {
    group(field: { frontmatter: { tags: SELECT }}) {
      fieldValue
      totalCount
    }
  }
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
