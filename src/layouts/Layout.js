import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Navbar from './Navbar'

function Layout() {
  return (
    <>
      {/* 導覽列 */}
      <Navbar />

      {/* Outlet相當於props.children，呈現區域頁面的內容 */}
      {/* 代表子頁區域內容 */}
      <Outlet />

      {/* 頁尾資訊 */}
      <Footer />
    </>
  )
}
export default Layout
