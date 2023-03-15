import React from 'react'
import styles from './../styles/Coupon.module.css'

export default function LaiCouponAmount(props) {
  const { amount } = props
  return (
    <>
      <p id={styles['coupon-amount']}>{amount}</p>
    </>
  )
}