import { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import NavbarIndex from './NavbarIndex'

function Layout() {
  // const []=useState()
  // const contextPage = useContext(MemberContext)
  
  return (
    <>
      {/* 導覽列 */}
      <NavbarIndex />

      {/* Outlet相當於props.children，呈現區域頁面的內容 */}
      {/* 代表子頁區域內容 */}
      <Outlet />

      {/* 頁尾資訊 */}
      <Footer />
    </>
  )
}
export default Layout
