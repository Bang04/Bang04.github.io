import * as React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Seo from "../components/seo"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import PostList from "../components/post/list"

const Tags = ({ pageContext, data }) => {

  const { tag } = pageContext

  const { edges, totalCount } = data.allMarkdownRemark
  const posts = data.allMarkdownRemark.nodes
  //const totalCount =  data.allMarkdownRemark.totalCount
  console.log(posts);
  return (
    <Layout location={``} title={``}>
       <Bio />
         <Tags tags = {tag}/>
          <section class="section">
            <ol  style={{ listStyle: `none` }}>
              <PostList posts ={posts}/>
            </ol>
          </section>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: {slug: DESC}}
      filter: { frontmatter: { tags: { eq: $tag } } }
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
