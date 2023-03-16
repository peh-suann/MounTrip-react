import React from 'react'
import { motion } from 'framer-motion'
import styles from './Backdrop.module.css'

//把此元件的child當作props傳進來，//onclick 處理點擊backdrop的動作
export default function Backdrop({ children, handleClose }) {
  return (
    <>
      {/* <motion.div
        className={styles.backdrop}
        onClick={handleClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        // transition={{
        //   duration: 0.5,
        //   type: '',
        // }}
      > */}
        {/* {children} */}
      {/* </motion.div> */}
    </>
  )
}
