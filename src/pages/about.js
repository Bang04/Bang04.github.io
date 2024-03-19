import React from "react";

import Bio from "../components/bio"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"

function about ({location , data}) {
    const siteTitle =  `About`

    return (
        <Layout location={location} title={siteTitle} >

            <h1> About 페이지 입니다. </h1>
        </Layout>
    )
}

export default about;