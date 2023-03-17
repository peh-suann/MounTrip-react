import React, { useState } from 'react'
import styles from './../styles/IanShoppingCart1.module.css'
import { Link } from 'react-router-dom'
import IanShoppingCartProduct from '../components/IanShoppingCartProduct'

// import IanShoppingCartTitle from '../components/IanShoppingCartTitle'
// import './../html/css/shoppingCart1.css'

function IanShoppingCart1() {
  const [data, setData] = useState([
    {
      sid: 1,
      name: '草嶺古道',
      startTime: '2023/03/15',
      endTime: '2023/03/17',
      price: 1200,
      count: 1,
      total: 1200,
      buy: false,
    },
    {
      sid: 2,
      name: '玉山步道',
      startTime: '2023/02/20',
      endTime: '2023/02/22',
      price: 850,
      count: 2,
      total: 1700,
      buy: false,
    },
    {
      sid: 3,
      name: '鳶嘴山',
      startTime: '2023/03/01',
      endTime: '2023/03/03',
      price: 900,
      count: 3,
      total: 2700,
      buy: false,
    },
    {
      sid: 4,
      name: '雪山來回',
      startTime: '2023/2/15',
      endTime: '2023/02/18',
      price: 2000,
      count: 2,
      total: 4000,
      buy: false,
    },
  ])
  const [mypage, setPage] = useState('')

  const minusItem = (minusid) => {
    const items = data.map((v) => {
      const p = { ...v }
      if (p.sid === minusid) {
        p.count = p.count - 1 || 1
      }

      return p
    })
    setData(items)
  }

  const plusIcon = (plusid) => {
    return data.map((v, i) => {
      if (v.sid === plusid) {
        return { ...v, count: v.count + 1 }
      } else {
        return { ...v }
      }
    })
  }

  const deletepruduct = (id) => {
    return data.filter((v, i) => {
      return v.sid !== id
    })
  }
  const wannaBuy = (id) => {
    return data.map((v, i) => {
      if (v.sid === id) {
        return { ...v, buy: !v.buy }
      } else {
        return { ...v }
      }
    })
  }

  const selectAll = (id) => {
    return data.map((v, i) => {
      return { ...v, buy: true }
    })
  }

  const calulateTotal = (data, id) => {
    const newData = [...data].map((v, i) => {
      if (v.sid === id) {
        return { ...v, total: v.price * v.count }
      }
    })
  }

  return (
    <div className={`${styles.IanShoppingCartAll}`}>
      <section
        className={`${styles['shopping-cart-process']} ${styles['mobile-none']} row justify-content-center`}
      >
        <div className={`d-flex justify-content-center ${styles.shoppingSvgs}`}>
          <Link to="/SC1" className={`${styles.myLink}`}>
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
              <circle cx="20" cy="20" r="20" fill="#6CBA7C" />
              <path
                d="M22.1617 29.6571H18.0417V18.3773C18.0417 18.0662 18.0462 17.684 18.055 17.2306C18.0639 16.7684 18.0773 16.2973 18.095 15.8173C18.1128 15.3284 18.1306 14.8884 18.1484 14.4973C18.0506 14.6129 17.8506 14.8129 17.5484 15.0973C17.2551 15.3729 16.9795 15.6218 16.7217 15.844L14.4818 17.644L12.4951 15.164L18.775 10.1641H22.1617V29.6571Z"
                fill="#FFFFF2"
              />
            </svg>
          </Link>
          <Link to="/SC2" className={`${styles.Link}`}>
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
          <Link to="/SC3" className={`${styles.Link}`}>
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
          <Link to="/SC4" className={`${styles.Link}`}>
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
              <circle cx="20" cy="20" r="20" fill="#CEE8CB" />
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
            <line y1="1.5" x2="668" y2="1.5" stroke="#CEE8CB" strokeWidth="3" />
          </svg>
          <div
            className={`${styles['mb-42']} ${styles.shoppingbottom} d-flex justify-content-center`}
          >
            <p className={`${styles['me-142']} ${styles.mtgrey1}`}>確認訂單</p>
            <p className={`${styles['me-142']} ${styles.mtgrey3}`}>填寫資料</p>
            <p className={`${styles['me-142']} ${styles.mtgrey3}`}>付款頁面</p>
            <p className={`${styles.mtgrey3} }`}>完成訂單</p>
          </div>
        </div>
      </section>

      <section
        className={`${styles['shopping-cart-process']} ${styles['web-none']} col-12 row justify-content-center m-0`}
      >
        {/* 購物車流程png & li */}
        <div className={`d-flex justify-content-center ${styles.shoppingSvgs}`}>
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
              <circle cx="20" cy="20" r="20" fill="#6CBA7C" />
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
              <circle cx="20" cy="20" r="20" fill="#CEE8CB" />
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
            <line y1="1.5" x2="668" y2="1.5" stroke="#CEE8CB" strokeWidth="3" />
          </svg>
        </div>
        <div
          className={`${styles['mb-42']} ${styles.shoppingbottom} d-flex justify-content-center `}
        >
          <p className={`${styles['me-27']} ${styles.mtgrey1}  mb-0`}>
            確認訂單
          </p>
          <p className={`${styles['me-27']} ${styles.mtgrey3}  mb-0`}>
            填寫資料
          </p>
          <p className={`${styles['me-27']} ${styles.mtgrey3} mb-0`}>
            付款頁面
          </p>
          <p className={`${styles.mtgrey3}  mb-0`}>完成訂單</p>
        </div>
      </section>

      <section className={`${styles['shopping-cart-contain']} row m-0`}>
        <div className={`col-lg-9 col-sm-12`}>
          <div
            className={`${styles['shopping-cart-title']} d-flex align-items-center mb-4`}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.909 26.3865C12.5241 26.3865 13.0227 25.8879 13.0227 25.2728C13.0227 24.6578 12.5241 24.1592 11.909 24.1592C11.294 24.1592 10.7954 24.6578 10.7954 25.2728C10.7954 25.8879 11.294 26.3865 11.909 26.3865Z"
                stroke="#6CBA7C"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                d="M24.159 26.3865C24.7741 26.3865 25.2727 25.8879 25.2727 25.2728C25.2727 24.6578 24.7741 24.1592 24.159 24.1592C23.544 24.1592 23.0454 24.6578 23.0454 25.2728C23.0454 25.8879 23.544 26.3865 24.159 26.3865Z"
                stroke="#6CBA7C"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                d="M3 3H7.45455L10.4391 17.9116C10.5409 18.4243 10.8199 18.8849 11.227 19.2126C11.6342 19.5404 12.1437 19.7146 12.6664 19.7045H23.4909C24.0135 19.7146 24.523 19.5404 24.9302 19.2126C25.3374 18.8849 25.6163 18.4243 25.7182 17.9116L27.5 8.56818H9.01364"
                stroke="#6CBA7C"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>

            <h3>購物車</h3>
          </div>
          <div
            className={`${styles['product-col-title']} ${styles['mobile-none']} d-flex`}
          >
            <div className={`${styles['mobile-none']} ${styles.w1} `}>
              <input
                type="checkbox"
                checked={data.buy}
                onChange={() => {
                  setData(selectAll(data.sid))
                }}
              />
            </div>
            <div className={`${styles['mobile-none']} ${styles.w2} `}>
              商品資料
            </div>
            <div className={`${styles['mobile-none']} ${styles.w3} `}>日期</div>
            <div className={`${styles['mobile-none']} ${styles.w4} `}>
              單件價格
            </div>
            <div className={`${styles['mobile-none']} ${styles.w5} `}>數量</div>
            <div className={`${styles['mobile-none']} ${styles.w6} `}>小計</div>
            <div className={`${styles['mobile-none']} ${styles.w7} `}></div>
          </div>
          {data.map((v, i) => {
            return (
              <>
                <IanShoppingCartProduct
                  key={v.sid}
                  pid={v.sid}
                  name={v.name}
                  startTime={v.startTime}
                  endTime={v.endTime}
                  price={v.price}
                  count={v.count}
                  total={v.total}
                  buy={v.buy}
                  setData={setData}
                  minusItem={minusItem}
                  data={data}
                  plusIcon={plusIcon}
                  deletepruduct={deletepruduct}
                  wannaBuy={wannaBuy}
                  selectAll={selectAll}
                />
              </>
            )
          })}
        </div>

        <div className={`${styles['shopping-cart-All']} col-lg-3 col-sm-12`}>
          <div
            className={`${styles['shopping-cart-title']} d-flex align-items-center mb-4`}
          >
            <svg
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

            <h3>訂單明細</h3>
          </div>
          <div className={`${styles['input-group']} ${styles['padding-30']}`}>
            <div className={`${styles['form-outline']}`}>
              <input type="text" placeholder="輸入優惠代碼" />
            </div>
            <button
              type="button"
              className={`${styles.inputbtn} btn btn-unstyle`}
            >
              套用
            </button>
          </div>
          <div
            className={`${styles['padding-30']} d-flex justify-content-between`}
          >
            <p className={`${styles.p} mb-0`}>小計</p>
            <p className={`${styles['p-bold']} mb-0`}>NTD 7,200</p>
          </div>
          <div
            className={`${styles['padding-30']} {styles['margin-30']} ${styles.coupon} d-flex justify-content-between`}
          >
            <p className={`${styles.p} mb-0`}>優惠碼 HAPPY10</p>
            <p className={`${styles.mtgreen1} ${styles.p}  mb-0`}>-NTD 100</p>
          </div>
          <div
            className={`${styles['padding-30']} d-flex justify-content-between`}
          >
            <p className={`${styles['p-bold']} mb-0`}>合計</p>
            <p className={`${styles['p-bold']} mb-0`}>NTD $2,330</p>
          </div>
          <button className={`${styles.next} w-100 btn`}>下一步</button>
        </div>
      </section>
    </div>
    //   </div>
    // </div>
  )
}

export default IanShoppingCart1
