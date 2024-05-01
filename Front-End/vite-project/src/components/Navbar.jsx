import React, { useState } from 'react'
import './Navbar.scss'
import menu from '../assets/menu.png'
import logo from '../assets/logo1.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    
    <nav>
      <div className="left">
        <Link to='/' className='logo'>
            <img src={logo} alt="" />
            <span>RealEstate</span>
        </Link>
        <Link to='/'>Home</Link>
        <Link to='/'>About</Link>
        <Link to='/'>Contact</Link>
        <Link to='/'>Agents</Link>
      </div>
      <div className="right">
      <Link to='/'>SignUp</Link>
      <Link to='/' className='log'>LogIn</Link>
      <img src={menu} alt="" onClick={() => setShow(!show)} />
      </div>
      <div className={show?"active":"menu"}>
        <Link to='/'>Home</Link>
        <Link to='/'>About</Link>
        <Link to='/'>Contact</Link>
        <Link to='/'>Agents</Link>
        <Link to='/'>SignUp</Link>
      <Link to='/'>LogIn</Link>
      </div>
    </nav>
  )
}

export default Navbar
