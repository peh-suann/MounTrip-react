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
  const {  handleClose, btnToggle, btnText, getUser } = props
  
  


  useEffect(()=>{
    getUser()
  },[])
  return (
    <div className={styles.modalBg}>
      <div className={styles.modal_box}>
        {/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
        <h4>{btnText}</h4>
        <br/>
        {btnToggle ? (
          <>
            <div className={styles.btn_wrap}>
              <LaiButton
                text={'我瞭解了'}
                link={''}
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
