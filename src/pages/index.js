import React , { useState } from "react"
import { Link, graphql } from "gatsby"
import { Routes, Route } from 'react-router-dom';
import kebabCase from "lodash/kebabCase"
import * as Classes from './index.module.css';

import Bio from "../components/bio"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
// Template Component
import CategoryTemplate from "../templates/categories"
import TagTemplate from "../templates/tags"
// Component
import Search from "./search"
import TagList from "./tags"
import CategoryList from "./categories";
import PostDetil from "./detail"


const BlogIndex = ({ data, location, pageContext }) => {

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { posts } = data.allMarkdownRemark.nodes
  const { categories } = data.GroupCategory.group



  // const  tags  = data.allMarkdownRemark.group

  // const { tag } = pageContext 

  //console.log("tag : "+tag);
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
      <div className={Classes.container}>
          <div className={Classes.leftmenu}>
            <CategoryList data = { categories }/>
          </div>
          <div>
          <Search />
          <Routes>
              {/* <Route path="/" element={<CategoryTemplate />} /> */}
              <Route path="/category/" element={<CategoryTemplate />} />
              <Route path="/tag/" element={<TagTemplate />} />
              <Route path="/detaile/" element={<PostDetil  data ={ posts }/>} />
            </Routes>
          
           
           {/*  <div className={Classes.posts}>
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
            </div> */}
          </div>
         
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
export const Head = () => <Seo title="main" />

export const pageQuery = graphql`
query {
    site {
      siteMetadata {
        title
      }
    }
    GroupCategory :allMarkdownRemark(limit: 2000)  {
      group(field: {frontmatter: {category: SELECT}}){
        fieldValue
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
