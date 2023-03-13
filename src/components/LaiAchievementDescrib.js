import React from 'react'
import styles from './../styles/Achievement.module.css'

export default function LaiAchievementDescrib() {
  return (
    <>
      <div className={styles['describ']}>
        <div className={styles['describ-tag-wrap']}>
          <div className={`${styles['des-tag']} ${styles['low']}`}>
            新手山友
          </div>
          <div className={`${styles['des-tag']} ${styles['mid']}`}>
            初級嚮導
          </div>
          <div className={`${styles['des-tag']} ${styles['high']}`}>
            超級嚮導
          </div>
        </div>
        <div className={styles['tag-border']}></div>
        <div className={styles['describ-mid']}>
          <h6>累計消費滿25,000元解鎖</h6>
        </div>
      </div>
    </>
  )
}
