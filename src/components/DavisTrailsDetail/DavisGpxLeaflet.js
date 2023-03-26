import L from 'leaflet'
import { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css'
// import mapData from './mapdata1.geo.json'
// import mapData from './gpx檔/1.象山親山步道.geo.json'
import mapData from './gpx檔/2.json'

import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'

import styles from '../../styles/DavisTrailsDetail.module.css'

// 地圖上的mark標記
// const demoDataFromServer = [
//   { lat: 41.19197, lng: 25.33719 },
//   { lat: 41.26352, lng: 25.1471 },
//   { lat: 41.26365, lng: 25.24215 },
//   { lat: 41.26369, lng: 25.33719 },
//   { lat: 41.26365, lng: 25.43224 },
//   { lat: 41.26352, lng: 25.52728 },
//   { lat: 41.2633, lng: 25.62233 },
//   { lat: 41.263, lng: 25.71737 },
//   { lat: 41.3082, lng: 22.95892 },
//   { lat: 41.31041, lng: 23.054 },
// ]

const customMarker = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
})

const customMarkertwo = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
})

function DavisGpxLeaflet(props) {
  const { newdata } = props
  const [state, setState] = useState([])

  console.log(mapData)

  // didMount
  useEffect(() => {
    // 連接資料庫
    // 設定狀態
    console.log('didmount')
    // setState(demoDataFromServer)
  }, [])

  return (
    <div className={`col mb-2 mb-3 ${styles.gpx_wrap}`}>
      {/* {newdata.map((v) => ( */}
      <MapContainer
        center={[newdata.lat, newdata.lon]}
        // center={[25.166165, 121.56336]}
        zoom={15}
        style={{ height: '100vh' }}
        className={`col mb-2 ${styles.gpx_iframe}`}
      >
        {/* {console.log('MapContainer', newdata)} */}
        {console.log('MapContainer', newdata.trail_name)}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {/* {state.map(({ lat, lng }, index) => (
        <Marker position={[lat, lng]} icon={customMarker} key={index}>
          <Popup>
            {index + 1} is for popup with lat: {lat} and lon {lng}
          </Popup>
        </Marker>
      ))} */}
        {/* <Marker
          position={[newdata.lat, newdata.lon]}
          // position={[25.176844, 121.547393]}

          icon={customMarker}
        >
          <Popup>is for popup with lat:</Popup>
        </Marker> */}
        {/* <Marker position={[25.176844, 121.547393]} icon={customMarkertwo} /> */}
        <GeoJSON data={mapData} />
      </MapContainer>
      {/* ))} */}
    </div>
  )
}

export default DavisGpxLeaflet
