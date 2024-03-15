import { Link, useStaticQuery, graphql } from 'gatsby'
import * as React from 'react'
import { useGatsbyPluginFusejs } from 'react-use-fusejs'
export function Search() {
  const data = useStaticQuery(graphql`
    {
      fusejs {
        index
        data
        publicUrl
      }
    }
  `)
 
  const [query, setQuery] = React.useState('')
  const result = useGatsbyPluginFusejs(query, data.fusejs)
   //const url = data.allMarkdownRemark.nodes;
   console.log(result);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {result.map(({ item }) => (
          <li key={item.id}>
            <Link to={item.slug } itemProp="url">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Search