import * as React from "react"
import { Link  } from "gatsby"
import 'bulma/css/bulma.min.css';
import * as Classes from './header.module.css';

const ListLink = props => (
    <li>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

const header = ({title, isRootPath}) => {

    return (
        <header className = {Classes.header}>
          <div className = {Classes.top} >
            <div className = {Classes.logo}> <Link to="/">TechLog</Link></div>
            <div className={Classes.menu}>
                <ListLink to="/about" class="navbar-item">About</ListLink>
                <ListLink to="/blog" class="navbar-item">Tech</ListLink>
            </div>
          </div>
        </header>
       
    )
}
export default header