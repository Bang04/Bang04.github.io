import * as React from "react"
import 'bulma/css/bulma.min.css';

const Footer = () => {
    return (
      <footer className="footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    )
}
export default Footer