import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"
import PostList from "./PostList"

import 'bulma/css/bulma.min.css';
import * as classes from './PostTags.module.css';


const PostTags = ({ data }) => {
  
  const clickHandle = (tag) => {
    //setCureentTag(tag);
  }
  return (
    <div className={classes.tags}>
      <div className="tags are-medium">
        {data?.map(( tag, index ) => (
            <Link 
                key={ index } 
                className="tag is-info is-light" 
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
            > 
              {tag.fieldValue}
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
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),

  }),
}

export default PostTags

//  export const pageQuery = graphql`
//   query($tag: String) {
//     allMarkdownRemark(
//       limit: 2000
//       sort: { frontmatter: { date: DESC }}
//       filter: { frontmatter: { tags: { in: [$tag] } } }
//     ) {
//       totalCount
//       edges {
//         node {
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//           }
//         }
//       }
//     }
//   }
//   `
//   query 
//   {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark {
//       group(field: { frontmatter: { tags: SELECT } }) {
//         fieldValue
//         totalCount
//       }
//     }
//   }
// `       



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
