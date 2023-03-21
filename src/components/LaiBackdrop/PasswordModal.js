import React, { useState } from 'react'
import { motion, spring } from 'framer-motion'
import Backdrop from './Backdrop'
import styles from './Backdrop.module.css'
import { style } from 'd3'
import { USER_UPLOAD } from '../../connections/api-config'
import axios from 'axios'
const dropIn = {
  hidden: { y: '-100%', x: '', opacity: 0 },
  visible: {
    y: '80%',
    x: '',
    opacity: 1,
    transition: { type: 'spring', damping: 15, stiffness: 200 },
  },
  exit: { y: '100%', opacity: 0, transition: { duration: 1 } },
}

export default function PasswordModal({ pwdModalOpen, handleClose, text }) {
  // const handleSubmit = async (e) => {
  //   e.preventDefault()
    // const userString = localStorage.getItem('myAuth')
    // const user = JSON.parse(userString)
    // const sid = user.accountId
    // const token = user.token
    // console.log(image)
    // let formData = new FormData()
    // formData.append('file', image.data)
    // const res = await axios.post(USER_UPLOAD, formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //     Authorization: `Bearer ${token}`,
    //     sid: `${sid}`,
    //   },
    // })
    // TODO  照片上傳錯誤的判斷
    // if (res) return setStatus('上傳成功')
    // setStatus('上傳成功')
    // alert(res.status)
  // }
  // const handleFiles = (e) => {
  //   const img = {
  //     preview: URL.createObjectURL(e.target.files[0]),
  //     data: e.target.files[0],
  //   }
  //   setImage(img)
  // }
  // const [image, setImage] = useState({ preview: '', data: '' })
  // const [status, setStatus] = useState('')

  return (
    <>
      {/* <Backdrop hanxdleClose={handleClose}> */}
      <div className={styles.backdrop} onClick={handleClose}>
        <motion.div
          onClick={(e) => {
            e.stopPropagation()
          }}
          className={styles.modal}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h4 className={styles.title}>{text}</h4>
          <form
            className={styles.pwd_form}
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <label htmlFor="oldPwd" className="form-label">
              舊密碼
            </label>
            <input
              className={styles.input}
              type="password"
              name="oldPwd"
              placeholder="請輸入舊密碼"
              onChange={() => {}}
            />
            <label htmlFor="newPwd1" className="form-label">
              新密碼
            </label>
            <input
              className={styles.input}
              type="password"
              name="newPwd1"
              placeholder="請輸入新的密碼"
              onChange={() => {}}
            />
            <label htmlFor="newPwd2" className="form-label">
              再次輸入新密碼
            </label>
            <input
              className={styles.input}
              type="password"
              name="newPwd2"
              placeholder="請再次輸入新的密碼"
              onChange={() => {}}
            />
            <div className={styles.btn_group}>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.1 }}
                whileTop={{ scale: 0.9 }}
                className={styles.btn_pwd}
                //   onClick={handleClose}
              >
                確認更改密碼
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTop={{ scale: 0.9 }}
                className={styles.btn}
                onClick={handleClose}
              >
                關閉視窗
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
      {/* </Backdrop> */}
    </>
  )
}
