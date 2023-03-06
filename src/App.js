// import logo from "./logo.svg";
import './App.css'
// import MounTripTest1 from './pages/MounTripTest1'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/Mountrip.module.css'
import IanDifficulty from './pages/IanDifficulty'
import IanSeason from './pages/IanSeason'
import IanShoppingCart1 from './pages/IanShoppingCart1'
import IanShoppingCart2 from './pages/IanShoppingCart2'
import IanShoppingCart3 from './pages/IanShoppingCart3'
import IanShoppingCart4 from './pages/IanShoppingCart4'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          {/* <Home /> */}
          {/* <h1>hey</h1> */}
          <Route path="/" element={<Home />} />
          <Route path="/difficulty" element={<IanDifficulty />} />
          <Route path="/season" element={<IanSeason />} />
          <Route path="/SC1" element={<IanShoppingCart1 />} />
          <Route path="/SC2" element={<IanShoppingCart2 />} />
          <Route path="/SC3" element={<IanShoppingCart3 />} />
          <Route path="/SC4" element={<IanShoppingCart4 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
