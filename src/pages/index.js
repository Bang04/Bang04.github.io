import React , { useState } from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Layout from "../components/layout/Layout"
import Bio from "../components/layout/Bio"
import Seo from "../components/layout/Seo"
import Search from "../components/post/PostSearch"
import TagList from "../components/post/PostTags"
import CategoryList from "../components/post/PostCategories";
import PostList from "../components/post/PostList"
import * as classes from './index.module.css';
import 'bulma/css/bulma.min.css';


const BlogIndex = ({ data, location, pageContext }) => {

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const {nodes , totalCount}  = data.allMarkdownRemark
  const posts = nodes
  const categories = data.GroupCategory.group
  const tags = data.GroupTags.group


  const [filteredCat, setFilteredCat] = useState("All")

  const filterCatHandler = selected => {
    setFilteredCat(selected)
  }

  if (totalCount == 0) {
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
      {/* <CategoryList data ={categories}/> */}
       <Search />
        <TagList data = {tags}/>
        <PostList data={data} lo/>
        {/* <div className={classes.posts}>
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
                          <Link to={`/posts/${kebabCase(post.fields.slug)}/`} itemProp="url">
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
    </Layout>
  )
}


export default BlogIndex

export const Head = ({ location, params, data, pageContext }) => <Seo title="main" />

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
        totalCount
      }
    }
    GroupTags: allMarkdownRemark(limit: 2000) {
      group(field: { frontmatter: { tags: SELECT }}) {
        fieldValue
        totalCount
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      totalCount
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
