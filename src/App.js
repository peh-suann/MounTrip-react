// import logo from "./logo.svg";
import './App.css'
// import MounTripTest1 from './pages/MounTripTest1'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/Mountrip.module.css'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import YichunProducts from './pages/YichunProducts'
import Member from './pages/Member'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route>
            <Route path="/products" element={<YichunProducts />} />
            <Route path="/member" element={<Member />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
