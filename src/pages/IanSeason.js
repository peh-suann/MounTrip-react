import { useEffect, useState, useRef } from 'react'
import styles from './../styles/IanSeason.module.css'
import { TRAILS_SEASON } from '../connections/api-config'
import { TRAILS_COMMENT } from '../connections/api-config'
import dayjs from 'dayjs'
import FavoriteBtnOff from './../components/FavoriteBtnOff'
import { IanSwiper } from '../components/IanSwiper'

// import { ORDER_COUPON } from '../connections/api-config'

// import { useCart } from '../components/IanUseCart'

function IanSeason() {
  // const { addCoupon } = useCart
  // const [useCoupon, setUseCoupon] = useState({
  //   rows: [],
  // })

  // const getOrderCoupon = async () => {
  //   const r = await fetch(ORDER_COUPON)
  //   const c = await r.json()
  //   console.log('c:', c.rows)
  //   setUseCoupon(c.rows)
  //   const cdata = c.rows
  //   addCoupon(cdata)
  // }

  const [data, setData] = useState({
    rows: [],
  })

  const [comment, setComment] = useState({
    rows: [],
  })

  const getCommentData = async (req, res) => {
    const d = await fetch(TRAILS_COMMENT)
    const j = await d.json()
    console.log(j)
    setComment(j)
  }

  const getSeasonData = async () => {
    const r = await fetch(TRAILS_SEASON)
    const json = await r.json()
    console.log(json)
    setData(json)
  }

  useEffect(() => {
    getSeasonData()
  }, [])

  // useEffect(() => {
  //   getOrderCoupon()
  // }, [])

  useEffect(() => {
    getCommentData()
  }, [])

  const myMove = useRef(null)

  return (
    <>
      <section className={styles.season_top_bar}>
        <h1>櫻花季開跑啦！</h1>
        <p>
          武陵農場是著名的賞櫻景點，是攝影愛好者的最愛，
          <br />
          不必出國就可以看到滿到快炸出來的櫻花林～
          <br />
          櫻花樹下的約定 整個浪漫到不行！
        </p>
      </section>
      <section className={styles.products}>
        <div className={`${styles.row_of_products} d-flex flex-wrap`}>
          {data.rows.map((v, i) => {
            return (
              <div key={i} className={`${styles.product}  col-lg-4`}>
                <div className={`overflow-hidden`}>
                  <div
                    className={styles.pic1}
                    style={{
                      backgroundImage: `linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0) 71.43%,
                    rgba(0, 0, 0, 0.74) 96.19%
                    ),
                  url(/imgs/Ian_img/${v.trail_img})`,
                    }}
                  ></div>
                </div>

                <div className={styles.rates}>
                  <p>
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.00004 1.83334L10.06 6.00668L14.6667 6.68001L11.3334 9.92668L12.12 14.5133L8.00004 12.3467L3.88004 14.5133L4.66671 9.92668L1.33337 6.68001L5.94004 6.00668L8.00004 1.83334Z"
                        fill="#CEE8CB"
                      />
                    </svg>
                    {v.score}.0
                  </p>
                  <div className={`${styles.heartfavorite}`}>
                    <FavoriteBtnOff trailSID={v.sid} />
                  </div>

                  <p className={styles.difficulty}>
                    難度 {v.difficulty_short}級
                  </p>
                </div>
                <div className={styles.information}>
                  <div className={styles.info}>
                    <h4>{v.trail_name}</h4>
                    <p>
                      {v.geo_location_sid}
                      {v.geo_location_town_sid}
                    </p>
                  </div>
                  <div className={styles.price}>
                    <p>NTD</p>
                    <h4>{v.price}</h4>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <button className={styles.load_more_btn}>探索更多</button>
      </section>
      <section className={styles.comments}>
        <div className={`d-flex align-items-center py-5`}>
          <span className={`d-flex`}>
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 11.4787C0 13.901 1.40713 16 3.46135 17.0284C3.0459 17.8572 2.8125 18.7901 2.8125 19.7766C2.8125 23.2137 5.64569 26 9.14062 26C10.8302 26 12.3651 25.3488 13.5 24.2878C14.6349 25.3488 16.1698 26 17.8594 26C21.3543 26 24.1875 23.2137 24.1875 19.7766C24.1875 18.7901 23.9541 17.8572 23.5386 17.0284C25.5929 16 27 13.901 27 11.4787C27 8.04164 24.1668 5.25532 20.6719 5.25532C20.4105 5.25532 20.1528 5.27088 19.8997 5.30117C19.4466 2.30143 16.8169 0 13.6406 0C10.4506 0 7.81183 2.32142 7.37574 5.3402C7.03498 5.28436 6.685 5.25532 6.32812 5.25532C2.83319 5.25532 0 8.04164 0 11.4787Z"
                fill="#6CBA7C"
              />
              <circle cx="13.5" cy="13.5" r="4.5" fill="#FFFFF2" />
            </svg>
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.80231 17.7006L5.47485 16.3589L4.13282 15.6871C2.55773 14.8986 1.5 13.3017 1.5 11.4787C1.5 8.89356 3.63793 6.75532 6.32812 6.75532C6.60351 6.75532 6.87236 6.77772 7.13315 6.82046L8.64176 7.06769L8.86033 5.55466C9.18865 3.28191 11.1879 1.5 13.6406 1.5C16.0826 1.5 18.0754 3.26655 18.4166 5.5252L18.6338 6.96338L20.078 6.79054C20.2719 6.76733 20.4701 6.75532 20.6719 6.75532C23.3621 6.75532 25.5 8.89356 25.5 11.4787C25.5 13.3017 24.4423 14.8985 22.8672 15.687L21.5251 16.3589L22.1977 17.7005C22.5112 18.3261 22.6875 19.0294 22.6875 19.7766C22.6875 22.3618 20.5496 24.5 17.8594 24.5C16.5618 24.5 15.3901 24.0014 14.5244 23.192L13.5 22.2343L12.4756 23.192C11.6099 24.0014 10.4382 24.5 9.14062 24.5C6.45042 24.5 4.3125 22.3618 4.3125 19.7766C4.3125 19.0294 4.48875 18.3261 4.80231 17.7006Z"
                stroke="#6CBA7C"
                strokeWidth="3"
              />
              <circle
                cx="13.5"
                cy="13.5"
                r="3"
                stroke="#6CBA7C"
                strokeWidth="3"
              />
            </svg>
          </span>
          <h4 className={'m-0 px-lg-5'}>櫻花季 旅客評論</h4>
          <span className={`d-flex`}>
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.80231 17.7006L5.47485 16.3589L4.13282 15.6871C2.55773 14.8986 1.5 13.3017 1.5 11.4787C1.5 8.89356 3.63793 6.75532 6.32812 6.75532C6.60351 6.75532 6.87236 6.77772 7.13315 6.82046L8.64176 7.06769L8.86033 5.55466C9.18865 3.28191 11.1879 1.5 13.6406 1.5C16.0826 1.5 18.0754 3.26655 18.4166 5.5252L18.6338 6.96338L20.078 6.79054C20.2719 6.76733 20.4701 6.75532 20.6719 6.75532C23.3621 6.75532 25.5 8.89356 25.5 11.4787C25.5 13.3017 24.4423 14.8985 22.8672 15.687L21.5251 16.3589L22.1977 17.7005C22.5112 18.3261 22.6875 19.0294 22.6875 19.7766C22.6875 22.3618 20.5496 24.5 17.8594 24.5C16.5618 24.5 15.3901 24.0014 14.5244 23.192L13.5 22.2343L12.4756 23.192C11.6099 24.0014 10.4382 24.5 9.14062 24.5C6.45042 24.5 4.3125 22.3618 4.3125 19.7766C4.3125 19.0294 4.48875 18.3261 4.80231 17.7006Z"
                stroke="#6CBA7C"
                strokeWidth="3"
              />
              <circle
                cx="13.5"
                cy="13.5"
                r="3"
                stroke="#6CBA7C"
                strokeWidth="3"
              />
            </svg>
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 11.4787C0 13.901 1.40713 16 3.46135 17.0284C3.0459 17.8572 2.8125 18.7901 2.8125 19.7766C2.8125 23.2137 5.64569 26 9.14062 26C10.8302 26 12.3651 25.3488 13.5 24.2878C14.6349 25.3488 16.1698 26 17.8594 26C21.3543 26 24.1875 23.2137 24.1875 19.7766C24.1875 18.7901 23.9541 17.8572 23.5386 17.0284C25.5929 16 27 13.901 27 11.4787C27 8.04164 24.1668 5.25532 20.6719 5.25532C20.4105 5.25532 20.1528 5.27088 19.8997 5.30117C19.4466 2.30143 16.8169 0 13.6406 0C10.4506 0 7.81183 2.32142 7.37574 5.3402C7.03498 5.28436 6.685 5.25532 6.32812 5.25532C2.83319 5.25532 0 8.04164 0 11.4787Z"
                fill="#6CBA7C"
              />
              <circle cx="13.5" cy="13.5" r="4.5" fill="#FFFFF2" />
            </svg>
          </span>
        </div>
      </section>

      <section className={styles.comment2}>
        <IanSwiper comment={comment} />
      </section>
    </>
  )
}
export default IanSeason
