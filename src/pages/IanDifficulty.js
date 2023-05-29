import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/IanDifficulty.module.css'
import IanDifficultyMountain from '../components/IanDifficultyMountain'
import {
  TRAILS_DIFFHARD,
  TRAILS_DIFFMEDIUM,
  TRAILS_DIFFEASY,
} from '../connections/api-config'
import DifficultyProducts from '../components/DifficultyProducts'

function IanDifficulty() {
  const [diff, setDiff] = useState({
    rows: [],
  })
  const [medium, setMedium] = useState({
    rows: [],
  })
  const [easy, setEasy] = useState({
    rows: [],
  })
  const h2titleHard = useRef(null)
  const h2titleMedium = useRef(null)
  const h2titleEasy = useRef(null)
  const productHard = useRef(null)
  const productMedium = useRef(null)
  const productEasy = useRef(null)

  const [whoId, setWhoId] = useState('')

  const getDifficultHardData = async () => {
    const r = await fetch(TRAILS_DIFFHARD)
    const hard = await r.json()
    console.log(hard)
    setDiff(hard)
  }

  const getDifficultMediumData = async () => {
    const r = await fetch(TRAILS_DIFFMEDIUM)
    const medium = await r.json()
    console.log(medium)
    setMedium(medium)
  }

  const getDifficultEasyData = async () => {
    const r = await fetch(TRAILS_DIFFEASY)
    const easy = await r.json()
    console.log(easy)
    setEasy(easy)
  }

  useEffect(() => {
    getDifficultHardData()
    getDifficultMediumData()
    getDifficultEasyData()

    document.documentElement.scrollTop = 0
  }, [])

  return (
    <>
      {/* difficultyMountain  */}
      <section className={styles.difficultyAll}>
        <div className={`${styles.difficulty} d-flex flex-column`}>
          <IanDifficultyMountain
            setWhoId={setWhoId}
            h2titleHard={h2titleHard}
            h2titleMedium={h2titleMedium}
            h2titleEasy={h2titleEasy}
            productHard={productHard}
            productMedium={productMedium}
            productEasy={productEasy}
          />
        </div>
      </section>
      {/* section2 */}
      <section className={`${styles.totalProduct_secondSection} pt-5`}>
        <div
          className={
            'd-flex justify-content-center align-items-center mb-3 mb-lg-5'
          }
        >
          <svg
            className={'me-5'}
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 0L22.1924 3.80761L26 13L22.1924 22.1924L13 26L3.80761 22.1924L0 13L3.80761 3.80761L13 0Z"
              fill="#6CBA7C"
            />
          </svg>
          <div
            className={`${styles.titleAll} d-flex justify-content-center align-items-center`}
          >
            <h2
              ref={h2titleHard}
              className={`${styles.tPSecondSectionH5_text} me-5`}
            >
              高級路線
            </h2>

            <h2
              ref={h2titleMedium}
              className={`${styles.tPSecondSectionH4_text} me-5`}
            >
              中級路線
            </h2>

            <h2
              ref={h2titleEasy}
              className={`${styles.tPSecondSectionH3_text} me-5`}
            >
              初級路線
            </h2>
          </div>

          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 0L22.1924 3.80761L26 13L22.1924 22.1924L13 26L3.80761 22.1924L0 13L3.80761 3.80761L13 0Z"
              fill="#6CBA7C"
            />
          </svg>
        </div>

        <div
          className={`${styles.productAll} d-flex justify-content-center align-items-center mx-auto`}
        >
          <div
            ref={productHard}
            className={`${styles.tPSSection_cards1} w-100`}
          >
            <div className={'d-flex flex-wrap'}>
              {diff.rows.map((v, i) => {
                return <DifficultyProducts v={v} i={i} />
              })}
            </div>
          </div>
          <div
            ref={productMedium}
            className={`${styles.tPSSection_cards2} w-100`}
          >
            <div className={'w-100 d-flex flex-wrap'}>
              {medium.rows.map((v, i) => {
                return (
                  <div className={'col-12 p-3 col-lg-4 pe-lg-2'} key={i}>
                    <div className={styles.overflowpic1}>
                      <div
                        className={styles.tPSSCard_pic1}
                        style={{
                          backgroundImage: `linear-gradient(180deg, rgba(1, 19, 6, 0) 66.99%, #011306 100%),
                  url(/imgs/Ian_img/${v.trail_img})`,
                        }}
                      ></div>
                      <div
                        className={`${styles.tPSSCard_bottom} d-flex justify-content-between`}
                      >
                        <div className={'d-flex align-items-center'}>
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.49967 1.83398L10.5597 6.00732L15.1663 6.68065L11.833 9.92732L12.6197 14.514L8.49967 12.3473L4.37967 14.514L5.16634 9.92732L1.83301 6.68065L6.43967 6.00732L8.49967 1.83398Z"
                              fill="#CEE8CB"
                            />
                          </svg>
                          <p className={'ms-1'}>4.5</p>
                        </div>
                        <div className={'d-flex'}>
                          <p>難度</p>
                          <p className={'ms-2'}>{v.difficulty_short}級</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${styles.tPSSCard_body} d-flex justify-content-between`}
                    >
                      <div>
                        <p className={`${styles.first_p} mb-1`}>
                          {v.trail_name}
                        </p>
                        <p>
                          {v.geo_location_sid}
                          {v.geo_location_town_sid}
                        </p>
                      </div>
                      <div>
                        <p className={'d-flex justify-content-end mb-1'}>NTD</p>
                        <h4 className={`${styles.tPSSCardDiv_p}`}>{v.price}</h4>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div
            ref={productEasy}
            className={`${styles.tPSSection_cards3} w-100`}
          >
            <div className={'w-100 d-flex flex-wrap'}>
              {easy.rows.map((v, i) => {
                return (
                  <div className={'col-12 p-3 col-lg-4 pe-lg-2'} key={i}>
                    <div className={styles.overflowpic1}>
                      <div
                        className={styles.tPSSCard_pic1}
                        style={{
                          backgroundImage: `linear-gradient(180deg, rgba(1, 19, 6, 0) 66.99%, #011306 100%),
                  url(/imgs/Ian_img/${v.trail_img})`,
                        }}
                      ></div>
                      <div
                        className={`${styles.tPSSCard_bottom} d-flex justify-content-between`}
                      >
                        <div className={'d-flex align-items-center'}>
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.49967 1.83398L10.5597 6.00732L15.1663 6.68065L11.833 9.92732L12.6197 14.514L8.49967 12.3473L4.37967 14.514L5.16634 9.92732L1.83301 6.68065L6.43967 6.00732L8.49967 1.83398Z"
                              fill="#CEE8CB"
                            />
                          </svg>
                          <p className={'ms-1'}>4.5</p>
                        </div>
                        <div className={'d-flex'}>
                          <p>難度</p>
                          <p className={'ms-2'}>{v.difficulty_short}級</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${styles.tPSSCard_body} d-flex justify-content-between`}
                    >
                      <div>
                        <p className={`${styles.first_p} mb-1`}>
                          {v.trail_name}
                        </p>
                        <p className={`${styles.firstP_p}`}>
                          {v.geo_location_sid}
                          {v.geo_location_town_sid}
                        </p>
                      </div>
                      <div className={`${styles.tPSSCard_div}`}>
                        <p className={'d-flex justify-content-end mb-1'}>NTD</p>
                        <h4 className={`${styles.tPSSCardDiv_p}`}>{v.price}</h4>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* button  */}
        <Link to={'/trails-filter'} style={{ textDecoration: 'none' }}>
          <button
            className={`${styles.allSection_btn} d-flex justify-content-center align-items-center mt-lg-4`}
          >
            <span className={'pe-1'}>探索更多</span>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 18.5L15.5 12.5L9.5 6.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>
      </section>
    </>
  )
}
export default IanDifficulty
