import React from 'react'
import styles from './../styles/Coupon.module.css'
import CouponCard from './../components/LaiCouponCard'
import CouponAmount from './LaiCouponAmount'

export default function LaiCouponContent({ children }) {
  // const countCard = React.Children.toArray(children).filter(
  //   (child) => child.type === '<CouponCard />'
  // ).length
  // console.log(countCard)
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
              <CouponAmount amount={5} />
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
            <CouponCard
              tag={''}
              couponCode={'HAPPY123'}
              couponDescrib={'消費滿 200 折！， 150 再享 30 次免外送費'}
              dateStart={'2023/01/01'}
              dateEnd={'2023/02/28'}
              state={'on'}
            />
            <CouponCard
              tag={'限量!'}
              couponCode={'XMAS90'}
              couponDescrib={'避難器具緩降機使用方法折90啦'}
              dateStart={'2023/03/01'}
              dateEnd={'2023/04/30'}
              state={'off'}
            />
            <CouponCard
              tag={'限量!'}
              couponCode={'MOUNTRIP99'}
              couponDescrib={'MOUNTRIP周年慶、歡慶地球日'}
              dateStart={'2023/05/01'}
              dateEnd={'2023/06/30'}
              state={'future'}
            />
          </div>
        </div>
      </div>
    </>
  )
}