import React from "react";
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import 'bulma/css/bulma.min.css';
import classes from './list.module.css';

const PostList = ( {data} ) =>{
    //console.log(data);
    return data?.map((post) => {
        const title = post.frontmatter.title || post.fields.slug
        const postTags  =  post.frontmatter.tags 
        const category   =  post.frontmatter.category 
        return (
          // <PostsList posts={posts} />
          <li className="card" key={post.fields.slug}>
            <article className="card-content">
              <header>
                <div className="category">{category}</div>
                <div className="title">
                  <Link to={`/detaile`+post.fields.slug} itemProp="url">
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
                {postTags.map((tag) => (
                    <Link to={`/tags/${kebabCase(tag)}/`}>
                      <span className="tag is-info is-light"># {tag}</span>
                    </Link>
                  )
                )}
              </div>
            </article>
          </li>
        )
      } 
    )
  }


export default PostList

export const pageQuery = graphql`
query(
  $category: String
  $tag: String
) {
  allMarkdownRemark(
    limit: 2000
    sort: { fields: {slug: DESC}}
    filter: {frontmatter: {category: {eq: "$category"},
    tags: {in: "tag"}}}
  ){
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
