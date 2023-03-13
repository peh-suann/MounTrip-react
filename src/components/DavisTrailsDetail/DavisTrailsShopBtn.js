import React from 'react'
import styles from '../../styles/DavisTrailsDetail.module.css'

function DavisTrailsShopBtn() {
  return (
    <>
      <button
        className={`col d-flex flex-row justify-content-center mb-2 ${styles.shop_btn_three}`}
      >
        <h5 className={`mb-0 align-self-center ${styles.btn_font}`}>
          加入購物車
        </h5>
        <span className="align-self-center">
          <svg
            className=""
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18.5L15 12.5L9 6.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </>
  )
}

export default DavisTrailsShopBtn
