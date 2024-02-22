import * as React from "react"
import { Link  } from "gatsby"
import { Helmet } from "react-helmet"
import classes from './layout.module.css';


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
      <div className={classes.head}>head</div>
      <div className={classes.sidebara} >sidebar-b</div>
      <div className={classes.main}>main-content</div>
      
      <div className={classes.sidebarb}>sidebar-b</div>
      <div className={classes.footer}>footer</div>

      <nav class="navbar is-success" role="navigation" aria-label="main navigation">

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>

        <header className="global-header">{header}</header>
        <div class="navbar-menu">
          <div class="navbar-end">
            <ul>
              <ListLink to="/about" class="navbar-item">About</ListLink>
              <ListLink to="/blog" class="navbar-item">Tech</ListLink>
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
