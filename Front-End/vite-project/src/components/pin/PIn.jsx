import React from 'react'
import './pin.scss'
import{Marker,Popup} from 'react-leaflet'
import { Link } from 'react-router-dom'
const PIn = ({items}) => {
    
  return (
    <Marker position={[items.latitude, items.longitude]}>
    <Popup>
      <div className="popupContainer">
        <img src={items.image} alt="" />
        <div className="textContainer">
          <Link to={`/${items.id}`}>{items.title}</Link>
          <span> {items.bedroom} bedroom</span>
          <b> ${items.price}</b>
        </div>
      </div>
    </Popup>
  </Marker>
  )
}

export default PIn
