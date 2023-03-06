import React from 'react'
import styles from '../styles/ExpandInput.module.css'
// import { FaSistrix } from 'react-icons/fa'

export default function ExpandInput() {
  return (
    <>
      {/* <FontAwesomeIcon icon={regular('magnifying-glass')} /> */}
      {/* <FaSistrix /> */}
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.75 23.75C19.2728 23.75 23.75 19.2728 23.75 13.75C23.75 8.22715 19.2728 3.75 13.75 3.75C8.22715 3.75 3.75 8.22715 3.75 13.75C3.75 19.2728 8.22715 23.75 13.75 23.75Z"
          stroke="#6CBA7C"
          stroke-width="1.5"
          stroke-linecap="square"
        />
        <path
          d="M26.2499 26.25L20.8124 20.8125"
          stroke="#6CBA7C"
          stroke-width="1.5"
          stroke-linecap="square"
        />
      </svg>
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
