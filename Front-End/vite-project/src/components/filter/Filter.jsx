import React, { useState } from 'react'
import search from "../../assets/search.png"
import './filter.scss'
import { useSearchParams} from 'react-router-dom'

const Filter = () => {
  const [searchparams,Setsearchparams]=useSearchParams()
  const [query,Setquery]=useState({
    type: searchparams.get("type")||"",
    city: searchparams.get("city")||"",
    minprice: searchparams.get("minprice")||0,
    property:searchparams.get("property")||"",
    maxprice: searchparams.get("maxprice")||1000000,
    bedroom: searchparams.get("bedroom")||"",
  })
  const handlefilter=()=>{
    Setsearchparams(query)
    }
  const handlechange=(e)=>
    {
      Setquery({...query,[e.target.name]:e.target.value})
    }
  return (
    <div className='filter'>
      <h1>Search Results For<b> {searchparams.get("city")} </b></h1>
      <div className="top">
        <div className="item">
            <label htmlFor="city">Location</label>
            <input type='text' name='city' onChange={handlechange} id='city' defaultValue={query.city} placeholder='city location'/>
        </div>
      </div>
      <div className="bottom">
      <div className="item">
            <label htmlFor="type">Type</label>
            <select name="type" onChange={handlechange} defaultValue={query.type}  id="type">
            <option value="">Any</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
        </div>
        <div className="item">
            <label htmlFor="property">Property</label>
            <select name="property" defaultValue={query.property}  onChange={handlechange} id="property">
            <option value="">Any</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
        </div><div className="item">
            <label htmlFor="minprice">Minimum Price</label>
            <input type='number' name='minprice' defaultValue={query.minprice}  onChange={handlechange} id='minprice' placeholder='Any'/>
        </div>
        <div className="item">
            <label htmlFor="maxprice">Maximum Price</label>
            <input type='number' id='maxprice' name='maxprice' defaultValue={query.maxprice}  onChange={handlechange} placeholder='Any'/>
        </div><div className="item">
            <label htmlFor="bedroom">Bedroom</label>
            <input type='number' id='bedroom' onChange={handlechange} name='bedroom' defaultValue={parseInt(query.bedroom)} placeholder='Bedroom'/>
        </div>
        
        <button onClick={handlefilter} >
            <img src={search} alt="" />
        </button>
        
      </div>
    </div>
  )
}

export default Filter
