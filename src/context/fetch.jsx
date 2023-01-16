import { createContext, useState, useEffect } from 'react'

export const FetchContext = createContext()

export const FetchProvider = ({ children }) => {
  let results = useState([])
  
  return (
    <FetchContext.Provider value={results}>{children}</FetchContext.Provider>
  )
}
