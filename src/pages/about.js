import React from "react";

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

function about () {
    return (
        <h1> About 페이지 입니다. </h1>
        // <Layout location={`/pages/about`} title={`about`}>
        //     <Bio />
        //     <h1> About 페이지 입니다. </h1>
        // </Layout>
    )
}

export default about;