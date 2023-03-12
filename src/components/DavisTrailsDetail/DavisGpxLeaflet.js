import React from 'react'
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup,
  GeoJSON,
} from 'react-leaflet'
import gpxData from './mapdata1.geojson'

function DavisGpxLeaflet() {
  return (
    <MapContainer
      center={[40.7317535212683, -73.99685430908403]}
      zoom={9}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* <GeoJSON data={gpxData} /> */}
      {/* <Polyline
        pathOptions={{ fillColor: 'red', color: 'blue' }}
        positions={[
          [40.689818841705, -74.04511194542516],
          [40.75853187779803, -73.98495720388513],
        ]}
      /> */}
    </MapContainer>
  )
}

export default DavisGpxLeaflet

// import React from 'react';
// import { MapContainer, Polyline, TileLayer } from 'react-leaflet';

// // var gpx = new gpxParser();
// // gpx.parse(OUR_GPX_CONTENT);
// // console.log(gpx.tracks[0].points[0].lat);

// function GPX() {
//   return (
//     <>
//       ;
//       <MapContainer
//         center={[40.7317535212683, -73.99685430908403]}
//         zoom={9}
//         scrollWheelZoom={false}
//       >
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         <Polyline
//           pathOptions={{ fillColor: 'red', color: 'blue' }}
//           positions={[
//             [40.689818841705, -74.04511194542516],
//             [40.75853187779803, -73.98495720388513],
//           ]}
//         />
//       </MapContainer>
//     </>
//   );
// }

// export default GPX;
