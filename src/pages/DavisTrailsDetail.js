import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
// import DavisTrailsDetailTable from '../components/DavisTrailsDetailTable'
// import DavisGpxTest from '../components/DavisGpxTest'
import DavisTrailsImgGroup from '../components/DavisTrailsImgGroup'
import DavisTrailsBatch from '../components/DavisTrailsBatch'
import DavisTrailsShopBtn from '../components/DavisTrailsShopBtn'
import { TRAILS_DATA } from '../connections/api-config'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import styles from '../styles/Mountrip.module.css'
import styles from '../styles/DavisTrailsDetail.module.css'

export default function DavisTrailsDetail(rows) {
  const location = useLocation()
  const usp = new URLSearchParams(location.search)
  // trails_data
  const [data, setData] = useState({
    // page: 0,
    rows: [],
    // perPage: 0,
    // totalPages: 0,
    // totalRows: 0,
  })

  const [count, setCount] = useState(0)

  const getListData = async (page = 1) => {
    const response = await axios.get(TRAILS_DATA, {
      params: {
        page,
      },
    })
    // console.log(response.data)
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
      {/* 
       mobile 購物車fix
         */}
      {/* <div className="container">
            {console.log('----', data.rows)}
            <DavisTrailsDetailTable rows={data.rows} />
          </div> */}
      {/* <div className="container">
        <DavisGpxTest />
      </div> */}
      {/* {console.log('----', data.rows)} */}
      {data.rows.map((r) => (
        <div
          id={r.sid}
          className={`d-flex flex-column ${styles.container_all}`}
          // className={styles.container_all}
          // className="container_all d-flex flex-column "
        >
          <div className="col p-0">
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
                    {r.geo_location_sid}
                  </Link>
                </li>
                <li
                  className={`breadcrumb-item ${styles.li_font}`}
                  aria-current="page"
                >
                  {r.geo_location_town_sid}
                </li>
                <li
                  className={`breadcrumb-item ${styles.li_font} ${styles.underline}`}
                  aria-current="page"
                >
                  {r.trail_name}
                </li>
              </ol>
            </nav>
          </div>

          <section>
            <div className=" d-lg-flex flex-lg-row col mb-5  d-sm-flex flex-sm-column">
              <div className=" d-lg-flex flex-lg-row col mb-5  d-sm-flex flex-sm-column">
                <DavisTrailsImgGroup />
                {/* <div className="col flex-column me-5 d-none d-lg-flex">
                  <div className="">
                    <img
                      className={`${styles.img_cover_one}`}
                      src={`/imgs/Davis/${r.trail_sid}-1.jpg`}
                      alt=""
                    />
                  </div>
                  <div className={`d-flex flex-row ${styles.img_wrap_three}`}>
                    <img
                      className={`${styles.img_cover_three}`}
                      src={`/imgs/Davis/${r.trail_sid}-1.jpg`}
                      alt=""
                    />
                    <img
                      className={`${styles.img_cover_three}`}
                      src={`/imgs/Davis/${r.trail_sid}-2.jpg`}
                      alt=""
                    />
                    <img
                      className={`${styles.img_cover_three}`}
                      src={`/imgs/Davis/${r.trail_sid}-3.jpg`}
                      alt=""
                    />
                  </div>
                </div> */}
                {/* right-card */}
                <div className="col">
                  <h4 className="fw-bold">{r.trail_name}</h4>
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
                      <h6>
                        {r.geo_location_sid}
                        {r.geo_location_town_sid}
                      </h6>
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
                      <h6 className={`m-1 ${styles.ca_h6}`}>
                        難度 {r.difficulty_short}
                      </h6>
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

                  {/* category content group for 電腦版 FIXME: 修改樣式，字塞不下*/}
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
                        <h6
                          className={`mb-0 align-self-center ${styles.ca_h6}`}
                        >
                          路線總長{r.trail_length}
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
                        <h6
                          className={`mb-0 align-self-center ${styles.ca_h6}`}
                        >
                          所需時間{r.trail_time}hr
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
                        <h6
                          className={`mb-0 align-self-center ${styles.ca_h6}`}
                        >
                          海拔高度{r.trail_height}
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
                        <h6 className="mb-0 align-self-center">
                          路線總長{r.trail_length}
                        </h6>
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
                        <h6 className="mb-0 align-self-center">
                          所需時間{r.trail_time}hr
                        </h6>
                      </div>
                    </div>
                    <div className=" d-flex flex-row  mb-3">
                      <div
                        className={` d-flex flex-row ${styles.ca_content_a}`}
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
                        <h6 className="mb-0 align-self-center">
                          爬升高度{r.trail_height}
                        </h6>
                      </div>
                    </div>
                  </div>

                  {/* paragraph  */}
                  <p className={`mb-2 ${styles.paragraph_i}`}>
                    {r.trail_describ}
                  </p>

                  {/* 手機板 */}
                  <div className="col flex-column d-flex d-lg-none mb-3">
                    {/* puctures */}
                    <div className="mb-3">
                      <img
                        className={`${styles.img_cover_one}`}
                        src={`/imgs/Davis/${r.trail_img}-1.jpg`}
                        alt=""
                      />
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <img
                        className={`${styles.img_cover_three}`}
                        src={`/imgs/Davis/${r.trail_img}-1.jpg`}
                        alt=""
                      />
                      <img
                        className={`${styles.img_cover_three}`}
                        src={`/imgs/Davis/${r.trail_img}-2.jpg`}
                        alt=""
                      />
                      <img
                        className={`${styles.img_cover_three}`}
                        src={`/imgs/Davis/${r.trail_img}-3.jpg`}
                        alt=""
                      />
                    </div>
                  </div>

                  {/* gpx */}
                  <div className="mb-3">
                    <img
                      className={`${styles.img_contain}`}
                      src="./imgs/Davis/3-1.jpg"
                      alt=""
                    />
                  </div>

                  {/* shop-button-group TODO:拆元件 */}
                  <div className="d-none d-lg-flex flex-column ">
                    {/* Count */}
                    <div className="col d-flex flex-row mb-2 justify-content-between">
                      <div
                        className={`col  d-flex flex-row align-items-center me-2 ${styles.shop_btn_one}`}
                      >
                        <button
                          onClick={() => {
                            setCount(count - 1)
                          }}
                          className={`${styles.btn_style}`}
                        >
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

                        <h3 className={`col mb-0 ${styles.count_style}`}>
                          {count}
                        </h3>
                        <button
                          onClick={() => {
                            setCount(count + 1)
                          }}
                          className={`${styles.btn_style}`}
                        >
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
                          width="35"
                          height="35"
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
                          <h5 className={`mb-0 ${styles.batch_font}`}>
                            <select name="" id="">
                              <DavisTrailsBatch />
                              {/* {data.rows.map((r, i) => {
                                return (
                                  <option id={i} value="">
                                    {r.batch_start}-{r.batch_end}
                                  </option>
                                )
                              })} */}

                              {/* <option value="">2023/01/01 - 2023/01/03</option>
                              <option value="">2023/01/01 - 2023/01/03</option> */}
                            </select>
                          </h5>
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
                    {/* level3 shop_btn FIXME: */}
                    <DavisTrailsShopBtn />
                    {/* <button
                      className={`col d-flex flex-row justify-content-center mb-2 ${styles.shop_btn_three}`}
                    >
                      <h5
                        className={`mb-0 align-self-center ${styles.btn_font}`}
                      >
                        加入購物車
                      </h5>
                      <span className="align-self-center">
                        <svg
                          className=""
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
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Vector_long for lg */}
          <div className="mb-lg-5 d-none d-lg-flex">
            <svg
              className={`${styles.Vector_long}`}
              width="1682"
              height="20"
              viewBox="0 0 1682 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 19L10.7214 15.1083H19.0255L26.5493 19L38.3407 15.1083L54.9675 11.2166H61.9464L67.2565 15.1083L78.4629 11.2166L90.7531 3.27673L97.7309 1L110.766 7.81107L121.532 12.6763L132.299 15.1083L143.534 10.0006L152.907 7.81107L168.616 12.1889L211 19L220.721 15.1083H229.026L236.549 19L248.341 15.1083L264.967 11.2166H271.946L277.256 15.1083L288.463 11.2166L300.753 3.27673L307.731 1L320.766 7.81107L331.532 12.6763L342.299 15.1083L353.534 10.0006L362.907 7.81107L378.616 12.1889L421 19L430.721 15.1083H439.026L446.549 19L458.341 15.1083L474.967 11.2166H481.946L487.256 15.1083L498.463 11.2166L510.753 3.27673L517.731 1L530.766 7.81107L541.532 12.6763L552.299 15.1083L563.534 10.0006L572.907 7.81107L588.616 12.1889L631 19L640.721 15.1083H649.026L656.549 19L668.341 15.1083L684.967 11.2166H691.946L697.256 15.1083L708.463 11.2166L720.753 3.27673L727.731 1L740.766 7.81107L751.532 12.6763L762.299 15.1083L773.534 10.0006L782.907 7.81107L798.616 12.1889L841 19L850.721 15.1083H859.025L866.549 19L878.341 15.1083L894.967 11.2166H901.946L907.256 15.1083L918.463 11.2166L930.753 3.27673L937.731 1L950.766 7.81107L961.532 12.6763L972.299 15.1083L983.534 10.0006L992.907 7.81107L1008.62 12.1889L1051 19L1060.72 15.1083H1069.03L1076.55 19L1088.34 15.1083L1104.97 11.2166H1111.95L1117.26 15.1083L1128.46 11.2166L1140.75 3.27673L1147.73 1L1160.77 7.81107L1171.53 12.6763L1182.3 15.1083L1193.53 10.0006L1202.91 7.81107L1218.62 12.1889L1261 19L1270.72 15.1083H1279.03L1286.55 19L1298.34 15.1083L1314.97 11.2166H1321.95L1327.26 15.1083L1338.46 11.2166L1350.75 3.27673L1357.73 1L1370.77 7.81107L1381.53 12.6763L1392.3 15.1083L1403.53 10.0006L1412.91 7.81107L1428.62 12.1889L1471 19L1480.72 15.1083H1489.03L1496.55 19L1508.34 15.1083L1524.97 11.2166H1531.95L1537.26 15.1083L1548.46 11.2166L1560.75 3.27673L1567.73 1L1580.77 7.81107L1591.53 12.6763L1602.3 15.1083L1613.53 10.0006L1622.91 7.81107L1638.62 12.1889L1681 19"
                stroke="#6CBA7C"
                stroke-miterlimit="10"
              />
            </svg>
          </div>
          {/* Vector for 手機板 */}
          <div className="mb-4 d-lg-none">
            <svg
              className={`${styles.Vector_long}`}
              width="360"
              height="28"
              viewBox="0 0 360 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3_1240)">
                <path
                  d="M21.9189 27.5731C21.9189 27.5731 22.995 25.8143 22.995 25.0441C22.995 24.274 22.5334 22.892 22.995 22.4305C23.4565 21.9689 23.3036 20.2784 22.995 19.6612C22.6864 19.0467 23.4565 17.815 23.9181 17.3534C24.3796 16.8919 25.4557 15.3543 25.9172 14.8927C26.3788 14.4312 27.7634 13.3551 28.0693 12.1234C28.3779 10.8944 29.2983 8.89256 30.3771 8.12513C31.4531 7.35496 31.3002 7.35496 31.6061 6.27892C31.9119 5.20288 33.4523 3.66528 33.4523 3.66528L35.1428 5.35582C35.1428 5.35582 36.3718 7.5079 36.989 9.20117C37.6035 10.8917 39.1411 10.8917 39.1411 10.8917C39.1411 10.8917 38.9882 12.1207 40.9873 12.8909C42.9865 13.661 44.524 14.8026 45.7558 15.6165C46.9875 16.4303 48.5251 15.8131 49.1396 17.1978C49.7541 18.5824 50.5242 18.8883 51.4473 18.8883C52.3704 18.8883 51.9089 19.3498 54.8311 21.349C57.7534 23.3481 58.062 22.8866 58.9824 22.7336C59.9027 22.5807 61.2901 23.8097 62.3662 24.2712C63.4422 24.7328 64.5182 26.579 66.6731 25.9618C68.8279 25.3446 71.7474 25.1916 72.3646 23.8097C72.9791 22.425 74.8253 23.5011 75.5955 23.6567C76.3656 23.8124 78.0562 23.0423 78.3648 22.4278C78.6734 21.8133 80.9784 22.7364 82.3631 21.0431C83.7477 19.3498 84.3622 19.6585 84.8238 18.5824C85.2853 17.5064 88.8221 17.5064 89.8981 17.9679C90.9742 18.4295 92.5118 19.3526 93.5878 19.3526C94.6638 19.3526 95.7399 20.4286 96.2014 20.7372C96.663 21.0458 98.6621 20.2757 99.1237 20.2757C99.5852 20.2757 103.584 20.1227 104.815 19.3526C106.047 18.5824 108.966 18.2765 109.89 17.5064C110.813 16.7362 113.273 16.5833 113.273 17.3534C115.734 17.0448 118.042 17.0448 118.656 16.2774C118.656 16.2774 123.116 15.2013 124.654 13.8167C126.191 12.432 127.885 12.1262 127.885 12.1262C127.885 12.1262 129.884 11.0501 130.345 10.127C130.807 9.2039 131.574 10.7415 132.344 10.5886C133.115 10.4356 136.651 10.2799 137.113 8.2808C137.574 6.28165 138.803 7.81925 140.035 6.89614C141.267 5.97304 143.725 3.66528 144.648 4.58839C145.571 5.51149 146.494 6.12598 146.647 6.74047C146.8 7.35496 146.186 7.81652 146.647 8.58668C147.109 9.35684 146.494 10.7388 147.723 12.1234C148.952 13.5081 149.722 13.3524 149.722 13.3524C149.722 13.3524 150.951 13.5736 151.26 15.6165C151.568 17.6593 152.183 19.3498 152.797 19.3498C153.412 19.3498 154.026 19.9643 154.182 21.5019C154.335 23.0395 156.334 23.5011 156.334 23.5011C156.334 23.5011 157.41 25.3473 159.565 24.8857C161.717 24.4242 163.255 27.5676 163.255 27.5676"
                  stroke="#8DC996"
                  stroke-width="0.273107"
                  stroke-miterlimit="10"
                />
                <path
                  d="M23.792 27.3739C24.1525 27.0298 25.0483 25.9565 25.4197 25.413C25.7857 24.875 25.9413 24.0693 26.5859 23.6378C26.7306 23.5422 26.8563 23.4002 26.9655 23.2336C27.2796 22.7584 27.4762 21.9309 27.6073 21.3901C27.7602 20.751 28.4403 19.8088 28.951 19.4128C29.276 19.1588 29.8796 18.345 30.1936 18.0937C30.5159 17.837 31.2915 17.2798 31.551 16.6626C31.8186 16.0317 32.4304 15.0649 33.0831 14.6771C33.6921 14.3166 33.6566 14.3057 33.8806 13.7868C34.1073 13.2597 34.973 12.5169 35.0577 12.5414C35.1205 12.5578 36.0299 13.4236 36.0928 13.4427C36.2047 13.4782 36.9421 14.5843 37.349 15.4746C37.7451 16.3404 38.5753 16.3704 38.649 16.3922C38.7228 16.4141 38.7119 17.0777 39.7934 17.4574C41.148 17.9326 42.3633 18.599 43.5076 19.1998C44.0074 19.462 44.4908 19.7078 44.9578 19.929C46.2523 20.5435 47.7517 20.355 48.7185 21.2263C49.5515 21.98 50.4992 22.163 51.537 22.1767C52.2061 22.1849 52.5065 22.3842 53.2821 22.7584C54.0168 23.1107 54.6258 23.4985 55.4233 24.0065C55.893 24.3042 56.3519 24.5281 56.8626 24.7275C58.2035 25.2519 58.93 25.1727 59.9159 25.1044C61.1149 25.0224 62.5732 25.6151 63.7039 25.8117C65.1022 26.0521 66.5087 26.8195 68.4533 26.3771C70.6436 25.8745 73.3173 25.7271 74.6391 24.7685C75.5377 24.1185 76.895 24.6565 77.7908 24.8012C78.2988 24.8859 78.9734 24.8012 79.5633 24.621C79.9456 24.5063 80.2843 24.3369 80.5219 24.1949C81.2729 23.7525 83.0836 24.0529 84.3727 23.0561C85.5716 22.1302 86.3254 22.1084 87.0874 21.5676C87.5762 21.2208 88.5239 21.1143 89.4716 21.1525C90.3619 21.1907 91.255 21.3792 91.8668 21.625C92.4075 21.8435 93.0029 22.1193 93.6092 22.3433C94.2046 22.5645 94.8027 22.7338 95.3461 22.7666C96.3075 22.8239 97.2797 23.362 97.9407 23.5094C98.6016 23.6569 99.9671 23.2418 100.593 23.209C101.33 23.1708 103.116 22.8512 104.58 22.5126C105.061 22.4006 105.503 22.2777 105.858 22.1384C107.259 21.5895 109.52 21.3601 110.665 20.8849C111.615 20.4916 113.36 20.6118 113.909 21.1989C114.557 21.259 115.198 21.3328 115.818 21.3464C117.11 21.3737 118.213 21.1443 118.959 20.945C119.391 20.8302 120.497 20.6527 121.63 20.3796C122.763 20.1065 123.96 19.7788 124.746 19.3145C126.068 18.5361 127.36 18.1538 127.854 17.9517C128.258 17.7878 129.7 17.0996 130.361 16.4223C130.678 16.0973 131.025 16.1656 131.415 16.2557C131.691 16.3185 131.992 16.3786 132.298 16.2748C133.18 15.9771 135.02 15.532 136.127 14.8656C136.46 14.6662 136.73 14.4341 136.894 14.1446C137.642 12.8173 138.298 13.0603 139.393 12.3038C139.669 12.1127 140.029 11.9324 140.425 11.7085C141.198 11.2715 143.154 11.195 143.7 11.4272C143.757 11.4517 143.828 11.4845 143.905 11.5364C144.691 12.0744 145.939 12.7053 146.092 13.104C146.229 13.4618 145.953 13.7486 146.221 14.1801C146.54 14.6963 146.273 15.5046 146.917 16.3021C147.545 17.0805 147.941 17.0777 147.952 17.157C147.963 17.2471 148.597 17.4519 148.791 18.5716C148.987 19.6996 149.367 20.6609 149.798 20.7893C150.23 20.9176 150.686 21.4365 150.918 22.4225C151.153 23.422 152.322 23.8918 152.461 24.0584C152.488 24.0911 152.562 24.2031 152.682 24.3342C153.122 24.8231 153.816 25.3775 154.769 25.3884C156.145 25.4021 157.202 27.1663 157.541 27.5214"
                  stroke="#8DC996"
                  stroke-width="0.273107"
                  stroke-miterlimit="10"
                />
                <path
                  d="M25.665 27.1745C27.2272 25.6751 28.7593 25.6068 30.6957 24.5909C31.7253 24.0501 32.8396 22.0127 33.9812 21.4747C35.5188 20.7483 37.1055 21.6277 38.5994 22.0237C39.9813 22.3896 41.2431 23.1052 42.5622 23.6568C44.3975 24.4243 46.3502 24.8749 48.3029 25.26C49.8924 25.5741 52.039 25.3447 53.6422 25.6369C55.4884 25.9701 55.8598 26.9341 57.5913 27.2755C59.5713 27.6661 62.9142 27.4093 65.0471 27.3602C69.0099 27.2728 72.9782 26.1449 76.9191 25.7352C78.5086 25.5686 80.0926 26.1148 81.6712 26.0766C83.2497 26.0383 84.8228 25.4102 86.3877 25.0879C88.1302 24.7274 89.919 24.3178 91.6696 24.6318C92.986 24.8694 94.1959 25.5058 95.4822 25.8718C97.6043 26.4726 99.8601 26.3196 102.059 26.1585C103.187 26.0766 104.429 25.5304 105.696 25.219C107.663 24.7329 109.689 24.4215 111.443 24.285C112.893 24.173 114.578 25.2736 116.279 25.5823C118.205 25.9291 120.147 25.4867 121.788 25.3501C125.672 25.0278 127.783 23.7169 131.423 22.3241C132.669 21.8461 134.477 20.863 135.752 20.467C138.068 19.7459 137.421 17.7932 139.802 17.3426C140.127 17.2825 142.656 18.3176 142.967 18.4323C143.232 18.5306 145.349 19.2871 145.543 19.4892C146.6 20.5926 145.745 21.1497 146.802 22.2531C147.359 22.8348 148.192 24.2386 148.749 24.8203C149.866 25.9865 150.71 26.3333 151.827 27.4967"
                  stroke="#8DC996"
                  stroke-width="0.273107"
                  stroke-miterlimit="10"
                />
                <path
                  d="M33.4521 3.20654L35.1426 4.89708C35.1426 4.89708 36.3743 7.0519 36.9888 8.74243C37.6033 10.433 39.1409 10.433 39.1409 10.433C39.1409 10.433 38.988 11.6647 40.9871 12.4348C42.9863 13.2023 44.5238 14.3466 45.7556 15.1577C46.9845 15.9716 48.5221 15.3544 49.1394 16.739C49.7539 18.1237 50.5213 18.4323 51.4444 18.4323C52.3675 18.4323 51.9059 18.8938 54.8282 20.893C57.7504 22.8921 58.0591 22.4306 58.9822 22.2749C59.9025 22.122 61.2872 23.3537 62.3632 23.8152C63.442 24.2768 64.518 26.1203 66.6701 25.5058C68.8249 24.8913 71.7445 24.7356 72.3617 23.3537C72.9762 21.969 74.8224 23.0451 75.5898 23.198C76.36 23.3537 78.0505 22.5835 78.3591 21.969C78.6677 21.3545 80.9728 22.2749 82.3574 20.5844C83.7421 18.8938 84.3566 19.1997 84.8181 18.1237C85.2797 17.0476 88.8164 17.0476 89.8925 17.5092C90.9685 17.9707 92.5088 18.8938 93.5849 18.8938C94.6609 18.8938 95.737 19.9699 96.1985 20.2758C96.6601 20.5844 98.6592 19.8169 99.1208 19.8169C99.5823 19.8169 103.581 19.6613 104.812 18.8938C106.041 18.1237 108.964 17.8151 109.887 17.0476C110.81 16.2775 113.27 16.1245 113.27 16.8947C115.731 16.5861 118.036 16.5861 118.653 15.8159C118.653 15.8159 123.113 14.7399 124.651 13.3552C126.188 11.9733 127.879 11.6647 127.879 11.6647C127.879 11.6647 129.878 10.5886 130.34 9.66553C130.801 8.74243 131.571 10.28 132.339 10.1271C133.109 9.97415 136.646 9.81847 137.107 7.81933C137.569 5.82018 138.798 7.35778 140.03 6.43467C141.258 5.51157 143.719 3.20654 144.642 4.12965C145.565 5.05275 146.489 5.66724 146.641 6.28173C146.797 6.89622 146.18 7.35778 146.641 8.12794C147.103 8.89537 146.489 10.28 147.72 11.6647C148.949 13.0493 149.719 12.8937 149.719 12.8937C149.719 12.8937 150.948 13.1176 151.257 15.1577C151.563 17.2006 152.18 18.8938 152.795 18.8938C153.409 18.8938 154.024 19.5083 154.179 21.0459C154.332 22.5835 156.331 23.0451 156.331 23.0451C156.331 23.0451 157.407 24.8913 159.562 24.4297C161.714 23.9682 163.252 27.1116 163.252 27.1116H21.916C21.916 27.1116 22.9948 25.3528 22.9948 24.5827C22.9948 23.8125 22.5332 22.4306 22.9948 21.969C23.4563 21.5075 23.3007 19.8169 22.9948 19.1997C22.6862 18.5852 23.4563 17.3562 23.9152 16.8947C24.3767 16.4331 25.4555 14.8955 25.917 14.434C26.3759 13.9724 27.7605 12.8937 28.0691 11.6647C28.3777 10.433 29.2981 8.43382 30.3769 7.66639C31.4529 6.89622 31.2973 6.89622 31.6059 5.82018C31.7178 5.43237 31.9855 4.9872 32.2859 4.57481C32.7939 3.87293 33.392 3.26936 33.4466 3.21201"
                  stroke="#8DC996"
                  stroke-width="0.819322"
                  stroke-miterlimit="10"
                />
                <path
                  d="M33.4528 3.20654L33.4473 3.21201C33.3955 3.28848 32.9039 3.96851 32.2866 4.57481C31.6967 5.1538 30.9948 5.66724 30.4432 5.52796C29.2797 5.23573 26.4886 8.35189 26.2073 9.62184C25.926 10.8945 23.2413 12.5878 23.2413 12.5878C23.2413 12.5878 20.5594 13.9997 19.2867 15.8378C18.0168 17.673 15.6162 17.389 15.6162 17.389C15.6162 17.389 13.4968 18.943 11.3803 19.6503C9.26095 20.355 8.41432 21.0623 7.70697 23.3209C7.00235 25.5795 2.48242 27.1116 2.48242 27.1116H21.9168"
                  stroke="#8DC996"
                  stroke-width="0.819322"
                  stroke-miterlimit="10"
                />
                <path
                  d="M144.643 4.12967C144.643 4.12967 147.653 4.11601 148.36 4.68134C149.065 5.24668 151.326 5.66999 151.608 6.09331C151.889 6.51663 151.889 7.36326 152.596 7.64729C153.301 7.92859 154.008 7.36326 154.855 9.34056C155.701 11.3179 159.798 11.8832 160.505 12.5878C161.21 13.2952 164.318 14.1418 167 15.1577C169.682 16.1764 169.258 18.2384 169.966 19.9317C170.67 21.6277 171.659 22.7556 173.213 23.3209C174.767 23.8863 176.037 27.1117 176.037 27.1117H163.253"
                  stroke="#8DC996"
                  stroke-width="0.819322"
                  stroke-miterlimit="10"
                />
                <path
                  d="M175.853 27.4448C175.853 27.4448 179.746 26.1585 180.565 24.9459C181.385 23.7333 182.307 23.0259 183.844 23.3291C185.38 23.6322 187.634 23.3755 187.839 22.7446C188.044 22.1165 187.941 21.8133 189.683 22.0154C191.425 22.2175 192.961 23.8343 194.498 24.0364C196.035 24.2385 197.879 25.5522 199.518 25.6532C201.157 25.7543 202.387 26.7648 204.333 26.5627C206.28 26.3606 206.792 24.8448 207.612 25.3501C208.431 25.8553 211.607 24.4406 212.324 23.228C213.041 22.0154 214.476 19.8934 215.705 19.5902C216.934 19.2871 218.061 16.9629 218.778 16.4577C219.496 15.9524 222.569 14.0325 222.876 12.2136C223.184 10.3947 226.257 10.5968 226.257 10.5968C226.257 10.5968 228.818 9.9905 230.15 8.7779C231.482 7.5653 234.351 7.9695 235.477 8.27265C236.604 8.5758 236.297 9.3842 237.731 9.5863C239.166 9.7884 239.678 8.7779 241.624 9.5863C243.571 10.3947 246.337 10.4957 246.337 10.4957C246.337 10.4957 248.386 13.4262 250.025 13.3251C251.664 13.2241 252.791 13.6283 253.201 14.0325C253.611 14.4367 254.43 15.144 256.684 14.7398C258.938 14.3356 259.45 13.7293 261.499 14.1335C263.548 14.5377 264.47 13.9314 264.88 13.8304C265.29 13.7293 270.412 14.2346 271.642 15.144C272.871 16.0535 274.51 16.7608 275.33 16.7608C276.149 16.7608 276.662 17.2661 276.662 17.2661C276.662 17.2661 278.813 16.6598 279.633 15.8514C280.452 15.043 281.067 14.6388 281.067 13.8304C281.067 13.022 283.423 12.3146 284.653 12.7188C285.882 13.123 291.107 11.9104 292.026 11.001C292.948 10.0915 294.485 9.9905 294.895 10.1926C295.817 8.5758 297.456 8.95269 297.149 7.95585C296.841 6.95901 297.046 7.21027 298.276 5.24116C300.734 4.68675 300.939 4.28255 301.247 3.9794C301.554 3.67625 303.091 5.3941 303.5 6.0004C303.91 6.6067 305.242 7.51615 306.369 7.71825C307.496 7.92035 307.906 9.03189 308.828 9.94134C309.75 10.8508 309.852 10.9518 311.184 11.356C312.516 11.7602 312.926 13.377 312.926 13.377C312.926 13.377 313.438 14.3875 314.872 14.6907C316.306 14.9938 317.228 16.0945 318.151 15.6957C319.073 15.297 320.814 17.6211 322.453 17.9243C323.068 19.8442 322.658 20.6526 323.58 21.6631C324.502 22.6736 322.044 22.8757 324.195 24.2904C326.346 25.7051 329.522 25.402 329.522 25.402C331.571 26.7156 331.776 27.4475 331.776 27.4475"
                  stroke="#8DC996"
                  stroke-width="0.273107"
                  stroke-miterlimit="10"
                />
                <path
                  d="M178.093 27.4447C178.093 27.4447 180.502 27.0241 181.335 26.5052C181.651 26.3086 182.182 26.1447 182.634 25.8825C183.586 25.3281 184.611 24.8502 185.887 24.9758C186.604 25.0468 187.297 25.0714 187.715 25.1096C188.338 25.167 189.149 25.1451 189.578 24.9212C190.043 24.6781 190.306 24.4897 191.444 24.5525C191.688 24.5661 191.915 24.5743 192.106 24.6071C193.089 24.7792 194.642 25.492 196.002 25.6504C196.816 25.7405 197.555 25.9262 197.912 26.0791C198.408 26.2894 200.205 26.5243 200.681 26.5544C201.108 26.5817 202.492 26.7291 202.888 26.852C203.254 26.9667 204.137 27.0159 205.111 26.9231C206.155 26.8193 206.964 26.4943 207.302 26.284C207.507 26.1556 207.808 26.071 208.238 26.1829C209.126 26.4151 211.552 25.7978 212.826 25.126C213.869 24.5743 215.279 23.4655 216.613 23.3044C217.854 23.1542 219.036 21.9443 219.991 21.7176C221.373 21.3899 223.752 20.3931 224.524 19.4754C224.676 19.2952 224.876 19.1695 225.05 19.0439C225.803 18.4977 227.298 18.4267 227.852 18.2929C228.359 18.17 230.231 17.7275 231.549 17.0174C232.867 16.3074 235.129 16.3565 236.472 16.5149C237.405 16.6242 237.615 17.0611 238.701 17.1758C239.966 17.3097 240.761 16.8836 242.259 17.3998C243.128 17.6975 244.081 17.9515 244.917 18.1727C245.639 18.3639 246.249 18.4485 246.476 18.5223C247.14 18.738 248.824 20.2975 250.266 20.2565C251.565 20.2183 252.584 20.4012 253.218 20.5187C253.985 20.6607 254.91 20.8819 256.435 20.5187C257.712 20.2183 258.459 19.8468 258.825 19.7731C259.124 19.7157 259.772 19.5983 260.766 19.6584C262.183 19.7458 263.128 19.4399 263.87 19.3471C264.972 19.2105 268.585 19.3853 270.105 19.9588C271.36 20.4313 272.73 20.9611 273.588 21.1168C274.192 21.226 274.624 21.5565 274.762 21.6767C275.164 22.0262 276.825 21.9033 277.819 21.4309C278.595 21.0649 279.195 20.7372 279.597 20.2947C280.115 19.7239 281.909 19.3525 282.992 19.2624C284.074 19.1723 285.248 18.7189 285.963 18.5687C286.821 18.3857 288.989 17.9924 289.737 17.845C290.382 17.4271 291.625 17.255 292.378 17.1595C293.259 16.1981 294.51 16.179 294.79 15.4826C295.097 14.7179 295.64 14.5923 296.398 13.3878C297.841 12.7925 298.519 12.1507 299.225 11.6837C299.923 11.2221 301.214 11.8939 301.56 12.3719C301.92 12.8662 303.221 13.4507 304.401 13.7374C305.48 13.9996 306.206 14.7397 306.843 15.529C307.756 16.6597 308.205 17.6401 309.578 18.0525C310.365 18.2901 310.763 19.1368 311.004 19.175C311.151 19.1996 311.575 19.7294 312.466 19.9069C313.405 20.0899 314.105 20.658 314.814 20.5078C315.609 20.3384 316.827 21.5647 317.965 21.7641C318.569 22.7691 318.627 23.2361 319.33 23.7687C320.108 24.3613 319.139 24.4924 320.255 25.2844C321.487 26.1611 323.58 25.9016 323.979 26.0682C325.286 26.6226 325.488 27.2481 325.602 27.442"
                  stroke="#8DC996"
                  stroke-width="0.273107"
                  stroke-miterlimit="10"
                />
                <path
                  d="M180.339 27.4447C180.339 27.4447 183.155 27.2754 183.382 27.0487C183.609 26.822 189.033 26.3741 189.581 26.7783C190.13 27.1825 192.954 27.1443 193.821 27.0296C194.687 26.9149 199.289 27.4447 199.289 27.4447H203.891C203.891 27.4447 207.629 27.147 207.992 27.0296C208.354 26.9122 224.184 27.2317 226.875 26.6145C229.567 25.9973 238.909 23.0668 245.28 26C251.651 28.9332 258.305 25.4401 258.305 25.4401C258.305 25.4401 269.774 23.3672 272.886 26.0792C276.001 28.7911 283.928 24.6836 283.928 24.6836C283.928 24.6836 286.475 24.4842 287.467 24.6836C288.458 24.883 293.697 22.7882 294.547 21.532C295.397 20.2757 299.077 18.0416 299.644 18.7381C300.212 19.4345 304.033 19.7158 304.883 21.1114C305.733 22.5069 306.583 24.3231 307.998 24.741C309.413 25.1588 315.925 25.7187 316.352 26.2758C316.778 26.833 318.758 26.2294 319.467 27.4393"
                  stroke="#8DC996"
                  stroke-width="0.273107"
                  stroke-miterlimit="10"
                />
                <path
                  d="M301.307 3.87305C301.274 3.87305 301.247 3.88397 301.224 3.90582C300.917 4.20897 300.712 4.61317 298.253 5.17031C297.024 7.13941 296.819 6.88815 297.126 7.885C297.434 8.88184 295.795 8.50222 294.873 10.119C294.463 9.91691 292.926 10.018 292.004 10.9274C291.082 11.8369 285.86 13.0495 284.631 12.6453C283.401 12.2411 281.045 12.9484 281.045 13.7568C281.045 14.5652 280.43 14.9694 279.611 15.7778C278.791 16.5862 276.642 17.1925 276.642 17.1925C276.642 17.1925 276.13 16.6872 275.311 16.6872C274.491 16.6872 272.852 15.9799 271.622 15.0705C270.393 14.161 265.271 13.6558 264.861 13.7568C264.451 13.8579 263.529 14.4642 261.483 14.06C259.434 13.6558 258.922 14.2621 256.668 14.6663C254.414 15.0705 253.594 14.3631 253.184 13.9589C252.775 13.5547 251.648 13.1505 250.009 13.2516C248.372 13.3526 246.323 10.4222 246.323 10.4222C246.323 10.4222 243.557 10.3211 241.611 9.51272C239.664 8.70432 239.152 9.71482 237.718 9.51272C236.283 9.31062 236.591 8.50222 235.466 8.2018C234.339 7.89865 231.471 7.49445 230.139 8.70432C228.807 9.91691 226.246 10.5232 226.246 10.5232C226.246 10.5232 223.173 10.3211 222.865 12.14C222.558 13.9589 219.487 15.8789 218.77 16.3841C218.053 16.8893 216.926 19.2135 215.697 19.5166C214.467 19.8198 213.033 21.9391 212.316 23.1517C211.599 24.3643 208.426 25.779 207.606 25.2737C206.786 24.7685 206.274 26.2842 204.328 26.4863C202.381 26.6884 201.152 25.6779 199.513 25.5769C197.873 25.4758 196.029 24.1622 194.495 23.9601C192.959 23.758 191.422 22.1412 189.68 21.9391C187.939 21.7397 188.041 22.0402 187.836 22.671C187.631 23.2992 185.377 23.5559 183.841 23.2528C182.304 22.9496 181.385 23.6569 180.565 24.8695C179.746 26.0821 175.853 27.3685 175.853 27.3685"
                  stroke="#8DC996"
                  stroke-width="0.819322"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M301.308 3.87299C304.227 2.69589 305.885 5.39146 306.81 5.99776C307.743 6.61225 308.363 7.37969 311.321 7.53263C314.275 7.68557 314.12 8.75888 315.676 9.98786C317.229 11.2141 318.318 9.22043 320.652 11.2141C322.986 13.2078 323.606 12.749 325.785 12.4404C327.962 12.1345 332.007 12.596 333.405 13.7595C334.806 14.9256 333.873 15.3572 336.204 15.6193C338.539 15.8843 340.87 16.7363 341.961 17.9653C343.049 19.1916 341.961 20.2649 345.07 20.5735C348.18 20.8794 348.648 21.6468 350.046 22.8731C351.447 24.1021 351.757 24.4079 354.557 24.4079C357.356 24.4079 360 27.1117 360 27.1117L331.747 27.3684C331.747 27.3684 331.542 26.6392 329.495 25.3256C329.495 25.3256 326.32 25.6287 324.168 24.214C322.017 22.7993 324.476 22.5972 323.553 21.5867C322.631 20.5762 323.041 19.7678 322.427 17.8479C320.787 17.5447 319.046 15.2206 318.124 15.6193C317.204 16.0181 316.282 14.9202 314.848 14.617C313.414 14.3139 312.902 13.3034 312.902 13.3034C312.902 13.3034 312.492 11.6866 311.16 11.2824C309.828 10.8782 309.726 10.7771 308.804 9.8677C307.882 8.95825 307.472 7.8467 306.345 7.6446C305.218 7.4425 303.889 6.53305 303.479 5.92676C303.097 5.36142 301.74 3.83475 301.308 3.87299Z"
                  stroke="#8DC996"
                  stroke-width="0.819322"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M301.226 3.90561C301.253 3.89476 301.281 3.88119 301.308 3.87305"
                  stroke="#8DC996"
                  stroke-width="0.819322"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_3_1240">
                  <rect width="360" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {/* login commont */}
          <div className="d-flex w-100 col flex-column ">
            <div
              className={`w-100 d-flex flex-row mb-lg-4 ${styles.login_commont_star}`}
            >
              <svg
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1579 0L21.525 9.15073L31.9473 11.392L24.8421 19.2887L25.9163 29.8245L16.1579 25.5542L6.39945 29.8245L7.47367 19.2887L0.368408 11.392L10.7907 9.15073L16.1579 0Z"
                  fill="#F2F2F2"
                />
              </svg>
              <svg
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1579 0L21.525 9.15073L31.9473 11.392L24.8421 19.2887L25.9163 29.8245L16.1579 25.5542L6.39945 29.8245L7.47367 19.2887L0.368408 11.392L10.7907 9.15073L16.1579 0Z"
                  fill="#F2F2F2"
                />
              </svg>
              <svg
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1579 0L21.525 9.15073L31.9473 11.392L24.8421 19.2887L25.9163 29.8245L16.1579 25.5542L6.39945 29.8245L7.47367 19.2887L0.368408 11.392L10.7907 9.15073L16.1579 0Z"
                  fill="#F2F2F2"
                />
              </svg>
              <svg
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1579 0L21.525 9.15073L31.9473 11.392L24.8421 19.2887L25.9163 29.8245L16.1579 25.5542L6.39945 29.8245L7.47367 19.2887L0.368408 11.392L10.7907 9.15073L16.1579 0Z"
                  fill="#F2F2F2"
                />
              </svg>
              <svg
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1579 0L21.525 9.15073L31.9473 11.392L24.8421 19.2887L25.9163 29.8245L16.1579 25.5542L6.39945 29.8245L7.47367 19.2887L0.368408 11.392L10.7907 9.15073L16.1579 0Z"
                  fill="#F2F2F2"
                />
              </svg>
            </div>
            <textarea
              className={`d-none d-lg-flex col-lg-10 align-self-center ${styles.login_commont}`}
              name="login_commont"
              id="login_commont"
              cols="30"
              rows="10"
            ></textarea>
            <textarea
              className={`d-flex d-lg-none ${styles.login_commont}`}
              name="login_commont"
              id="login_commont"
              cols="30"
              rows="10"
            ></textarea>
            <button className={` d-lg-none ${styles.enter_commont_phone}`}>
              發布評論
            </button>
            <button
              className={`d-none d-lg-flex col-lg-10 align-self-center ${styles.enter_commont}`}
            >
              發布評論
            </button>
          </div>
          <section id="commont_card">
            {/*commont card */}
            <div className="d-flex flex-column flex-lg-row ">
              {/* left-card */}
              <div
                className={`col col-lg-3 d-flex flex-lg-row align-content-center mb-3 ${styles.left_card}`}
              >
                <div
                  className={`col-lg-2  me-3 col-4 rounded-3 ${styles.rate_point}`}
                >
                  <h1 className={`mb-0 lh-lg ${styles.point_h1}`}>4.5</h1>
                </div>

                <div className="col-8 d-flex flex-column ">
                  <div className="col p-2">
                    <svg
                      width="32"
                      height="29"
                      viewBox="0 0 32 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8824 0L21.1012 8.89775L31.2353 11.077L24.3265 18.7554L25.371 29L15.8824 24.8477L6.39376 29L7.43829 18.7554L0.529465 11.077L10.6637 8.89775L15.8824 0Z"
                        fill="#FFCB45"
                      />
                    </svg>
                    <svg
                      width="32"
                      height="29"
                      viewBox="0 0 32 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8824 0L21.1012 8.89775L31.2353 11.077L24.3265 18.7554L25.371 29L15.8824 24.8477L6.39376 29L7.43829 18.7554L0.529465 11.077L10.6637 8.89775L15.8824 0Z"
                        fill="#FFCB45"
                      />
                    </svg>
                    <svg
                      width="32"
                      height="29"
                      viewBox="0 0 32 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8824 0L21.1012 8.89775L31.2353 11.077L24.3265 18.7554L25.371 29L15.8824 24.8477L6.39376 29L7.43829 18.7554L0.529465 11.077L10.6637 8.89775L15.8824 0Z"
                        fill="#FFCB45"
                      />
                    </svg>
                    <svg
                      width="32"
                      height="29"
                      viewBox="0 0 32 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8824 0L21.1012 8.89775L31.2353 11.077L24.3265 18.7554L25.371 29L15.8824 24.8477L6.39376 29L7.43829 18.7554L0.529465 11.077L10.6637 8.89775L15.8824 0Z"
                        fill="#FFCB45"
                      />
                    </svg>
                    <svg
                      width="32"
                      height="29"
                      viewBox="0 0 32 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8824 0L21.1012 8.89775L31.2353 11.077L24.3265 18.7554L25.371 29L15.8824 24.8477L6.39376 29L7.43829 18.7554L0.529465 11.077L10.6637 8.89775L15.8824 0Z"
                        fill="#FFCB45"
                      />
                    </svg>
                  </div>

                  <div className="col ps-2">
                    <p className="mb-0">1000個人已評論</p>
                  </div>
                </div>
                <div className="col"></div>
              </div>

              {/* right-card */}
              <div className="col d-flex flex-column">
                {/* right-card * n */}
                <div
                  className={`col d-flex flex-row pb-3 mb-5 ${styles.card_b_b}`}
                >
                  {/* head picture (left col-1) */}
                  <div className={`col-1 ${styles.rounded_circle}`}></div>
                  {/* --commont content (right col) */}
                  <div className="col d-flex flex-column ">
                    {/* level1 */}
                    <div className="col d-flex flex-row mb-3">
                      <h5 className="mb-0 me-3">Lorem</h5>
                      <div className="">
                        <p className={`mb-0 ${styles.member_ca}`}>超級嚮導</p>
                      </div>
                    </div>
                    {/* level2 */}
                    <div className="col d-flex flex-row mb-3">
                      <div
                        className={`col-5 col-lg-2 d-flex flex-row ${styles.star}`}
                      >
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
                      </div>
                      <div className="col-2">
                        <p className="mb-0">2022/01/01</p>
                      </div>
                      <div className="col"></div>
                    </div>
                    {/* level3 內文與圖片 */}
                    <div className="col d-flex flex-column flex-lg-row">
                      <div className="col col-lg-7 ">
                        {/* FIXME:若評論為中文字則左右對齊 */}
                        <p className={`${styles.commont_p}`}>
                          內容文字，內容文字，內容文字，內容文字，內容文字，內容文字，內容文字，內容文字，內容文字，內容文字，內容文字，內容文字，內容文字，內容文字，內容文字，內容文字，內容文字，內容文字，內容文字，內容文字，內容文字，內容文字，內容文字，內容文字，內容文字，內容文字，內容文字。
                        </p>
                      </div>
                      {/* imges */}
                      <div className="col col-lg-5 d-flex flex-row">
                        <img
                          className={`me-1 ${styles.img_cover}`}
                          src="./imgs/Davis/3-1.jpg"
                          alt=""
                        />
                        <img
                          className={`me-1 ${styles.img_cover}`}
                          src="./imgs/Davis/4-1.jpg"
                          alt=""
                        />
                        {/* FIXME: background url 寫在css 要如何置換圖片 */}
                        {/* <img className="img_cover me-1 " src="./imgs/5-1.jpg" alt=""> */}
                        <div
                          className={`d-flex justify-content-around ${styles.img_wrap}`}
                        >
                          <h4 className="mb-0 lh-lg fw-bold align-self-center ">
                            +2張
                          </h4>
                        </div>
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
                        <span
                          className={`page-link fw-bold ${styles.a_decoration}`}
                        >
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
                      <div>
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
                      </div>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </section>
          {/* phone_bottom */}
          <div className={`d-flex d-lg-none ${styles.phone_bottom}`}>
            <div className={`w-100 mb-2 ${styles.shop_btn_two}`}>
              <div className=" d-flex flex-row align-items-center ">
                <div className={`col-2 col-lg-1 ${styles.batch}`}>
                  <h5 className={`ps-3 mb-0  lh-lg ${styles.btn_font}`}>
                    梯次
                  </h5>
                </div>
                <div className="col d-flex justify-content-center">
                  <h6 className="mb-0">2023/01/01 - 2023/01/03</h6>
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
            <div className="w-100 d-flex flex-row ">
              <div className={`col w-100 d-flex flex-row ${styles.btn_group}`}>
                <div
                  className={`col-4 d-flex flex-row align-items-center ${styles.btn_one_mobile}`}
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
                  <h5 className={`col ${styles.h5_count}`}>1</h5>
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
                <button
                  className={`col d-flex flex-row justify-content-center ${styles.shop_btn_mobile}`}
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
      ))}
    </>
  )
}
