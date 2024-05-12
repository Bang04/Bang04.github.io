import * as React from "react"
import { Helmet } from "react-helmet"
import Bio from "./Bio"
import Seo from "./Seo"
import Footer from "./Footer"
import MainNavigation from "./MainNavigation";
import PostCatogories from "../post/PostCategories"
import 'bulma/css/bulma.min.css';

const Layout = ({ location, title, children  }) => {
  //alert(JSON.stringify(location ));
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  return (
    <div className="container" data-is-root-path={isRootPath}>
      <MainNavigation />
      <Seo />
      <PostCatogories />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
