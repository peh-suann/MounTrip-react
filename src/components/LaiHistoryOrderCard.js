import React, { useEffect, useState } from 'react'
import styles from './../styles/HistoryOrder.module.css'
import HistoryProduct from './../components/LaiHistoryProduct'
import { USER_ORDER_DETAIL } from '../connections/api-config'
import axios from 'axios'

export default function LaiHistoryOrderCard(props) {
  const {
    originOrderSid,
    orderId,
    orderState,
    tolPrice,
    orderDate,
    orderPayment,
  } = props

  //把orderId 訂單的編號當作參數從header傳給node.js 進行sql搜尋
  //訂單細節資料
  const [userOrder, setUserOrder] = useState([])
  let currentOrderProduct = []

  const [open, setOpen] = useState(false)
  const tagColor = (orderState) => {
    switch (orderState) {
      case '已付款':
        return { backgroundColor: '#6cba7c' }
        break
      case '未付款':
        return { backgroundColor: '#F3C969' }
        break
      case '付款失敗':
        return { backgroundColor: '#4d5a51' }
        break
    }
  }

  const getOrderProductDetail = async (req, res) => {
    const userString = localStorage.getItem('myAuth')
    const user = JSON.parse(userString) //localstorage出來的東西都是字串，需要解析
    const token = user.token
    const mid = user.accountId

    try {
      const res = await axios.get(USER_ORDER_DETAIL, {
        headers: {
          Authorization: `Bearer ${token}`,
          ID: originOrderSid,
          sid: mid,
          // orderId: orderId,
        },
      })
      if (!res) return res.sendStatus(401)

      currentOrderProduct = res.data.data
      setUserOrder(currentOrderProduct)
      console.log('res:', res.data.data)
    } catch (error) {
      console.log("there's an error in db connection")
      return []
    }
  }

  useEffect(() => {
    getOrderProductDetail()
    console.log('order:', originOrderSid)
  }, [])

  return (
    <>
      <div className={styles['order-card']}>
        <button
          className={styles['toggle-btn']}
          onClick={() => {
            setOpen(!open)
          }}
        >
          <svg
            className={styles['arrow-btn']}
            id="btn1"
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `rotate(${open ? '0deg' : '-90deg'})` }}
          >
            <path
              d="M8.75 13.125L17.5 21.875L26.25 13.125"
              stroke="#6CBA7C"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className={styles['order-state']}>
          <div className={styles['order-title']}>
            <div className={styles['order-title-id']}>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 4.5H18C18.5304 4.5 19.0391 4.71071 19.4142 5.08579C19.7893 5.46086 20 5.96957 20 6.5V20.5C20 21.0304 19.7893 21.5391 19.4142 21.9142C19.0391 22.2893 18.5304 22.5 18 22.5H6C5.46957 22.5 4.96086 22.2893 4.58579 21.9142C4.21071 21.5391 4 21.0304 4 20.5V6.5C4 5.96957 4.21071 5.46086 4.58579 5.08579C4.96086 4.71071 5.46957 4.5 6 4.5H8"
                  stroke="#011306"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 2.5H9C8.44772 2.5 8 2.94772 8 3.5V5.5C8 6.05228 8.44772 6.5 9 6.5H15C15.5523 6.5 16 6.05228 16 5.5V3.5C16 2.94772 15.5523 2.5 15 2.5Z"
                  stroke="#011306"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>訂單編號：</p>
              <p>{orderId}</p>
            </div>
            <div
              className={styles['order-status-tag']}
              style={tagColor(orderState)}
            >
              <p>{orderState}</p>
            </div>
            {/* <div style={{ backgroundColor: 'blue' }}>cool</div> */}
          </div>
          <div className={styles['order-content']}>
            <div className={styles['price-wrap']}>
              <p>NTD</p>
              <p id={styles['price']}>{tolPrice}</p>
            </div>
            <div className={styles['time-wrap']}>
              <p>訂單日期：</p>
              <p>{orderDate}</p>
            </div>
            <div className={styles['bill-wrap']}>
              {orderState === '已付款' && (
                <>
                  <p>付款方式：</p>
                  <p>{orderPayment}</p>
                </>
              )}
              {orderState === '未付款' && (
                <>
                  <p>未付款</p>
                </>
              )}
              {orderState === '付款失敗' && (
                <>
                  <p>付款失敗</p>
                </>
              )}
              {/* <p>付款方式：</p>
              <p>{orderPayment}</p> */}
            </div>
          </div>
          <div className={styles['dropdown']} id="dropdown1">
            {/* {open && props.children} */}
            {open
              ? userOrder.map((v, i) => {
                  return (
                    <HistoryProduct
                      key={i}
                      img={v.trail_img}
                      productTitle={v.trail_name}
                      productSubTi={v.trail_short_describ}
                      dateStart={v.startDate}
                      dateEnd={v.endDate}
                      price={v.price}
                      amount={v.amount}
                      userOrder={userOrder}
                      setUserOrder={setUserOrder}
                      originOrderSid={originOrderSid}
                      open={open}
                    />
                  )
                })
              : null}
            {/* {open ? (
              <HistoryProduct
                img={''}
                productTitle={'草嶺古道｜探索新北一日遊'}
                productSubTi={'古代淡蘭古道北路一部分'}
                dateStart={'2023/03/09'}
                dateEnd={'2023/03/10'}
                price={'1,600'}
                amount={2}
              />
            ) : null} */}
          </div>
        </div>
      </div>
    </>
  )
}
