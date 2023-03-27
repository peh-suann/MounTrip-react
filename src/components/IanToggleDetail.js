import React, { useState } from 'react'
import styles from './../styles/IanShoppingCart2.module.css'
import { useCart } from '../components/IanUseCart'
import IanShowDetail from './IanShowDetail'
import IanFakeTraveler from './IanFakeTraveler'

function IanToggleDetail(props) {
  const { items } = useCart()
  const [toggleOpen, setToggleOpen] = useState(false)
  const {
    memberitems,
    trail_name,
    quantity,
    batch_start,
    batch_end,
    traveler,
    Auth,
    setAuth,
  } = props
  const id = items.map((v, i) => {
    return v.sid
  })

  return (
    <>
      <div
        className={`${styles.productDetail} col-12 d-flex flex-row align-items-start p-0 mb-3`}
      >
        <svg
          onClick={(e) => {
            console.log(e.currentTarget.id)
            setToggleOpen(!toggleOpen)
            // setOpen(!toggleOpen)
          }}
          id={id}
          className={`me-2`}
          style={{ transform: `${toggleOpen ? 'rotate(90deg)' : ''}` }}
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.25 22.5L18.75 15L11.25 7.5"
            stroke="#6CBA7C"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className={`col`}>
          <p className={`${styles['order-title']} `}>{trail_name}</p>
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
              <span>{quantity}張</span>
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
                {batch_start} - {batch_end}
              </span>
            </p>
          </div>
        </div>
      </div>

      {toggleOpen ? (
        <IanFakeTraveler Auth={Auth} memberitems={memberitems}/>
      ) : (
        <IanShowDetail
          toggleOpen={toggleOpen}
          memberitems={memberitems}
          quantity={quantity}
          traveler={traveler}
          Auth={Auth}
          setAuth={setAuth}
        />
      )}
    </>
  )
}

export default IanToggleDetail
