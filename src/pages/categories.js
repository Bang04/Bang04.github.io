import React from "react";

const Categories = ({ categories }) => {

   return (
        <div>
             <p class="menu-label">
                categories
            </p>
             <ul class="menu-list">
             {categories.map(category => (
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

// export const pageQuery = graphql`
// query CategoryQuery {
//     allMarkdownRemark(sort: {frontmatter: {category: DESC}}) {
//         categoryList:  distinct(field: {frontmatter: {category: SELECT}})
//     }
    
// }
//`
export default Categories