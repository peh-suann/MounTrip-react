// Packages
import React, {
  createContext,
  useEffect,
  useState,
  useRef,
  useContext,
} from 'react'
import axios from 'axios'

// Components
import YichunQuestionSection from '../components/YichunQuestionSection'
import Button from '../components/Button'
import Navbar from './../layouts/Navbar.js'

// Connections
import {
  TEST_QUES,
  TEST_PLAY,
  TEST_TOGGLE_PLAY,
} from '../connections/api-config'

// Context
import { TestCouponContext } from '../contexts/TestCouponContext'

// Styles
import styles from './../styles/yichun_styles/YichunTestPlayed.module.css'
export const StylesContext = createContext(styles)

function YichunTestPlayed() {
  const { setNewCoupon } = useContext(TestCouponContext)

  const handleClick = () => {
    // console.log('hi coupon')
    // 因為是已經有玩過的用戶
    // 不需要重新發送確認信
    setNewCoupon(false)
    localStorage.setItem('memberPage', 'coupon')
  }
  return (
    <>
      <Navbar />
      <section className={styles.played}>
        <h2>你已經領過優惠券了啦！</h2>
        <Button text={'前往優惠券'} handleClick={handleClick} link={'member'} />
      </section>
    </>
  )
}

export default YichunTestPlayed
