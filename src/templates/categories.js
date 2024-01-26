import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const CategoryPost = ({ data, location, pageContext }) => {
  
    // gatsby-node.js에서 context로 넘겨준 값
    const { category } = pageContext
    const siteTitle = data.site.siteMetadata?.title || `Title`
    
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title={`Posts in ${category}`} /> {/* 페이지 title 수정 */}
        <Bio />
        <h3>{`Current: ${category}`}</h3> {/* 현재 카테고리 표시 */}
        <ol style={{ listStyle: `none` }}>
          {/* 생략 */}
        </ol>
      </Layout>
    )
  }
  
  export default CategoryPost
  
  // 페이지 쿼리 수정
  export const pageQuery = graphql`
  query($category: String!) {
    allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {category: {eq: $category }}}
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          category
          title
          date(formatString: "MMMM DD, YYYY")
          description
          tags
        }
      }
    }
  }
`