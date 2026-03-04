import React from 'react'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-icon">S</div>
          <span className="logo-text">killine</span>
        </div>
        
        <div className="navbar-menu">
          <a href="#home" className="nav-link">Home</a>
          <a href="#careers" className="nav-link">Careers</a>
          <a href="#blog" className="nav-link">Blog</a>
          <a href="#about" className="nav-link">About Us</a>
        </div>
        
        <div className="navbar-auth">
          <button className="btn-login">Login</button>
          <button className="btn-signup">Sign Up</button>
        </div>
      </div>
    </nav>
  )
}
