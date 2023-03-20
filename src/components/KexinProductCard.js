import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { StylesContext } from './../pages/YichunProducts'
import { StatusContext, ProductContext } from '../pages/KexinIndex'
// import { SELECT_PRODUCT } from '../connections/api-config'

function KexinProductCard(props) {
  const { ranking, el, shadow } = props
  const styles = useContext(StylesContext)
  const { mapInteraction, setMapInteraction } = useContext(StatusContext)
  const { myProduct, setMyProduct } = useContext(ProductContext)

  // const [data, setData] = useState({
  //   rows: [],
  // })

  // const getProductData = async (sid) => {
  //   const response = await axios.get(SELECT_PRODUCT, {
  //     params: {
  //       sid,
  //     },
  //   })
  //   setData(response.data)
  //   console.log('response',response.data)
  // }

  // // useEffect(() => {
  // //   getProductData(myProduct.sid)
  // // }, myProduct.sid)


  return (
    <>
      <div
        className={styles.product}
        onClick={() => {
          // TODO: if抓不到資料該怎麼顯示
          console.log(el.sid)
          setMapInteraction(2)
          // getProductData(el.sid)
          
          setMyProduct(el)
        }}
      >
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
              4.5
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
