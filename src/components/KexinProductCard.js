import React, { useContext, useState, useEffect } from 'react'
import * as d3 from 'd3'
import { StylesContext } from './../pages/YichunProducts'
import { StatusContext, ProductContext } from '../pages/KexinIndex'
import { LoginContext } from '../App'
import styles from '../styles/kexinLandmark.module.css'

function KexinProductCard(props) {
  const { ranking, el, shadow } = props
  const styles = useContext(StylesContext)
  const { mapInteraction, setMapInteraction } = useContext(LoginContext)
  const { myProduct, setMyProduct } = useContext(ProductContext)

  return (
    <>
      <div
        className={styles.product}
        onClick={() => {
          // TODO: if抓不到資料該怎麼顯示
          console.log('商品sid',el.sid)
          setMapInteraction(2)
          setMyProduct(el)

          d3.select('#landmark').remove()
          d3.select('#landmark1').remove()

          const WIDTH = window.innerWidth
          const HEIGHT = window.innerHeight


          const projection = d3
            .geoMercator()
            .center([121, 23.58])
            .scale(10000)
            .translate([WIDTH / 2, HEIGHT / 2])


          d3.select('#mapZoom')
            .append('svg')
            .attr('id', 'landmark')
            .attr('class', 'landmark')
            .attr('width', '10')
            .attr('height', '10')
            .attr('viewBox', '0 0 38 38')
            .attr('x', projection([el.lon, el.lat])[0]-5)
            .attr('y', projection([el.lon, el.lat])[1]-5)
            .append('path')
            .attr(
              'd',
              'M33.25 15.834C33.25 26.9173 19 36.4173 19 36.4173C19 36.4173 4.75 26.9173 4.75 15.834C4.75 12.0546 6.25133 8.43011 8.92373 5.75771C11.5961 3.08532 15.2207 1.58398 19 1.58398C22.7793 1.58398 26.4039 3.08532 29.0763 5.75771C31.7487 8.43011 33.25 12.0546 33.25 15.834Z'
            )
            .style('fill', '#F3C969')

          d3.select('#mapZoom')
            .append('svg')
            .attr('id', 'landmark1')
            .attr('width', '10')
            .attr('height', '10')
            .attr('viewBox', '0 0 38 38')
            .attr('x', projection([el.lon, el.lat])[0]-5)
            .attr('y', projection([el.lon, el.lat])[1]-5)
            .append('path')
            .attr(
              'd',
              'M19 20.584C21.6234 20.584 23.75 18.4573 23.75 15.834C23.75 13.2106 21.6234 11.084 19 11.084C16.3766 11.084 14.25 13.2106 14.25 15.834C14.25 18.4573 16.3766 20.584 19 20.584Z'
            )
            .style('fill', 'white')
        }}
      >
        <div
          className={styles.ranking}
          style={ranking ? {} : { display: 'none' }}
        >
          {ranking}
        </div>
        <div
          className={`${styles.pic} ${styles.pic_kexin} ${shadow ? styles.pic_shadow : ''}`}
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
              {el.avg_score ? el.avg_score.slice(0,3) : ''}
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
    </>
  )
}

export default KexinProductCard
