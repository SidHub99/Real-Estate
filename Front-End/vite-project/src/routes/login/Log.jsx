import './login.scss'
import React, { useState } from 'react'
import bg from '../../assets/bg.png'
// import base_url from '../../../../lib/consts.js'
import { Link,useNavigate } from 'react-router-dom'

const Log = () => {
  // return(
  //   <div>hello</div>
  // );
  
  const nav=useNavigate();
  const [isloading,Setisloading]=useState(false);
  const[error,Seterror]=useState("")
  const handlesubmit=async(e)=>{

    e.preventDefault();
    Setisloading(true);
    const formdata=new FormData(e.target)
    const username=formdata.get('username');
    const password=formdata.get("password");
    try{
      const response=await fetch("http://localhost:8800/api/auth/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          username,password
        })
      })
      const data=await response.json();
      localStorage.setItem("user",JSON.stringify(data.userInfo))
      if(data.success){
        nav("/")
        
      }
      else{
        Seterror(data.message);
  }
}catch(e){
  Seterror(e.message);
}finally{
  Setisloading(false)
}
  }
  return (
    <div className="login">
    <div className="formContainer">
      <form onSubmit={handlesubmit}>
        <h1>Welcome back</h1>
        <input name="username" type="text" placeholder="Username" />
        <input name="password" type="password" placeholder="Password" />
        
        {!isloading &&<button>Login</button>}
        {error &&<span>{error}</span>}
        <Link to="/register">Need an Account? <span>SignUp</span></Link>
      </form>
    </div>
    <div className="imgContainer">
      <img src={bg} alt="" />
    </div>
  </div>
  );
}
  

export default Log
