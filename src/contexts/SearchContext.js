import React, { useState, useEffect, createContext } from 'react'

export const SearchContext = createContext(null)

export const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState({
    location: '',
    startDate: '',
    endDate: '',
  })

  useEffect(() => {
    console.log('App:', search)
  }, [search])
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}
