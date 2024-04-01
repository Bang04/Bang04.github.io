import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { useGatsbyPluginFusejs } from 'react-use-fusejs'
import * as Classes from './search.module.css';

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

  return (
    <div className={Classes.search}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='input is-info is-normal'
        placeholder="Text input"
      />
      <ul className={Classes.result}>
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