import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
// import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

// 태그 목록 페이지: 
 const TagsPage = ({tags}) => (
  <div>
    <ul class="tags">
        {tags.map(tag => (
          <li class="tag" key={kebabCase(tag.fieldValue)}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
        <li class="tag">
          <Link to="/tags">All tags</Link>
        </li>
    </ul>
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