import { createContext, useState } from 'react'

// const [displayPage, setDisplayPage] = useState('member')
// const handleDisplayPage = (page) => {
//   setDisplayPage(page)
// }

export const MemberContext = createContext('member')
// export const MemberContextProvider = ()=>{}
// export const MemberContextProvider = ({ children }) => {
//   const [memberPage, setMemberPage] = useState('member')

//   return (
//     <MemberContext.Provider value={[memberPage, setMemberPage]}>
//       {children}
//     </MemberContext.Provider>
//   )
// }
