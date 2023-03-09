import React from 'react'
import styles from './../styles/HistoryOrder.module.css'
import OrderCard from './../components/LaiHistoryOrderCard'
import HistoryProduct from './../components/LaiHistoryProduct'

export default function LaiHistoryOrder() {
  //展開選單
  //   const dropdownBtn = document.querySelectorAll('.arrow-btn')
  //   const dropdownPart = document.querySelector('.dropdown')

  //   dropdownBtn.forEach((b) => {
  //     b.addEventListener('click', (e) => {
  //       e.stopPropagation()
  //       e.currentTarget.classList.toggle('show')
  //       e.currentTarget.parentElement.nextElementSibling.lastElementChild.classList.toggle(
  //         'show'
  //       )
  //     })
  //   })

  return (
    <>
      <div className={styles['member-data']}>
        <div className={styles['title']}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
              stroke="#6cba7c"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 6.5V12.5L16 14.5"
              stroke="#6cba7c"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <h1>歷史訂單</h1>
        </div>
        <OrderCard>
          <HistoryProduct />
        </OrderCard>
        <OrderCard>
          <HistoryProduct />
          <HistoryProduct />
          <HistoryProduct />
        </OrderCard>
        <OrderCard>
          <HistoryProduct />
        </OrderCard>
      </div>
    </>
  )
}
