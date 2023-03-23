import React, { useContext, useEffect, useRef } from 'react'
import { StylesContext } from './../pages/YichunProducts'
import Button from './Button'

function YichunDiffRank(props) {
  const { el, index, diff, toggleDiff } = props
  const styles = useContext(StylesContext)

  useEffect(() => {
    console.log(document.documentElement.clientWidth)
  }, [])
  return (
    <>
      <div className={styles.rank}>
        {document.documentElement.clientWidth > 390 ? (
          <>
            <div
              className={styles.img_wrapper}
              onClick={() => {
                toggleDiff(el)
              }}
            >
              <div
                className={`${styles.circle} ${
                  index === diff ? styles.on : ''
                }`}
              ></div>
              <img
                className={index === diff ? styles.on : ''}
                src={`images/yichun/1x/2x/0${index}.png`}
                alt=""
              />
            </div>
          </>
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
            {el.diffCn}級{' '}
            {document.documentElement.clientWidth > 390 ? '' : <br />}{' '}
            {el.diffEng}
          </h4>
          <p>
            {el.diffCn}級山是大家的 <u>#{el.describe}</u>
          </p>
          <Button
            text={'查看更多'}
            iconFront={0}
            iconEnd={1}
            link={'difficulty'}
          />
        </div>
      </div>
    </>
  )
}

export default YichunDiffRank
