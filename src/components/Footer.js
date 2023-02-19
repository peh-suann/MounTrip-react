import React from 'react'
import styles from '../styles/Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.leftGroup}>
        <ul className={styles.ul}>
          <li className="">
            <Link className={styles.link} to="">
              聯絡我們
            </Link>
          </li>
          <div className={styles.bar}></div>
          <li className="">
            <Link className={styles.link} to="">
              隱私權條款
            </Link>
          </li>
          <div className={styles.bar}></div>

          <li className="">
            <Link className={styles.link} to="">
              常見問題及幫助
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.rightGroup}>
        COPYRIGHTⓒ 2023 MOUNTRIP All rights reserved
      </div>
    </div>
  )
}
