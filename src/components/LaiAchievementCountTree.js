import React from 'react'
import styles from './../styles/Achievement.module.css'

export default function LaiAchievementCountTree(props) {
  const { count } = props
  return (
    <>
      <span className={styles['percent3']}>{count}</span>
    </>
  )
}
