import * as React from "react"
import { Link  } from "gatsby"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

const header = () => {
    return (
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
    )
}
export default header