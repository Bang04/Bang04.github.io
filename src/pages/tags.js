import React from "react"
import PropTypes from "prop-types"
import Seo from "../components/seo"
// Utilities
import kebabCase from "lodash/kebabCase"
import 'bulma/css/bulma.min.css';

// Components
// import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

// 태그 목록 페이지: 
 const TagsPage = ({tags, curTag }) => (
  
  <div class="tags are-medium">
    {tags?.map(tag => (
         <span className="tag is-info">
          <Link to={`/tags/${kebabCase(tag)}/`}>
            <p className="has-text-white">{tag}</p>
          </Link>
        </span>
          // <span class={kebabCase(tag.fieldValue) === kebabCase(curTag)? "tag is-success" : "tag"}  key={kebabCase(tag.fieldValue)}>
          //   <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
          //     {tag.fieldValue} ({tag.totalCount})
          //   </Link>
          // </span>
          
        ))}
  </div>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: { frontmatter: { tags: SELECT }}) {
        fieldValue
        totalCount
      }
    }
  }
`