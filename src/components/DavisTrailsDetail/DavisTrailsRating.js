import React, { useState, useEffect, useContext } from 'react'
import styles from '../../styles/DavisTrailsDetail.module.css'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { RATING_DATA } from '../../connections/api-config'
import axios from 'axios'

// comment api
import { SELECT_COMMENT } from '../../connections/api-config'

//login to commont
import AuthContext from '../../contexts/AuthContexts'
import { LoginContext } from '../../App'

function DavisTrailsRating(props) {
  const { data } = props
  const location = useLocation()
  const usp = new URLSearchParams(location.search)
  const [rating, setRating] = useState({
    // page: 0,
    rows: [],
    // perPage: 0,
    // totalPages: 0,
    // totalRows: 0,
  })

  const getListData = async (page = 1) => {
    const response = await axios.get(RATING_DATA, {
      params: {
        page,
      },
    })
    setRating(response.data)
    // console.log(rating.rows)
  }

  useEffect(() => {
    getListData(+usp.get('page'))
    return () => {
      console.log('unmount')
    }
  }, [])

  const filterFromBatch = (rows_data) => {
    if (!Array.isArray(rows_data)) {
      return []
    }
    return rows_data.slice(0, 1)
  }

  // 抓到這一頁的sid
  // console.log(filterFromBatch(data.rows)[0].trail_sid)

  let page_sid = filterFromBatch(data.rows)[0].trail_sid

  console.log(page_sid)

  const filterFromRating = (data) => {
    if (!Array.isArray(data)) {
      return []
    }
    return data.filter((v, i) => {
      return v.sid === page_sid
    })
  }

  // 抓comment資料
  const [comdata, setComdata] = useState({
    rows: [],
  })

  const getCommentData = async (sid) => {
    try {
      const response = await axios.get(SELECT_COMMENT, {
        params: {
          sid,
        },
      })
      setComdata(response.data)
    } catch (err) {}
  }

  useEffect(() => {
    console.log(comdata)
    getCommentData(page_sid)
  }, [page_sid])

  //login to commont
  const { myAuth } = useContext(AuthContext)
  const { showBox, setShowbox } = useContext(LoginContext)

  // avg rating point

  return (
    <>
      {/* login commont */}
      {/* FIXME:登錄評論 */}
      {/* <div className="d-flex w-100 col flex-column ">
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
          onClick={() => {
            if (myAuth.account) {
            } else {
              setShowbox(3)
            }
          }}
          className={`d-none d-lg-flex col-lg-10 align-self-center ${styles.enter_commont}`}
        >
          發布評論
        </button>
      </div> */}

      <section id="commont_card">
        {/*commont card */}
        <div className="d-flex flex-column flex-lg-row ">
          {/* left-card */}
          {filterFromRating(rating.rows).map((point) => (
            <div
              className={`col col-lg-3 d-flex flex-lg-row align-content-center mb-3 ${styles.left_card}`}
            >
              <div
                className={`d-flex justify-content-center align-items-center ${styles['average-rate']} ${styles['me-20']}`}
              >
                <p className="mb-0">
                  {point.avg_score ? point.avg_score.slice(0, 3) : ''}
                </p>
              </div>

              <div className="">
                <div className={`${styles['mb-8']}`}>
                  <img
                    className={`${styles['star-mark']} ${styles['me-10']}`}
                    src={
                      point.avg_score
                        ? `images/kexin/svg/BigStars${point.avg_score.slice(
                            0,
                            3
                          )}.svg`
                        : ''
                    }
                    alt=""
                  />
                </div>
                <div className={`d-flex ${styles['total-comment']}`}>
                  <p className={`mb-0 ${styles['me-8']}`}>
                    {comdata.length ? comdata.length : ''}
                  </p>
                  <p className="mb-0">個人已評論</p>
                </div>
              </div>
              <div className="col"></div>
            </div>
          ))}

          {/* right-card */}
          <div className="col d-flex flex-column">
            {/* right-card * n */}
            {comdata.length
              ? comdata.map((comdata) => (
                  <div
                    className={`col d-flex flex-row pb-3 mb-5 ${styles.card_b_b}`}
                  >
                    {/* head picture (left col-1) */}
                    <div className={`col-1 ${styles.rounded_circle}`}></div>

                    <div className="col d-flex flex-column ">
                      {/* level1 */}
                      <div className="col d-flex flex-row mb-3">
                        <h5 className="mb-0 me-3">
                          {comdata.lastname}
                          {comdata.firstname}
                        </h5>
                        <div
                          className={`${styles['gradehashtag']}`}
                          style={
                            comdata.level === 1
                              ? { background: '#6cba7c' }
                              : comdata.level === 2
                              ? { background: '#add9b1' }
                              : { background: '#f7db97' }
                          }
                        >
                          <p className="mb-0">
                            {comdata.level === 1
                              ? '新手山友'
                              : comdata.level === 2
                              ? '初級嚮導'
                              : '超級嚮導'}
                          </p>
                        </div>
                      </div>
                      {/* level2 FIXME:星數 */}
                      <div className="col d-flex flex-row mb-3">
                        {/* <div
                          className={`col-5 col-lg-1 d-flex flex-row ${styles.star}`}
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
                              fill="#FFCB45"
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
                              fill="#FFCB45"
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
                              fill="#FFCB45"
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
                              fill="#FFCB45"
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
                              fill="#FFCB45"
                            />
                          </svg>
                        </div> */}
                        <img
                          className={`${styles['me-13']}`}
                          src={`images/kexin/svg/Stars${comdata.score}.svg`}
                          alt=""
                        />
                        <img
                          className={`${styles['me-13']}`}
                          src="images/kexin/svg/dot.svg"
                          alt=""
                        />
                        <div className="col-2">
                          <p className="mb-0 pb-1">
                            {comdata.rate_date.slice(0, 10)}
                          </p>
                        </div>
                        <div className="col"></div>
                      </div>
                      {/* level3 內文與圖片 */}
                      <div className="col d-flex flex-column flex-lg-row">
                        <div className="col col-lg-7 ">
                          <p className={`${styles.commont_p}`}>
                            {comdata.comment}
                          </p>
                        </div>
                        {/* imges */}
                        {/* <div className="col col-lg-5 d-flex flex-row">
                          <img
                            className={`me-1 ${styles.img_cover}`}
                            src={`/images/public_images/product_image/${
                              page_sid + 1
                            }-1.jpg`}
                            alt=""
                          />
                          <img
                            className={`me-1 ${styles.img_cover}`}
                            src={`/images/public_images/product_image/${
                              page_sid + 2
                            }-2.jpg`}
                            alt=""
                          />
                          <img
                            className={`me-1 ${styles.img_cover}`}
                            src={`/images/public_images/product_image/${
                              page_sid + 3
                            }-3.jpg`}
                            alt=""
                          />
                          <div
                            className={`d-flex justify-content-around ${styles.img_wrap}`}
                          >
                            <h4 className="mb-0 lh-lg fw-bold align-self-center ">
                              +2張
                            </h4>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                ))
              : ''}
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
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DavisTrailsRating
