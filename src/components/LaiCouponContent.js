import React, { useContext, useEffect, useState } from 'react'
import styles from './../styles/Coupon.module.css'
import CouponCard from './../components/LaiCouponCard'
import CouponAmount from './LaiCouponAmount'
import axios from 'axios'
import { USER_COUPON } from '../connections/api-config'
import { TestCouponContext } from '../contexts/TestCouponContext'

export default function LaiCouponContent({ children }) {
  const [userCoupon, setUserCoupon] = useState([])
  const [couponStartDate, setCouponStartDate] = useState([])
  const [couponEndDate, setCouponEndDate] = useState([])

  // yichun's test coupon change
  const { newCoupon } = useContext(TestCouponContext)

  const getUserCoupon = async (req, res) => {
    const userString = localStorage.getItem('myAuth')
    const userData = JSON.parse(userString)
    const token = userData.token
    const mid = userData.accountId

    try {
      const res = await axios.get(USER_COUPON, {
        headers: { Authorization: `Bearer ${token}`, sid: mid },
      })
      if (!res.data) return res.sendStatus(401)
      // let startDate = []
      // let endDate = []
      // let StartEnd = []

      setUserCoupon(res.data)
      const output = res.data.length
      console.log('res', res.data) //res.data是裡面包著n比obj資料的arr
      return output
    } catch (error) {
      console.log('coupon axios err')
      return []
    }
  }
  const stateConvert = (state) => {
    switch (state) {
      case 1:
        return 'on'
      case 2:
        return 'off'
      case 3:
        return 'future'
    }
  }
  // const dateConvert = (data) => {
  //   data.map((v, i) => {
  //     const
  //   })
  // }
  useEffect(() => {
    getUserCoupon()
    // console.log(userCoupon)
  }, [])
  useEffect(() => {
    getUserCoupon()
  }, [newCoupon])
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
              {/* TODO連結評論數量 */}
              <CouponAmount amount={userCoupon.length} />
              <p>張優惠券</p>
            </div>
            {/*
             */}
          </div>
          <div className={styles['coupon-list']}>
            {userCoupon.map((v, i) => {
              return (
                <CouponCard
                  key={i}
                  tag={v.promo_name}
                  couponCode={v.coupon_code}
                  couponDescrib={v.coupon_name}
                  dateStart={v.startDate}
                  dateEnd={v.endDate}
                  state={v.coupon_status}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
