// import logo from './logo.svg'
// import './App.css'
// import MounTripTest1 from './pages/MounTripTest1'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/Mountrip.module.css'
import { AuthContextProvider } from './contexts/AuthContexts'
import Layout from './layouts/Layout'
import Login from './pages/KexinLogin'
import YichunProducts from './pages/YichunProducts'
import Member from './pages/Member'
import YichunTest from './pages/YichunTest'
import Signin from './pages/KexinSignin'
import Index from './pages/KexinIndex'
// import YichunProducts from './pages/YichunProducts'
// import TestMemberList from './pages/TestMemberList'
import DavisTrailsDetail from './pages/DavisTrailsDetail'
import DavisTrailsFilter from './pages/DavisTrailsFilter'
import IanDifficulty from './pages/IanDifficulty'
import IanSeason from './pages/IanSeason'
// import NavBar from './components/NavBar'
// import Footer from './components/Footer'
// import Home from './components/Home'
import IanShoppingCart1 from './pages/IanShoppingCart1'
import IanShoppingCart2 from './pages/IanShoppingCart2'
import IanShoppingCart3 from './pages/IanShoppingCart3'
import IanShoppingCart4 from './pages/IanShoppingCart4'
import { CartContext } from './components/IanCartContext'
import { CartContextProvider } from './components/IanCartContext'
import IanSlider from './pages/IanSlider'

function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          {/* <CartContextProvider> */}
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* 其他頁面Navbar+Footer */}{' '}
              <Route path="/products" element={<YichunProducts />} />
              {/* <Route path="/member" element={<Member />} /> */}
              <Route path="/test" element={<YichunTest />} />
              <Route path="/trails-detail" element={<DavisTrailsDetail />} />
              <Route path="/trails-filter" element={<DavisTrailsFilter />} />
              <Route path="/difficulty" element={<IanDifficulty />} />
              <Route path="/season" element={<IanSeason />} />
              <Route path="/SC1" element={<IanShoppingCart1 />} />
              <Route path="/SC2" element={<IanShoppingCart2 />} />
              <Route path="/SC3" element={<IanShoppingCart3 />} />
              <Route path="/SC4" element={<IanShoppingCart4 />} />
              <Route path="/slider" element={<IanSlider />} />
            </Route>
            <Route path="/">
              {/* 登入頁面Navbar+Footer */}
              <Route path="/Login" element={<Login />} />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Index" element={<Index />} />
              <Route path="/test" element={<YichunTest />} />
            </Route>
          </Routes>
          {/* </CartContextProvider> */}
        </AuthContextProvider>
      </Router>
    </>
  )
}

export default App
