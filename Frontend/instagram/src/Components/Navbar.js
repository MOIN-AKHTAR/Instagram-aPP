import React from 'react';
import moduleName from 'react'

export default function Navbar() {
    return (
   <nav >
    <div className="nav-wrapper white">
      <a href="#" className="brand-logo left">Instagram</a>
      <ul className="right">
        <li><a href="#">LogIn</a></li>
        <li><a href="#">SignUp</a></li>
        <li><a href="#">Profile</a></li>
      </ul>
    </div>
  </nav>
    )
}
