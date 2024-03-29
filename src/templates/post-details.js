import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Tags from "../pages/tags" 
import Categoris from "../pages/categories"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post, location = "",  
  },

}) => {

  const siteTitle = site.siteMetadata?.title || `Title`
  // const categories = data.allMarkdownRemark.categoryList
  const  tags  = post.frontmatter.tags;
  console.log(tags);

  // const { tag } = pageContext 

  return (
    <Layout location={location} title={siteTitle}>
        {/* <Layout location={`/blog/`} title={siteTitle}></Layout> */}
        {/* <Categoris categories ={ categories }/> */}
  
      <article
          className="section blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <div className="title">{post.frontmatter.title}</div>
            <p>{post.frontmatter.date}</p>

            <Tags tags = { tags } />
          </header>
          <div className="content"
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <hr />
          <footer>
            <Bio />
          </footer>
      </article>
      <nav className="blog-post-nav">
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
