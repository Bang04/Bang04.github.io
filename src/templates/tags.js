import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import PostList from "../components/post/PostList"

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

// TagTemplate.propTypes = {
//   pageContext: PropTypes.shape({
//     tag: PropTypes.string.isRequired,
//   }),
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       totalCount: PropTypes.number.isRequired,
//       edges: PropTypes.arrayOf(
//         PropTypes.shape({
//           node: PropTypes.shape({
//             frontmatter: PropTypes.shape({
//               title: PropTypes.string.isRequired,
//             }),
//             fields: PropTypes.shape({
//               slug: PropTypes.string.isRequired,
//             }),
//           }),
//         }).isRequired
//       ),
//     }),
//   }),
// }

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
