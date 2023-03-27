// Packages
import React, { useState } from 'react'
import axios from 'axios'
import { USER_UPLOAD } from '../connections/api-config'
import { motion } from 'framer-motion'

// Components
import Button from './Button'
import LaiButton from './LaiButton'

// Styles
import styles from './../styles/LaiModalStyle.module.css'
import { useEffect } from 'react'

function Modal(props) {
  const { handleClick, handleClose, btnToggle, btnText, getUser } = props
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
    if (res) return setStatus('上傳成功'), setUploaded(true)
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
  const [uploaded, setUploaded] = useState(false)
  useEffect(() => {
    getUser()
  }, [uploaded])
  return (
    <div className={styles.modalBg}>
      <div className={styles.modal_box}>
        <h4>{btnText}</h4>
        {/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
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
        </form>
        {status && <h4>{status}</h4>}
        {btnToggle ? (
          <>
            <div className={styles.btn_wrap}>
              <LaiButton
                type="submit"
                text={btnText}
                link={''}
                handleClick={handleSubmit}
              ></LaiButton>
              <LaiButton
                text={'關閉視窗'}
                link={''}
                // handleClick={handleClose}
                handleClick={handleClose}
              ></LaiButton>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Modal
