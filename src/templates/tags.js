import * as React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Seo from "../components/seo"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Tags from "../pages/tags"
import * as Classes from './templates.module.css';


const TagTemplate = ({ pageContext, data }) => {

  const {tag }   = pageContext
  const posts = data.allMarkdownRemark.nodes
  const tags = data.allMarkdownRemark.group;

  return (
    <Layout location={``} title="Tag">

        <section class="hero is-primary ">
          <div class="hero-body">
            <p className={Classes.menumame}>Tag</p>
            <p className={Classes.tagname}>{tag}</p>
            <p className={Classes.subname}>
              A collection of {posts.length } post
            </p>
          </div>
        </section>

        <section class="section">
          <ol  style={{ listStyle: `none` }}>
          {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug
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
        </section>
    </Layout>
  )
}

TagTemplate.propTypes = {
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

export default TagTemplate

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: {slug: DESC}}
      filter: { frontmatter: { tags: { eq: $tag } } }
    ){
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
