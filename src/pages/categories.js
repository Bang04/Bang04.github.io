import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase"

const Categories = ({ categories }) => {

   return (
        <div>
             <p class="menu-label">
                categories
            </p>
             <ul class="menu-list">
             {categories?.map(category => (
                     <li>
                        <Link to={`/categories/${kebabCase(category)}/`}>
                            { category }
                        </Link>
                    </li>
                )
             )
             }
              {/* <a class="is-active">Manage Your Team</a> */}
            </ul>
        </div>
    )
}

export default Categories

export const pageQuery = graphql`
  query Category($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: {slug: DESC}}
      filter: { frontmatter: { category: { in: [$category] } } }
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