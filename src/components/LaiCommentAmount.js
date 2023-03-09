import React from 'react'
import styles from './../styles/Comment.module.css'


export default function LaiCommentAmount(props) {
    const{amount}=props
  return (
    <>
        <p id={styles['comment-amount']}>{amount}</p>
    </>
  )
}
