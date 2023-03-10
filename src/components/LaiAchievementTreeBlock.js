import React from 'react'
import styles from './../styles/Achievement.module.css'

export default function LaiAchievementTreeBlock() {
  return (
    <>
      <div className={styles['tree-block']}>
        <div className={styles['describ-rules']}>
          <p>
            MounTrip與「財團法人慈心基金會」合作，自2018年開始，每年將營業收入的
            <span className={styles['percent']}>2%</span>
            投入種樹護地球的活動中。所捐贈的金額涵蓋種樹的費用以及後續三年間養護樹林的支出。
            MounTrip過去五年來透過慈心基金會，總計在台灣種下了
            <span className={styles['history-tree']}>1,268</span>
            顆樹，今年底預計再種植250顆樹！
          </p>
        </div>
        <div className={styles['rules-border']}></div>
        <div className={styles['achievement-state']}>
          <p>透過參加MounTrip的行程，</p>
          <div className={styles['achievement-num']}>
            <p>您已經為台灣種下了</p>
            <span className={styles['tree-num']}>6</span>
            <p>顆樹，恭喜你！</p>
          </div>
        </div>
      </div>
    </>
  )
}
