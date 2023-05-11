// import logo from './logo.svg'
import './App.css'
// import MounTripTest1 from './pages/MounTripTest1'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/Mountrip.module.css'
import { AuthContextProvider } from './contexts/AuthContexts'
import Layout from './layouts/Layout'
import Login from './pages/KexinLogin'
import YichunProducts from './pages/YichunProducts'
import Member from './pages/Member'
import YichunTest from './pages/YichunTest'
// import YichunTestPlayed from './pages/YichunTestPlayed'
import Signin from './pages/KexinSignin'
import Index from './pages/KexinIndex'
import ResetPassword from './pages/KexinResetPassword'
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

import { CartContextProvider } from './components/IanUseCart'

import { SearchContextProvider } from './contexts/SearchContext'

import { TestCouponContextProvider } from './contexts/TestCouponContext'

import DavisGpxLeaflet from './components/DavisTrailsDetail/DavisGpxLeaflet'
import { createContext, useEffect, useState } from 'react'

export const LoginContext = createContext({})

function App() {
  const [showBox, setShowbox] = useState(0)
  const [mapInteraction, setMapInteraction] = useState(0)
  // only for searching
  // const { search } = useContext(SearchContext)
  // const [search, setSearch] = useState({
  //   location: '',
  //   startDate: '',
  //   endDate: '',
  // })

  // useEffect(() => {
  //   console.log('App:', search)
  // }, [search])

  return (
    <>
      <Router>
        <SearchContextProvider>
          <AuthContextProvider>
            <CartContextProvider>
              <LoginContext.Provider
                value={{
                  mapInteraction,
                  setMapInteraction,
                  showBox,
                  setShowbox,
                }}
              >
                <TestCouponContextProvider>
                  <Routes>
                    <Route path="/" element={<Layout />}>
                      {/* 其他頁面Navbar+Footer */}{' '}
                      <Route path="/products" element={<YichunProducts />} />
                      <Route path="/member" element={<Member />} />
                      <Route
                        path="/trails-detail"
                        element={<DavisTrailsDetail />}
                      />
                      <Route
                        path="/trails-filter"
                        element={<DavisTrailsFilter />}
                      />
                      <Route path="/difficulty" element={<IanDifficulty />} />
                      <Route path="/season" element={<IanSeason />} />
                      <Route path="/SC1" element={<IanShoppingCart1 />} />
                      <Route path="/SC2" element={<IanShoppingCart2 />} />
                      <Route path="/SC3" element={<IanShoppingCart3 />} />
                      <Route path="/SC4" element={<IanShoppingCart4 />} />
                    </Route>
                    <Route path="/">
                      {/* 登入頁面Navbar+Footer */}
                      <Route path="/Login" element={<Login />} />
                      <Route path="/Signin" element={<Signin />} />
                      <Route path="/Index" element={<Index />} />
                      <Route path="/password" element={<ResetPassword />} />
                      {/* <Route path="/reset" element={<Reset />} /> */}
                      <Route path="/test" element={<YichunTest />} />
                    </Route>
                  </Routes>
                </TestCouponContextProvider>
              </LoginContext.Provider>
            </CartContextProvider>
          </AuthContextProvider>
        </SearchContextProvider>
      </Router>
    </>
  )
}

export default App
