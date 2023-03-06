// import logo from "./logo.svg";
import './App.css'
// import MounTripTest1 from './pages/MounTripTest1'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/Mountrip.module.css'

import Layout from './layouts/Layout'
import Home from './components/Home'
import TestMemberList from './pages/TestMemberList'
import Login from './pages/KexinLogin'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Home /> */}
            {/* <h1>hey</h1> */}
            <Route path="/" element={<Home />} />
            <Route path="/member-list" element={<TestMemberList />} />

            {/* <Route path="/" element={<Home />} /> */}
          </Route>
          <Route path="/">
            <Route path="/Login" element={<Login />} />
          </Route>
        </Routes>
      </Router>

      {/* <MounTripTest1 /> */}
    </>
  )
}

export default App
