import React from 'react';
import './Navbar.scss'

export default function Navabr() {
  return <nav className='navbar'>
  <h1>City-Tours</h1>
  <ul className="nav-links">
    <li>
      <a href="/" className='nav-link'>
        Home
      </a>
    </li>
    <li>
      <a href="/about" className='nav-link'>
        About
      </a>
    </li>
    <li>
      <a href="/tours" className='nav-link active'>
        Tours
      </a>
    </li>
  </ul>
      </nav>
  
}
