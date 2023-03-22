import React from 'react'
import styles from './../styles/Coupon.module.css'
import CouponStateBtnOn from './LaiCouponStateBtnOn.js'
import CouponStateBtnOff from './LaiCouponStateBtnOff'
import CouponStateBtnFuture from './LaiCouponStateBtnFuture'

export default function LaiCouponCard(props) {
  const { tag, couponCode, couponDescrib, dateStart, dateEnd, state } = props
  //   const [ state ,setState] = useState()
  const btnStyle = (state) => {
    switch (state) {
      case 1:
        return 'on'
      case 2:
        return 'off'
      case 3:
        return 'future'
    }
  }
  return (
    <>
      <div className={styles['coupon-item']}>
        <p className={`${styles['coupon-tag']} ${styles['item1']}`}>{tag}</p>
        <div className={styles['coupon-card']}>
          <p className={styles['coupon-name']}>{couponCode}</p>
          <p className={styles['coupon-describ']}>{couponDescrib}</p>
          <p className={styles['coupon-date']}>
            {dateStart} - {dateEnd}
          </p>
          {btnStyle(state) === 'on' && <CouponStateBtnOn state={'on'} />}
          {btnStyle(state) === 'off' && <CouponStateBtnOff state={'off'} />}
          {btnStyle(state) === 'future' && (
            <CouponStateBtnFuture state={'future'} />
          )}
          {/* <CouponStateBtn state={state} /> */}
          {/* <CouponStateBtn state={'coupon_status_on'}/> */}
          {/* <CouponStateBtn state={'coupon_status_future'}/> */}
          {/* <div
            className={`${styles['coupon-status-off']} ${styles['state-btn']}`}
          >
            <p>已過期</p>
          </div> */}
        </div>
      </div>
    </>
  )
}
