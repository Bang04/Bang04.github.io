import { AppContext } from '../context/app'
import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { useGatsbyPluginFusejs } from 'react-use-fusejs'

export function Search() {
  const data = useStaticQuery(graphql`
      {
        fusejs {
          nodes {
            frontmatter {
              title
            }
          }
        }
      }
  `)

  const [query, setQuery] = React.useState('')
  const {fusejs, setFusejs} = React.useContext(AppContext)
  const result = useGatsbyPluginFusejs(query, data.fusejs)
    console.log(result);
  const fetching = React.useRef(false)

  React.useEffect(() => {
    if (!fetching.current && !fusejs && query) {
      fetching.current = true

      fetch(data.fusejs)
        .then((res) => res.json())
        .then((json) => setFusejs(json))
    }
  }, [fusejs, query])

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {result.map(({ item }) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Search