import React, { useContext } from 'react'
import { StylesContext } from './../pages/YichunProducts'
import Button from './Button'

function YichunDiffRank() {
  const styles = useContext(StylesContext)
  return (
    <>
      <div className={styles.rank}>
        <svg
          width="180"
          height="180"
          viewBox="0 0 180 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="90" cy="90" r="90" fill="#CEE8CB" />
        </svg>
        <div className={styles.diff_intro}>
          <h4>初級 EASY</h4>
          <p>
            初級山是大家的 <u>#好朋友</u>
          </p>
          <Button text={'查看更多'} iconFront={0} iconEnd={1} />
        </div>
      </div>
    </>
  )
}

export default YichunDiffRank
