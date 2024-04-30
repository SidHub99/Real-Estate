import React, { useState } from 'react'
import './Hero.scss'
import search from '../../assets/search.png'


const Hero = () => {
    const type=['buy','rent']
    const [query,Setquery]=useState({
        type:"buy",
        location:"",
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
                <input type="text" name="location" placeholder='Location' />
                <input type="number" name="minprice" placeholder='Minimum price' />
                <input type="number" name="maxprice" placeholder='Max Price' />
                <button>
                    <img src={search} alt="" />
                </button>
            </form>
      
    </div>
  )
}

export default Hero
