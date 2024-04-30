import React, { useState } from 'react'
import './Navbar.scss'
import menu from '../assets/menu.png'
import logo from '../assets/logo1.png'

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    
    <nav>
      <div className="left">
        <a href='/' className='logo'>
            <img src={logo} alt="" />
            <span>RealEstate</span>
        </a>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Contact</a>
        <a href='/'>Agents</a>
      </div>
      <div className="right">
      <a href='/'>SignUp</a>
      <a href='/' className='log'>LogIn</a>
      <img src={menu} alt="" onClick={() => setShow(!show)} />
      </div>
      <div className={show?"active":"menu"}>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Contact</a>
        <a href='/'>Agents</a>
        <a href='/'>SignUp</a>
      <a href='/'>LogIn</a>
      </div>
    </nav>
  )
}

export default Navbar
