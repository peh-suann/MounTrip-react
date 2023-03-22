import { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { MemberContext } from '../contexts/MemberContext'

import Footer from './Footer'
import NavbarIndex from './NavbarIndex'

function Layout() {
  // const []=useState()
  // const contextPage = useContext(MemberContext)
  const [memberPage, setMemberPage] = useState('member')
  return (
    <>
      <MemberContext.Provider
        value={{ memberPage: memberPage, setMemberPage: setMemberPage }}
      >
        {/* 導覽列 */}
        <NavbarIndex />

        {/* Outlet相當於props.children，呈現區域頁面的內容 */}
        {/* 代表子頁區域內容 */}
        <Outlet />

        {/* 頁尾資訊 */}
        <Footer />
      </MemberContext.Provider>
    </>
  )
}
export default Layout
