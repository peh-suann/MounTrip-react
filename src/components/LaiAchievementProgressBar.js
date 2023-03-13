import React from 'react'
import styles from './../styles/Achievement.module.css'

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
          <div
            className={styles['bar-top']}
            style={{ width: `${barLength}%` }}
          ></div>
        </div>
        <div className={styles['goal-number-wrap']}>
          <div className={styles['current-num']}>{current}</div>
          <div className={styles['goal-num']}>/{target}</div>
        </div>
      </div>
    </>
  )
}
