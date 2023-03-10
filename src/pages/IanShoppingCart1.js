import React from 'react'
import styles from './../styles/IanShoppingCart1.module.css'
// import './../html/css/shoppingCart1.css'

function IanShoppingCart1() {
  return (
    // <div className={`${styles['bg-image']}`}>
    //   <div className={`container`}>
    <div>
      <section
        className={`${styles['shopping-cart-process']} ${styles['mobile-none']} row justify-content-center`}
      >
        <svg
          width="700"
          height="40"
          viewBox="0 0 700 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="12"
            y1="18.5"
            x2="680"
            y2="18.5"
            stroke="#CEE8CB"
            stroke-width="3"
          />
          <circle cx="20" cy="20" r="20" fill="#6CBA7C" />
          <path
            d="M22.1617 29.6591H18.0417V18.3792C18.0417 18.0681 18.0462 17.6859 18.055 17.2326C18.0639 16.7704 18.0773 16.2993 18.095 15.8193C18.1128 15.3304 18.1306 14.8904 18.1484 14.4993C18.0506 14.6148 17.8506 14.8148 17.5484 15.0993C17.2551 15.3748 16.9795 15.6237 16.7217 15.8459L14.4818 17.6459L12.4951 15.1659L18.775 10.166H22.1617V29.6591Z"
            fill="#FFFFF2"
          />
          <circle cx="240" cy="20" r="20" fill="#CEE8CB" />
          <path
            d="M246.76 29.8371H233.289V26.9853L238.127 22.0642C239.102 21.0561 239.884 20.216 240.473 19.5439C241.071 18.863 241.501 18.244 241.765 17.6869C242.037 17.1298 242.173 16.5329 242.173 15.8962C242.173 15.1269 241.958 14.5521 241.528 14.1719C241.106 13.7828 240.539 13.5882 239.827 13.5882C239.08 13.5882 238.355 13.7607 237.652 14.1055C236.949 14.4504 236.216 14.9412 235.451 15.5779L233.237 12.9383C233.79 12.4608 234.375 12.0098 234.99 11.5853C235.614 11.1608 236.334 10.8204 237.151 10.5639C237.977 10.2987 238.966 10.166 240.117 10.166C241.383 10.166 242.468 10.3959 243.373 10.8558C244.287 11.3156 244.99 11.9434 245.482 12.7393C245.974 13.5263 246.22 14.4195 246.22 15.4187C246.22 16.4887 246.009 17.4659 245.587 18.3501C245.166 19.2344 244.55 20.1099 243.742 20.9765C242.942 21.8431 241.976 22.8026 240.842 23.8549L238.364 26.2027V26.3884H246.76V29.8371Z"
            fill="#FFFFF2"
          />
          <circle cx="460" cy="20" r="20" fill="#CEE8CB" />
          <path
            d="M466.077 14.7099C466.077 15.5891 465.894 16.3507 465.526 16.9949C465.159 17.639 464.66 18.1656 464.03 18.5748C463.408 18.9839 462.708 19.2842 461.929 19.4757V19.554C463.47 19.7456 464.638 20.2156 465.434 20.9642C466.239 21.7128 466.642 22.7139 466.642 23.9673C466.642 25.0815 466.366 26.0782 465.815 26.9574C465.272 27.8366 464.432 28.5286 463.295 29.0335C462.157 29.5384 460.691 29.7908 458.897 29.7908C457.838 29.7908 456.849 29.7037 455.93 29.5296C455.02 29.3643 454.163 29.1075 453.357 28.7593V25.3253C454.18 25.7431 455.042 26.0608 455.943 26.2784C456.845 26.4874 457.685 26.5918 458.464 26.5918C459.917 26.5918 460.932 26.3437 461.509 25.8476C462.096 25.3427 462.389 24.6376 462.389 23.7323C462.389 23.2013 462.253 22.753 461.982 22.3874C461.711 22.0218 461.238 21.7433 460.564 21.5518C459.899 21.3603 458.967 21.2645 457.768 21.2645H456.311V18.17H457.794C458.976 18.17 459.873 18.0612 460.485 17.8436C461.107 17.6172 461.527 17.3126 461.746 16.9296C461.973 16.5379 462.087 16.0939 462.087 15.5978C462.087 14.9188 461.877 14.3878 461.457 14.0048C461.037 13.6218 460.337 13.4303 459.356 13.4303C458.744 13.4303 458.184 13.5086 457.676 13.6653C457.177 13.8133 456.727 13.9961 456.324 14.2137C455.922 14.4226 455.567 14.6272 455.261 14.8274L453.384 12.0462C454.136 11.5065 455.016 11.0582 456.022 10.7014C457.037 10.3445 458.245 10.166 459.645 10.166C461.623 10.166 463.19 10.5621 464.345 11.3542C465.5 12.1463 466.077 13.2649 466.077 14.7099Z"
            fill="#FFFFF2"
          />
          <circle cx="680" cy="20" r="20" fill="#CEE8CB" />
          <path
            d="M687.506 25.797H685.107V29.8834H680.99V25.797H672.483V22.8974L681.222 10.166H685.107V22.5602H687.506V25.797ZM680.99 22.5602V19.2155C680.99 18.9008 680.994 18.5277 681.004 18.0961C681.022 17.6646 681.04 17.233 681.058 16.8014C681.076 16.3699 681.094 15.9877 681.113 15.6551C681.14 15.3134 681.158 15.0751 681.167 14.9403H681.058C680.885 15.3089 680.704 15.6686 680.513 16.0192C680.322 16.3609 680.099 16.7205 679.845 17.0981L676.191 22.5602H680.99Z"
            fill="#FFFFF2"
          />
        </svg>
        <div className={`${styles['mb-42']} d-flex justify-content-center`}>
          <p className={`${styles['me-142']} ${styles.mtgrey1}`}>確認訂單</p>
          <p className={`${styles['me-142']} ${styles.mtgrey3}`}>填寫資料</p>
          <p className={`${styles['me-142']} ${styles.mtgrey3}`}>付款頁面</p>
          <p className={`${styles.mtgrey3} }`}>完成訂單</p>
        </div>
      </section>

      <section
        className={`${styles['shopping-cart-process']} ${styles['web-none']} row  justify-content-center `}
      >
        <svg
          width="296"
          height="32"
          viewBox="0 0 296 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="26" y1="15.5" x2="272" y2="15.5" stroke="#CEE8CB" />
          <circle cx="16" cy="16" r="16" fill="#6CBA7C" />
          <path
            d="M17.7293 23.7273H14.4334V14.7034C14.4334 14.4545 14.4369 14.1487 14.444 13.7861C14.4511 13.4163 14.4618 13.0394 14.476 12.6554C14.4903 12.2643 14.5045 11.9123 14.5187 11.5994C14.4405 11.6919 14.2805 11.8519 14.0387 12.0794C13.804 12.2999 13.5836 12.499 13.3774 12.6767L11.5854 14.1167L9.99609 12.1328L15.02 8.13281H17.7293V23.7273Z"
            fill="#FFFFF2"
          />
          <circle cx="104" cy="16" r="16" fill="#CEE8CB" />
          <path
            d="M109.408 23.8697H98.6313V21.5882L102.501 17.6513C103.282 16.8449 103.907 16.1728 104.378 15.6352C104.856 15.0904 105.201 14.5952 105.412 14.1495C105.63 13.7039 105.739 13.2263 105.739 12.717C105.739 12.1015 105.566 11.6417 105.222 11.3375C104.884 11.0262 104.431 10.8706 103.862 10.8706C103.264 10.8706 102.684 11.0085 102.122 11.2844C101.559 11.5603 100.972 11.953 100.361 12.4623L98.5891 10.3506C99.032 9.9686 99.4995 9.60781 99.9916 9.26824C100.491 8.92868 101.067 8.65631 101.721 8.45116C102.382 8.23893 103.173 8.13281 104.094 8.13281C105.106 8.13281 105.974 8.31675 106.698 8.68461C107.429 9.05248 107.992 9.55476 108.385 10.1914C108.779 10.8211 108.976 11.5356 108.976 12.335C108.976 13.191 108.807 13.9727 108.47 14.6801C108.132 15.3876 107.64 16.0879 106.993 16.7812C106.354 17.4745 105.58 18.242 104.674 19.0839L102.691 20.9621V21.1107H109.408V23.8697Z"
            fill="#FFFFF2"
          />
          <circle cx="192" cy="16" r="16" fill="#CEE8CB" />
          <path
            d="M196.862 11.7679C196.862 12.4712 196.715 13.0806 196.42 13.5959C196.126 14.1112 195.727 14.5325 195.223 14.8598C194.726 15.1871 194.166 15.4274 193.543 15.5806V15.6432C194.775 15.7964 195.71 16.1725 196.347 16.7714C196.991 17.3703 197.313 18.1711 197.313 19.1739C197.313 20.0652 197.093 20.8626 196.652 21.5659C196.217 22.2693 195.545 22.8229 194.635 23.2268C193.725 23.6307 192.552 23.8326 191.117 23.8326C190.27 23.8326 189.479 23.763 188.744 23.6237C188.016 23.4914 187.33 23.286 186.686 23.0074V20.2602C187.344 20.5945 188.033 20.8487 188.754 21.0228C189.475 21.1899 190.148 21.2734 190.771 21.2734C191.933 21.2734 192.745 21.075 193.207 20.678C193.676 20.2741 193.911 19.7101 193.911 18.9858C193.911 18.5611 193.802 18.2024 193.585 17.9099C193.368 17.6175 192.99 17.3946 192.451 17.2414C191.919 17.0882 191.173 17.0116 190.214 17.0116H189.048V14.536H190.235C191.18 14.536 191.898 14.449 192.388 14.2749C192.885 14.0938 193.221 13.8501 193.396 13.5437C193.578 13.2303 193.669 12.8751 193.669 12.4782C193.669 11.935 193.501 11.5102 193.165 11.2038C192.829 10.8974 192.269 10.7442 191.485 10.7442C190.995 10.7442 190.547 10.8069 190.141 10.9322C189.742 11.0506 189.381 11.1969 189.059 11.371C188.737 11.5381 188.453 11.7017 188.208 11.8619L186.707 9.63699C187.309 9.20523 188.012 8.8466 188.817 8.56108C189.629 8.27557 190.596 8.13281 191.716 8.13281C193.298 8.13281 194.551 8.44966 195.475 9.08337C196.399 9.71707 196.862 10.6119 196.862 11.7679Z"
            fill="#FFFFF2"
          />
          <circle cx="280" cy="16" r="16" fill="#CEE8CB" />
          <path
            d="M286.005 20.6376H284.085V23.9067H280.792V20.6376H273.986V18.3179L280.977 8.13281H284.085V18.0482H286.005V20.6376ZM280.792 18.0482V15.3724C280.792 15.1207 280.795 14.8222 280.802 14.4769C280.817 14.1317 280.832 13.7864 280.846 13.4411C280.861 13.0959 280.875 12.7902 280.89 12.5241C280.912 12.2507 280.926 12.0601 280.933 11.9522H280.846C280.708 12.2471 280.563 12.5348 280.41 12.8154C280.257 13.0887 280.079 13.3764 279.875 13.6785L276.953 18.0482H280.792Z"
            fill="#FFFFF2"
          />
        </svg>

        <div
          className={`${styles['mb-42']} d-flex justify-content-center p-0 p-lg-2`}
        >
          <p className={`${styles['me-27']} ${styles.mtgrey1} mb-0`}>
            確認訂單
          </p>
          <p className={`${styles['me-27']} ${styles.mtgrey3} mb-0`}>
            填寫資料
          </p>
          <p className={`${styles['me-27']} ${styles.mtgrey3} mb-0`}>
            付款頁面
          </p>
          <p className={`${styles.mtgrey3}`}>完成訂單</p>
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
                stroke-width="1.5"
                stroke-linecap="square"
              />
              <path
                d="M24.159 26.3865C24.7741 26.3865 25.2727 25.8879 25.2727 25.2728C25.2727 24.6578 24.7741 24.1592 24.159 24.1592C23.544 24.1592 23.0454 24.6578 23.0454 25.2728C23.0454 25.8879 23.544 26.3865 24.159 26.3865Z"
                stroke="#6CBA7C"
                stroke-width="1.5"
                stroke-linecap="square"
              />
              <path
                d="M3 3H7.45455L10.4391 17.9116C10.5409 18.4243 10.8199 18.8849 11.227 19.2126C11.6342 19.5404 12.1437 19.7146 12.6664 19.7045H23.4909C24.0135 19.7146 24.523 19.5404 24.9302 19.2126C25.3374 18.8849 25.6163 18.4243 25.7182 17.9116L27.5 8.56818H9.01364"
                stroke="#6CBA7C"
                stroke-width="1.5"
                stroke-linecap="square"
              />
            </svg>

            <h3>購物車</h3>
          </div>
          <div
            className={`${styles['product-col-title']} ${styles['mobile-none']} d-flex`}
          >
            <div className={`${styles['mobile-none']} ${styles.w1} `}>
              <input type="checkbox" />
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
          <div className={`${styles['shoppingcart-product']}`}>
            <div
              className={`${styles['product-col']} ${styles['mobile-none']} d-flex`}
            >
              <div className={`${styles['mobile-none']} ${styles.w1} `}>
                <input type="checkbox" />
              </div>
              <div className={`${styles['mobile-none']} ${styles.w2} `}>
                <div className={`row w-100`}>
                  <div className={`col-4`}>
                    <div className={`${styles['product-img-wrap']}`}>
                      <img src="/imgs/Ian_img/shopping-cart1.png" />
                    </div>
                  </div>
                  <div className={`col-8 px-0`}>
                    <p className={`${styles['product-title']}  mb-3`}>
                      草嶺古道｜探索新北一日遊探索新北一日遊
                    </p>
                    <p className={`${styles['product-subtitle']} mb-0`}>
                      草嶺古道單日行程
                    </p>
                  </div>
                </div>
              </div>
              <div className={`${styles['mobile-none']} ${styles.w3} `}>
                <p className={`mb-lg-2`}>2023/01/01</p>
                <p className={`mb-lg-2`}>&emsp;&emsp;|</p>
                <p className={`mb-0`}>2023/01/02</p>
              </div>
              <div className={`${styles['mobile-none']} ${styles.w4} `}>
                NTD 1,200
              </div>
              <div className={`${styles['mobile-none']} ${styles.w5} `}>
                <div className={`d-flex`}>
                  <button className={`${styles['plus-button']}`}>
                    <svg
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <p className={`${styles['product-number']}  mb-0 me-3`}>1</p>
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 12.5H19"
                        stroke="#6CBA7C"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className={`${styles['mobile-none']} ${styles.w6} `}>
                NTD 1,200
              </div>
              <div className={`${styles['mobile-none']} ${styles.w7} `}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 7.5H6.25H26.25"
                    stroke="#6CBA7C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.75 7.5V25C23.75 25.663 23.4866 26.2989 23.0178 26.7678C22.5489 27.2366 21.913 27.5 21.25 27.5H8.75C8.08696 27.5 7.45107 27.2366 6.98223 26.7678C6.51339 26.2989 6.25 25.663 6.25 25V7.5M10 7.5V5C10 4.33696 10.2634 3.70107 10.7322 3.23223C11.2011 2.76339 11.837 2.5 12.5 2.5H17.5C18.163 2.5 18.7989 2.76339 19.2678 3.23223C19.7366 3.70107 20 4.33696 20 5V7.5"
                    stroke="#6CBA7C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5 13.75V21.25"
                    stroke="#6CBA7C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.5 13.75V21.25"
                    stroke="#6CBA7C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                  <p
                    className={`${styles['single-price']} ${styles.mtgrey2}  mb-0`}
                  >
                    NTD 1,200
                  </p>
                  <p
                    className={`${styles['total-price']} ${styles.mtgrey1} mb-0`}
                  >
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5 12.5H19"
                          stroke="#6CBA7C"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29.3333 5.33398L16 18.6807L12 14.6807"
                stroke="#6CBA7C"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
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
