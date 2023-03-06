// import logo from "./logo.svg";
import './App.css'
// import MounTripTest1 from './pages/MounTripTest1'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/Mountrip.module.css'

import Layout from './layouts/Layout'
import TestMemberList from './pages/TestMemberList'
import Login from './pages/KexinLogin'
import YichunProducts from './pages/YichunProducts'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* 其他頁面Navbar+Footer */}
            <Route path="/products" element={<YichunProducts />} />
          </Route>
          <Route path="/">
            {/* 登入頁面Navbar+Footer */}
            <Route path="/Login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
