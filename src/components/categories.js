import React from "react";
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import 'bulma/css/bulma.min.css';
const Categories = ({ categories }) => {

   return (
        <div>
             <p className="menu-label">
                categories
            </p>
             <ul className="menu-list">
             {categories?.map(category => (
                  <li>
                    <Link to={`/categories/${kebabCase(category)}/`}>
                        { category }
                    </Link>
                  </li>
              )
             )
             }
              {/* <a className="is-active">Manage Your Team</a> */}
            </ul>
        </div>
    )
}

export default Categories

export const pageQuery = graphql`
  query Category {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: {slug: DESC}}
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
