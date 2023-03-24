import React, { createContext, useState, useEffect } from 'react'

export const SearchContext = createContext(null)

// export const SearchContextProvider = ({ children }) => {
//   // only for searching
//   const [search, setSearch] = useState({
//     location: '',
//     startDate: '',
//     endDate: '',
//   })

//   useEffect(() => {
//     console.log('App:', search)
//   }, [search])
//   return (
//     <SearchContext.Provider value={{ search, setSearch }}>
//       {children}
//     </SearchContext.Provider>
//   )
// }

export const SearchContextProvider = ({ children }) => {
  const unSearch = {
    location: '',
    startDate: '',
    endDate: '',
  }

  let initSearch = { ...unSearch }

  const str = localStorage.getItem('mySearch')

  try {
    if (str) {
      const localSearch = JSON.parse(str)
      if (
        localSearch.location &&
        localSearch.endDate &&
        localSearch.startDate
      ) {
        console.log(str)
        initSearch = {
          location: localSearch.location,
          startDate: localSearch.startDate,
          endDate: localSearch.endDate,
        }
      }
    }
  } catch (ex) {}

  const [search, setSearch] = useState({
    initSearch,
    // location: '',
    // startDate: '',
    // endDate: '',
  })

  useEffect(() => {
    console.log('SearchContext:', search)
  }, [search])

  return (
    <SearchContext.Provider
      value={{
        search: search,
        setSearch: setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
