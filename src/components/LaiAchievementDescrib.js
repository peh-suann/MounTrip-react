import React, { useEffect, useState } from 'react'
import styles from './../styles/Achievement.module.css'
import DescribLevel1 from './LaiAchievementDescribLevel1'
import DescribLevel2 from './LaiAchievementDescribLevel2'
import DescribLevel3 from './LaiAchievementDescribLevel3'
import { motion } from 'framer-motion'

const DescribLevels = [DescribLevel1, DescribLevel2, DescribLevel3]

export default function LaiAchievementDescrib(props) {
  const { level, setClickedLevel, clickedLevel } = props
  // const [rules, setRules] = useState(1)
  // setClickedLevel(level)
  // 設定動態元件，裡面的東西一定要全部是元件才能用
  const DescribLevel = DescribLevels[clickedLevel - 1]
  useEffect(() => {
    // setClickedLevel(level)
  }, [])

  // console.log({ DescribLevel, clickedLevel, props })

  return (
    <>
      <div className={styles['describ']}>
        <div className={styles['describ-tag-wrap']}>
          <motion.div
            // className={`${styles['des-tag']} `}
            className={
              clickedLevel === 1
                ? `${styles['active']} ${styles['des-tag']}`
                : styles['des-tag']
            }
            onClick={() => {
              setClickedLevel(1)
            }}
            whileHover={{ backgroundColor: '#add9b1', scale: 1.05 }}
          >
            新手山友
          </motion.div>
          <motion.div
            className={
              clickedLevel === 2
                ? `${styles['active']} ${styles['des-tag']}`
                : styles['des-tag']
            }
            onClick={() => {
              setClickedLevel(2)
            }}
            whileHover={{ backgroundColor: '#add9b1', scale: 1.05 }}
          >
            初級嚮導
          </motion.div>
          <motion.div
            className={
              clickedLevel === 3
                ? `${styles['active']} ${styles['des-tag']}`
                : styles['des-tag']
            }
            onClick={() => {
              setClickedLevel(3)
            }}
            whileHover={{ backgroundColor: '#add9b1', scale: 1.05 }}
          >
            超級嚮導
          </motion.div>
        </div>
        <div className={styles['tag-border']}></div>
        {/* 動態元件 */}
        <DescribLevel />
        {/* <div className={styles['describ-block']}>
          <h6>累計消費滿25,000元解鎖</h6>
        </div> */}
        {/* {rules === 1 ? <DescribLevel1 /> : null}
        {rules === 2 ? <DescribLevel2 /> : null}
        {rules === 3 ? <DescribLevel3 /> : null} */}
      </div>
    </>
  )
}
