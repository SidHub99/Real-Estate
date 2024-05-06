import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import '../layout/layout.scss'
import {Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <div className="layout">

    <div className="navbar">
    <Navbar/>
    </div>

    <div className="content">
    {/* <Home/> */}
    <Outlet/>
    </div>

    </div>
    </>

  )
}

export default Layout
