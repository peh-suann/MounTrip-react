import React, { useState, useEffect } from 'react'
import styles from './../styles/Favorite.module.css'
import FavoriteAmount from './LaiFavoriteAmount'
import FavoriteCard from './LaiFavoriteCard'
import TreeAnimation2 from './LaiAchievementTreeAnimation2'
import axios from 'axios'
import { USER_FAV } from '../connections/api-config'

export default function LaiFavoriteContent() {
  const [fav, setFav] = useState([])
  let currentFav = []

  const getFavorite = async (req, res) => {
    const userString = localStorage.getItem('myAuth')
    const userData = JSON.parse(userString)
    const token = userData.token
    const mid = userData.accountId

    try {
      const res = await axios(USER_FAV, {
        headers: { Authorization: `Bearer ${token}`, sid: mid },
      })
      if (!res.data) return res.sendStatus(401)

      currentFav = res.data
      setFav(currentFav)
      console.log('Fav', fav)
    } catch (err) {
      console.log('coupon axios err')
      return []
    }
  }

  useEffect(() => {
    getFavorite()
  }, [])
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
            <path
              d="M20.8401 5.10999C20.3294 4.599 19.7229 4.19364 19.0555 3.91708C18.388 3.64052 17.6726 3.49817 16.9501 3.49817C16.2276 3.49817 15.5122 3.64052 14.8448 3.91708C14.1773 4.19364 13.5709 4.599 13.0601 5.10999L12.0001 6.16999L10.9401 5.10999C9.90843 4.0783 8.50915 3.4987 7.05012 3.4987C5.59109 3.4987 4.19181 4.0783 3.16012 5.10999C2.12843 6.14169 1.54883 7.54096 1.54883 8.99999C1.54883 10.459 2.12843 11.8583 3.16012 12.89L4.22012 13.95L12.0001 21.73L19.7801 13.95L20.8401 12.89C21.3511 12.3792 21.7565 11.7728 22.033 11.1053C22.3096 10.4379 22.4519 9.72248 22.4519 8.99999C22.4519 8.27751 22.3096 7.5621 22.033 6.89464C21.7565 6.22718 21.3511 5.62075 20.8401 5.10999Z"
              stroke="#6cba7c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h1>我的收藏</h1>
        </div>
        <div className={styles['container']}>
          <div className={styles['filter-area']}>
            <div className={styles['show-number']}>
              <p>已收藏</p>
              {/* TODO 連結真實的評論數 */}
              <FavoriteAmount amount={fav.length} />
              {/* <p id={styles['fav-amount']}>5</p> */}
              <p>個行程</p>
            </div>
          </div>
          <div className={styles['fav-list']}>
            {fav.map((v, i) => {
              return (
                <FavoriteCard
                  key={v.trails_sid}
                  img={v.trail_img}
                  title={v.trail_name}
                  describ={v.trail_short_describ}
                  location={`${v.geo_location_sid}${v.geo_location_town_sid}`}
                  starAmount={v.avg_score}
                  trailSid={v.trails_sid}
                  price={v.price}
                  fav={fav}
                  setFav={setFav}
                  getFavorite={getFavorite}
                />
              )
            })}
          </div>
          <TreeAnimation2 />
        </div>
      </div>
    </>
  )
}
