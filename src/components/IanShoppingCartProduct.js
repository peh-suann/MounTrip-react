import React, { useState } from 'react'
import styles from './../styles/IanShoppingCart1.module.css'

function IanShoppingCartProduct({
  key,
  pid,
  name,
  startTime,
  endTime,
  price,
  count,
  total,
  setData,
  minusItem,
  plusIcon,
  deletepruduct,
  wannaBuy,
}) {
  const [mycheck, setMyCheck] = useState(false)

  return (
    <div key={key} className={`${styles['shoppingcart-product']}`}>
      <div
        className={`${styles['product-col']} ${styles['mobile-none']} d-flex`}
      >
        <div className={`${styles['mobile-none']} ${styles.w1} `}>
          <input
            type="checkbox"
            checked={mycheck}
            onChange={() => {
              setMyCheck(wannaBuy(pid))
            }}
          />
        </div>
        <div className={`${styles['mobile-none']} ${styles.w2} `}>
          <div className={`row w-100`}>
            <div className={`col-4`}>
              <div className={`${styles['product-img-wrap']}`}>
                <img src="/imgs/Ian_img/shopping-cart1.png" />
              </div>
            </div>
            <div className={`col-8 px-0`}>
              <p className={`${styles['product-title']}  mb-3`}>{name}</p>
              <p className={`${styles['product-subtitle']} mb-0`}>
                {name}單日行程
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles['mobile-none']} ${styles.w3} `}>
          <p className={`mb-lg-2`}>{startTime}</p>
          <p className={`mb-lg-2`}>&emsp;&emsp;|</p>
          <p className={`mb-0`}>{endTime}</p>
        </div>
        <div className={`${styles['mobile-none']} ${styles.w4} `}>
          NTD {price}
        </div>
        <div className={`${styles['mobile-none']} ${styles.w5} `}>
          <div className={`d-flex`}>
            <button className={`${styles['plus-button']}`}>
              <svg
                onClick={() => {
                  minusItem(pid)
                }}
                className={`${styles['minus-icon']} me-3`}
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12.5H19"
                  stroke="#6CBA7C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <p className={`${styles['product-number']}  mb-0 me-3`}>{count}</p>
            <button className={`${styles['plus-button']}`}>
              <svg
                onClick={() => {
                  setData(plusIcon(pid))
                }}
                className={`${styles['minus-icon']}`}
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5.5V19.5"
                  stroke="#6CBA7C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 12.5H19"
                  stroke="#6CBA7C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${styles['mobile-none']} ${styles.w6} `}>
          NTD {total}
        </div>
        <div className={`${styles['mobile-none']} ${styles.w7} `}>
          <svg
            onClick={(e) => {
              setData(deletepruduct(pid))
            }}
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 7.5H6.25H26.25"
              stroke="#6CBA7C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.75 7.5V25C23.75 25.663 23.4866 26.2989 23.0178 26.7678C22.5489 27.2366 21.913 27.5 21.25 27.5H8.75C8.08696 27.5 7.45107 27.2366 6.98223 26.7678C6.51339 26.2989 6.25 25.663 6.25 25V7.5M10 7.5V5C10 4.33696 10.2634 3.70107 10.7322 3.23223C11.2011 2.76339 11.837 2.5 12.5 2.5H17.5C18.163 2.5 18.7989 2.76339 19.2678 3.23223C19.7366 3.70107 20 4.33696 20 5V7.5"
              stroke="#6CBA7C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 13.75V21.25"
              stroke="#6CBA7C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 13.75V21.25"
              stroke="#6CBA7C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div
        className={`${styles['product-col-mobile']} ${styles['web-none']} d-flex flex-column`}
      >
        <div className={`${styles['mb-12']} ${styles['web-none']} w-100`}>
          <div className={`row w-100 justify-content-between mx-0`}>
            <div className={`${styles['product-mobile']} col-4 ps-0`}>
              <div className={`${styles['product-img-wrap']} `}>
                <img src="/imgs/Ian_img/shopping-cart1.png" />
              </div>
            </div>
            <div className={`col-8 px-0`}>
              <p
                className={`${styles['product-title']} ${styles.mtgrey1} mb-1`}
              >
                草嶺古道｜探索新北一日遊探索新北一日遊
              </p>
              <p
                className={`${styles['product-subtitle']} ${styles.mtgrey2}  mb-0`}
              >
                草嶺古道單日行程
              </p>
              <p
                className={`${styles['product-subtitle']} ${styles.mtgrey1}  mb-0`}
              >
                2023/01/01 - 2023/01/02
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${styles['web-none']} w-100 d-flex justify-content-between align-items-end`}
        >
          <div className={`${styles['web-none']}`}>
            <p className={`${styles['single-price']} ${styles.mtgrey2}  mb-0`}>
              NTD 1,200
            </p>
            <p className={`${styles['total-price']} ${styles.mtgrey1} mb-0`}>
              NTD 1,200
            </p>
          </div>
          <div className={`${styles['web-none']}`}>
            <div className={`d-flex align-items-center`}>
              <button className={`${styles['plus-button']}`}>
                <svg
                  className={`${styles['minus-icon']}`}
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12.5H19"
                    stroke="#6CBA7C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <p className={`${styles['product-number']} mb-0 mx-3`}>1</p>
              <button className={`${styles['plus-button']}`}>
                <svg
                  className={`${styles['minus-icon']}`}
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5.5V19.5"
                    stroke="#6CBA7C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12.5H19"
                    stroke="#6CBA7C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IanShoppingCartProduct
