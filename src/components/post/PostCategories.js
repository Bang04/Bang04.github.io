import React from "react";
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"
import 'bulma/css/bulma.min.css';

const PostCategories = ({ data }) => {
  return (
    <div className="leftmenu">
      <div className="dropdown-trigger">
        <span>Categories</span>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
        {data?.map(category => (
              <li>
                <Link className="dropdown-item" to={`/category/${kebabCase(category.fieldValue)}/`}>
                    { category.fieldValue }
                </Link>
              </li>
            )
          )
        } 
        </div>
      </div>
    </div>

  )
}

PostCategories.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
  }),
}

export default PostCategories
export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      group(field: {frontmatter: {category: SELECT}}) {
        fieldValue
        totalCount
      }
    }
  }
`