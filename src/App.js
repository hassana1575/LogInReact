import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/login.component'
import SignUp from './components/signup.component'
import Home from './components/home.component'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/'} style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>
              SPIDY
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <Link className="nav-link" to={'/home'} style={{ color: 'white' }}>
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'} style={{ color: 'white' }}>
                    LOGIN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'} style={{ color: 'white' }}>
                    REGISTER
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/Home" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
