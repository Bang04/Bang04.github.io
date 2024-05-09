import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout/layout"

const TagTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { nodes, totalCount } = data.allMarkdownRemark

  return (
    <Layout title="Tag">
        <section className="hero is-primary ">
          <div className="hero-body">
            <p>Tag</p>
            <p>{tag}</p>
            <p> A collection of {totalCount } post  </p>
          </div>
        </section>
        <section className="section">
          <ol  style={{ listStyle: `none` }}>
          {nodes?.map( post => {
              const title = post.frontmatter.title
              const slug = post.fields.slug
              return (
                // <PostsList posts={posts} />
                <li className="card" key={slug}>
                  <article className="card-content">
                    <header>
                      <div className="title">
                        <Link to={slug} itemProp="url">
                          <span itemProp="headline">{title}</span>
                        </Link>
                      </div>
                      <small>{post.frontmatter.date}</small>
                    </header>
                    <section>
                      <p className="subtitle is-6"
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

// TagTemplate.propTypes = {
//   pageContext: PropTypes.shape({
//     tag: PropTypes.string.isRequired,
//   }),
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       totalCount: PropTypes.number.isRequired,
//       edges: PropTypes.arrayOf(
//         PropTypes.shape({
//           node: PropTypes.shape({
//             frontmatter: PropTypes.shape({
//               title: PropTypes.string.isRequired,
//             }),
//             fields: PropTypes.shape({
//               slug: PropTypes.string.isRequired,
//             }),
//           }),
//         }).isRequired
//       ),
//     }),
//   }),
// }

export default TagTemplate

export const pageQuery = graphql`
query (
  $tag: String
) {
  allMarkdownRemark(
     limit: 2000
      sort: { frontmatter: { date: DESC }}
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
