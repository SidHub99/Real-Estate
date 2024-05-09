import React, { useContext } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import '../layout/layout.scss'
import {Navigate, Outlet} from 'react-router-dom'
import { AuthContext } from '../../context/Authcontext'
function Layout  () {
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
function RequireAuth  () {
  const{currentUser,updateUser}=useContext(AuthContext);  
 
  return (
    !currentUser?(<Navigate to="/login" />):
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

export {Layout,RequireAuth}

