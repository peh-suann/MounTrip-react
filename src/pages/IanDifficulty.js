import { useState, useEffect } from 'react'
import styles from '../styles/IanDifficulty.module.css'
// import Footer from './Footer'
import IanDifficultyMountain from '../components/IanDifficultyMountain'
import { TRAILS_DIFF } from '../connections/api-config'

function IanDifficulty() {
  const [diff, setDiff] = useState({
    rows: [],
  })

  const getDifficultData = async () => {
    const r = await fetch(TRAILS_DIFF)
    const json = await r.json()
    console.log(json)
    setDiff(json)
  }

  useEffect(() => {
    getDifficultData()
  }, [])

  return (
    <>
      {/* difficultyMountain  */}
      <section className={styles.difficultyAll}>
        <div className={`${styles.difficulty} d-flex flex-column`}>
          <IanDifficultyMountain />
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
          <h2 className={`${styles.tPSecondSectionH5_text} me-5`}>高級路線</h2>
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
        <div className={styles.tPSSection_cards}>
          <div className={'w-100 d-flex flex-wrap'}>
            {diff.rows.map((v, i) => {
              return (
                <div className={'col-12 p-3 col-lg-4 pe-lg-2'}>
                  <div className={styles.overflowpic1}>
                    <div className={styles.tPSSCard_pic1}></div>
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
                        <p className={'ms-2'}>{v.difficulty_list_sid}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.tPSSCard_body} d-flex justify-content-between`}
                  >
                    <div>
                      <p className={`${styles.first_p} mb-1`}>{v.trail_name}</p>
                      <p>
                        {v.geo_location_sid}
                        {v.geo_location_town_sid}
                      </p>
                    </div>
                    <div>
                      <p className={'d-flex justify-content-end mb-1'}>NTD</p>
                      <p>{v.price}</p>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* <div className={'col-12 p-3 col-lg-4 px-lg-2'}>
              <div className={styles.overflowpic1}>
                <div className={styles.tPSSCard_pic2}></div>
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
                    <p className={'ms-2'}>EASY</p>
                  </div>
                </div>
              </div>

              <div
                className={`${styles.tPSSCard_body} d-flex justify-content-between`}
              >
                <div>
                  <p className={`${styles.first_p} mb-1`}>
                    草嶺古道 | 探索新北一日遊
                  </p>
                  <p>新北市雙溪區</p>
                </div>
                <div>
                  <p className={'d-flex justify-content-end mb-1'}>NTD</p>
                  <p>1,200</p>
                </div>
              </div>
            </div>
            <div className={'col-12 p-3 col-lg-4 px-lg-2'}>
              <div className={styles.overflowpic1}>
                <div className={styles.tPSSCard_pic3}></div>
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
                    <p className={'ms-2'}>EASY</p>
                  </div>
                </div>
              </div>

              <div
                className={`${styles.tPSSCard_body} d-flex justify-content-between`}
              >
                <div>
                  <p className={`${styles.first_p} mb-1`}>
                    草嶺古道 | 探索新北一日遊
                  </p>
                  <p>新北市雙溪區</p>
                </div>
                <div>
                  <p className={'d-flex justify-content-end mb-1'}>NTD</p>
                  <p>1,200</p>
                </div>
              </div>
            </div>
            <div className={'col-12 p-3 col-lg-4 px-lg-2'}>
              <div className={styles.overflowpic1}>
                <div className={styles.tPSSCard_pic4}></div>
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
                    <p className={'ms-2'}>EASY</p>
                  </div>
                </div>
              </div>

              <div
                className={`${styles.tPSSCard_body} d-flex justify-content-between`}
              >
                <div>
                  <p className={`${styles.first_p} mb-1`}>
                    草嶺古道 | 探索新北一日遊
                  </p>
                  <p>新北市雙溪區</p>
                </div>
                <div>
                  <p className={'d-flex justify-content-end mb-1'}>NTD</p>
                  <p>1,200</p>
                </div>
              </div>
            </div>
            <div className={'col-12 p-3 col-lg-4 px-lg-2'}>
              <div className={styles.overflowpic1}>
                <div className={styles.tPSSCard_pic5}></div>
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
                    <p className={'ms-2'}>EASY</p>
                  </div>
                </div>
              </div>

              <div
                className={`${styles.tPSSCard_body} d-flex justify-content-between`}
              >
                <div>
                  <p className={`${styles.first_p} mb-1`}>
                    草嶺古道 | 探索新北一日遊
                  </p>
                  <p>新北市雙溪區</p>
                </div>
                <div>
                  <p className={'d-flex justify-content-end mb-1'}>NTD</p>
                  <p>1,200</p>
                </div>
              </div>
            </div>
            <div className={'col-12 p-3 col-lg-4 px-lg-2'}> 
              <div className={styles.overflowpic1}>
                <div className={styles.tPSSCard_pic6}></div>
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
                    <p className={'ms-2'}>EASY</p>
                  </div>
                </div>
              </div>

              <div
                className={`${styles.tPSSCard_body} d-flex justify-content-between`}
              >
                <div>
                  <p className={`${styles.first_p} mb-1`}>
                    草嶺古道 | 探索新北一日遊
                  </p>
                  <p>新北市雙溪區</p>
                </div>
                <div>
                  <p className={'d-flex justify-content-end mb-1'}>NTD</p>
                  <p>1,200</p>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
        {/* button  */}
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </section>
    </>
  )
}
export default IanDifficulty
