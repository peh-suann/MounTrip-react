// Packages
import React, { useState } from 'react'
import axios from 'axios'
import { USER_UPLOAD } from '../connections/api-config'
import { motion } from 'framer-motion'
import { USER_FAV_DELETE, USER_FAV_ADD } from '../connections/api-config'

// Components
import Button from './Button'
import LaiButton from './LaiButton'

// Styles
import styles from './../styles/LaiModalStyleConfirm.module.css'
import { useEffect } from 'react'

function Modal(props) {
  const {
    handleClick,
    handleClose,
    btnToggle,
    btnText,
    getUser,
    trailSID,
    heartOn,
    setHeartOn,
    getDataCallback,
  } = props

  const userString = localStorage.getItem('myAuth')
  const userData = JSON.parse(userString)
  const token = userData.token
  const mid = userData.accountId
  const [confirmText, setConfirmText] =
    useState('確定要將商品從我的收藏移除嗎？')
  const addFavorite = async () => {
    try {
      const [rows] = await axios.post(USER_FAV_ADD, {
        headers: {
          Authorization: `Bearer ${token}`,
          sid: mid,
          trails_sid: trailSID,
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
      setHeartOn(false)
      setConfirmText('行程已從我的收藏中移除')
      const [rows] = await axios.delete(USER_FAV_DELETE, {
        headers: {
          Authorization: `Bearer ${token}`,
          sid: mid,
          trails_sid: trailSID,
        },
      })
      console.log('before if')
     
    } catch (err) {
      console.log("there's an error delete")
      return []
    }
    getDataCallback()
  }
  useEffect(() => {}, [])
  return (
    <>
      <div className={styles.modal_box}>
        <h4>{confirmText}</h4>
        {/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}

        {btnToggle ? (
          <>
            {/* <div className={styles.modalBg}> */}
            <div className={styles.btn_wrap}>
              <LaiButton
                type="submit"
                text="確定移除"
                link={''}
                handleClick={removeFavorite}
              ></LaiButton>
              <LaiButton
                text={'關閉視窗'}
                link={''}
                handleClick={handleClose}
              ></LaiButton>
            </div>
            {/* </div> */}
          </>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default Modal
