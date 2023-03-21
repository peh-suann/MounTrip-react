import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StylesContext } from './../pages/YichunProducts'

function YichunProductCard(props) {
  const { ranking, el, shadow } = props
  const styles = useContext(StylesContext)
  const average = Math.round(+el.avg_score * 2) / 2
  const formatted = average.toFixed(1)

  return (
    <>
      <Link
        to={`/trails-detail?page=${el.trails_sid}`}
        style={{ textDecoration: 'none' }}
      >
        <div className={styles.product}>
          <div
            className={styles.ranking}
            style={ranking ? {} : { display: 'none' }}
          >
            {ranking}
          </div>
          <div
            className={`${styles.pic} ${shadow ? styles.pic_shadow : ''}`}
            style={{
              backgroundImage: `linear-gradient(180deg,rgba(0, 0, 0, 0) 70%,rgba(0, 0, 0, 0.6) 100%),
            url(images/public_images/product_image/${el.trail_img})`,
            }}
          >
            <div className={styles.rates}>
              <p>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00004 1.83334L10.06 6.00668L14.6667 6.68001L11.3334 9.92668L12.12 14.5133L8.00004 12.3467L3.88004 14.5133L4.66671 9.92668L1.33337 6.68001L5.94004 6.00668L8.00004 1.83334Z"
                    fill="#fffff2"
                  />
                </svg>
                {formatted}
              </p>
              <p className={styles.difficulty}>難度 {el.difficulty_short}級</p>
            </div>
          </div>
          <div className={styles.information}>
            <div className={styles.info}>
              <h4>{el.trail_name}</h4>
              <p>
                {el.geo_location_sid}
                {el.geo_location_town_sid}
              </p>
            </div>
            <div className={styles.price}>
              <p>NTD</p>
              <h4>{el.price}</h4>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default YichunProductCard
