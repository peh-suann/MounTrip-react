import React from 'react'
import styles from './../styles/Achievement.module.css'
import { motion } from 'framer-motion'

export default function LaiAchievementProgressBar(props) {
  const { current, target } = props
  const topLength = parseInt(current.replace(',', ''))
  const botLength = parseInt(target.replace(',', ''))
  const barLength = (topLength / botLength) * 100
  return (
    <>
      <div className={styles['progress-bars']}>
        <div className={styles['bar-wrap']}>
          <div className={styles['bar-base']}></div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              type: 'spring',

              duration: 1,
              delay: 1,
            }}
            className={styles['bar-top']}
            style={{ width: `${barLength}%`, transformOrigin: 'left' }}
          ></motion.div>
        </div>
        <div className={styles['goal-number-wrap']}>
          <div className={styles['current-num']}>{current}</div>
          <div className={styles['goal-num']}>/{target}</div>
        </div>
      </div>
    </>
  )
}
