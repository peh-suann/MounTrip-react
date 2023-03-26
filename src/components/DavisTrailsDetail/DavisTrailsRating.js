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
  }

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
      return v.trails_sid === page_sid
    })
  }

  useEffect(() => {
    getListData(+usp.get('page'))
    return () => {
      console.log('unmount')
    }
  }, [])

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
    // console.log(comdata)
    getCommentData(page_sid)
  }, [page_sid])

  //login to commont
  const { myAuth } = useContext(AuthContext)
  const { showBox, setShowbox } = useContext(LoginContext)

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
          <div
            className={`col col-lg-3 d-flex flex-lg-row align-content-center mb-3 ${styles.left_card}`}
          >
            <div
              className={`col-lg-2  me-3 col-4 rounded-3 ${styles.rate_point}`}
            >
              <h1 className={`mb-0 lh-lg ${styles.point_h1}`}>4.5</h1>
            </div>

            <div className="col-8 d-flex flex-column ">
              <div className="col d-flex flex-row p-2">
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
              {/* <div className="col ps-2">
                <p className="mb-0">1000個人已評論</p>
              </div> */}
            </div>
            <div className="col"></div>
          </div>

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
                        <div className="">
                          <p className={`mb-0 ${styles.member_ca}`}>超級嚮導</p>
                        </div>
                      </div>
                      {/* level2 */}
                      <div className="col d-flex flex-row mb-3">
                        <div
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
                        <div className="col col-lg-5 d-flex flex-row">
                          <img
                            className={`me-1 ${styles.img_cover}`}
                            src={`/images/public_images/product_image/${comdata.trails_sid}-1.jpg`}
                            alt=""
                          />
                          <img
                            className={`me-1 ${styles.img_cover}`}
                            src={`/images/public_images/product_image/${comdata.trails_sid}-2.jpg`}
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
