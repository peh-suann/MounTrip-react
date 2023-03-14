import React, { useContext, useEffect } from 'react'
import { StylesContext } from './../pages/YichunProducts'
import Button from './Button'

function YichunDiffRank(props) {
  const { el } = props
  const styles = useContext(StylesContext)
  useEffect(() => {
    console.log(document.documentElement.clientWidth)
  }, [])
  return (
    <>
      <div className={styles.rank}>
        {document.documentElement.clientWidth > 390 ? (
          <svg
            width="180"
            height="180"
            viewBox="0 0 180 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="90" cy="90" r="90" fill="#CEE8CB" />
          </svg>
        ) : (
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="40" cy="40" r="40" fill="#CEE8CB" />
          </svg>
        )}
        <div className={styles.diff_intro}>
          <h4>
            {el.diffCn} {document.documentElement.clientWidth > 390 ? '' : <br />} {el.diffEng}
          </h4>
          <p>
            初級山是大家的 <u>#{el.describe}</u>
          </p>
          <Button text={'查看更多'} iconFront={0} iconEnd={1} />
        </div>
      </div>
    </>
  )
}

export default YichunDiffRank
