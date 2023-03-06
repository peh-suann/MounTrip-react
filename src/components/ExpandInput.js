import React from 'react'
import styles from '../styles/ExpandInput.module.css'
// import { FaSistrix } from 'react-icons/fa'

export default function ExpandInput() {
  return (
    <>
      {/* <FontAwesomeIcon icon={regular('magnifying-glass')} /> */}
      {/* <FaSistrix /> */}
      <input
        className={styles.input}
        type="text"
        name="username"
        value=""
        onChange=""
        required
      />
    </>
  )
}
