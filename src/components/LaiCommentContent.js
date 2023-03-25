import React, { useState, useEffect } from 'react'
import styles from './../styles/Comment.module.css'
import CommentAmount from './LaiCommentAmount'
import CommentCard from './LaiCommentCard'
import axios from 'axios'
import { USER_COMMENT } from '../connections/api-config'
import TreeAnimaion from './LaiAchievementTreeAnimation2'

export default function LaiComment() {
  const [userComment, setUserComment] = useState([])
  let currentUserComment = []

  const getComment = async (req, res) => {
    const userString = localStorage.getItem('myAuth')
    const user = JSON.parse(userString) //localstorage出來的東西都是字串，需要解析
    const token = user.token
    const mid = user.accountId

    try {
      const res = await axios.get(USER_COMMENT(mid), {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (!res) return res.sendStatus(401)
      // const currentUserId = myAuth.sid

      currentUserComment = res.data.data
      setUserComment(currentUserComment)
      console.log('new sql', res.data.data)
      // console.log('userComment:', userComment)
    } catch (error) {
      console.log("there's an error in db connection")
      return []
    }
  }
  useEffect(() => {
    getComment()
    // console.log('state:', currentUserComment)
    // console.log('length:', userComment.length)
  }, [])
  return (
    <>
      <div className={styles['member-data']}>
        <div className={styles['title']}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 12C21.0034 13.3199 20.6951 14.6219 20.1 15.8C19.3944 17.2118 18.3098 18.3992 16.9674 19.2293C15.6251 20.0594 14.0782 20.4994 12.5 20.5C11.1801 20.5035 9.87812 20.1951 8.7 19.6L3 21.5L4.9 15.8C4.30493 14.6219 3.99656 13.3199 4 12C4.00061 10.4218 4.44061 8.87488 5.27072 7.53258C6.10083 6.19028 7.28825 5.1056 8.7 4.40003C9.87812 3.80496 11.1801 3.49659 12.5 3.50003H13C15.0843 3.61502 17.053 4.49479 18.5291 5.97089C20.0052 7.44699 20.885 9.41568 21 11.5V12Z"
              stroke="#6cba7c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h1>過往評論</h1>
        </div>
        <div className={styles['container']}>
          <div className={styles['filter-area']}>
            <div className={styles['show-number']}>
              <p>共有</p>
              {/* TODO連結評論數量 */}
              <CommentAmount amount={userComment.length} />
              {/* <p id={styles['comment-amount']}>4</p> */}
              <p>則評論</p>
            </div>
            {/* <div className={styles['filter-btn']}>
              <select>
                <option>排列順序</option>
                <option>未回覆在前</option>
                <option>已回覆在前</option>
                <option>依照評論順序</option>
              </select>
            </div> */}
          </div>
          <div className={styles['comment-list']}>
            {userComment.map((v, i) => {
              const orderId = `MT2300${String(v.sid)}`
              return (
                <CommentCard
                  key={i}
                  title={v.trail_name}
                  orderId={orderId}
                  dateStart={v.startDate}
                  dateEnd={v.endDate}
                  comment={v.comment}
                  reply={v.reply}
                />
              )
            })}
          </div>
          <TreeAnimaion />
        </div>
      </div>
    </>
  )
}
