import React from "react"
import PropTypes from "prop-types"
// Utilities
import kebabCase from "lodash/kebabCase"
import 'bulma/css/bulma.min.css';

// Components
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const TagsPage = ({ data }) => {
  const tags = data.group; 
  <div>
    {/* <Helmet title={title} /> */}
    <div>
      <h1>Tags</h1>
      <ul>
        {tags.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
}

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

export const Query = graphql`
  query 
  {
    allMarkdownRemark {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`       



// 태그 목록 페이지: 
//  const Tags = ({ pageContext, data  }) => (
  
//   <div class="tags are-medium">
//     {data?.map(tag => (
//          <span className="tag is-info">
//           <Link to={`/tags/${kebabCase(tag)}/`}>
//             <p className="has-text-white">{tag}</p>
//           </Link>
//         </span>
//           // <span class={kebabCase(tag.fieldValue) === kebabCase(curTag)? "tag is-success" : "tag"}  key={kebabCase(tag.fieldValue)}>
//           //   <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
//           //     {tag.fieldValue} ({tag.totalCount})
//           //   </Link>
//           // </span>
          
//         ))}
//   </div>
// )
