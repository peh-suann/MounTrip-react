import React from 'react'
import styles from './../styles/HistoryOrder.module.css'

export default function LaiHistoryProduct() {
  return (
    <>
      <div className={styles['dropdown-bar']}></div>
      <div className={`${styles['product-wrap']}`}>
        <div className={styles['img-title-wrap']}>
          <div className={styles['img-wrap']}>
            <div className={styles['img-wrap-img']}></div>
          </div>
          <div className={styles['title-wrap']}>
            <h6>草嶺古道｜探索新北一探索新北一</h6>
            <p>草嶺古道單日行程</p>
          </div>
          <div className={styles['date-wrap']}>
            <p>2023/01/01</p>
            <div className={styles['date-dash']}></div>
            <p>2023/01/02</p>
          </div>
        </div>
        <div className={styles['single-price-wrap']}>
          <p>NTD</p>
          <p>1,200</p>
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
          <p>1</p>
        </div>
        <div className={styles['total-price-wrap']}>
          <p>NTD</p>
          <p>1,200</p>
        </div>
      </div>
    </>
  )
}
