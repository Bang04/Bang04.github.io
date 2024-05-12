import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as classNamees from './bio.module.css';
import 'bulma/css/bulma.min.css';


const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <section className="hero is-info">
      <div className="hero-body">
        <p className="title">Success hero</p>
        <p className="subtitle">Success subtitle</p>
      </div>
    </section>

    // <div classNameName={classNamees.bio}>
    //   <StaticImage
    //     classNameName="bio-avatar"
    //     layout="fixed"
    //     formats={["auto", "webp", "avif"]}
    //     src="../images/pubao_pro.png"
    //     width={45}
    //     height={50}
    //     quality={95}
    //     alt="myProfile"
    //   />
    //   {author?.name && (
    //     <p>
    //    {author.name}
    //       {author?.summary || null}
    //       {` `}
    //       {`https://twitter.com/${social?.twitter || ``}`}
 
    //       안녕하세요.  <br />저의 기술 블로그를 방문해 주셔서 감사합니다.  <br />
    //      프론트엔드 개발 공부하며 불경력을 쌓고 싶습니다 :) <br /> 

    //     </p>
    //   )}
    // </div>
  )
}

export default Bio
