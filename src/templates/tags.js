import * as React from "react"
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"

//특정 태그의 포스팅 목록 페이지:

const Tags = ({ pageContext, data }) => {
  //const { tag } = pageContext.tag;
  const { tag } = pageContext;
console.log("tag"+ tag);
  console.log("tag : "+tag);
  const { edges, totalCount } = data.allMarkdownRemark
  const posts = data.allMarkdownRemark.nodes
  //const totalCount =  data.allMarkdownRemark.totalCount

  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <div>
      <h1>{tagHeader}</h1>
      <ul>
        {edges?.map(({ post }) => {
          const { tag } = post.fields
          const { title } = post.frontmatter
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
      </ul>
      <Link to="/tags">All tags</Link>
    </div>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: {slug: DESC}}
      filter: { frontmatter: { tags: { eq: $tag } } }
    ){
      totalCount
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
