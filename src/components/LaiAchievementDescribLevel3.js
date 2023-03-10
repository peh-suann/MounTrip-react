import React from 'react'
import styles from './../styles/Achievement.module.css'

export default function LaiAchievementDescribLevel1() {
  return (
    <>
      <div className={styles['describ-block']}>
        <h6>恭喜您達到MounTrip的最高會員等級</h6>
        <h6>優惠內容：每年生日月份發放85折折價券三張</h6>
        {/* <p>下個成就：於MounTrip累計消費滿25,000NTD解鎖</p> */}
      </div>
    </>
  )
}
