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
import styles from './../styles/LaiModalStyleConfirmOff.module.css'
import { useEffect } from 'react'

function Modal(props) {
  const {
    handleClick,
    handleClose,
    btnToggle,
    btnText,
    content,
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
  const [replyMsg, setReplyMsg] = useState('')
  const [confirmText, setConfirmText] =
    useState('確定要將行程從我的收藏移除嗎？')
  const addFavorite = async () => {
    try {
      setHeartOn(true)

      const [rows] = await axios.post(
        USER_FAV_ADD,
        { sid: mid, trails_sid: trailSID },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            sid: mid,
            trails_sid: trailSID,
          },
        }
      )
      setReplyMsg('移除成功')
      // return alert('已新增商品至我的收藏')
    } catch (err) {
      console.log("there's an error")
      return []
    }
  }
  const removeFavorite = async () => {
    try {
      setHeartOn(false)
      // setConfirmText('行程已從我的收藏中移除')
      const res = await axios.delete(USER_FAV_DELETE, {
        headers: {
          Authorization: `Bearer ${token}`,
          sid: mid,
          trails_sid: trailSID,
        },
      })
      setReplyMsg('新增成功')
      console.log('delete res', res)
      // console.log('before if')
      // setHeartOn(false)
    } catch (err) {
      console.log("there's an error deleting", err)
      throw new Error('Failed to delete favorite.')
    }
    // getDataCallback()
  }
  useEffect(() => {}, [heartOn])
  return (
    <>
      <div className={styles.modal_box}>
        <h4>{content}</h4>
        {/* {!replyMsg ? <h4>{content}</h4> : <h4>{replyMsg}</h4>} */}
        {replyMsg ? <h4>{replyMsg}</h4> : null}
        {/* {replyMsg === '新增成功' ? <h4>{replyMsg}</h4> : <h4>{content}</h4>} */}
        {/* {replyMsg === '移除成功' ? <h4>{replyMsg}</h4> : <h4>{content}</h4>} */}
        {/* <h4>{content}</h4>
        <h5>{replyMsg}</h5> */}
        {/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}

        {btnToggle ? (
          <>
            {/* <div className={styles.modalBg}> */}
            <div className={styles.btn_wrap}>
              {btnText === '確定移除' ? (
                <LaiButton
                  type="submit"
                  text={btnText}
                  link={''}
                  handleClick={removeFavorite}
                ></LaiButton>
              ) : (
                <LaiButton
                  type="submit"
                  text={btnText}
                  link={''}
                  handleClick={addFavorite}
                ></LaiButton>
              )}

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
