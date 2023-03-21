import React from 'react'
import styles from './../styles/Achievement.module.css'
import BadgeLevel1 from './LaiAchievementBadgeLevel1'
import BadgeLevel2 from './LaiAchievementBadgeLevel2'
import BadgeLevel3 from './LaiAchievementBadgeLevel3'
import Tilt from 'react-parallax-tilt'

export default function LaiAchievementBadge(props) {
  const { level } = props
  return (
    <>
      <div className={styles['badge']}>
        {level === 1 ? <BadgeLevel1 /> : null}
        {level === 2 ? <BadgeLevel2 /> : null}
        {level === 3 ? <BadgeLevel3 /> : null}
        {/* <div className={styles['badge-pic']}></div> */}
      </div>
    </>
  )
}
