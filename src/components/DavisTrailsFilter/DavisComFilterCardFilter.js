import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'

import styles from '../../styles/DavisTrailsFilter.module.css'
import KexinFavoriteBtnOff from '../KexinFavoriteBtnOff'

// API
import { FILTER_ALL_DATA } from '../../connections/api-config'

// 讀取收藏
import AuthContext from '../../contexts/AuthContexts'
import { USER_FAV } from '../../connections/api-config'

function DavisComFilterCardFilter(props) {
  const { filterByKeyword, keywordpr, startdatepr, enddatepr, maxpeplepr } =
    props

  const [alldata, setAlldata] = useState({
    rows: [],
  })

  const getListData = async (page = 1) => {
    const response = await axios.get(FILTER_ALL_DATA, {
      params: {
        page,
      },
    })
    // console.log(response.data)
    setAlldata(response.data)
  }

  // TODO:收藏按鈕

  const [collect, setCollect] = useState([])

  const toggleCollect = (data, trails_sid) => {
    return data.map((v, i) => {
      if (v.sid === trails_sid) return { ...v, becollect: !v.becollect }
      else return { ...v }
    })
  }
  //設定是否被收藏的初始值
  useEffect(() => {
    const modifiedData = alldata.rows.map((v) => ({ ...v, becollect: true }))
    setCollect(modifiedData)
    // console.log('modifiedData set effect')
  }, [alldata])

  const collectList = JSON.parse(localStorage.getItem('collectList')) || []
  if (collectList.length === 0) {
    localStorage.setItem('collectList', JSON.stringify(collectList))
  }

  function updateLocalStorage() {
    localStorage.setItem('collectList', JSON.stringify(collectList))
  }

  // 讀取收藏
  const { myAuth, logout } = useContext(AuthContext)
  const [fav, setFav] = useState([])
  const [liked, setLiked] = useState(false)

  const getFavorite = async (req, res) => {
    if (myAuth.account) {
      // console.log('登入狀態')
      const userString = localStorage.getItem('myAuth')
      const userData = JSON.parse(userString)
      const token = userData.token
      const mid = userData.accountId

      try {
        const res = await axios(USER_FAV, {
          headers: { Authorization: `Bearer ${token}`, sid: mid },
        })
        if (!res.data) return res.sendStatus(401)

        const currentFav = res.data
        setFav(currentFav)
      } catch (err) {
        console.log('coupon axios err')
        return []
      }
    } else {
      // console.log('未登入')
      setLiked(false)
    }
  }

  // 分頁
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 10
  const startIndex = (currentPage - 1) * perPage
  const endIndex = startIndex + perPage

  // 分頁dataSubset
  const dataSubset = (collect) => {
    if (!Array.isArray(collect)) {
      return []
    }
    return collect.slice(startIndex, endIndex)
  }

  function nextPage() {
    setCurrentPage(currentPage + 1)
  }

  function prePage() {
    setCurrentPage(currentPage - 1)
  }

  // 分頁，分割同樣trails_sid的資料
  // const oddRows = (data) => {
  //   if (!Array.isArray(data)) {
  //     return []
  //   }
  //   return data.filter((_, index) => index % 2 === 0)
  // }

  // getListData()
  useEffect(() => {
    // console.log('getListData useEffect--')
    getListData()
    return () => {
      // console.log('unmount AbList--')
    }
  }, [])

  useEffect(() => {
    // console.log(' setCurrentPage useEffect--')
    setCurrentPage(currentPage)
    getFavorite()
    return () => {
      // console.log('unmount AbList--')
    }
  }, [setCurrentPage])

  return (
    <>
      {/* {console.log(startdatepr)} */}
      {/* {data.rows.map((r) => ( */}
      {dataSubset(
        filterByKeyword(collect, keywordpr, startdatepr, enddatepr)
      ).map((r) => (
        <div className="col" key={r.sid}>
          {/* {console.log(
            dataSubset(
              filterByKeyword(collect, keywordpr, startdatepr, enddatepr)
            )
          )} */}
          {/* card*n  */}

          <div className={`${styles.trails_card}`}>
            <div className="row g-0 d-flex flex-row ">
              <div className={`col-4 ${styles.trails_img_wrap}`}>
                <Link
                  className={`${styles.link_style}`}
                  //後端要有 ${trails.sid} or ${batch.trail_sid}
                  to={`/trails-detail?page=${r.trail_sid}`}
                >
                  <img
                    src={`/images/public_images/product_image/${r.trail_sid}-1.jpg`}
                    className={`rounded-start ${styles.trails_img}`}
                    alt="..."
                  />
                </Link>
              </div>
              <div className="col ">
                <div className={`card-body ${styles.card_padding}`}>
                  <Link
                    className={`${styles.link_style}`}
                    to={`/trails-detail?page=${r.trail_sid}`}
                  >
                    <h5 className={`${styles.product_name}`}>{r.trail_name}</h5>
                  </Link>
                  <div className="mb-2">
                    <Link
                      className={`${styles.link_style}`}
                      to={`/trails-detail?page=${r.trail_sid}`}
                    >
                      <p
                        className={`mb-0 ${styles['overflow_p']} ${styles['p_line_clamp']} `}
                      >
                        {r.trail_describ}
                      </p>
                    </Link>
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
                      <p className={`mb-0 ${styles.geo_font}`}>
                        {r.geo_location_sid}
                        {r.geo_location_town_sid}
                      </p>
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
                      NTD {r.price}
                    </h3>
                  </div>
                </div>
              </div>
              {/* 收藏button FIXME: */}
              <div
                className={`col-1  d-flex justify-content-end align-items-start`}
              >
                <span className={`${styles.heart_btn_position}`}>
                  <KexinFavoriteBtnOff
                    trailSID={r.trail_sid}
                    liked={
                      fav &&
                      fav.filter((v, i) => {
                        return v.trails_sid === r.trail_sid
                      }).length > 0
                        ? true
                        : false
                    }
                  />
                </span>

                {console.log(r.trail_sid)}
                {/* <button
                  onClick={() => {
                    setCollect(toggleCollect(collect, r.sid))
                  }}
                  className={`${styles.heart_btn}`}
                >
                  {r.becollect ? (
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
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="50"
                      height="75"
                      viewBox="0 0 50 75"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.3882 29.6118C19.8775 29.1008 19.271 28.6955 18.6036 28.4189C17.9361 28.1423 17.2207 28 16.4982 28C15.7757 28 15.0603 28.1423 14.3929 28.4189C13.7254 28.6955 13.119 29.1008 12.6082 29.6118L11.5482 30.6718L10.4882 29.6118C9.45652 28.5801 8.05725 28.0005 6.59821 28.0005C5.13918 28.0005 3.73991 28.5801 2.70821 29.6118C1.67652 30.6435 1.09692 32.0428 1.09692 33.5018C1.09692 34.9609 1.67652 36.3601 2.70821 37.3918L3.76821 38.4518L11.5482 46.2318L19.3282 38.4518L20.3882 37.3918C20.8992 36.8811 21.3046 36.2746 21.5811 35.6072C21.8577 34.9397 22 34.2243 22 33.5018C22 32.7793 21.8577 32.0639 21.5811 31.3965C21.3046 30.729 20.8992 30.1226 20.3882 29.6118Z"
                        fill="#FF0000"
                        stroke="#6CBA7C"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button> */}
              </div>
            </div>
          </div>
        </div>
      ))}
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
                onClick={() => {
                  prePage(startIndex)
                }}
                className={`page-link ${styles.a_decoration}`}
                aria-label="Previous"
              >
                {' '}
                <span aria-hidden="true">&laquo;</span>
              </Link>
            </li>
            <li className={`page-item ${styles.li_margin}`}>
              <Link
                onClick={() => {
                  setCurrentPage(1)
                }}
                className={`page-link fw-bold ${styles.a_decoration}`}
                aria-label="Previous"
              >
                1
              </Link>
            </li>
            <li className={`page-item ${styles.li_margin}`}>
              <Link
                onClick={() => {
                  setCurrentPage(2)
                }}
                className={`page-link fw-bold ${styles.a_decoration}`}
                aria-label="Previous"
                // to={`/trails-filter?page=${data.page + 1}`}
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
                onClick={() => {
                  setCurrentPage(9)
                }}
                className={`page-link fw-bold ${styles.a_decoration}`}
                aria-label="Previous"
                // to={`/trails-filter?page=${data.totalPages - 1}`}
              >
                9
              </Link>
            </li>
            <li className={`page-item ${styles.li_margin}`}>
              <Link
                onClick={() => {
                  setCurrentPage(10)
                }}
                className={`page-link fw-bold ${styles.a_decoration}`}
                aria-label="Previous"
                // to={`/trails-filter?page=${data.totalPages}`}
              >
                10
              </Link>
            </li>
            <li className={`page-item ${styles.li_margin}`}>
              <Link
                onClick={() => {
                  nextPage(startIndex)
                }}
                className={`page-link ${styles.a_decoration}`}
                aria-label="Next"
              >
                {' '}
                <span aria-hidden="true">&raquo;</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default DavisComFilterCardFilter
