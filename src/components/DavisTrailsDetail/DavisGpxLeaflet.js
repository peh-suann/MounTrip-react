import L from 'leaflet'
import { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css'
import mapData from './mapdata1.geojson'

import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'

const demoDataFromServer = [
  { lat: 41.19197, lng: 25.33719 },
  { lat: 41.26352, lng: 25.1471 },
  { lat: 41.26365, lng: 25.24215 },
  { lat: 41.26369, lng: 25.33719 },
  { lat: 41.26365, lng: 25.43224 },
  { lat: 41.26352, lng: 25.52728 },
  { lat: 41.2633, lng: 25.62233 },
  { lat: 41.263, lng: 25.71737 },
  { lat: 41.3082, lng: 22.95892 },
  { lat: 41.31041, lng: 23.054 },
]

const customMarker = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
})

function DavisGpxLeaflet() {
  const [state, setState] = useState([])

  // didMount
  useEffect(() => {
    // 連接資料庫
    // 設定狀態
    console.log('didmount')
    setState(demoDataFromServer)
  }, [])

  return (
    <MapContainer
      center={[23.583234, 120.5825875]}
      zoom={10}
      style={{ height: '100vh' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      {state.map(({ lat, lng }, index) => (
        <Marker position={[lat, lng]} icon={customMarker} key={index}>
          <Popup>
            {index + 1} is for popup with lat: {lat} and lon {lng}
            <GeoJSON data={mapData.features} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default DavisGpxLeaflet
