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
    y: 200,
    x: '',
    opacity: 1,
    transition: { type: 'spring', damping: 15, stiffness: 200 },
  },
  exit: { y: '100%', opacity: 0, transition: { duration: 1 } },
}

export default function Modal({ modalOpen, handleClose, text }) {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const userString = localStorage.getItem('myAuth')
    const user = JSON.parse(userString)
    const sid = user.accountId
    const token = user.token
    // console.log(image)
    let formData = new FormData()
    formData.append('file', image.data)
    const res = await axios.post(USER_UPLOAD, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
        sid: `${sid}`,
      },
    })
    // TODO  照片上傳錯誤的判斷
    if (res) return setStatus('上傳成功')
    // setStatus('上傳成功')
    // alert(res.status)
  }
  const handleFiles = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')

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
          {image.preview && (
            <div className={styles.preview_wrap}>
              <img src={image.preview} width="100" height="100" />
            </div>
          )}
          <form className={styles.form_area} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type="file"
              name="file"
              placeholder="請上傳照片檔案"
              onChange={handleFiles}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTop={{ scale: 0.9 }}
              className={styles.btn_upload}
              //   onClick={handleClose}
            >
              上傳
            </motion.button>
          </form>
          {status && <h4>{status}</h4>}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTop={{ scale: 0.9 }}
            className={styles.btn}
            onClick={handleClose}
          >
            關閉視窗
          </motion.button>
        </motion.div>
      </div>
      {/* </Backdrop> */}
    </>
  )
}
