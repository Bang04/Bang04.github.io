import * as React from "react"
import { Link, graphql } from "gatsby"
import { useState } from "react"
import 'bulma/css/bulma.min.css';

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Tags from "../pages/tags"


const BlogIndex = ({ data, location }) => {

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  const [filteredCat, setFilteredCat] = useState("All")

  const filterCatHandler = selected => {
    setFilteredCat(selected)
  }

  const categories = data.allMarkdownRemark.categoryList
  const tags = data.allMarkdownRemark.group;
  
  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }
  return (
    <Layout location={location} title={siteTitle}  onChangeCat={filterCatHandler}>
      <Bio />
      <section class="section">
        <Tags data = {data}/>
      </section>

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
      </section >
     
    </Layout>
  )
}


export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      group(field: { frontmatter: { tags: SELECT }}) {
        fieldValue
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
