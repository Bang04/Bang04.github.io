import React from "react"
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"
import 'bulma/css/bulma.min.css';
import * as classes from './PostTags.module.css';


const PostTags = ({ data }) => {
  return (
    <div className={classes.tags}>    
      <div className="tags are-medium">
        {data?.map(( tag, index ) => (
            <Link key={ index } className="tag is-info" to={`/tag/${kebabCase(tag.fieldValue)}/`}>
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        ))}
      </div>
    </div>
  )
}
PostTags.propTypes = {
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

export default PostTags

export const pageQuery = graphql`
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