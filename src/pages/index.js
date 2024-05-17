import React , { useState, createContext } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import Bio from "../components/layout/Bio"
import Seo from "../components/layout/Seo"
import PostList from "../components/post/PostList"
import * as classes from './index.module.css';
import 'bulma/css/bulma.min.css';


const BlogIndex = ({ data, location, pageContext }) => {

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const {nodes , totalCount}  = data.allMarkdownRemark
  const tags = data.GroupTags.group
  const { tag } = pageContext
  const [ currentTag, setCureentTag ] = useState('All');

  const [filteredCat, setFilteredCat] = useState("All")

  const filterCatHandler = selected => {
    setFilteredCat(selected)
  }

  // if (totalCount == 0) {
  //   return (
  //     <Layout location={location} title={siteTitle} >
  //       <Bio />
  //       <section className="hero is-medium ">
  //       <p className="subtitle">등록된 포스트가 없습니다. 조금만 기다려주세요 </p>
  //       </section>
  //     </Layout>
  //   )
  // }

  return (
    <Layout location={location} title={siteTitle} onChangeCat={filterCatHandler} >    
      <PostList data = { data }  tags = {tags}/>
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
    GroupTags: allMarkdownRemark(limit: 2000) {
      group(field: { frontmatter: { tags: SELECT }}) {
        fieldValue
        totalCount
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
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
