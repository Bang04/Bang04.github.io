import * as React from "react"
import { Link, graphql } from "gatsby"
import { useState } from "react"


import kebabCase from "lodash/kebabCase"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Tags from "../pages/tags"
import Categoris from "../pages/categories"
import PostsList from "../components/post/list";


const BlogIndex = ({ data, location, pageContext }) => {

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const categories = data.allMarkdownRemark.categoryList
  const  tags  = data.allMarkdownRemark.group;
  const { tag } = pageContext 
  const [filteredCat, setFilteredCat] = useState("All")

  const filterCatHandler = selected => {
    setFilteredCat(selected)
  }

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
      <div class="container">
        <Bio />
        <section class="section" style={{ display: `flex` }}>
          <Categoris categories ={ categories }/>
          <div >
            <div class="section">
              <input class="input is-primary is-small" type="text" placeholder="Primary input" />
              <button class="button is-success">검색</button>
            </div>
            <ol  style={{ listStyle: `none` }}>
              {posts.map(post => {
                const title = post.frontmatter.title || post.fields.slug
                const postTags  =  post.frontmatter.tags 
                return (
                  // <PostsList posts={posts} />
                  <li class="card" key={post.fields.slug}>
                    <article class="card-content">
                      <header>
                        <div class="title">
                          <Link to={post.fields.slug} itemProp="url">
                            <span itemProp="headline">{title}</span>
                          </Link>
                        </div>
                      
                      </header>
                      <section>
                        <p class="subtitle is-6"
                          dangerouslySetInnerHTML={{
                            __html: post.frontmatter.description || post.excerpt,
                          }}
                          itemProp="description"
                        />
                      </section>
                      
                      <small>{post.frontmatter.date}</small>
                      
                      <div class="tags are-medium">
                        {postTags.map((tag) => (
                            <Link to={`/tags/${kebabCase(tag)}/`}>
                              <span class="tag is-info is-light"># {tag}</span>
                            </Link>
                          )
                        )}
                      </div>
                    </article>
                   
                  </li>
                )
              })}
            </ol>
        </div>
        </section >
      </div>
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
      categoryList:  distinct(field: {frontmatter: {category: SELECT}})
     
    }
  }
`
