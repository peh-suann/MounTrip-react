import React, { useState } from 'react'
import styles from './../styles/Achievement.module.css'
import AchievementBadge from './LaiAchievementBadge'
import ProgressBar from './LaiAchievementProgressBar'
import AchievementDescrib from './LaiAchievementDescrib'
import AchievementTreeBlock from './LaiAchievementTreeBlock'
import AchievementQuote from './LaiAchievementQuote'

export default function LaiAchievementContent() {
  const [clickedLevel, setClickedLevel] = useState(1)

  // console.log({ clickedLevel })

  return (
    <>
      <div className={styles['member-data']}>
        <div className={styles['title']}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1298_10889)">
              <path
                d="M12 15.5C15.866 15.5 19 12.366 19 8.5C19 4.63401 15.866 1.5 12 1.5C8.13401 1.5 5 4.63401 5 8.5C5 12.366 8.13401 15.5 12 15.5Z"
                stroke="#6cba7c"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.21 14.39L7 23.5L12 20.5L17 23.5L15.79 14.38"
                stroke="#6cba7c"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1298_10889">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <h1>成就獎章</h1>
        </div>
        <div className={styles['container']}>
          <AchievementBadge level={2} />
          {/* <div className={styles['badge']}>
            <div className={styles['badge-pic']}></div>
          </div> */}
          <ProgressBar current={'19,800'} target={'25,000'} />
          {/* <div className={styles['progress-bars']}>
            <div className={styles['bar-wrap']}>
              <div className={styles['bar-base']}></div>
              <div className={styles['bar-top']}></div>
            </div>
            <div className={styles['goal-number-wrap']}>
              <div className={styles['current-num']}>7,800</div>
              <div className={styles['goal-num']}>/25,000</div>
            </div>
          </div> */}
          {/* <div className={styles['describ']}>
            <div className={styles['describ-tag-wrap']}>
              <div className={`${styles['des-tag']} ${styles['low']}`}>
                新手山友
              </div>
              <div className={`${styles['des-tag']} ${styles['mid']}`}>
                初級嚮導
              </div>
              <div className={`${styles['des-tag']} ${styles['high']}`}>
                超級嚮導
              </div>
            </div>
            <div className={styles['tag-border']}></div>
            <div className={styles['describ-mid']}>
              <h6>累計消費滿25,000元解鎖</h6>
            </div>
          </div> */}
          <AchievementDescrib
            level={3}
            setClickedLevel={setClickedLevel}
            clickedLevel={clickedLevel}
          />
          {/* FIXME */}
          <AchievementQuote level={clickedLevel} />
          <AchievementTreeBlock />
          {/* <div className={styles['tree-block']}>
            <div className={styles['describ-rules']}>
              <p>
                MounTrip與「財團法人慈心基金會」合作，自2018年開始，每年將營業收入的
                <span className={styles['percent']}>2%</span>
                投入種樹護地球的活動中。所捐贈的金額涵蓋種樹的費用以及後續三年間養護樹林的支出。
                MounTrip過去五年來透過慈心基金會，總計在台灣種下了
                <span className={styles['history-tree']}>1,268</span>
                顆樹，今年底預計再種植250顆樹！
              </p>
            </div>
            <div className={styles['rules-border']}></div>
            <div className={styles['achievement-state']}>
              <p>透過參加MounTrip的行程，</p>
              <div className={styles['achievement-num']}>
                <p>您已經為台灣種下了</p>
                <span className={styles['tree-num']}>6</span>
                <p>顆樹，恭喜你！</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}