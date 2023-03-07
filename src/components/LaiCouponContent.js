import React from 'react'
import styles from './../styles/Coupon.module.css'

export default function LaiCouponContent() {
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
              d="M20 12.5V22.5H4V12.5"
              stroke="#6cba7c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 7.5H2V12.5H22V7.5Z"
              stroke="#6cba7c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 22.5V7.5"
              stroke="#6cba7c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 7.5H7.5C6.83696 7.5 6.20107 7.23661 5.73223 6.76777C5.26339 6.29893 5 5.66304 5 5C5 4.33696 5.26339 3.70107 5.73223 3.23223C6.20107 2.76339 6.83696 2.5 7.5 2.5C11 2.5 12 7.5 12 7.5Z"
              stroke="#6cba7c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 7.5H16.5C17.163 7.5 17.7989 7.23661 18.2678 6.76777C18.7366 6.29893 19 5.66304 19 5C19 4.33696 18.7366 3.70107 18.2678 3.23223C17.7989 2.76339 17.163 2.5 16.5 2.5C13 2.5 12 7.5 12 7.5Z"
              stroke="#6cba7c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h1>我的優惠券</h1>
        </div>
        <div className={styles['container']}>
          <div className={styles['filter-area']}>
            <div className={styles['show-number']}>
              <p>共有</p>
              <p id="coupon-amount">7</p>
              <p>張優惠券</p>
            </div>
            <div className={styles['filter-btn']}>
              <select>
                <option>排列順序</option>
                <option>全部</option>
                <option>未使用</option>
                <option>已使用</option>
                <option>即將到期</option>
              </select>
            </div>
          </div>
          <div className={styles['coupon-list']}>
            <div className={styles['coupon-item']}>
              <p className={`${styles['coupon-tag']} ${styles['item1']}`}>
                限量！
              </p>
              <div className={styles['coupon-card']}>
                <p className={styles['coupon-name']}>happy30123</p>
                <p className={styles['coupon-describ']}>
                  消費滿 200 折！， 150 再享 30 次免外送費
                </p>
                <p className={styles['coupon-date']}>2023/01/01 - 2023/01/02</p>
                <div
                  className={`${styles['coupon-status-off']} ${styles['state-btn']}`}
                >
                  <p>已過期</p>
                </div>
              </div>
            </div>
            <div className={styles['coupon-item']}>
              <p className={`${styles['coupon-tag']} ${styles['item2']}`}>
                限量！
              </p>
              <div className={styles['coupon-card']}>
                <p className={styles['coupon-name']}>NEW2023</p>
                <p className={styles['coupon-describ']}>
                  舊會員單筆消費滿 NT$300 折 NT$100
                </p>
                <p className={styles['coupon-date']}>2023/01/01 - 2023/01/02</p>
                <div
                  className={`${styles['coupon-status-off']} ${styles['state-btn']}`}
                >
                  <p>已過期</p>
                </div>
              </div>
            </div>
            {/* <div className={styles[]}"coupon-item ">
              <p className={styles[]}"coupon-tag item3">限量！</p>
              <div className={styles[]}"coupon-card">
                <p className={styles[]}"coupon-name">COFFEEYA</p>
                <p className={styles[]}"coupon-describ">
                  首購生鮮雜貨家樂福 消費享 5 折最高折 200
                </p>
                <p className={styles[]}"coupon-date">2023/01/01 - 2023/07/02</p>
                <div className={styles[]}"coupon-status-on state-btn">
                  <p>現正熱門</p>
                </div>
              </div>
            </div> */}
            {/* <div className={styles[]}"coupon-item">
              <p className={styles[]}"coupon-tag item4">限量！</p>
              <div className={styles[]}"coupon-card">
                <p className={styles[]}"coupon-name">HAPPYTRIP</p>
                <p className={styles[]}"coupon-describ">
                  消費滿 200 折 150 再享 30 次免外送費
                </p>
                <p className={styles[]}"coupon-date">2023/03/01 - 2023/12/02</p>
                <div className={styles[]}"coupon-status-on state-btn">
                  <p>現正熱門</p>
                </div>
              </div>
            </div> */}
            {/* <div className={styles[]}"coupon-item ">
              <p className={styles[]}"coupon-tag item5">限量！</p>
              <div className={styles[]}"coupon-card">
                <p className={styles[]}"coupon-name">happy40</p>
                <p className={styles[]}"coupon-describ">
                  消費滿 200 折 150 再享 30 次免外送費
                </p>
                <p className={styles[]}"coupon-date">2023/04/01 - 2023/12/02</p>
                <div className={styles[]}"coupon-status-future state-btn">
                  <p>即將生效</p>
                </div>
              </div>
            </div> */}
            {/* <div className={styles[]}"coupon-item ">
              <p className={styles[]}"coupon-tag item6">限量！</p>
              <div className={styles[]}"coupon-card">
                <p className={styles[]}"coupon-name">summer100</p>
                <p className={styles[]}"coupon-describ">
                  消費滿 200 折 150 再享 30 次免外送費
                </p>
                <p className={styles[]}"coupon-date">2023/7/01 - 2023/9/02</p>
                <div className={styles[]}"coupon-status-future state-btn">
                  <p>即將生效</p>
                </div>
              </div>
            </div> */}
            {/* <div className={styles[]}"coupon-item ">
              <p className={styles[]}"coupon-tag item7">限量！</p>
              <div className={styles[]}"coupon-card">
                <p className={styles[]}"coupon-name">autumntrip</p>
                <p className={styles[]}"coupon-describ">
                  消費滿 200 折 150 再享 30 次免外送費
                </p>
                <p className={styles[]}"coupon-date">2023/9/01 - 2023/12/30</p>
                <div className={styles[]}"coupon-status-future state-btn">
                  <p>即將生效</p>
                </div>
              </div>
            </div> */}
            {/* <div className={styles[]}"coupon-item ">
              <p className={styles[]}"coupon-tag item7">限量！</p>
              <div className={styles[]}"coupon-card">
                <p className={styles[]}"coupon-name">autumntrip</p>
                <p className={styles[]}"coupon-describ">
                  消費滿 200 折 150 再享 30 次免外送費
                </p>
                <p className={styles[]}"coupon-date">2023/9/01 - 2023/12/30</p>
                <div className={styles[]}"coupon-status-future state-btn">
                  <p>即將生效</p>
                </div>
              </div>
            </div> */}
            {/* <div className={styles[]}"coupon-item ">
              <p className={styles[]}"coupon-tag item7">限量！</p>
              <div className={styles[]}"coupon-card">
                <p className={styles[]}"coupon-name">autumntrip</p>
                <p className={styles[]}"coupon-describ">
                  消費滿 200 折 150 再享 30 次免外送費
                </p>
                <p className={styles[]}"coupon-date">2023/9/01 - 2023/12/30</p>
                <div className={styles[]}"coupon-status-future state-btn">
                  <p>即將生效</p>
                </div>
              </div>
            </div> */}
            {/* <div className={styles[]}"coupon-item ">
              <p className={styles[]}"coupon-tag item7">限量！</p>
              <div className={styles[]}"coupon-card">
                <p className={styles[]}"coupon-name">autumntrip</p>
                <p className={styles[]}"coupon-describ">
                  消費滿 200 折 150 再享 30 次免外送費
                </p>
                <p className={styles[]}"coupon-date">2023/9/01 - 2023/12/30</p>
                <div className={styles[]}"coupon-status-future state-btn">
                  <p>即將生效</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
