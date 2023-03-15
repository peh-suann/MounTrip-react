import React from 'react'
import styles from './../styles/Coupon.module.css'

export default function LaiCouponStateBtn(props) {
  const { state } = props

  const showBtnText = (state) => {
    switch (state) {
      case 'on':
        return '可使用'
        break
      case 'off':
        return '已過期'
        break
      case 'future':
        return '尚未開放'
        break
    }
  }
  return (
    <>
      <div className={styles.coupon_status_off}>
        <p>{showBtnText(state)}</p>
      </div>
    </>
  )
}