// import logo from "./logo.svg";
import './App.css'
// import MounTripTest1 from './pages/MounTripTest1'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/Mountrip.module.css'

import NavBar from './components/NavBar'
import Home from './components/Home'
import TestMemberList from './pages/TestMemberList'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          {/* <Home /> */}
          {/* <h1>hey</h1> */}
          <Route path="/" element={<Home />} />
          <Route path="/member-list" element={<TestMemberList />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </Router>

      {/* <MounTripTest1 /> */}
    </>
  )
}

export default App
