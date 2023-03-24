import React from 'react'
import styles from './../styles/Achievement.module.css'
import TreeCount from './LaiAchievementCountTree'
import TreeCountPersonal from './LaiAchievementCountTreePersonal'
import TreeCanvas from './LaiAchievementCanvas'
import TreeAnimation from './LaiAchievementTreeAnimation'
import TreeAnimation2 from './LaiAchievementTreeAnimation2'

import { motion } from 'framer-motion'
import Button from './Button'

export default function LaiAchievementTreeBlock(props) {
  const { total } = props
  function convertTree(t) {
    if (t < 5000) return 0
    if (5001 < t && t < 10000) return 1
    if (10001 < t && t < 15000) return 2
    if (15001 < t && t < 20000) return 3
    if (20001 < t && t < 25000) return 4
    if (25001 < t && t < 35000) return 5
    if (35001 < t && t < 45000) return 6
    if (45001 < t && t < 55000) return 7
    if (55001 < t && t < 65000) return 8
  }
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
        <TreeCanvas total={total} />
        <motion.div
          className={styles['achievement-state']}
          initial={{ scale: 0, opacity: 0, translateY: '100%' }}
          animate={{ scale: '100%', opacity: 1, translateY: 0 }}
          transition={{ delay: 3, duration: 1.5 }}
        >
          <p>
            透過參加MounTrip的行程，
            {/* <div className={styles['achievement-num']}> */}
            您已經為台灣種下了
            <TreeCountPersonal count={convertTree(total)} />
            {/* <span className={styles['tree-num']}>6</span> */}
            顆樹，恭喜你！
          </p>
          {/* </div> */}
        </motion.div>
        {/* <TreeAnimation /> */}
        <TreeAnimation2 />
        {/* <canvas className={styles.tree_animation}>Hello Canvas</canvas> */}
      </div>
      {/* <div className={styles.animate_btn_wrap}>
        <Button
          text={'再看一次'}
          onClick={() => {
            // startAnimation()
          }}
        />
      </div> */}
    </>
  )
}
