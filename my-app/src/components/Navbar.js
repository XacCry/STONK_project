import React,{useState} from 'react'
import Logo from '../asset/stonk.png'
import {Link , NavLink} from "react-router-dom"

import "./Navbar.css"
function Navbar() {
  const [menuOpen, setMenuOpen]=useState(false);
  return (
    <>
    <nav className='Navbar'>
        <Link to="/" className='title'>STONK</Link>
        <div className='menu' onClick={() => {setMenuOpen(!menuOpen)}}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/management">Management</NavLink></li>
          <li><NavLink to="/Download_Bot">Download_Bot</NavLink></li>
          <li><NavLink to="/payment">Payment</NavLink></li>
          <li><NavLink to="/Login">LogIn/SignUp</NavLink></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
