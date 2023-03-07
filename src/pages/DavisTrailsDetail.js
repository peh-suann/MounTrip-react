import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import DavisTrailsDetailTable from '../components/DavisTrailsDetailTable'
import { TRAILS_DATA } from '../connections/api-config'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import styles from '../styles/Mountrip.module.css'
import styles from '../styles/DavisTrailsDetail.module.css'

// import '../html/css/trails_filter.css'

export default function DavisTrailsDetail() {
  const location = useLocation()
  const usp = new URLSearchParams(location.search)
  const [data, setData] = useState({
    // page: 0,
    rows: [],
    // perPage: 0,
    // totalPages: 0,
    // totalRows: 0,
  })
  const getListData = async (page = 1) => {
    const response = await axios.get(TRAILS_DATA, {
      params: {
        page,
      },
    })
    console.log(response.data)
    setData(response.data)
  }

  useEffect(() => {
    getListData(+usp.get('page'))
    return () => {
      console.log('unmount')
    }
  }, [])
  return (
    <>
      {/* <div className="container">
        {console.log('----', data.rows)}
        <DavisTrailsDetailTable rows={data.rows} />
      </div> */}
      <div
        className={`d-flex flex-column ${styles.container_all}`}
        // className={styles.container_all}
        // className="container_all d-flex flex-column "
      >
        <div className="col ">
          {/* top-img */}
          <div className={`d-flex d-lg-none ${styles.top_img}`}>
            <img className="w-100" src="./imgs/Davis/3-1.jpg" alt="" />
          </div>
          <nav className={`${styles.bread}`} aria-label="breadcrumb">
            <ol className="breadcrumb ">
              <li className="breadcrumb-item  ">
                <Link
                  className={`text-decoration-none ${styles.li_font} `}
                  to="/"
                >
                  臺北市
                </Link>
              </li>
              <li
                className={`breadcrumb-item ${styles.li_font}`}
                aria-current="page"
              >
                北投區
              </li>
              <li
                className={`breadcrumb-item ${styles.li_font} ${styles.underline}`}
                aria-current="page"
              >
                七星山主峰、東峰步道
              </li>
            </ol>
          </nav>
        </div>
        <section>
          <div className=" d-lg-flex flex-lg-row col mb-5  d-sm-flex flex-sm-column">
            <div className=" d-lg-flex flex-lg-row col mb-5  d-sm-flex flex-sm-column">
              {/* left-card  puctures*/}
              <div className="col flex-column me-5 d-none d-lg-flex">
                {/* puctures */}
                <div className="">
                  <img
                    className={`${styles.img_cover_one}`}
                    src="./imgs/Davis/3-1.jpg"
                    alt=""
                  />
                </div>
                <div className={`d-flex flex-row ${styles.img_wrap_three}`}>
                  <img
                    className={`${styles.img_cover_three}`}
                    src="./imgs/Davis/3-1.jpg"
                    alt=""
                  />
                  <img
                    className={`${styles.img_cover_three}`}
                    src="./imgs/Davis/3-1.jpg"
                    alt=""
                  />
                  <img
                    className={`${styles.img_cover_three}`}
                    src="./imgs/Davis/3-1.jpg"
                    alt=""
                  />
                </div>
              </div>
              {/* right-card */}
              <div className="col ">
                <h4 className="fw-bold">七星山主峰、東峰步道</h4>
                {/* location-group */}
                <div className="d-lg-flex flex-row align-items-center d-none ">
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
                    <h6>臺北市北投區</h6>
                  </span>
                  <div className="mb-1 pe-3">
                    <h6>|</h6>
                  </div>

                  <span className="d-flex mb-2">
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
                    </svg>{' '}
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
                    </svg>{' '}
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
                    </svg>{' '}
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

                {/* category button group */}
                <div className="d-flex flex-row mb-3 mb-lg-5">
                  <button
                    className={`rounded-1 me-3 border-0 ${styles.ca_btn}`}
                  >
                    <h6 className={`m-1 ${styles.ca_h6}`}>難度 低</h6>
                  </button>
                  <button
                    className={`rounded-1 me-3 border-0 ${styles.ca_btn}`}
                  >
                    <h6 className="m-1">花季中</h6>
                  </button>
                  <button
                    className={`d-lg-flex rounded-1 me-3 border-0 d-none ${styles.ca_btn}`}
                  >
                    <h6 className="m-1">熱門路線</h6>
                  </button>
                  <button
                    className={`d-flex rounded-1 me-3 border-0  d-lg-none ${styles.ca_btn}`}
                  >
                    <svg
                      className="align-self-center"
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
                    <h6 className="m-1">4.5</h6>
                  </button>
                </div>

                {/* category content group for 電腦版 */}
                <div className={`d-lg-flex mb-5 d-none ${styles.ca_content}`}>
                  <div className={`d-flex flex-row  ${styles.ca_border}`}>
                    <div
                      className={`d-flex flex-row m-3 me-4 p-1 ${styles.ca_content_a}`}
                    >
                      <div className="me-3">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.35484 19.6875L5 15.5893L9.35484 11.25M23.145 11.25L27.4998 15.5893L23.145 19.6875M5 15.5915H27.5"
                            stroke="#6CBA7C"
                            stroke-width="2.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <h6 className={`mb-0 align-self-center ${styles.ca_h6}`}>
                        路線總長 4km
                      </h6>
                    </div>
                  </div>
                  <div className={`d-flex flex-row ${styles.ca_border}`}>
                    <div
                      className={`d-flex flex-row m-3 me-4 p-1 ${styles.ca_content_a}`}
                    >
                      <div className="me-3">
                        <svg
                          width="31"
                          height="30"
                          viewBox="0 0 31 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.5 7.5V15.5564L19.3889 19.723M28 15C28 21.9036 22.4036 27.5 15.5 27.5C8.59644 27.5 3 21.9036 3 15C3 8.09644 8.59644 2.5 15.5 2.5C22.4036 2.5 28 8.09644 28 15Z"
                            stroke="#6CBA7C"
                            stroke-width="2.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <h6 className={`mb-0 align-self-center ${styles.ca_h6}`}>
                        所需時間 2.5hr
                      </h6>
                    </div>
                  </div>
                  <div className=" d-flex flex-row  ">
                    <div
                      className={` d-flex flex-row m-3 p-1 ${styles.ca_content_a}`}
                    >
                      <div className="me-3">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.5 10L17.7841 19.7159L12.6705 14.6023L5 22.2727M27.5 10L21.3636 10M27.5 10L27.5 16.1364"
                            stroke="#6CBA7C"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <h6 className={`mb-0 align-self-center ${styles.ca_h6}`}>
                        海拔高度 1120m
                      </h6>
                    </div>
                  </div>
                </div>
                {/* category content group for 手機板 */}
                <div className=" d-lg-none mb-2">
                  <div className="  d-flex flex-row  mb-3">
                    <div className={`d-flex flex-row ${styles.ca_content_a}`}>
                      <div className="me-3">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.35484 19.6875L5 15.5893L9.35484 11.25M23.145 11.25L27.4998 15.5893L23.145 19.6875M5 15.5915H27.5"
                            stroke="#6CBA7C"
                            stroke-width="2.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <h6 className="mb-0 align-self-center">路線總長 4km</h6>
                    </div>
                  </div>
                  <div className="  d-flex flex-row  mb-3">
                    <div className={`d-flex flex-row ${styles.ca_content_a}`}>
                      <div className="me-3">
                        <svg
                          width="31"
                          height="30"
                          viewBox="0 0 31 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.5 7.5V15.5564L19.3889 19.723M28 15C28 21.9036 22.4036 27.5 15.5 27.5C8.59644 27.5 3 21.9036 3 15C3 8.09644 8.59644 2.5 15.5 2.5C22.4036 2.5 28 8.09644 28 15Z"
                            stroke="#6CBA7C"
                            stroke-width="2.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <h6 className="mb-0 align-self-center">所需時間 2.5hr</h6>
                    </div>
                  </div>
                  <div className=" d-flex flex-row  mb-3">
                    <div className={` d-flex flex-row ${styles.ca_content_a}`}>
                      <div className="me-3">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.5 10L17.7841 19.7159L12.6705 14.6023L5 22.2727M27.5 10L21.3636 10M27.5 10L27.5 16.1364"
                            stroke="#6CBA7C"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <h6 className="mb-0 align-self-center">爬升高度 1120m</h6>
                    </div>
                  </div>
                </div>

                {/* paragraph  */}
                <p className={`mb-2 ${styles.paragraph_i}`}>
                  你見過南橫之美嗎？
                  <br />
                  自從2009年8月，南橫公路中斷之後，美麗的南橫三星便淪為黑山、少有人探訪，直到最近才又終於開放了許多山友鍾情的南橫三星！
                  塔關山、關山嶺山、庫哈諾辛山皆為A級百岳，是適合當日來回的平易、絕美山嶺，封閉多年的原始森林風華更甚以往，Mountrip
                  還安排了專車接送往返民宿及各登山口，讓你飽覽南橫的沿線風光、更讓你輕鬆的入手三座百岳。
                  自從2009年8月，南橫公路中斷之後，美麗的南橫三星便淪為黑山、少有人探訪，直到最近才又終於開放了許多山友鍾情的南橫三星！
                  塔關山、關山嶺山、庫哈諾辛山皆為A級百岳，是適合當日來回的平易、絕美山嶺，封閉多年的原始森林風華更甚以往，Mountrip
                  還安排了專車接送往返民宿及各登山口，讓你飽覽南橫的沿線風光、更讓你輕鬆的入手三座百岳。
                </p>

                {/* 手機板 */}
                <div className="col flex-column d-flex d-lg-none mb-3">
                  {/* puctures */}
                  <div className="mb-3">
                    <img
                      className={`${styles.img_cover_one}`}
                      src="./imgs/3-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <img
                      className={`${styles.img_cover_three}`}
                      src="./imgs/3-1.jpg"
                      alt=""
                    />
                    <img
                      className={`${styles.img_cover_three}`}
                      src="./imgs/4-1.jpg"
                      alt=""
                    />
                    <img
                      className={`${styles.img_cover_three}`}
                      src="./imgs/5-1.jpg"
                      alt=""
                    />
                  </div>
                </div>

                {/* gpx */}
                <div className="mb-3">
                  <img
                    className={`${styles.img_contain}`}
                    src="./imgs/Davis/2-gpx.jpg"
                    alt=""
                  />
                </div>

                {/* shop-button-group */}

                <div className="d-none d-lg-flex flex-column ">
                  {/* level1 */}
                  <div className="col d-flex flex-row mb-2">
                    <div
                      className={`col  d-flex flex-row align-items-center me-2 ${styles.shop_btn_one}`}
                    >
                      <button className={`${styles.btn_style}`}>
                        <svg
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

                      <div className="col"></div>
                      <button className={`${styles.btn_style}`}>
                        <svg
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
                    <button className={`${styles.btn_style}`}>
                      <svg
                        width="43"
                        height="43"
                        viewBox="0 0 43 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.34 14.11C29.8292 13.599 29.2228 13.1936 28.5554 12.9171C27.8879 12.6405 27.1725 12.4982 26.45 12.4982C25.7275 12.4982 25.0121 12.6405 24.3446 12.9171C23.6772 13.1936 23.0708 13.599 22.56 14.11L21.5 15.17L20.44 14.11C19.4083 13.0783 18.009 12.4987 16.55 12.4987C15.091 12.4987 13.6917 13.0783 12.66 14.11C11.6283 15.1417 11.0487 16.541 11.0487 18C11.0487 19.459 11.6283 20.8583 12.66 21.89L13.72 22.95L21.5 30.73L29.28 22.95L30.34 21.89C30.851 21.3792 31.2563 20.7728 31.5329 20.1053C31.8095 19.4379 31.9518 18.7225 31.9518 18C31.9518 17.2775 31.8095 16.5621 31.5329 15.8946C31.2563 15.2272 30.851 14.6208 30.34 14.11Z"
                          stroke="#6CBA7C"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1 5C1 2.79086 2.79086 1 5 1H38C40.2091 1 42 2.79086 42 5V38C42 40.2091 40.2091 42 38 42H5C2.79086 42 1 40.2091 1 38V5Z"
                          stroke="#6CBA7C"
                          stroke-width="2"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* level2 */}
                  <div className={`col mb-2 ${styles.shop_btn_two}`}>
                    <div className=" d-flex flex-row align-items-center ">
                      <div className={`col-2 col-lg-1 ${styles.batch}`}>
                        <h5 className={`ps-3 mb-0 lh-lg ${styles.btn_font}`}>
                          梯次
                        </h5>
                      </div>
                      <div className="col d-flex justify-content-center">
                        <h5 className="mb-0">2023/01/01 - 2023/01/03</h5>
                      </div>
                      <button className={`${styles.btn_style}`}>
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.25 25L21.25 15L11.25 5"
                            stroke="#6CBA7C"
                            stroke-width="3.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* level3 */}
                  <button
                    className={`col d-flex flex-row justify-content-center mb-2 ${styles.shop_btn_three}`}
                  >
                    <h5 className={`mb-0 lh-lg ${styles.btn_font}`}>
                      加入購物車
                    </h5>
                    <span>
                      <svg
                        className="mt-2"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 18.5L15 12.5L9 6.5"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
