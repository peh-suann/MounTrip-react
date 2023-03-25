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
// export const StylesContext = createContext(styles)

function YichunTestPlayed() {
  const { setNewCoupon } = useContext(TestCouponContext)
  // mountain moving effect
  const mountainG2Ref = useRef(null)
  const mountainY2Ref = useRef(null)
  const mountainG1Ref = useRef(null)
  const mountainY1Ref = useRef(null)

  let timeoutId
  let mouseX, mouseY

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
      <section
        className={styles.played}
        onMouseMove={(e) => {
          if (window.innerWidth > 390) {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(function () {
              // code to be executed after 100ms delay
              const windowHeight = window.innerHeight
              const windowWidth = window.innerWidth
              const halfHeight = windowHeight / 2
              const halfWidth = windowWidth / 2

              mouseX = e.clientX
              mouseY = e.clientY

              const moveX = (mouseX - halfWidth) / halfWidth
              const moveY = (mouseY - halfHeight) / halfHeight

              // console.log('----------------------')
              // console.log('mouseX: ', mouseX)
              // console.log('mouseY: ', mouseY)
              // console.log('moveX: ', moveX)
              // console.log('moveY: ', moveY)

              // console.log('mountainY1Ref', mountainY1Ref)

              mountainG2Ref.current.style.transform = `translate(${
                moveX * 1
              }%,${moveY * 4}%) scale(1.1)`
              mountainY2Ref.current.style.transform = `translate(${
                moveX * -1
              }%,${moveY * 2}%) scale(1.105)`
              mountainG1Ref.current.style.transform = `translate(${
                moveX * 0.5
              }%,${moveY * 2}%) scale(1.2)`
              mountainY1Ref.current.style.transform = `translate(${
                moveX * -0.5
              }%,${moveY * -3}%) scale(1.11)`
            })
          }
        }}
      >
        <h2>你已經領過優惠券了啦！</h2>
        <Button text={'前往優惠券'} handleClick={handleClick} link={'member'} />
        <img
          className={`${styles.mountains} ${styles.g2}`}
          src="images/yichun/test/mountain/g-2.svg"
          alt=""
          ref={mountainG2Ref}
        />
        <img
          className={`${styles.mountains} ${styles.y2}`}
          src="images/yichun/test/mountain/y-2.svg"
          alt=""
          ref={mountainY2Ref}
        />
        <img
          className={`${styles.mountains} ${styles.g1}`}
          src="images/yichun/test/mountain/g-1.svg"
          alt=""
          ref={mountainG1Ref}
        />
        <img
          className={`${styles.mountains} ${styles.y1}`}
          src="images/yichun/test/mountain/y-1.svg"
          alt=""
          ref={mountainY1Ref}
        />
      </section>
    </>
  )
}

export default YichunTestPlayed
