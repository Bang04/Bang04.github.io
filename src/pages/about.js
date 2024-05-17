import React from "react";
import Layout from "../components/layout/Layout"

function about ({location , data}) {
    const siteTitle =  `About`

    return (
        <Layout location={location} title={siteTitle} >
             <main>

                <h1> About 페이지 입니다. </h1>
             </main>
        </Layout>
    )
}

export default about;