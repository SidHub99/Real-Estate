import React from 'react'
import search from "../../assets/search.png"
import './filter.scss'
const Filter = () => {
  return (
    <div className='filter'>
      <h1>Search Results For<b> London</b></h1>
      <div className="top">
        <div className="item">
            <label htmlFor="city">Location</label>
            <input type='text' id='city' placeholder='city location'/>
        </div>
      </div>
      <div className="bottom">
      <div className="item">
            <label htmlFor="type">Type</label>
            <select name="type" id="type">
            <option value="">Any</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
        </div>
        <div className="item">
            <label htmlFor="property">Property</label>
            <select name="property" id="property">
            <option value="">Any</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
        </div><div className="item">
            <label htmlFor="minprice">Minimum Price</label>
            <input type='minprice' id='minprice' placeholder='Any'/>
        </div>
        <div className="item">
            <label htmlFor="maxprice">Maximum Price</label>
            <input type='maxprice' id='maxprice' placeholder='Any'/>
        </div><div className="item">
            <label htmlFor="bedroom">Bedroom</label>
            <input type='bedroom' id='bedroom' placeholder='Bedroom'/>
        </div>
        <button >
            <img src={search} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Filter
