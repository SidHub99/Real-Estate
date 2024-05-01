import React from 'react'
import {MapContainer,Marker,Popup,TileLayer} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "./map.scss"
import PIn from '../pin/PIn'
const Map = ({items}) => {
  // 33.6995, 73.0363
  return (
    <MapContainer center={[52.4797, -1.90269]} className="map" zoom={7} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {
      items.map(items=>(
        <PIn key={items.id} items={items}/>
      ))
    }
  </MapContainer>
  
  )
}

export default Map
