import React from "react";
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Tags from "../pages/tags"

const Category = ( {  pageContext, data }) => {

  const { category } = pageContext
  const posts = data.allMarkdownRemark.nodes

    return (
        <Layout location="" title={category} >
            <Seo title={category} />
            <Bio />
            {/* <Tags tags = {tags} curTag = {tag}/> */}
           
            <section class="section">
              <ol  style={{ listStyle: `none` }}>
                  {posts.map(post => {
                    const title = post.frontmatter.title || post.fields.slug
                    return (
                        <li class="card" key={post.fields.slug}>
                            <article class="card-content">
                            <header>
                                <div class="title">
                                <Link to={post.fields.slug} itemProp="url">
                                    <span itemProp="headline">{title}</span>
                                </Link>
                                </div>
                                <small>{post.frontmatter.date}</small>
                            </header>
                            <section>
                                <p class="subtitle is-6"
                                dangerouslySetInnerHTML={{
                                    __html: post.frontmatter.description || post.excerpt,
                                }}
                                itemProp="description"
                                />
                            </section>
                            </article>
                        </li>
                    )
                  })} 
              </ol>
            </section>
        </Layout>
    )
}
export default Category

// 쿼리의 argument인 $category는 page context로 전달 받는다.
export const pageQuery = graphql`
  query($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: {slug: DESC}}
      filter: { frontmatter: { category: { eq: $category } } }
    ) 
    {
      group(field: { frontmatter: { category: SELECT }}) {
        totalCount
        }
       nodes {
         excerpt
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
