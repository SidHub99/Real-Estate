import React, { useState } from 'react'
import './Hero.scss'
import search from '../../assets/search.png'
import {Link} from 'react-router-dom'
const Hero = () => {
    const type=['buy','rent']
    const handlechange=(e)=>{
        Setquery((prev)=>({...prev,[e.target.name]:e.target.value }))
    }
    const [query,Setquery]=useState({
        type:"buy",
        city:"",
        minprice:0,
        maxprice:0
    })
    const changebtn=(type)=>{
        Setquery((prev)=>({...prev,type:type}))
    }
  return (
    <div className='hero'>
        <div className="types">
            {
            type.map((type)=>{
                 return <button key={type} className={query.type===type?"active":""} onClick={()=>changebtn(type)}>{type}</button>
            })
                
            }
        </div>
            <form>
                <input type="text" name="city" placeholder='City' onChange={handlechange} />
                <input type="number" name="minprice" min={0} placeholder='Minimum price' onChange={handlechange} />
                <input type="number" name="maxprice" min={0} placeholder='Max Price' onChange={handlechange}/>
               <Link to={`/list?type=${query.type}&city=${query.city}&minprice=${query.minprice}&maxprice=${query.maxprice}`}>
               <button>
                    <img src={search} alt="" />
                </button></Link>
            </form>
      
    </div>
  )
}

export default Hero
