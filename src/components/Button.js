import React from 'react'
import { Link } from 'react-router-dom'
import styles from './../styles/Button.module.css'

export default function Button(props) {
  const { text, iconFront, iconEnd, style, link, handleClick } = props
  return (
    <Link to={`/${link}`} style={{ ...style, textDecoration: 'none' }}>
      <button className={styles.btn} onClick={handleClick}>
        {iconFront ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 25L21.25 15L11.25 5"
              stroke="#fffff2"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
        {text}
        {iconEnd ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 25L21.25 15L11.25 5"
              stroke="#fffff2"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
      </button>
    </Link>
  )
}
