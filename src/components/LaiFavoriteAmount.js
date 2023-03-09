import React from 'react'
import styles from './../styles/Favorite.module.css'

export default function LaiFavoriteAmount(props) {
  const { amount } = props
  return (
    <>
      <p id={styles['fav-amount']}>{amount}</p>
    </>
  )
}
