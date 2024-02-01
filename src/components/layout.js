import * as React from "react"
import { Link  } from "gatsby"
import { Helmet } from "react-helmet"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

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
    <div class="container" className="global-wrapper" data-is-root-path={isRootPath}>

      <nav class="navbar" role="navigation" aria-label="main navigation">
        <header className="global-header">{header}</header>
        <div class="navbar-menu">
          <div class="navbar-end">
            <ul>
              <ListLink to="/about" class="navbar-item">About</ListLink>
              <ListLink to="/blog" class="navbar-item">blog</ListLink>
            </ul>
          </div>
        </div>
      </nav>
     
      <main>{children}</main>
      <footer class="footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
