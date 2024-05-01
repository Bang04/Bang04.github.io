import React from "react";
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Tags from "../pages/tags" 
import * as Classes from '../templates/post-details.module.css';

const PostDtail = ({
        data: { previous, next, site, markdownRemark: post, location = "",  
        },
      
      }) => {
      
        const siteTitle = site.siteMetadata?.title || `Title`
        // const categories = data.allMarkdownRemark.categoryList
        const  tags  = post.frontmatter.tags;
        console.log(tags);
      
    return(
        <Layout location={location} title={siteTitle}>
        {/* <Layout location={`/blog/`} title={siteTitle}></Layout> */}
        {/* <Categoris categories ={ categories }/> */}
  
      <article
          className={Classes.post}
          itemScope
          itemType="http://schema.org/Article"
        >
          <header className={Classes.header}>
            <div className={Classes.title}>
              <p>{post.frontmatter.title}</p>
            </div>
            <div className={Classes.date}>
              <p>{post.frontmatter.date}</p>
            </div>

            <Tags tags = { tags } />
            
          </header>

          <div className={Classes.content}
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          /> 

          <footer className={Classes.footer}>
            <Bio />
          </footer>
      </article>
      <nav className={Classes.nav}>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      </Layout>
    )
}

export default PostDtail;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
