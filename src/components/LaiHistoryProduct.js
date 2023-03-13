import React from 'react'
import styles from './../styles/HistoryOrder.module.css'

export default function LaiHistoryProduct(props) {
  const { img, productTitle, productSubTi, dateStart, dateEnd, price, amount } =
    props
  const countTolPrice = (p, amount) => {
    let priceNum = parseInt(p.replace(',', ''))
    let tolPrice = priceNum * amount

    return tolPrice.toLocaleString()
  }
  const TolPrice = countTolPrice(price, amount)

  return (
    <>
      <div className={styles['dropdown-bar']}></div>
      <div className={`${styles['product-wrap']}`}>
        <div className={styles['img-title-wrap']}>
          <div className={styles['img-wrap']}>
            <div className={styles['img-wrap-img']}></div>
          </div>
          <div className={styles['title-wrap']}>
            <h6>{productTitle}</h6>
            <p>{productSubTi}</p>
          </div>
          <div className={styles['date-wrap']}>
            <p>{dateStart}</p>
            <div className={styles['date-dash']}></div>
            <p>{dateEnd}</p>
          </div>
        </div>
        <div className={styles['single-price-wrap']}>
          <p>NTD</p>
          <p>{price}</p>
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
