import React from 'react'
import { useState } from 'react'
import './Navbar.css'

import logo from '../assets/Group114.png'
function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <nav className="navigation">
    <a href="/" className="brand-name">
      <img src={logo} alt='logo' className='logo-img'/>
    </a>
    <button className="hamburger" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="white"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
      
    </button>
    <div
      className={
        isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
      }>
      <ul>
          
        <li>
          <a href="/home" className='active'>Home</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/Aboutus">About Us</a>
        </li>
        <li>
          <button href="/" className='company-start-btn'>Start a Company</button>
          </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar
