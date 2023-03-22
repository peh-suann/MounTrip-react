import React from 'react'
import styles from './../styles/Achievement.module.css'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

export default function LaiAchievementBadgeLevel2() {
  return (
    <>
      <Tilt
        className="tilt-img"
        tiltMaxAngleX={35}
        tiltMaxAngleY={35}
        perspective={900}
        scale={1.2}
        transitionSpeed={2000}
        gyroscope={true}
      >
        <div className={styles['badge-pic-2']}></div>
      </Tilt>
      <motion.div
        initial={{ x: '-10%', scale: 0.6, opacity: 0 }}
        whileHover={{
          x: '45%',
          scale: 1.1,
          opacity: 1,
          transition: { duration: 0.5 },
        }}
        className={styles.levelText}
      >
        "竹"
      </motion.div>
    </>
  )
}
