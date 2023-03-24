import React, { useState } from 'react'
import styles from './../styles/Favorite.module.css'
import { motion } from 'framer-motion'
import axios from 'axios'
import { USER_FAV_ADD, USER_FAV_DELETE } from '../connections/api-config'
import FavoriteBtn from './FavoriteBtn'

export default function LaiFavoriteCard(props) {
  const {
    img,
    title,
    trailSid,
    describ,
    location,
    starAmount,
    price,
    fav,
    setFav,
    getFavorite, //父曾傳下來的callback函式，刪除或是新增商品以後呼叫他，就可refresh頁面
  } = props

  const [heartOn, setHeartOn] = useState(true)
  const PUBLIC = process.env.PUBLIC_URL
  const Url = PUBLIC + '/images/public_images/product_image/' + img
  const userString = localStorage.getItem('myAuth')
  const userData = JSON.parse(userString)
  const token = userData.token
  const mid = userData.accountId
  // console.log('star', starAmount)
  //加入刪除最愛的功能
  const sidString = localStorage.getItem('myAuth')
  const sidJson = JSON.parse(sidString)
  // console.log('sidJson', sidString)
  const sid = sidJson.accountId
  // const toggleFav = (e) => {
  //   e.stopPropogation()
  // }
  // let favList = []
  // favList = [...fav]
  // let favListSid = []
  // favListSid = fav.map((v, i) => {
  //   return v.trails_sid
  // })
  const toggleHeart = (e) => {
    // setHeartOn((heartOn) => !heartOn)
    if (heartOn) {
      window.confirm('確定要將商品從我的收藏移除嗎？')
      setHeartOn(false)
      removeFavorite()
    } else {
      setHeartOn(true)
      addFavorite()
    }

    //refresh
    getFavorite()
  }
  //愛心填色
  const fill = heartOn ? '#ed7f7d' : 'none'

  const addFavorite = async () => {
    try {
      const [rows] = await axios.post(USER_FAV_ADD, {
        headers: {
          Authorization: `Bearer ${token}`,
          sid: mid,
          trails_sid: trailSid,
        },
      })
      return alert('已新增商品至我的收藏')
    } catch (err) {
      console.log("there's an error")
      return []
    }
  }
  const removeFavorite = async () => {
    try {
      const [rows] = await axios.delete(USER_FAV_DELETE, {
        headers: {
          Authorization: `Bearer ${token}`,
          sid: mid,
          trails_sid: trailSid,
        },
      })
      return alert('已從我的收藏')
    } catch (err) {
      console.log("there's an error delete")
      return []
    }
  }
  //github教學版本
  // const addFavorite = (id) => {
  //   if (!favListSid.includes(id)) setFav(favListSid.concat(id))
  //   console.log(id)
  // }
  // const removeFavorite = (id) => {
  //   let index = favListSid.indexOf(id)
  //   console.log('index', index)
  //   let temp = [...favListSid.slice(0, index), ...favListSid.slice(index + 1)]
  //   setFav(temp)
  // }
  return (
    <>
      <div className={styles['fav-card']}>
        <div className={styles['fav-img-wrap']}>
          <div
            className={styles['fav-img']}
            style={{
              background: `url('${Url}')`,
              backgroundSize: 'cover',
            }}
          ></div>
        </div>
        <div className={styles['text-wrap']}>
          <div className={styles['fav-title']}>
            <h6>{title}</h6>
            <div className={styles['trails-des']}>
              <p>{describ}</p>
            </div>
          </div>
          <div className={styles['location-stars']}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 8.8335C17.5 14.6668 10 19.6668 10 19.6668C10 19.6668 2.5 14.6668 2.5 8.8335C2.5 6.84437 3.29018 4.93672 4.6967 3.53019C6.10322 2.12367 8.01088 1.3335 10 1.3335C11.9891 1.3335 13.8968 2.12367 15.3033 3.53019C16.7098 4.93672 17.5 6.84437 17.5 8.8335Z"
                fill="#6CBA7C"
              />
              <path
                d="M10 11.3335C11.3807 11.3335 12.5 10.2142 12.5 8.8335C12.5 7.45278 11.3807 6.3335 10 6.3335C8.61929 6.3335 7.5 7.45278 7.5 8.8335C7.5 10.2142 8.61929 11.3335 10 11.3335Z"
                fill="white"
              />
            </svg>
            <p>{location}</p>
            <div className={styles['location-bar']}></div>
            {/* TODO星星數量 */}
            <svg
              width="100"
              height="21"
              viewBox="0 0 100 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99984 2.16675L12.5748 7.38341L18.3332 8.22508L14.1665 12.2834L15.1498 18.0167L9.99984 15.3084L4.84984 18.0167L5.83317 12.2834L1.6665 8.22508L7.42484 7.38341L9.99984 2.16675Z"
                fill="#F3C969"
              />
              <path
                d="M29.9998 2.16675L32.5748 7.38341L38.3332 8.22508L34.1665 12.2834L35.1498 18.0167L29.9998 15.3084L24.8498 18.0167L25.8332 12.2834L21.6665 8.22508L27.4248 7.38341L29.9998 2.16675Z"
                fill="#F3C969"
              />
              <path
                d="M49.9998 2.16675L52.5748 7.38341L58.3332 8.22508L54.1665 12.2834L55.1498 18.0167L49.9998 15.3084L44.8498 18.0167L45.8332 12.2834L41.6665 8.22508L47.4248 7.38341L49.9998 2.16675Z"
                fill="#F3C969"
              />
              <path
                d="M69.9998 2.16675L72.5748 7.38341L78.3332 8.22508L74.1665 12.2834L75.1498 18.0167L69.9998 15.3084L64.8498 18.0167L65.8332 12.2834L61.6665 8.22508L67.4248 7.38341L69.9998 2.16675Z"
                fill="#F3C969"
              />
              <path
                d="M89.9998 2.16675L92.5748 7.38341L98.3332 8.22508L94.1665 12.2834L95.1498 18.0167L89.9998 15.3084L84.8498 18.0167L85.8332 12.2834L81.6665 8.22508L87.4248 7.38341L89.9998 2.16675Z"
                fill="#F3C969"
              />
            </svg>
          </div>
          <div className={styles['price-wrap']}>
            <p>NTD</p>
            <p id={styles.price}>{price}</p>
          </div>
        </div>
        <div className={styles['btn-wrap']}>
          <FavoriteBtn getDataCallback={getFavorite} trailSID={trailSid} />
          {/* <motion.svg
            className={styles['fav-btn']}
            width="20"
            height="18"
            fill={fill}
            viewBox="0 0 24 25"
            xmlns="http://www.w3.org/2000/svg"
            whileHover={{ scale: 1.4 }}
            onClick={(e) => {
              toggleHeart(e)
            }}
          >
            <path
              d="M20.8401 5.10999C20.3294 4.599 19.7229 4.19364 19.0555 3.91708C18.388 3.64052 17.6726 3.49817 16.9501 3.49817C16.2276 3.49817 15.5122 3.64052 14.8448 3.91708C14.1773 4.19364 13.5709 4.599 13.0601 5.10999L12.0001 6.16999L10.9401 5.10999C9.90843 4.0783 8.50915 3.4987 7.05012 3.4987C5.59109 3.4987 4.19181 4.0783 3.16012 5.10999C2.12843 6.14169 1.54883 7.54096 1.54883 8.99999C1.54883 10.459 2.12843 11.8583 3.16012 12.89L4.22012 13.95L12.0001 21.73L19.7801 13.95L20.8401 12.89C21.3511 12.3792 21.7565 11.7728 22.033 11.1053C22.3096 10.4379 22.4519 9.72248 22.4519 8.99999C22.4519 8.27751 22.3096 7.5621 22.033 6.89464C21.7565 6.22718 21.3511 5.62075 20.8401 5.10999Z"
              stroke="#6cba7c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg> */}
        </div>
      </div>
    </>
  )
}
