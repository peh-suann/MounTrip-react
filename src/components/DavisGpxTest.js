import React from 'react'
import {
  MapContainer,
  TileLayer,
  useMap,
} from 'https://cdn.esm.sh/react-leaflet'

function DavisGpxTest() {
  return (
    <MapContainer
      center={[40.7317535212683, -73.99685430908403]}
      zoom={9}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  )
}

export default DavisGpxTest
