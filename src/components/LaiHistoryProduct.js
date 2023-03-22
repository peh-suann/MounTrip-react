import React, { useEffect } from 'react'
import styles from './../styles/HistoryOrder.module.css'
import axios from 'axios'
import { USER_ORDER_DETAIL } from '../connections/api-config'

export default function LaiHistoryProduct(props) {
  const {
    originOrderSid, //沒編輯過的訂單編號order_sid 陣列
    orderId, //這是有編輯過的訂單編號 MT2300XXX
    userOrder,
    setUserOrder,
    productTitle,
    productSubTi,
    dateStart,
    dateEnd,
    price,
    amount,
    open,
    img,
  } = props
  let currentOrderProduct = []

  const countTolPrice = (p, amount) => {
    let priceNum = parseInt(p.replace(',', ''))
    let tolPrice = priceNum * amount

    return tolPrice.toLocaleString()
  }
  // const TolPrice = countTolPrice(price, amount)

  //總價的字串
  const TolPrice = (price * amount).toLocaleString()
  const priceString = price.toLocaleString()

  //圖片網址
  const productImgUrl =
    '../../../public/images/public_images/product_image/' + img
  const PUBLIC = process.env.PUBLIC_URL
  const Url = PUBLIC + '/images/public_images/product_image/' + img
  // public/images/public_images/product_image/9-1.jpg
  return (
    <>
      <div className={styles['dropdown-bar']}></div>
      <div className={`${styles['product-wrap']}`}>
        <div className={styles['img-title-wrap']}>
          <div className={styles['img-wrap']}>
            <div
              className={styles['img-wrap-img']}
              style={{
                background: `url('${Url}')`,
                backgroundSize: 'cover',
              }}
            ></div>
          </div>
          <div className={styles['title-wrap']}>
            <h6>{productTitle}</h6>
            <p className={styles.product_subtitle}>{productSubTi}</p>
          </div>
          <div className={styles['date-wrap']}>
            <p>{dateStart}</p>
            <div className={styles['date-dash']}></div>
            <p>{dateEnd}</p>
          </div>
        </div>
        <div className={styles['single-price-wrap']}>
          <p>NTD</p>
          <p>{priceString}</p>
        </div>
        <div className={styles['amount-wrap']}>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.4502 7.05029L7.5507 16.9498"
              stroke="#011306"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5498 7.05029L17.4493 16.9498"
              stroke="#011306"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>{amount}</p>
        </div>
        <div className={styles['total-price-wrap']}>
          <p>NTD</p>
          <p>{TolPrice}</p>
          {/* <p>{price}</p> */}
        </div>
      </div>
    </>
  )
}
