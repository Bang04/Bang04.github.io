import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { useGatsbyPluginFusejs } from 'react-use-fusejs'
import * as classes from './PostSearch.module.css';

export function PostSearch() {
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
    <div className={classes.search}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='input is-info is-normal'
        placeholder="검색어를 입력하세요"
      />
      <ul className={classes.result}>
        {result.map(({ item }) => (
          <li key={item.id}>
            <Link to={`/posts/`+item.slug } itemProp="url">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostSearch