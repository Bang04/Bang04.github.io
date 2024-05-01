import * as React from "react"

const footer = () => {
    return (
        <footer className="footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    )
}
export default footer