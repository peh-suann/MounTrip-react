// import logo from './logo.svg'
import './App.css'
// import MounTripTest1 from './pages/MounTripTest1'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/Mountrip.module.css'
import { AuthContextProvider } from './contexts/AuthContexts'
import Layout from './layouts/Layout'
import Login from './pages/KexinLogin'
import YichunProducts from './pages/YichunProducts'
// import Member from './pages/Member'
import YichunTest from './pages/YichunTest'
import Signin from './pages/KexinSignin'
import Index from './pages/KexinIndex'
// import YichunProducts from './pages/YichunProducts'
// import TestMemberList from './pages/TestMemberList'
import DavisTrailsDetail from './pages/DavisTrailsDetail'
import DavisTrailsFilter from './pages/DavisTrailsFilter'

function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* 其他頁面Navbar+Footer */}{' '}
              <Route path="/products" element={<YichunProducts />} />
              {/* <Route path="/member" element={<Member />} /> */}
              <Route path="/test" element={<YichunTest />} />
              <Route path="/trails-detail" element={<DavisTrailsDetail />} />
              <Route path="/trails-filter" element={<DavisTrailsFilter />} />
            </Route>
            <Route path="/">
              {/* 登入頁面Navbar+Footer */}
              <Route path="/Login" element={<Login />} />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Index" element={<Index />} />
              {/* <Route path="/test" element={<YichunTest />} /> */}
            </Route>
          </Routes>
        </AuthContextProvider>
      </Router>
    </>
  )
}

export default App
