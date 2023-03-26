import React from 'react'
import styles from '../../styles/DavisTrailsDetail.module.css'

/* https://stackoverflow.com/questions/31927193/hide-top-bar-in-embedded-google-map */

// https://www.google.com/maps/d/

function DavisTrailsGpx(props) {
  const { newdata } = props
  return (
    <>
      {/* FIXME:手機板大小 */}
      <div className={`col mb-2 mb-3 ${styles.gpx_wrap}`}>
        <iframe
          className={`col mb-2 ${styles.gpx_iframe}`}
          // src="https://www.google.com/maps/d/embed?mid=1POe77ZmL7YaAR3hxyrvPc7R87smWHSk&ehbc=2E312F"
          src={`${newdata.trail_gpx}`}
        ></iframe>
      </div>
    </>
  )
}

export default DavisTrailsGpx
