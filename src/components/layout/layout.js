import * as React from "react"
import { Helmet } from "react-helmet"
import Bio from "./Bio"
import Seo from "./Seo"
import Footer from "./Footer"
import MainNavigation from "./MainNavigation";
import 'bulma/css/bulma.min.css';

const Layout = ({ location, title, children  }) => {
  //alert(JSON.stringify(location ));
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  return (
    <div className="container is-widescreen" data-is-root-path={isRootPath}>
      <MainNavigation />
      <Seo />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
