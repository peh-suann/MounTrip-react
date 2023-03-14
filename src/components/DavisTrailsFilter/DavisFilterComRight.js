import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../../styles/DavisTrailsFilter.module.css'

function DavisFilterComRight() {
  return (
    <>
      <div className={` d-flex flex-column ${styles.right_card}`}>
        <div className={`${styles.sub_title}`}>
          <div className="d-flex p-0">
            <span className=" d-none d-lg-flex">
              <svg
                className={`${styles.Vector_long}`}
                width="300px"
                height="20"
                viewBox="0 0 380 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 18.5L9.75694 14.8245H17.2373L24.0147 18.5L34.6363 14.8245L49.6135 11.149H55.9002L60.6834 14.8245L70.7781 11.149L81.849 3.65024L88.1346 1.5L99.8764 7.93268L109.574 12.5276L119.274 14.8245L129.394 10.0006L137.837 7.93268L151.987 12.0673L190.167 18.5L198.924 14.8245H206.404L213.181 18.5L223.803 14.8245L238.78 11.149H245.067L249.85 14.8245L259.945 11.149L271.016 3.65024L277.301 1.5L289.043 7.93268L298.741 12.5276L308.44 14.8245L318.561 10.0006L327.004 7.93268L341.154 12.0673L379.333 18.5"
                  stroke="#6CBA7C"
                  strokeMiterlimit="10"
                  stroke-dasharray="4 4"
                />
              </svg>
            </span>
            <div className="">
              <h5 className={`${styles.h5_sub_title_search}`}>
                「草嶺古道」的搜尋結果
              </h5>
            </div>
            <span className=" d-none d-lg-flex">
              <svg
                className={`${styles.Vector_long}`}
                width="300px"
                height="20"
                viewBox="0 0 380 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 18.5L9.75694 14.8245H17.2373L24.0147 18.5L34.6363 14.8245L49.6135 11.149H55.9002L60.6834 14.8245L70.7781 11.149L81.849 3.65024L88.1346 1.5L99.8764 7.93268L109.574 12.5276L119.274 14.8245L129.394 10.0006L137.837 7.93268L151.987 12.0673L190.167 18.5L198.924 14.8245H206.404L213.181 18.5L223.803 14.8245L238.78 11.149H245.067L249.85 14.8245L259.945 11.149L271.016 3.65024L277.301 1.5L289.043 7.93268L298.741 12.5276L308.44 14.8245L318.561 10.0006L327.004 7.93268L341.154 12.0673L379.333 18.5"
                  stroke="#6CBA7C"
                  strokeMiterlimit="10"
                  stroke-dasharray="4 4"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="col">
          {/* card*n TODO: */}
          <div className={`${styles.trails_card}`}>
            <div className="row g-0 d-flex flex-row ">
              <div className={`col-4 ${styles.trails_img_wrap}`}>
                <img
                  src="./imgs/Davis/5-1.jpg"
                  className={`rounded-start ${styles.trails_img}`}
                  alt="..."
                />
              </div>
              <div className="col ">
                <div className={`card-body ${styles.card_padding}`}>
                  <h5 className={`${styles.product_name}`}>
                    草嶺古道｜探索新北一日遊探索新北一日遊
                  </h5>
                  <div className="mb-2">
                    <p
                      className={`mb-0 ${styles['overflow_p']} ${styles['p_line_clamp']} `}
                    >
                      你見過南橫之美嗎？
                      <br />
                      自從2009年8月，南橫公路中斷之後，美麗的南橫三星便淪為黑山、少有人探訪，直到最近才又終於開放了許多山友鍾情的南橫三星！塔關山、關山嶺山、庫哈諾辛山皆為A級百岳，是適合當日來回的平易、絕美山嶺，封閉多年的原始森林風華更甚以往，台灣368還安排了專車接送往返民宿及各登山口，讓你飽覽南橫的沿線風光、更讓你輕鬆的入手三座百岳。
                    </p>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-3">
                    <div className="mb-2 me-2">
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 8.8335C17.5 14.6668 10 19.6668 10 19.6668C10 19.6668 2.5 14.6668 2.5 8.8335C2.5 6.84437 3.29018 4.93672 4.6967 3.53019C6.10322 2.12367 8.01088 1.3335 10 1.3335C11.9891 1.3335 13.8968 2.12367 15.3033 3.53019C16.7098 4.93672 17.5 6.84437 17.5 8.8335Z"
                          fill="#6CBA7C"
                        />
                        <path
                          d="M10 11.3335C11.3807 11.3335 12.5 10.2142 12.5 8.8335C12.5 7.45278 11.3807 6.3335 10 6.3335C8.61929 6.3335 7.5 7.45278 7.5 8.8335C7.5 10.2142 8.61929 11.3335 10 11.3335Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <span className="pe-3 ">
                      <p className="mb-0">臺北市北投區</p>
                    </span>
                    <div className="mb-1 pe-3">
                      <p className="mb-0">|</p>
                    </div>

                    <span className="d-flex mb-1">
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00004 1.83334L10.06 6.00668L14.6667 6.68001L11.3334 9.92668L12.12 14.5133L8.00004 12.3467L3.88004 14.5133L4.66671 9.92668L1.33337 6.68001L5.94004 6.00668L8.00004 1.83334Z"
                          fill="#CEE8CB"
                        />
                      </svg>
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00004 1.83334L10.06 6.00668L14.6667 6.68001L11.3334 9.92668L12.12 14.5133L8.00004 12.3467L3.88004 14.5133L4.66671 9.92668L1.33337 6.68001L5.94004 6.00668L8.00004 1.83334Z"
                          fill="#CEE8CB"
                        />
                      </svg>
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00004 1.83334L10.06 6.00668L14.6667 6.68001L11.3334 9.92668L12.12 14.5133L8.00004 12.3467L3.88004 14.5133L4.66671 9.92668L1.33337 6.68001L5.94004 6.00668L8.00004 1.83334Z"
                          fill="#CEE8CB"
                        />
                      </svg>
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00004 1.83334L10.06 6.00668L14.6667 6.68001L11.3334 9.92668L12.12 14.5133L8.00004 12.3467L3.88004 14.5133L4.66671 9.92668L1.33337 6.68001L5.94004 6.00668L8.00004 1.83334Z"
                          fill="#CEE8CB"
                        />
                      </svg>
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00004 1.83334L10.06 6.00668L14.6667 6.68001L11.3334 9.92668L12.12 14.5133L8.00004 12.3467L3.88004 14.5133L4.66671 9.92668L1.33337 6.68001L5.94004 6.00668L8.00004 1.83334Z"
                          fill="#CEE8CB"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="col">
                    <h3 className={`mb-0 fw-bolder ${styles.price_h3}`}>
                      NTD 1,200
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-1  d-flex justify-content-end align-items-start">
                <button className={`${styles.heart_btn}`}>
                  <svg
                    width="50"
                    height="75"
                    viewBox="0 0 50 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3882 29.6118C19.8775 29.1008 19.271 28.6955 18.6036 28.4189C17.9361 28.1423 17.2207 28 16.4982 28C15.7757 28 15.0603 28.1423 14.3929 28.4189C13.7254 28.6955 13.119 29.1008 12.6082 29.6118L11.5482 30.6718L10.4882 29.6118C9.45652 28.5801 8.05725 28.0005 6.59821 28.0005C5.13918 28.0005 3.73991 28.5801 2.70821 29.6118C1.67652 30.6435 1.09692 32.0428 1.09692 33.5018C1.09692 34.9609 1.67652 36.3601 2.70821 37.3918L3.76821 38.4518L11.5482 46.2318L19.3282 38.4518L20.3882 37.3918C20.8992 36.8811 21.3046 36.2746 21.5811 35.6072C21.8577 34.9397 22 34.2243 22 33.5018C22 32.7793 21.8577 32.0639 21.5811 31.3965C21.3046 30.729 20.8992 30.1226 20.3882 29.6118Z"
                      stroke="#6CBA7C"
                      stroke-width="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* pagination */}
        <div
          className={`page-bar col d-none d-lg-flex align-self-center ${styles.details_pagination}`}
        >
          <nav
            className={`${styles.pagination_nav}`}
            aria-label=" Page navigation example"
          >
            <ul className="pagination ">
              <li className={`page-item ${styles.li_margin}`}>
                <Link
                  className={`page-link ${styles.a_decoration}`}
                  aria-label="Previous"
                  to="/"
                >
                  {' '}
                  <span aria-hidden="true">&laquo;</span>
                </Link>
              </li>
              <li className={`page-item ${styles.li_margin}`}>
                <Link
                  className={`page-link fw-bold ${styles.a_decoration}`}
                  aria-label="Previous"
                  to="/"
                >
                  1
                </Link>
              </li>
              <li className={`page-item ${styles.li_margin}`}>
                <Link
                  className={`page-link fw-bold ${styles.a_decoration}`}
                  aria-label="Previous"
                  to="/"
                >
                  2
                </Link>
              </li>
              <li className={`page-item ${styles.li_margin}`}>
                <span className={`page-link fw-bold ${styles.a_decoration}`}>
                  {' '}
                  ...{' '}
                </span>
              </li>
              <li className={`page-item ${styles.li_margin}`}>
                <Link
                  className={`page-link fw-bold ${styles.a_decoration}`}
                  aria-label="Previous"
                  to="/"
                >
                  9
                </Link>
              </li>
              <li className={`page-item ${styles.li_margin}`}>
                <Link
                  className={`page-link fw-bold ${styles.a_decoration}`}
                  aria-label="Previous"
                  to="/"
                >
                  10
                </Link>
              </li>
              <li className={`page-item ${styles.li_margin}`}>
                <Link
                  className={`page-link ${styles.a_decoration}`}
                  aria-label="Next"
                  to="/"
                >
                  {' '}
                  <span aria-hidden="true">&raquo;</span>
                </Link>
              </li>
              {/* <li className="page-item li_margin">
                        <a className="page-link a_decoration fw-bold" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item li_margin">
                        <a className="page-link a_decoration fw-bold" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item li_margin">
                        <span className="page-link a_decoration fw-bold">
                          {' '}
                          ...{' '}
                        </span>
                      </li>
                      <li className="page-item li_margin">
                        <a className="page-link a_decoration fw-bold" href="#">
                          9
                        </a>
                      </li>
                      <li className="page-item li_margin">
                        <a className="page-link fw-bold" href="#">
                          10
                        </a>
                      </li>
                      <li className="page-item li_margin">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default DavisFilterComRight
