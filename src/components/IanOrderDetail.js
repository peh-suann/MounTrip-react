import { useState } from 'react'
import { useCart } from '../components/IanUseCart'
import styles from './../styles/IanShoppingCart2.module.css'
import IanShowDetail from './IanShowDetail'
import IanToggle from './IanToggle'
// import IanShowDetail from './IanShowDetail'

function IanOrderDetail(props) {
  const { items } = useCart()

  // const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)

  // const [check, setCheck] = useState(false)
  // const [details, setDetails] = useState([
  //   {
  //     id: '',
  //     firstname: '',
  //     lastname: '',
  //     phone: '',
  //     email: '',
  //     idCard: '',
  //     birthday: '',
  //     check: false,
  //   },
  // ])

  // const getOpenIcon = ()=>{
  //   if()
  // }

  // const newItems = details.map((v, i) => {
  //   return { ...v, check: true }
  // })

  // const getDetail = (arr, checknow, arr2) => {
  //   return arr.map((v, i) => {
  //     if (v.check === checknow) {
  //       return { ...v, check: !v.check }
  //     } else {
  //       return { ...v }
  //     }
  //   })
  // }

  return (
    <>
      {/* 商品跟form表單 */}
      {items.map((v, i) => {
        return (
          <>
            <div
              key={v.sid}
              className={`${styles.productDetail} col-12 d-flex flex-row align-items-start p-0 mb-3`}
            >
              <IanToggle setOpen={setOpen} />

              <div className={`col`}>
                <p className={`${styles['order-title']} `}>{v.trail_name}</p>
                <div className={`${styles['order-title-detail']} d-flex`}>
                  <p
                    className={`${styles['order-title-detail-number']} me-3 d-flex align-items-center`}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 21.5V19.5C17 18.4391 16.5786 17.4217 15.8284 16.6716C15.0783 15.9214 14.0609 15.5 13 15.5H5C3.93913 15.5 2.92172 15.9214 2.17157 16.6716C1.42143 17.4217 1 18.4391 1 19.5V21.5"
                        stroke="#9AA09B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 11.5C11.2091 11.5 13 9.70914 13 7.5C13 5.29086 11.2091 3.5 9 3.5C6.79086 3.5 5 5.29086 5 7.5C5 9.70914 6.79086 11.5 9 11.5Z"
                        stroke="#9AA09B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M23 21.5009V19.5009C22.9993 18.6146 22.7044 17.7536 22.1614 17.0532C21.6184 16.3527 20.8581 15.8524 20 15.6309"
                        stroke="#9AA09B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 3.63086C16.8604 3.85116 17.623 4.35156 18.1676 5.05317C18.7122 5.75478 19.0078 6.61769 19.0078 7.50586C19.0078 8.39403 18.7122 9.25694 18.1676 9.95855C17.623 10.6602 16.8604 11.1606 16 11.3809"
                        stroke="#9AA09B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{v.quantity}張</span>
                  </p>
                  <p
                    className={`${styles['order-title-detail-sec']} col  d-flex align-items-center`}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 4.5H5C3.89543 4.5 3 5.39543 3 6.5V20.5C3 21.6046 3.89543 22.5 5 22.5H19C20.1046 22.5 21 21.6046 21 20.5V6.5C21 5.39543 20.1046 4.5 19 4.5Z"
                        stroke="#9AA09B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 2.5V6.5"
                        stroke="#9AA09B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 2.5V6.5"
                        stroke="#9AA09B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 10.5H21"
                        stroke="#9AA09B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>
                      {v.batch_start} - {v.batch_end}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* <IanShowDetail /> */}
            {open &&
              Array(v.quantity)
                .fill(1)
                .map((v2, i2) => {
                  return (
                    <form
                      key={i2}
                      className={`${styles['form-inline']} ${styles['mb-50']} `}
                      action=" "
                    >
                      <div
                        className={`${styles['mb-20']} row justify-content-between `}
                      >
                        <div className={`${styles['form-group']} col-6`}>
                          <label
                            htmlFor="
    traveler1-firstName"
                          >
                            名字
                          </label>
                          <input
                            type="text"
                            id="traveler1-firstName"
                            value={v2.firstname}
                            onChange={() => {}}
                          />
                        </div>
                        <div className={`${styles['form-group']} col-6`}>
                          <label htmlFor="traveler1-lastName">姓氏</label>
                          <input
                            type="text"
                            className={`${styles['form-control']} `}
                            id="traveler1-lastName"
                            value={v2.lastname}
                            onChange={() => {}}
                          />
                        </div>
                      </div>
                      <div
                        className={`${styles['form-group']} ${styles['mb-20']} col-12`}
                      >
                        <label htmlFor="traveler1-phone">聯絡電話</label>
                        <input
                          type="tel"
                          id="traveler1-phone"
                          value={v2.phone}
                          onChange={() => {}}
                        />
                      </div>
                      <div
                        className={`${styles['form-group']} ${styles['mb-20']} col-12`}
                      >
                        <label htmlFor="traveler1-email">電子郵件信箱</label>
                        <input
                          type="email"
                          id="traveler1-email"
                          value={v2.email}
                          onChange={() => {}}
                        />
                      </div>
                      <div
                        className={`${styles['mb-20']} row justify-content-between`}
                      >
                        <div className={`${styles['form-group']} col-6`}>
                          <label
                            htmlFor="
    traveler1-id"
                          >
                            身分證字號
                          </label>
                          <input
                            type="text"
                            id="traveler1-id"
                            value={v2.idCard}
                            onChange={() => {}}
                          />
                        </div>
                        <div className={`${styles['form-group']} col-6`}>
                          <label htmlFor="traveler1-birthday">出生年月日</label>
                          <input
                            type="date"
                            id="traveler1-birthday"
                            value={v2.birthday}
                            onChange={() => {}}
                          />
                        </div>
                      </div>
                      <div
                        className={`${styles['mb-48']} d-flex align-items-center`}
                      >
                        <input
                          type="checkbox"
                          id="sameOrder"
                          name="sameOrder"
                          checked={v2.check}
                          onClick={() => {
                            // setDetails(getDetail(newItems, v.check, details))
                          }}
                        />
                        <label
                          htmlFor="sameOrder"
                          className={`${styles.dataSame}`}
                        >
                          同訂購人資料
                        </label>
                      </div>
                    </form>
                  )
                })}
          </>
        )
      })}
    </>
  )
}

export default IanOrderDetail
