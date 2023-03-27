import axios from 'axios'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import styles from './../styles/IanShoppingCart4.module.css'
import './../styles/Mountrip.module.css'
import { ORDER_HISTORY } from '../connections/api-config'
import { async } from 'q'

function IanShoppingCart4() {
  const [mypage, setPage] = useState('')
  const cartItem = JSON.parse(localStorage.getItem('cart'))

  const orderId = localStorage.getItem('lastSid')
  const finalId = `MT230${orderId}`
  const navigate = useNavigate()
  const payTotal = JSON.parse(localStorage.getItem('total'))
  const newPayTotal = payTotal.total
  console.log('newPayTotal:', newPayTotal)
  const Date = localStorage.getItem('Date')

  return (
    <>
      <div className={`${styles.IanShoppingCartAll}`}>
        <section
          className={`${styles['shopping-cart-process']} ${styles['mobile-none']} row justify-content-center`}
        >
          <div
            className={`d-flex justify-content-center ${styles.shoppingSvgs}`}
          >
            <Link to="/SC1">
              <svg
                onClick={() => {
                  setPage('確認訂單')
                }}
                className={`${styles.shoppingSvg1}`}
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#CEE8CB" />
                <path
                  d="M22.1617 29.6571H18.0417V18.3773C18.0417 18.0662 18.0462 17.684 18.055 17.2306C18.0639 16.7684 18.0773 16.2973 18.095 15.8173C18.1128 15.3284 18.1306 14.8884 18.1484 14.4973C18.0506 14.6129 17.8506 14.8129 17.5484 15.0973C17.2551 15.3729 16.9795 15.6218 16.7217 15.844L14.4818 17.644L12.4951 15.164L18.775 10.1641H22.1617V29.6571Z"
                  fill="#FFFFF2"
                />
              </svg>
            </Link>
            <Link to="/SC2">
              <svg
                onClick={() => {
                  setPage('填寫資料')
                }}
                className={`${styles.shoppingSvg2}`}
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#CEE8CB" />
                <path
                  d="M26.7605 29.8352H13.2893V26.9833L18.1268 22.0622C19.1022 21.0541 19.8843 20.2141 20.473 19.542C21.0706 18.8611 21.5012 18.2421 21.7648 17.685C22.0372 17.1279 22.1734 16.531 22.1734 15.8943C22.1734 15.1249 21.9581 14.5502 21.5275 14.1699C21.1057 13.7808 20.5389 13.5863 19.8272 13.5863C19.0802 13.5863 18.3553 13.7587 17.6523 14.1036C16.9493 14.4485 16.2155 14.9392 15.451 15.5759L13.2366 12.9363C13.7902 12.4588 14.3745 12.0078 14.9897 11.5834C15.6136 11.1589 16.3341 10.8184 17.1514 10.562C17.9774 10.2967 18.966 10.1641 20.1171 10.1641C21.3825 10.1641 22.4678 10.394 23.3729 10.8538C24.2868 11.3136 24.9898 11.9415 25.4819 12.7374C25.974 13.5244 26.22 14.4175 26.22 15.4168C26.22 16.4868 26.0091 17.4639 25.5873 18.3482C25.1655 19.2325 24.5504 20.1079 23.742 20.9745C22.9423 21.8411 21.9757 22.8006 20.8421 23.8529L18.364 26.2007V26.3864H26.7605V29.8352Z"
                  fill="#FFFFF2"
                />
              </svg>
            </Link>
            <Link to="/SC3">
              <svg
                onClick={() => {
                  setPage('付款頁面')
                }}
                className={`${styles.shoppingSvg3}`}
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#CEE8CB" />
                <path
                  d="M26.0774 14.7079C26.0774 15.5871 25.8937 16.3488 25.5261 16.9929C25.1585 17.6371 24.6597 18.1637 24.0296 18.5728C23.4083 18.9819 22.7082 19.2822 21.9293 19.4738V19.5521C23.4695 19.7436 24.6378 20.2137 25.4342 20.9623C26.2393 21.7109 26.6419 22.7119 26.6419 23.9654C26.6419 25.0796 26.3662 26.0763 25.8149 26.9555C25.2723 27.8346 24.4322 28.5267 23.2945 29.0315C22.1569 29.5364 20.691 29.7888 18.897 29.7888C17.8381 29.7888 16.8492 29.7018 15.9303 29.5277C15.0202 29.3623 14.1625 29.1055 13.3574 28.7573V25.3233C14.18 25.7411 15.042 26.0589 15.9434 26.2765C16.8448 26.4854 17.6849 26.5899 18.4638 26.5899C19.9165 26.5899 20.9317 26.3418 21.5093 25.8456C22.0956 25.3407 22.3888 24.6356 22.3888 23.7304C22.3888 23.1994 22.2531 22.7511 21.9818 22.3855C21.7105 22.0199 21.238 21.7413 20.5641 21.5498C19.899 21.3583 18.967 21.2626 17.7681 21.2626H16.311V18.168H17.7943C18.9758 18.168 19.8728 18.0592 20.4854 17.8416C21.1067 17.6153 21.5268 17.3106 21.7455 16.9276C21.9731 16.5359 22.0868 16.092 22.0868 15.5958C22.0868 14.9168 21.8768 14.3858 21.4567 14.0028C21.0367 13.6198 20.3366 13.4283 19.3564 13.4283C18.7438 13.4283 18.1838 13.5067 17.6762 13.6634C17.1774 13.8113 16.7267 13.9941 16.3241 14.2118C15.9216 14.4207 15.5671 14.6252 15.2608 14.8254L13.3837 12.0443C14.1363 11.5046 15.0158 11.0563 16.0222 10.6994C17.0373 10.3425 18.245 10.1641 19.6452 10.1641C21.623 10.1641 23.1895 10.5601 24.3447 11.3523C25.4998 12.1444 26.0774 13.2629 26.0774 14.7079Z"
                  fill="#FFFFF2"
                />
              </svg>
            </Link>
            <Link to="/SC4">
              <svg
                onClick={() => {
                  setPage('完成訂單')
                }}
                className={`${styles.shoppingSvg4}`}
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#6CBA7C" />
                <path
                  d="M27.5062 25.795H25.1069V29.8815H20.9899V25.795H12.4834V22.8954L21.2217 10.1641H25.1069V22.5583H27.5062V25.795ZM20.9899 22.5583V19.2136C20.9899 18.8989 20.9945 18.5258 21.0036 18.0942C21.0218 17.6626 21.0399 17.231 21.0581 16.7995C21.0763 16.3679 21.0945 15.9858 21.1126 15.6531C21.1399 15.3114 21.1581 15.0732 21.1672 14.9383H21.0581C20.8854 15.307 20.7037 15.6666 20.5128 16.0172C20.322 16.3589 20.0993 16.7186 19.8448 17.0962L16.1914 22.5583H20.9899Z"
                  fill="#FFFFF2"
                />
              </svg>
            </Link>

            <svg
              className={`${styles.shoppingSvg5}`}
              width="668"
              height="3"
              viewBox="0 0 668 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="1.5"
                x2="668"
                y2="1.5"
                stroke="#CEE8CB"
                strokeWidth="3"
              />
            </svg>
            <div
              className={`${styles['mb-42']} ${styles.shoppingbottom} d-flex justify-content-center`}
            >
              <p className={`${styles['me-142']} ${styles.mtgrey3}`}>
                確認訂單
              </p>
              <p className={`${styles['me-142']} ${styles.mtgrey3}`}>
                填寫資料
              </p>
              <p className={`${styles['me-142']} ${styles.mtgrey3}`}>
                付款頁面
              </p>
              <p className={`${styles.mtgrey1} }`}>完成訂單</p>
            </div>
          </div>
        </section>

        <section
          className={`${styles['shopping-cart-process']} ${styles['web-none']} col-12 row justify-content-center m-0`}
        >
          {/* 購物車流程png & li */}
          <div
            className={`d-flex justify-content-center ${styles.shoppingSvgs}`}
          >
            <Link to="/SC1">
              <svg
                onClick={() => {
                  setPage('確認訂單')
                }}
                className={`${styles.shoppingSvg1}`}
                width="32"
                height="32"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#CEE8CB" />
                <path
                  d="M22.1617 29.6571H18.0417V18.3773C18.0417 18.0662 18.0462 17.684 18.055 17.2306C18.0639 16.7684 18.0773 16.2973 18.095 15.8173C18.1128 15.3284 18.1306 14.8884 18.1484 14.4973C18.0506 14.6129 17.8506 14.8129 17.5484 15.0973C17.2551 15.3729 16.9795 15.6218 16.7217 15.844L14.4818 17.644L12.4951 15.164L18.775 10.1641H22.1617V29.6571Z"
                  fill="#FFFFF2"
                />
              </svg>
            </Link>
            <Link to="/SC2">
              <svg
                onClick={() => {
                  setPage('填寫資料')
                }}
                className={`${styles.shoppingSvg2}`}
                width="32"
                height="32"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#CEE8CB" />
                <path
                  d="M26.7605 29.8352H13.2893V26.9833L18.1268 22.0622C19.1022 21.0541 19.8843 20.2141 20.473 19.542C21.0706 18.8611 21.5012 18.2421 21.7648 17.685C22.0372 17.1279 22.1734 16.531 22.1734 15.8943C22.1734 15.1249 21.9581 14.5502 21.5275 14.1699C21.1057 13.7808 20.5389 13.5863 19.8272 13.5863C19.0802 13.5863 18.3553 13.7587 17.6523 14.1036C16.9493 14.4485 16.2155 14.9392 15.451 15.5759L13.2366 12.9363C13.7902 12.4588 14.3745 12.0078 14.9897 11.5834C15.6136 11.1589 16.3341 10.8184 17.1514 10.562C17.9774 10.2967 18.966 10.1641 20.1171 10.1641C21.3825 10.1641 22.4678 10.394 23.3729 10.8538C24.2868 11.3136 24.9898 11.9415 25.4819 12.7374C25.974 13.5244 26.22 14.4175 26.22 15.4168C26.22 16.4868 26.0091 17.4639 25.5873 18.3482C25.1655 19.2325 24.5504 20.1079 23.742 20.9745C22.9423 21.8411 21.9757 22.8006 20.8421 23.8529L18.364 26.2007V26.3864H26.7605V29.8352Z"
                  fill="#FFFFF2"
                />
              </svg>
            </Link>
            <Link to="/SC3">
              <svg
                onClick={() => {
                  setPage('付款頁面')
                }}
                className={`${styles.shoppingSvg3}`}
                width="32"
                height="32"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#CEE8CB" />
                <path
                  d="M26.0774 14.7079C26.0774 15.5871 25.8937 16.3488 25.5261 16.9929C25.1585 17.6371 24.6597 18.1637 24.0296 18.5728C23.4083 18.9819 22.7082 19.2822 21.9293 19.4738V19.5521C23.4695 19.7436 24.6378 20.2137 25.4342 20.9623C26.2393 21.7109 26.6419 22.7119 26.6419 23.9654C26.6419 25.0796 26.3662 26.0763 25.8149 26.9555C25.2723 27.8346 24.4322 28.5267 23.2945 29.0315C22.1569 29.5364 20.691 29.7888 18.897 29.7888C17.8381 29.7888 16.8492 29.7018 15.9303 29.5277C15.0202 29.3623 14.1625 29.1055 13.3574 28.7573V25.3233C14.18 25.7411 15.042 26.0589 15.9434 26.2765C16.8448 26.4854 17.6849 26.5899 18.4638 26.5899C19.9165 26.5899 20.9317 26.3418 21.5093 25.8456C22.0956 25.3407 22.3888 24.6356 22.3888 23.7304C22.3888 23.1994 22.2531 22.7511 21.9818 22.3855C21.7105 22.0199 21.238 21.7413 20.5641 21.5498C19.899 21.3583 18.967 21.2626 17.7681 21.2626H16.311V18.168H17.7943C18.9758 18.168 19.8728 18.0592 20.4854 17.8416C21.1067 17.6153 21.5268 17.3106 21.7455 16.9276C21.9731 16.5359 22.0868 16.092 22.0868 15.5958C22.0868 14.9168 21.8768 14.3858 21.4567 14.0028C21.0367 13.6198 20.3366 13.4283 19.3564 13.4283C18.7438 13.4283 18.1838 13.5067 17.6762 13.6634C17.1774 13.8113 16.7267 13.9941 16.3241 14.2118C15.9216 14.4207 15.5671 14.6252 15.2608 14.8254L13.3837 12.0443C14.1363 11.5046 15.0158 11.0563 16.0222 10.6994C17.0373 10.3425 18.245 10.1641 19.6452 10.1641C21.623 10.1641 23.1895 10.5601 24.3447 11.3523C25.4998 12.1444 26.0774 13.2629 26.0774 14.7079Z"
                  fill="#FFFFF2"
                />
              </svg>
            </Link>
            <Link to="/SC4">
              <svg
                onClick={() => {
                  setPage('完成訂單')
                }}
                className={`${styles.shoppingSvg4}`}
                width="32"
                height="32"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#6CBA7C" />
                <path
                  d="M27.5062 25.795H25.1069V29.8815H20.9899V25.795H12.4834V22.8954L21.2217 10.1641H25.1069V22.5583H27.5062V25.795ZM20.9899 22.5583V19.2136C20.9899 18.8989 20.9945 18.5258 21.0036 18.0942C21.0218 17.6626 21.0399 17.231 21.0581 16.7995C21.0763 16.3679 21.0945 15.9858 21.1126 15.6531C21.1399 15.3114 21.1581 15.0732 21.1672 14.9383H21.0581C20.8854 15.307 20.7037 15.6666 20.5128 16.0172C20.322 16.3589 20.0993 16.7186 19.8448 17.0962L16.1914 22.5583H20.9899Z"
                  fill="#FFFFF2"
                />
              </svg>
            </Link>
            <svg
              className={`${styles.shoppingSvg5}`}
              width="246"
              height="3"
              viewBox="0 0 668 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="1.5"
                x2="668"
                y2="1.5"
                stroke="#CEE8CB"
                strokeWidth="3"
              />
            </svg>
          </div>
          <div
            className={`${styles['mb-42']} ${styles.shoppingbottom} d-flex justify-content-center `}
          >
            <p className={`${styles['me-27']} ${styles.mtgrey3}  mb-0`}>
              確認訂單
            </p>
            <p className={`${styles['me-27']} ${styles.mtgrey3}  mb-0`}>
              填寫資料
            </p>
            <p className={`${styles['me-27']} ${styles.mtgrey3} mb-0`}>
              付款頁面
            </p>
            <p className={`${styles.mtgrey1}  mb-0`}>完成訂單</p>
          </div>
        </section>
      </div>

      <div
        className={`${styles['wrap-container']} ${styles['shopping-cart-contain']} ${styles['mb-50']}`}
      >
        <div className={`d-flex justify-content-center`}>
          <svg
            width="169"
            height="169"
            viewBox="0 0 169 169"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="84.5"
              cy="84.5"
              r="79.5"
              stroke="#6CBA7C"
              strokeWidth="10"
            />
            <path
              d="M39 90.1401L65.9196 123L129 46"
              stroke="#6CBA7C"
              strokeWidth="10"
            />
          </svg>
        </div>

        <p className={`${styles['mt-36']} ${styles['mb-68']}`}>
          謝謝您的購買！
          <br />
          您的訂單正在處理中
        </p>

        <div
          className={`${styles['shopping-cart-title']} ${styles['mb-28']} d-flex align-items-center `}
        >
          <svg
            className={`${styles['me-12']}`}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.3334 14.7725V15.9992C29.3318 18.8744 28.4007 21.6721 26.6792 23.9749C24.9576 26.2778 22.5378 27.9625 19.7806 28.7777C17.0233 29.5929 14.0764 29.495 11.3794 28.4986C8.68232 27.5022 6.37962 25.6606 4.8147 23.2486C3.24977 20.8365 2.50647 17.9833 2.69565 15.1143C2.88483 12.2453 3.99636 9.51427 5.86445 7.3286C7.73255 5.14293 10.2571 3.61968 13.0617 2.98603C15.8662 2.35238 18.8004 2.64228 21.4268 3.8125"
              stroke="#6CBA7C"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M29.3333 5.33398L16 18.6807L12 14.6807"
              stroke="#6CBA7C"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h3>訂單細節</h3>
        </div>
        <div className={`${styles['mb-15']} d-flex justify-content-between `}>
          <p className={`${styles.mtgrey2}`}>訂單編號</p>
          <p className={`${styles['fw-600']} ${styles.mtgrey1}`}>{finalId}</p>
        </div>
        <div className={`${styles['mb-15']} d-flex justify-content-between `}>
          <p className={`${styles.mtgrey2}`}>訂單日期</p>
          <p className={`${styles['fw-600']} ${styles.mtgrey1}`}>
            {dayjs(Date).format('YYYY-MM-DD')}
          </p>
        </div>
        <div
          className={`${styles['border-green']} d-flex justify-content-between`}
        >
          <p className={`${styles.mtgrey2}`}>付款方式</p>
          <p className={`${styles['fw-600']} ${styles.mtgrey1}`}>信用卡支付</p>
        </div>

        <div className={`${styles['mb-102']} row `}>
          <div className={`col-7`}></div>
          <div className={`col-5`}>
            <div className={`d-flex justify-content-between`}>
              <p className={`${styles['total']} ${styles.mtgrey2}`}>合計</p>
              <p className={`${styles['total']} ${styles.mtgrey1}`}>
                NTD ${newPayTotal}
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles['shoppingcart-product']}`}>
          {/* web購物車商品細節 */}
          {cartItem.map((v, i) => {
            return (
              <div
                key={i}
                className={`${styles['product-col']} ${styles['mobile-none']} row d-flex w-100 justify-content-between`}
              >
                <div className={`${styles['mobile-none']} ${styles.w2}`}>
                  <div className={`row w-100`}>
                    <div className={`col-4`}>
                      <div className={`${styles['product-img-wrap']}`}>
                        <div
                          className={`${styles.pic}`}
                          style={{
                            backgroundImage: `url('./imgs/Ian_img/${v.trail_img}')`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className={`col-8 px-0`}>
                      <p className={`${styles['product-title']}`}>
                        {v.trail_name}
                      </p>
                      <p className={`${styles['product-subtitle']} mb-0`}>
                        {v.trail_name}單日行程
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`${styles['mobile-none']} ${styles.w3} ps-0`}>
                  <p className={`${styles.mtgrey3} mb-0`}>{v.batch_start}</p>
                  <p className={`${styles.mtgrey3} mb-0`}>&emsp;&emsp;|</p>
                  <p className={`${styles.mtgrey3} mb-0`}>{v.batch_end}</p>
                </div>
                <div className={`${styles['mobile-none']} ${styles.w4} ps-0`}>
                  NTD {v.price}
                </div>
                <div className={`${styles['mobile-none']} ${styles.w5} ps-0`}>
                  <div className={`d-flex`}>
                    <p className={`${styles['product-number']} me-3`}>
                      x {v.quantity}
                    </p>
                  </div>
                </div>
                <div className={`${styles['mobile-none']} ${styles.w6} ps-0 `}>
                  NTD {v.itemTotal}
                </div>
              </div>
            )
          })}

          <div className={`${styles['pd-40']}`}>
            <form
              action="post"
              onSubmit={(e) => {
                e.preventDefault()
                localStorage.removeItem('lastSid')
                localStorage.removeItem('total')
                localStorage.removeItem('Date')
                localStorage.removeItem('AuthSid')
                navigate('/member')
              }}
            >
              <button
                type="submit"
                className={`${styles.btnChecked} btn btn-unstyle`}
              >
                完成訂單
              </button>
            </form>
          </div>
          {/* mobile購物車商品細節 */}
          <div
            className={`${styles['product-col-mobile']} ${styles['web-none']} d-flex flex-column`}
          >
            <div className={`${styles['mb-12']} ${styles['web-none']} w-100`}>
              <div className={`row w-100 justify-content-between mx-0`}>
                <div className={`col-4 ps-0`}>
                  <div className={`${styles['product-img-wrap']}`}>
                    <img src="./img/shopping-cart1.png" />
                  </div>
                </div>
                <div className={`col-8 px-0`}>
                  <p
                    className={`${styles['product-title']} ${styles.mtgrey1} mb-1 `}
                  >
                    草嶺古道｜探索新北一日遊探索新北一日遊
                  </p>
                  <p
                    className={`${styles['product-subtitle']} ${styles.mtgrey2} mb-0 `}
                  >
                    草嶺古道單日行程
                  </p>
                  <p
                    className={`${styles['product-subtitle']} ${styles.mtgrey1} mb-0 `}
                  >
                    2023/01/01 - 2023/01/02
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`w-100 d-flex justify-content-between align-items-end web-none`}
            >
              <div className={`${styles['web-none']} d-flex`}>
                <svg
                  className={`${styles['web-none']} ${styles['me-12']}`}
                  width="24"
                  height="25"
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

                <span
                  className={`${styles['web-none']} ${styles.ticketnumber} ${styles.mtgrey2}`}
                >
                  2張
                </span>
              </div>
              <div className={`${styles['web-none']}`}>
                <p
                  className={`${styles['single-price']} ${styles.mtgrey2}mb-0`}
                >
                  NTD 1,200
                </p>
                <p
                  className={`${styles['total-price']} ${styles.mtgrey1} mb-0`}
                >
                  NTD 1,200
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default IanShoppingCart4
