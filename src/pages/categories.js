import React from "react";
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import 'bulma/css/bulma.min.css';
import * as Classes from './categories.module.css';


const Categories = ({ categories }) => {

   return (
        <div  class={Classes.category}>
             <p class="menu-label">
                categories
            </p>
             <ul class="menu-list is-one-third">
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
