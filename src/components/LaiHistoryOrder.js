import React from 'react'
import styles from './../styles/HistoryOrder.module.css'
import OrderCard from './../components/LaiHistoryOrderCard'
import HistoryProduct from './../components/LaiHistoryProduct'

export default function LaiHistoryOrder() {
  //展開選單
  //   const dropdownBtn = document.querySelectorAll('.arrow-btn')
  //   const dropdownPart = document.querySelector('.dropdown')

  //   dropdownBtn.forEach((b) => {
  //     b.addEventListener('click', (e) => {
  //       e.stopPropagation()
  //       e.currentTarget.classList.toggle('show')
  //       e.currentTarget.parentElement.nextElementSibling.lastElementChild.classList.toggle(
  //         'show'
  //       )
  //     })
  //   })

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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 6.5V12.5L16 14.5"
              stroke="#6cba7c"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <h1>歷史訂單</h1>
        </div>
        <OrderCard>
          <HistoryProduct />
        </OrderCard>
        <OrderCard>
          <HistoryProduct />
          <HistoryProduct />
          <HistoryProduct />
        </OrderCard>
        {/* <OrderCard /> */}
        {/* <OrderCard /> */}
        {/* <div className={styles['order-card']}>
          <button className={styles['toggle-btn']}>
            <svg
              className={styles['arrow-btn']}
              id="btn1"
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75 13.125L17.5 21.875L26.25 13.125"
                stroke="#6CBA7C"
                stroke-width="3.5"
                stroke-linecap="round"
                stroke-linejoin="round"
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 2.5H9C8.44772 2.5 8 2.94772 8 3.5V5.5C8 6.05228 8.44772 6.5 9 6.5H15C15.5523 6.5 16 6.05228 16 5.5V3.5C16 2.94772 15.5523 2.5 15 2.5Z"
                    stroke="#011306"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>訂單編號：</p>
                <p>S12345678</p>
              </div>
              <div className={styles['order-status-tag']}>
                <p>訂單已成立</p>
              </div>
            </div>
            <div className={styles['order-content']}>
              <div className={styles['price-wrap']}>
                <p>NTD</p>
                <p id="price">4,800</p>
              </div>
              <div className={styles['time-wrap']}>
                <p>訂單日期：</p>
                <p>2023/01/01</p>
              </div>
              <div className={styles['bill-wrap']}>
                <p>付款方式：</p>
                <p>信用卡一次付清</p>
              </div>
            </div>
            <div className={styles['dropdown']} id="dropdown1">
              <div className={styles['dropdown-bar']}></div>
              <div
                className={`${styles['product-wrap']} ${styles['product1']}`}
              >
                <div className={styles['img-title-wrap']}>
                  <div className={styles['img-wrap']}>
                    <div className={styles['img-wrap-img']}></div>
                  </div>
                  <div className={styles['title-wrap']}>
                    <h6>草嶺古道｜探索新北一探索新北一</h6>
                    <p>草嶺古道單日行程</p>
                  </div>
                  <div className={styles['date-wrap']}>
                    <p>2023/01/01</p>
                    <div className={styles['date-dash']}></div>
                    <p>2023/01/02</p>
                  </div>
                </div>
                <div className={styles['single-price-wrap']}>
                  <p>NTD</p>
                  <p>1,200</p>
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.5498 7.05029L17.4493 16.9498"
                      stroke="#011306"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p>1</p>
                </div>
                <div className={styles['total-price-wrap']}>
                  <p>NTD</p>
                  <p>1,200</p>
                </div>
              </div>
              <div
                className={`${styles['product-wrap']} ${styles['product2']}`}
              >
                <div className={styles['img-title-wrap']}>
                  <div className={styles['img-wrap']}>
                    <div className={styles['img-wrap-img']}></div>
                  </div>
                  <div className={styles['title-wrap']}>
                    <h6>草嶺古道｜探索新北一探索新北一</h6>
                    <p>草嶺古道單日行程</p>
                  </div>
                  <div className={styles['date-wrap']}>
                    <p>2023/01/01</p>
                    <div className={styles['date-dash']}></div>
                    <p>2023/01/02</p>
                  </div>
                </div>
                <div className={styles['single-price-wrap']}>
                  <p>NTD</p>
                  <p>1,200</p>
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.5498 7.05029L17.4493 16.9498"
                      stroke="#011306"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p>1</p>
                </div>
                <div className={styles['total-price-wrap']}>
                  <p>NTD</p>
                  <p>1,200</p>
                </div>
              </div>
              <div
                className={`${styles['product-wrap']} ${styles['product3']}`}
              >
                <div className={styles['img-title-wrap']}>
                  <div className={styles['img-wrap']}>
                    <div className={styles['img-wrap-img']}></div>
                  </div>
                  <div className={styles['title-wrap']}>
                    <h6>草嶺古道｜探索新北一探索新北一</h6>
                    <p>草嶺古道單日行程</p>
                  </div>
                  <div className={styles['date-wrap']}>
                    <p>2023/01/01</p>
                    <div className={styles['date-dash']}></div>
                    <p>2023/01/02</p>
                  </div>
                </div>

                <div className={styles['single-price-wrap']}>
                  <p>NTD</p>
                  <p>1,200</p>
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.5498 7.05029L17.4493 16.9498"
                      stroke="#011306"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p>1</p>
                </div>
                <div className={styles['total-price-wrap']}>
                  <p>NTD</p>
                  <p>1,200</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className={styles['']}"order-card">
              <button class="toggle-btn" >
                <svg class="arrow-btn" id="btn1" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.75 13.125L17.5 21.875L26.25 13.125" stroke="#6CBA7C" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div class="order-state">
                <div class="order-title">
                  <div class="order-title-id">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4.5H18C18.5304 4.5 19.0391 4.71071 19.4142 5.08579C19.7893 5.46086 20 5.96957 20 6.5V20.5C20 21.0304 19.7893 21.5391 19.4142 21.9142C19.0391 22.2893 18.5304 22.5 18 22.5H6C5.46957 22.5 4.96086 22.2893 4.58579 21.9142C4.21071 21.5391 4 21.0304 4 20.5V6.5C4 5.96957 4.21071 5.46086 4.58579 5.08579C4.96086 4.71071 5.46957 4.5 6 4.5H8" stroke="#011306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15 2.5H9C8.44772 2.5 8 2.94772 8 3.5V5.5C8 6.05228 8.44772 6.5 9 6.5H15C15.5523 6.5 16 6.05228 16 5.5V3.5C16 2.94772 15.5523 2.5 15 2.5Z" stroke="#011306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>訂單編號：</p>
                    <p>S12345678</p>
                  </div>
                  <div class="order-status-tag">
                    <p>訂單已成立</p>
                  </div>
                </div>
                <div class="order-content">
                  <div class="price-wrap">
                    <p>NTD</p>
                    <p id="price">4,800</p>
                  </div>
                  <div class="time-wrap">
                    <p>訂單日期：</p>
                    <p>2023/01/01</p>
                  </div>
                  <div class="bill-wrap">
                    <p>付款方式：</p>
                    <p>信用卡一次付清</p>
                  </div>
                </div>
                <div class="dropdown" id="dropdown1">
                  <div class="dropdown-bar"></div>
                  <div class="product-wrap product1">
                    <div class="img-title-wrap">
                      <div class="img-wrap">
                        <img src="../images/product-img/10.jpg">
                      </div>
                      <div class="title-wrap">
                        <h6>草嶺古道｜探索新北一探索新北一</h6>
                        <p>草嶺古道單日行程</p>
                      </div>
                      <div class="date-wrap">
                        <p>2023/01/01</p>
                        <div class="date-dash"></div>
                        <p>2023/01/02</p>
                      </div>
                    </div>
                    <div class="single-price-wrap">
                      <p>NTD</p>
                      <p>1,200</p>
                    </div>
                    <div class="amount-wrap">
                      <svg  width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.4502 7.05029L7.5507 16.9498" stroke="#011306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.5498 7.05029L17.4493 16.9498" stroke="#011306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p>1</p>
                    </div>
                    <div class="total-price-wrap">
                      <p>NTD</p>
                      <p>1,200</p>
                    </div>
                  </div>
                  <div class="product-wrap product2">
                    <div class="img-title-wrap">
                      <div class="img-wrap">
                        <img src="../images/product-img/9.jpg">
                      </div>
                      <div class="title-wrap">
                        <h6>草嶺古道｜探索新北一探索新北一</h6>
                        <p>草嶺古道單日行程</p>
                      </div>
                      <div class="date-wrap">
                        <p>2023/01/01</p>
                        <div class="date-dash"></div>
                        <p>2023/01/02</p>
                      </div>
                    </div>
                    <div class="single-price-wrap">
                      <p>NTD</p>
                      <p>1,200</p>
                    </div>
                    <div class="amount-wrap">
                      <svg  width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.4502 7.05029L7.5507 16.9498" stroke="#011306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.5498 7.05029L17.4493 16.9498" stroke="#011306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p>1</p>
                    </div>
                    <div class="total-price-wrap">
                      <p>NTD</p>
                      <p>1,200</p>
                    </div>
                  </div>
                  <div class="product-wrap product3">
                    <div class="img-title-wrap">
                      <div class="img-wrap">
                        <img src="../images/product-img/11.jpg">
                      </div>
                      <div class="title-wrap">
                        <h6>草嶺古道｜探索新北一探索新北一</h6>
                        <p>草嶺古道單日行程</p>
                      </div>
                      <div class="date-wrap">
                        <p>2023/01/01</p>
                        <div class="date-dash"></div>
                        <p>2023/01/02</p>
                      </div>
                    </div>
                   
                    <div class="single-price-wrap">
                      <p>NTD</p>
                      <p>1,200</p>
                    </div>
                    <div class="amount-wrap">
                      <svg  width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.4502 7.05029L7.5507 16.9498" stroke="#011306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.5498 7.05029L17.4493 16.9498" stroke="#011306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p>1</p>
                    </div>
                    <div class="total-price-wrap">
                      <p>NTD</p>
                      <p>1,200</p>
                    </div>
                  </div>
                </div>
              </div>
             </div>
             <div class="order-card">
              <button class="toggle-btn" >
                <svg class="arrow-btn" id="btn1" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.75 13.125L17.5 21.875L26.25 13.125" stroke="#6CBA7C" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div class="order-state">
                <div class="order-title">
                  <div class="order-title-id">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4.5H18C18.5304 4.5 19.0391 4.71071 19.4142 5.08579C19.7893 5.46086 20 5.96957 20 6.5V20.5C20 21.0304 19.7893 21.5391 19.4142 21.9142C19.0391 22.2893 18.5304 22.5 18 22.5H6C5.46957 22.5 4.96086 22.2893 4.58579 21.9142C4.21071 21.5391 4 21.0304 4 20.5V6.5C4 5.96957 4.21071 5.46086 4.58579 5.08579C4.96086 4.71071 5.46957 4.5 6 4.5H8" stroke="#011306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15 2.5H9C8.44772 2.5 8 2.94772 8 3.5V5.5C8 6.05228 8.44772 6.5 9 6.5H15C15.5523 6.5 16 6.05228 16 5.5V3.5C16 2.94772 15.5523 2.5 15 2.5Z" stroke="#011306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>訂單編號：</p>
                    <p>S12345678</p>
                  </div>
                  <div class="order-status-tag2">
                    <p>訂單已成立</p>
                  </div>
                </div>
                <div class="order-content">
                  <div class="price-wrap">
                    <p>NTD</p>
                    <p id="price">4,800</p>
                  </div>
                  <div class="time-wrap">
                    <p>訂單日期：</p>
                    <p>2023/01/01</p>
                  </div>
                  <div class="bill-wrap">
                    <p>付款方式：</p>
                    <p>信用卡一次付清</p>
                  </div>
                </div>
                <div class="dropdown" id="dropdown1">
                  <div class="dropdown-bar"></div>
                  <div class="product-wrap product1">
                    <div class="img-title-wrap">
                      <div class="img-wrap">
                        <img src="../images/product-img/10.jpg">
                      </div>
                      <div class="title-wrap">
                        <h6>草嶺古道｜探索新北一探索新北一</h6>
                        <p>草嶺古道單日行程</p>
                      </div>
                      <div class="date-wrap">
                        <p>2023/01/01</p>
                        <div class="date-dash"></div>
                        <p>2023/01/02</p>
                      </div>
                    </div>
                    <div class="single-price-wrap">
                      <p>NTD</p>
                      <p>1,200</p>
                    </div>
                    <div class="amount-wrap">
                      <svg  width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.4502 7.05029L7.5507 16.9498" stroke="#011306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.5498 7.05029L17.4493 16.9498" stroke="#011306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p>1</p>
                    </div>
                    <div class="total-price-wrap">
                      <p>NTD</p>
                      <p>1,200</p>
                    </div>
                  </div>
                  <div class="product-wrap product2">
                    <div class="img-title-wrap">
                      <div class="img-wrap">
                        <img src="../images/product-img/9.jpg">
                      </div>
                      <div class="title-wrap">
                        <h6>草嶺古道｜探索新北一探索新北一</h6>
                        <p>草嶺古道單日行程</p>
                      </div>
                      <div class="date-wrap">
                        <p>2023/01/01</p>
                        <div class="date-dash"></div>
                        <p>2023/01/02</p>
                      </div>
                    </div>
                    <div class="single-price-wrap">
                      <p>NTD</p>
                      <p>1,200</p>
                    </div>
                    <div class="amount-wrap">
                      <svg  width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.4502 7.05029L7.5507 16.9498" stroke="#011306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.5498 7.05029L17.4493 16.9498" stroke="#011306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p>1</p>
                    </div>
                    <div class="total-price-wrap">
                      <p>NTD</p>
                      <p>1,200</p>
                    </div>
                  </div>
                  <div class="product-wrap product3">
                    <div class="img-title-wrap">
                      <div class="img-wrap">
                        <img src="../images/product-img/11.jpg">
                      </div>
                      <div class="title-wrap">
                        <h6>草嶺古道｜探索新北一探索新北一</h6>
                        <p>草嶺古道單日行程</p>
                      </div>
                      <div class="date-wrap">
                        <p>2023/01/01</p>
                        <div class="date-dash"></div>
                        <p>2023/01/02</p>
                      </div>
                    </div>
                   
                    <div class="single-price-wrap">
                      <p>NTD</p>
                      <p>1,200</p>
                    </div>
                    <div class="amount-wrap">
                      <svg  width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.4502 7.05029L7.5507 16.9498" stroke="#011306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.5498 7.05029L17.4493 16.9498" stroke="#011306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p>1</p>
                    </div>
                    <div class="total-price-wrap">
                      <p>NTD</p>
                      <p>1,200</p>
                    </div>
                  </div>
                </div>
              </div>
             </div>
             <div class="order-card">
              <button class="toggle-btn" >
                <svg class="arrow-btn" id="btn1" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.75 13.125L17.5 21.875L26.25 13.125" stroke="#6CBA7C" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div class="order-state">
                <div class="order-title">
                  <div class="order-title-id">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4.5H18C18.5304 4.5 19.0391 4.71071 19.4142 5.08579C19.7893 5.46086 20 5.96957 20 6.5V20.5C20 21.0304 19.7893 21.5391 19.4142 21.9142C19.0391 22.2893 18.5304 22.5 18 22.5H6C5.46957 22.5 4.96086 22.2893 4.58579 21.9142C4.21071 21.5391 4 21.0304 4 20.5V6.5C4 5.96957 4.21071 5.46086 4.58579 5.08579C4.96086 4.71071 5.46957 4.5 6 4.5H8" stroke="#011306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15 2.5H9C8.44772 2.5 8 2.94772 8 3.5V5.5C8 6.05228 8.44772 6.5 9 6.5H15C15.5523 6.5 16 6.05228 16 5.5V3.5C16 2.94772 15.5523 2.5 15 2.5Z" stroke="#011306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>訂單編號：</p>
                    <p>S12345678</p>
                  </div>
                  <div class="order-status-tag">
                    <p>訂單已成立</p>
                  </div>
                </div>
                <div class="order-content">
                  <div class="price-wrap">
                    <p>NTD</p>
                    <p id="price">4,800</p>
                  </div>
                  <div class="time-wrap">
                    <p>訂單日期：</p>
                    <p>2023/01/01</p>
                  </div>
                  <div class="bill-wrap">
                    <p>付款方式：</p>
                    <p>信用卡一次付清</p>
                  </div>
                </div>
                <div class="dropdown" id="dropdown1">
                  <div class="dropdown-bar"></div>
                  <div class="product-wrap product1">
                    <div class="img-title-wrap">
                      <div class="img-wrap">
                        <img src="../images/product-img/10.jpg">
                      </div>
                      <div class="title-wrap">
                        <h6>草嶺古道｜探索新北一探索新北一</h6>
                        <p>草嶺古道單日行程</p>
                      </div>
                      <div class="date-wrap">
                        <p>2023/01/01</p>
                        <div class="date-dash"></div>
                        <p>2023/01/02</p>
                      </div>
                    </div>
                    <div class="single-price-wrap">
                      <p>NTD</p>
                      <p>1,200</p>
                    </div>
                    <div class="amount-wrap">
                      <svg  width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.4502 7.05029L7.5507 16.9498" stroke="#011306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.5498 7.05029L17.4493 16.9498" stroke="#011306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p>1</p>
                    </div>
                    <div class="total-price-wrap">
                      <p>NTD</p>
                      <p>1,200</p>
                    </div>
                  </div>
                  <div class="product-wrap product2">
                    <div class="img-title-wrap">
                      <div class="img-wrap">
                        <img src="../images/product-img/9.jpg">
                      </div>
                      <div class="title-wrap">
                        <h6>草嶺古道｜探索新北一探索新北一</h6>
                        <p>草嶺古道單日行程</p>
                      </div>
                      <div class="date-wrap">
                        <p>2023/01/01</p>
                        <div class="date-dash"></div>
                        <p>2023/01/02</p>
                      </div>
                    </div>
                    <div class="single-price-wrap">
                      <p>NTD</p>
                      <p>1,200</p>
                    </div>
                    <div class="amount-wrap">
                      <svg  width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.4502 7.05029L7.5507 16.9498" stroke="#011306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.5498 7.05029L17.4493 16.9498" stroke="#011306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p>1</p>
                    </div>
                    <div class="total-price-wrap">
                      <p>NTD</p>
                      <p>1,200</p>
                    </div>
                  </div>
                  <div class="product-wrap product3">
                    <div class="img-title-wrap">
                      <div class="img-wrap">
                        <img src="../images/product-img/11.jpg">
                      </div>
                      <div class="title-wrap">
                        <h6>草嶺古道｜探索新北一探索新北一</h6>
                        <p>草嶺古道單日行程</p>
                      </div>
                      <div class="date-wrap">
                        <p>2023/01/01</p>
                        <div class="date-dash"></div>
                        <p>2023/01/02</p>
                      </div>
                    </div>
                   
                    <div class="single-price-wrap">
                      <p>NTD</p>
                      <p>1,200</p>
                    </div>
                    <div class="amount-wrap">
                      <svg  width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.4502 7.05029L7.5507 16.9498" stroke="#011306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.5498 7.05029L17.4493 16.9498" stroke="#011306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p>1</p>
                    </div>
                    <div class="total-price-wrap">
                      <p>NTD</p>
                      <p>1,200</p>
                    </div>
                  </div>
                </div>
              </div>
             </div> */}
      </div>
    </>
  )
}
