import * as React from "react"
import { Link  } from "gatsby"
import { Helmet } from "react-helmet"
import 'bulma/css/bulma.min.css';

import MainNavigation from "./MainNavigation";
import Footer from "./Footer"
import CategoryList from "../categories";

const Layout = ({ location, title, children  }) => {
  //alert(JSON.stringify(location ));

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="container" data-is-root-path={isRootPath}>
      <MainNavigation />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
