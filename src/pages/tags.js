import React from "react"

import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"

// 포스팅의 하단 태그 목록
const TagsPage = ({ tags }) => (

  <div>
    <div>
      <ul class="tags">
        {tags.map(tag => (
          <li class="tag is-medium" key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
        <li class="tag is-medium">
        <Link to="/tags">All tags</Link>
        </li>
      </ul>
    </div>
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