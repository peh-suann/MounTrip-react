import React from 'react'
import styles from '../styles/IanDifficulty.module.css'
import { Link } from 'react-router-dom'

function DifficultyProducts(props) {
  const { v, i } = props
  return (
    <div className={'p-3 col-12 col-lg-4 pe-lg-2'} key={i}>
      <div className={styles.overflowpic1}>
        <div
          className={`${styles.tPSSCard_pic1}`}
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(1, 19, 6, 0) 66.99%, #011306 100%),
                  url(/imgs/Ian_img/${v.trail_img})`,
          }}
        ></div>
        <div
          className={`${styles.tPSSCard_bottom} d-flex justify-content-between`}
        >
          <div className={'d-flex align-items-center'}>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.49967 1.83398L10.5597 6.00732L15.1663 6.68065L11.833 9.92732L12.6197 14.514L8.49967 12.3473L4.37967 14.514L5.16634 9.92732L1.83301 6.68065L6.43967 6.00732L8.49967 1.83398Z"
                fill="#CEE8CB"
              />
            </svg>
            <p className={'ms-1'}>{v.score}.0</p>
          </div>
          <div className={'d-flex'}>
            <p>難度</p>
            <p className={'ms-2'}>{v.difficulty_short}級</p>
          </div>
        </div>
      </div>
      <div className={`${styles.tPSSCard_body} d-flex justify-content-between`}>
        <div>
          <p className={`${styles.first_p} mb-1`}>{v.trail_name}</p>
          <p>
            {v.geo_location_sid}
            {v.geo_location_town_sid}
          </p>
        </div>
        <div>
          <p className={'d-flex justify-content-end mb-1'}>NTD</p>
          <h4 className={`${styles.tPSSCardDiv_p}`}>{v.price}</h4>
        </div>
      </div>
    </div>
  )
}

export default DifficultyProducts
