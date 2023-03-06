// import logo from "./logo.svg";
import './App.css'
// import MounTripTest1 from './pages/MounTripTest1'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/Mountrip.module.css'
import Difficulty from './pages/Difficulty'
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
          <Route path="/difficulty" element={<Difficulty />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
