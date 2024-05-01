import React from 'react'
import { createContext, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
export const AppContext = createContext({
  fusejs: null,
  setFusejs: () => {},
})

export const AppProvider = ({ children }) => {
  const [fusejs, setFusejs] = useState(null)

  return (
    <AppContext.Provider value={{ fusejs, setFusejs }}>
      <BrowserRouter>
      {children}
      </BrowserRouter>
    </AppContext.Provider>
  )
}