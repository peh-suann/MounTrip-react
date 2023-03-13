import React from 'react'
import styles from './../styles/Achievement.module.css'
import TreeCount from './LaiAchievementCountTree'
import TreeCountPersonal from './LaiAchievementCountTreePersonal'
import TreeCanvas from './LaiAchievementCanvas'

export default function LaiAchievementTreeBlock() {
  return (
    <>
      <div className={styles['tree-block']}>
        <div className={styles['describ-rules']}>
          <h2>
            有了您的幫助，今年我們預計再種 <TreeCount count={230} />
            {/* <span className={styles['percent3']}>250</span>  */}
            顆樹
          </h2>
          <h3>
            <span className={styles['percent2']}>1,268</span>{' '}
            是我們過去五年為台灣種下的樹
          </h3>
          <h3>
            <span className={styles['percent2']}>2%</span>{' '}
            MounTrip營收將會作為公益使用
          </h3>
          <p>
            MounTrip與「財團法人慈心基金會」合作，自2018年開始，每年將營業收入的
            <span className={styles['percent']}>2%</span>
            投入種樹護地球的活動中。所捐贈的金額涵蓋種樹的費用以及後續三年間養護樹林的支出。
          </p>
        </div>
        <div className={styles['rules-border']}></div>
        <div className={styles['achievement-state']}>
          <p>
            透過參加MounTrip的行程，
            {/* <div className={styles['achievement-num']}> */}
            您已經為台灣種下了
            <TreeCountPersonal count={7} />
            {/* <span className={styles['tree-num']}>6</span> */}
            顆樹，恭喜你！
          </p>
          {/* </div> */}
        </div>
        <TreeCanvas />
        {/* <canvas className={styles.tree_animation}>Hello Canvas</canvas> */}
      </div>
    </>
  )
}
