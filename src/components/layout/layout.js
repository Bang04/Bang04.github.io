import * as React from "react"
import { Link  } from "gatsby"
import { Helmet } from "react-helmet"
//import * as Classes from './layout.module.css';

import Header from "./header"
import Footer from "./footer"

const Layout = ({ location, title, children  }) => {
  //alert(JSON.stringify(location ));
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath


  return (
    <div  data-is-root-path={isRootPath}>
      <Header title= {title} isRootPath={isRootPath}/>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
