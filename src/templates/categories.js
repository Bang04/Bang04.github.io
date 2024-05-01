import React from "react";
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Layout from "../components/layout/layout"

const CategoryTemplate = ( { pageContext, data }) => {
  const { category } = pageContext
   const posts = data.allMarkdownRemark.nodes
   //const page = JSON.parse(pageContext);
   console.log("Categories pageContext" + typeof page);
  // const categories = data.allMarkdownRemark.categoryList
  console.log("Categories Template call");

    return (
        <Layout location="" title="category" >
           <section className="hero is-primary">
              <div className="hero-body">
                <p>Category</p>
                <p>{category}</p>
                <p> A collection of {posts.length } post</p>
              </div>
            </section>

            <section className="section">
              <ol  style={{ listStyle: `none` }}>
                  {posts?.map(post => {
                    const title = post.frontmatter.title || post.fields.slug
                    const postTags  =  post.frontmatter.tags 
                    const category   =  post.frontmatter.category 
                    return (
                        <li className="card" key={post.fields.slug}>
                            <article className="card-content">
                            <header>
                                <div className="title">
                                <div className="category">{category}</div>
                                <Link to={post.fields.slug} itemProp="url">
                                    <span itemProp="headline">{title}</span>
                                </Link>
                                </div>
                                <small>{post.frontmatter.date}</small>
                            </header>
                            <section>
                                <p className="subtitle is-6"
                                dangerouslySetInnerHTML={{
                                    __html: post.frontmatter.description || post.excerpt,
                                }}
                                itemProp="description"
                                />
                            </section>
                            </article>
                            <div className="tags are-medium">
                                {postTags.map((tag) => (
                                    <Link to={`/tag/${kebabCase(tag)}/`}>
                                      <span className="tag is-info is-light"># {tag}</span>
                                    </Link>
                                  )
                                )}
                            </div>
                        </li>
                    )
                  })} 
              </ol>
            </section>
        </Layout>
    )
}
export default CategoryTemplate

// 쿼리의 argument인 $category는 page context로 전달 받는다.
export const pageQuery = graphql`
query(
  $category: String
) {
  allMarkdownRemark(
    limit: 2000
    sort: { fields: {slug: DESC}}
    filter: { frontmatter: { category: { eq: $category } } }
  ){
  nodes {
    fields {
      slug
    }
      frontmatter {
        category
        tags
        title
        description
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
}
`