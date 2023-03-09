// import logo from "./logo.svg";
import './App.css'
// import MounTripTest1 from './pages/MounTripTest1'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/Mountrip.module.css'

import Layout from './layouts/Layout'
import Login from './pages/KexinLogin'
import YichunProducts from './pages/YichunProducts'
import Member from './pages/Member'
import YichunTest from './pages/YichunTest'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* 其他頁面Navbar+Footer */}{' '}
            <Route path="/products" element={<YichunProducts />} />
            <Route path="/member" element={<Member />} />
            <Route path="/test" element={<YichunTest />} />
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
