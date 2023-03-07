import React from 'react'
import styles from '../styles/Footer.module.css'
// import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer>
        <div className={styles.left_links}>
          <a href="/">聯絡我們</a>
          <span>|</span>
          <a href="/">隱私權條款</a>
          <span>|</span>
          <a href="/">常見問題及幫助</a>
        </div>
        <h6 className={styles.copyright}>
          COPYRIGHT © 2023 MOUNTRIP All rights reserved.
        </h6>
      </footer>
    </>
  )
}
