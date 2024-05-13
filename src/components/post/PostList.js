import React , { useState, useContext } from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import 'bulma/css/bulma.min.css';

const PostList = ({ data , onChangeCat }) => {
 
  const {nodes , totalCount}  = data.allMarkdownRemark
  const clickHandler = event => {
    onChangeCat(event.target.innerText)
  }

  return (
    <div className="card">
        <ol  style={{ listStyle: `none` }}>
          {nodes.map((post , index )  => {
            const title = post.frontmatter.title || post.fields.slug
            const postTags  =  post.frontmatter.tags 
            return (
              <li className="card" key={index}>
                <article className="card-content">
                  <header>
                    <div className="title">
                       <Link to={`/posts/${kebabCase(post.fields.slug)}/`} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </div>
                  
                  </header>
                  <section>
                    <p className="subtitle is-6"
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                  
                  <small>{post.frontmatter.date}</small>
                  
                  <div className="tags are-medium">
                    {postTags.map((tag , index) => (
                        <Link key={ index } to={`/tags/${kebabCase(tag)}/`}>
                          <span className="tag is-info is-light"># {tag}</span>
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
  )
}


export default PostList

export const pageQuery = graphql`
query($tag: String ){
    site {
      siteMetadata {
        title
      }
    }
    GroupTags: allMarkdownRemark(limit: 2000) {
      group(field: { frontmatter: { tags: SELECT }}) {
        fieldValue
        totalCount
      }
    }
    allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {tags: {in: [$tag]}}}
    ) {
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
