// import logo from "./logo.svg";
import './App.css'
// import MounTripTest1 from './pages/MounTripTest1'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/Mountrip.module.css'

import Layout from './layouts/Layout'
import Login from './pages/KexinLogin'
import YichunProducts from './pages/YichunProducts'
import Difficulty from './components/Difficulty'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'

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
          {/* <Home /> */}
          {/* <h1>hey</h1> */}
          <Route path="/" element={<Home />} />
          <Route path="/difficulty" element={<Difficulty />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
