import React from 'react'
import {MapContainer,Marker,Popup,TileLayer} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "./map.scss"
const Map = () => {
  return (
    <MapContainer center={[52.4797,-1.90296]} className="map" zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[52.4797,-1.90296]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  )
}

export default Map
