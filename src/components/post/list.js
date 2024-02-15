import React from "react";
import { Link } from "gatsby"

import 'bulma/css/bulma.min.css';

const PostsList = ( {posts} ) =>{

    return posts.map((post ) => {
        <li class="card">
            <article class="card-content">
              <header>
                <div class="title">
                  <Link to={post.frontmatter.title} itemProp="url">
                    <span itemProp="headline">{post.frontmatter.title}</span>
                  </Link>
                </div>
                <small>{post.frontmatter.date}</small>
              </header>
              <section>
                <p class="subtitle is-6"
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.frontmatter.excerpt,
                  }}
                  itemProp="description"
                />
              </section>
            </article>
          </li>
    })
}

export default PostsList