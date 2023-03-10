import React from 'react'
import styles from './../styles/Member.module.css'

export default function LaiMemberProfileLevelTag(props) {
  const { level } = props
  const showLevel = (l) => {
    switch (l) {
      case 1:
        return '新手山友'
        // break
      case 2:
        return '初級嚮導'
      case 3:
        return '超級嚮導'
    }
  }
  return (
    <>
      <span className={styles['level-tag']}>{showLevel(level)}</span>
    </>
  )
}
