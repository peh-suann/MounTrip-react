import React, { useEffect, useState } from 'react'
import styles from './../styles/HistoryOrder.module.css'
import OrderCard from './../components/LaiHistoryOrderCard'
import axios from 'axios'
import { USER_ORDER } from '../connections/api-config'
import HistoryProduct from './LaiHistoryProduct'
import TreeAnimaion from './LaiAchievementTreeAnimation2'

// import HistoryProduct from './../components/LaiHistoryProduct'

export default function LaiHistoryOrder() {
  const [userOrder, setUserOrder] = useState([])
  const [orderList, setOrderList] = useState([])
  let currentUserOrder = []
  let currentOrderList = []

  //order_status_sid轉換
  const convertStatus = (s) => {
    switch (s) {
      case 1:
        return '未付款'
      case 2:
        return '已付款'
      case 3:
        return '付款失敗'
    }
  }

  const getHistoryOrder = async (req, res) => {
    const userString = localStorage.getItem('myAuth')
    const user = JSON.parse(userString) //localstorage出來的東西都是字串，需要解析
    const token = user.token
    const mid = user.accountId

    try {
      const res = await axios.get(USER_ORDER, {
        headers: { Authorization: `Bearer ${token}`, sid: mid },
      })
      if (!res) return res.sendStatus(401)
      // const currentUserId = myAuth.sid
      currentOrderList = res.data.orderSidData
      currentUserOrder = res.data.data

      setUserOrder(currentUserOrder)
      setOrderList(currentOrderList)
      console.log('sid', typeof currentOrderList[0].sid)
      // console.log('currentUO:', res)
    } catch (error) {
      console.log("there's an error in db connection")
      return []
    }
  }
  console.log('orderList:', orderList)
  useEffect(() => {
    getHistoryOrder()
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
              d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
              stroke="#6cba7c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 6.5V12.5L16 14.5"
              stroke="#6cba7c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h1>歷史訂單</h1>
        </div>

        {orderList.map((v, i) => {
          const sidFormat = v.sid.toString().padStart(3, '0')
          const priceFormat = v.total.toLocaleString()
          const orderId = `MT230${sidFormat}`
          const statusString = convertStatus(v.order_status_sid)
          const originOrderSid = v.sid

          return (
            <OrderCard
              key={i}
              orderId={orderId}
              orderState={statusString}
              tolPrice={priceFormat}
              orderDate={v.orderDateFormat}
              orderPayment={'信用卡一次付清'}
              originOrderSid={originOrderSid}
            />
          )
        })}

      </div>
      {/* <TreeAnimaion /> */}
    </>
  )
}
