import React,{useEffect} from 'react'
import styles from './../styles/HistoryOrder.module.css'
import axios from 'axios'
import { USER_ORDER_DETAIL } from '../connections/api-config'

export default function LaiHistoryProduct(props) {
  const {
   
    orderId,
    userOrder,
    setUserOrder,
    productTitle,
    productSubTi,
    dateStart,
    dateEnd,
    price,
    amount,
  } = props
  let currentOrderProduct = []

    //把orderId 訂單的編號當作參數從header傳給node.js 進行sql搜尋
  const countTolPrice = (p, amount) => {
    let priceNum = parseInt(p.replace(',', ''))
    let tolPrice = priceNum * amount

    return tolPrice.toLocaleString()
  }
  const TolPrice = countTolPrice(price, amount)

  const getOrderProductDetail = async (req, res) => {
    const userString = localStorage.getItem('myAuth')
    const user = JSON.parse(userString) //localstorage出來的東西都是字串，需要解析
    const token = user.token
    const mid = user.accountId

    try {
      const res = await axios.get(USER_ORDER_DETAIL, {
        headers: {
          Authorization: `Bearer ${token}`,
          sid: mid,
          orderId: orderId,
        },
      })
      if (!res) return res.sendStatus(401)

      currentOrderProduct = res
      setUserOrder(currentOrderProduct)
      console.log('currentUO:', res)
    } catch (error) {
      console.log("there's an error in db connection")
      return []
    }
  }

  useEffect(() => {
    getOrderProductDetail()
  }, [])
  return (
    <>
      <div className={styles['dropdown-bar']}></div>
      <div className={`${styles['product-wrap']}`}>
        <div className={styles['img-title-wrap']}>
          <div className={styles['img-wrap']}>
            <div className={styles['img-wrap-img']}></div>
          </div>
          <div className={styles['title-wrap']}>
            <h6>{productTitle}</h6>
            <p>{productSubTi}</p>
          </div>
          <div className={styles['date-wrap']}>
            <p>{dateStart}</p>
            <div className={styles['date-dash']}></div>
            <p>{dateEnd}</p>
          </div>
        </div>
        <div className={styles['single-price-wrap']}>
          <p>NTD</p>
          <p>{price}</p>
        </div>
        <div className={styles['amount-wrap']}>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.4502 7.05029L7.5507 16.9498"
              stroke="#011306"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5498 7.05029L17.4493 16.9498"
              stroke="#011306"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>{amount}</p>
        </div>
        <div className={styles['total-price-wrap']}>
          <p>NTD</p>
          <p>{TolPrice}</p>
          {/* <p>{price}</p> */}
        </div>
      </div>
    </>
  )
}
