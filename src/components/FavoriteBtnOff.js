import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './../styles/Favorite.module.css'
import axios from 'axios'
import { LoginContext } from '../App'
import { USER_FAV_ADD, USER_FAV_DELETE } from '../connections/api-config'
import LaiModalConfirmOff from './LaiModalConfirmOff'

export default function FavoriteBtnOff(props) {
  const { getDataCallback, trailSID } = props
  const [heartOn, setHeartOn] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [fetchFav, setFetchFav] = useState(false)
  const { showBox, setShowbox } = useContext(LoginContext)
  const [modalContent, setModalContent] = useState('')
  const [btnText, setBtnText] = useState('')
  if (localStorage.getItem('myAuth')) {
    const userString = localStorage.getItem('myAuth')
    const userData = JSON.parse(userString)
    const token = userData.token || ''
    const mid = userData.accountId || ''

    const fill = heartOn ? '#ed7f7d' : 'none'
    const stroke = heartOn ? '#ed7f7d' : '#6cba7c'

    const closeModal = () => {
      // getDataCallback()
      setShowModal(false)
    }
    const toggleHeart = (e) => {
      // setHeartOn((heartOn) => !heartOn)

      if (heartOn) {
        setShowModal(true)
        setBtnText('確定移除')
        setModalContent('確定要將行程從我的收藏移除嗎？')
        // setHeartOn(false)
        // removeFavorite()
      } else {
        setShowModal(true)
        setBtnText('確定新增')
        setModalContent('要將行程新增至我的收藏嗎？')
    
        // setHeartOn(true)
        // addFavorite()
      }

      //refresh
      // getDataCallback()
      console.log('text', modalContent, btnText)
    }
    const addFavorite = async () => {
      try {
        const [rows] = await axios.post(
          USER_FAV_ADD,
          { Authorization: `Bearer ${token}`, sid: mid, trails_sid: trailSID },
          {
            Authorization: `Bearer ${token}`,
            sid: mid,
            trails_sid: trailSID,
          }
        )
        // return alert('已新增商品至我的收藏')
      } catch (err) {
        console.log("there's an error")
        // console.log('mid:', mid)
        // console.log('trailsid:', trailSID)
        return []
      }
    }
    const removeFavorite = async () => {
      try {
        const [rows] = await axios.delete(USER_FAV_DELETE, {
          headers: {
            Authorization: `Bearer ${token}`,
            sid: mid,
            trails_sid: trailSID,
          },
        })
        // return alert('已從我的收藏')
      } catch (err) {
        console.log("there's an error delete")
        return []
      }
    }
    return (
      <>
        {showModal && (
          <LaiModalConfirmOff
            // handleClick={}
            handleClose={closeModal}
            trailSID={trailSID}
            heartOn={heartOn}
            setHeartOn={setHeartOn}
            getDataCallback={getDataCallback}
            content={modalContent}
            // getUser={getUser2}
            // showModal={showModal}
            // setShowModal={setShowModal}
            fetchFav={fetchFav}
            setFetchFav={setFetchFav}
            btnToggle={1}
            btnText={btnText}
          />
        )}
        <motion.svg
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
            stroke="#ed7f7d"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </>
    )
  }
}
