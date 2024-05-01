import React from "react";
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import 'bulma/css/bulma.min.css';
import * as Classes from './categories.module.css';


export default function Categories({ pageContext ,data }){

   return (
        <div>
          <p className="menu-label">
          <b>categories</b>  
          </p>
          <ul className="menu-list is-one-third">
            {data?.map(category => (
                  <li>
                    <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
                        { category.fieldValue }
                    </Link>
                  </li>
                )
              ) 
            }
          </ul>
        </div>
    )
}
// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark {
//       group(field: {frontmatter: {category: SELECT}}) {
//         fieldValue
//       }
//     }
//   }
// `