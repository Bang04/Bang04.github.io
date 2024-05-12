import * as React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/layout/Bio"
import Seo from "../components/layout/Seo"
import Layout from "../components/layout/Layout"
import * as classes from './post-details.module.css';

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post, location = "",  
  },
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  const  tags  = post.frontmatter.tags;

  return (
    <Layout location={location} title={siteTitle}>
      <article
          className={classes.post}
          itemScope
          itemType="http://schema.org/Article"
        >
          <header className={classes.header}>
            <div className={classes.title}>
              <p>{post.frontmatter.title}</p>
            </div>
            <div className={classes.date}>
              <p>{post.frontmatter.date}</p>
            </div>
          </header>

          <div className={classes.content}
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          /> 

          <footer className={classes.footer}>
        
          </footer>
      </article>
      <nav className={classes.nav}>
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

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

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
