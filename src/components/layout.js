import * as React from "react"
import { Link  } from "gatsby"
import { Helmet } from "react-helmet"
import * as Classes from './layout.module.css';

import Header from "./layout/header"
import Footer from "./layout/footer"

const Layout = ({ location, title, children  }) => {
  //alert(JSON.stringify(location ));
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header 
  if (isRootPath) {
    
    header = (
      <h3 className="main-heading">
        <Link to="/">{title}</Link>
      </h3>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className={Classes.container}  data-is-root-path={isRootPath}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
