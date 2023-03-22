import React, { useState, useEffect, useReducer } from 'react'
import styles from './../styles/Achievement.module.css'
import AchievementBadge from './LaiAchievementBadge'
import ProgressBar from './LaiAchievementProgressBar'
import AchievementDescrib from './LaiAchievementDescrib'
import AchievementTreeBlock from './LaiAchievementTreeBlock'
import AchievementQuote from './LaiAchievementQuote'
import axios from 'axios'
import { USER_ORDER, USER_ORDER_SUCCESS } from '../connections/api-config'

export default function LaiAchievementContent(props) {
  const { user, setUser } = props
  const [clickedLevel, setClickedLevel] = useState(1)
  // const [userOrder, setUserOrder] = useState([])
  // let currentUserOrder = []

  //fetch會員過去消費資料的
  const totalReducer = (state, action) => {
    switch (action.type) {
      case 'initial':
        return {
          total: action.payload.reduce((acc, curr) => acc + curr.total, 0),
        }
      default:
        return state
    }
  }
  const [orderList, dispatch] = useReducer(totalReducer, { total: 0 })
  // const [orderList, setOrderList] = useState([])
  let currentOrderList = []
  // const [current, ]

  const getHistoryOrder = async (req, res) => {
    const userString = localStorage.getItem('myAuth')
    const user = JSON.parse(userString) //localstorage出來的東西都是字串，需要解析
    const token = user.token
    const mid = user.accountId

    try {
      const res = await axios.get(USER_ORDER_SUCCESS, {
        headers: { Authorization: `Bearer ${token}`, sid: mid },
      })
      if (!res) return res.sendStatus(401)
      // const currentUserId = myAuth.sid
      //FIXME 應該要去除掉未付款/未成立的訂單
      currentOrderList = res.data.orderSidData
      // currentUserOrder = res.data.data
      dispatch({
        type: 'initial',
        payload: currentOrderList,
      })
      // setUserOrder(currentUserOrder)
      // setOrderList(currentOrderList)
      // console.log('new sql', res.data.data)
      // console.log('currentUO:', res)
    } catch (error) {
      console.log("there's an error in db connection")
      return []
    }
  }

  //加總過去會員的訂單金額
  const calcOrderTotal = () => {
    const total = orderList.reduce((acc, curr) => acc + curr[total], 0)
    //轉型為字串
    // const totalFormat = total.toLocaleString()
    // console.log('T', total)
    return total
  }
  useEffect(() => {
    getHistoryOrder()
  }, [])

  // console.log(calcOrderTotal())
  const progressFormat = orderList.total.toLocaleString()
  console.log('converted', progressFormat)
  console.log('RDOC', orderList) //現在這是個useReducer了
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
            <g clipPath="url(#clip0_1298_10889)">
              <path
                d="M12 15.5C15.866 15.5 19 12.366 19 8.5C19 4.63401 15.866 1.5 12 1.5C8.13401 1.5 5 4.63401 5 8.5C5 12.366 8.13401 15.5 12 15.5Z"
                stroke="#6cba7c"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.21 14.39L7 23.5L12 20.5L17 23.5L15.79 14.38"
                stroke="#6cba7c"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1298_10889">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <h1>成就獎章</h1>
        </div>
        <div className={styles['container']}>
          <AchievementBadge level={user.level} />
          {/* <div className={styles['badge']}>
            <div className={styles['badge-pic']}></div>
          </div> */}
          {user.level === 1 ? (
            <ProgressBar current={progressFormat} target={'25,000'} />
          ) : null}
          {user.level === 2 ? (
            <ProgressBar current={progressFormat} target={'50,000'} />
          ) : null}
          {user.level === 3 ? (
            <ProgressBar current={'50,000'} target={'50,000'} />
          ) : null}
          <AchievementDescrib
            level={user.level}
            setClickedLevel={setClickedLevel}
            clickedLevel={clickedLevel}
          />
          {/* FIXME */}
          <AchievementQuote level={clickedLevel} />
          <AchievementTreeBlock />
          {/* <div className={styles['tree-block']}>
            <div className={styles['describ-rules']}>
              <p>
                MounTrip與「財團法人慈心基金會」合作，自2018年開始，每年將營業收入的
                <span className={styles['percent']}>2%</span>
                投入種樹護地球的活動中。所捐贈的金額涵蓋種樹的費用以及後續三年間養護樹林的支出。
                MounTrip過去五年來透過慈心基金會，總計在台灣種下了
                <span className={styles['history-tree']}>1,268</span>
                顆樹，今年底預計再種植250顆樹！
              </p>
            </div>
            <div className={styles['rules-border']}></div>
            <div className={styles['achievement-state']}>
              <p>透過參加MounTrip的行程，</p>
              <div className={styles['achievement-num']}>
                <p>您已經為台灣種下了</p>
                <span className={styles['tree-num']}>6</span>
                <p>顆樹，恭喜你！</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}
