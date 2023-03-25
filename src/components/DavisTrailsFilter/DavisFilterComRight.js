import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from '../../styles/DavisTrailsFilter.module.css'
import DavisComFilterCardFilter from './DavisComFilterCardFilter'
import { useNavigate } from 'react-router-dom'

function DavisFilterComRight(props) {
  const {
    data,
    filterByKeyword,
    keywordpr,
    startdatepr,
    enddatepr,
    maxpeplepr,
  } = props

  // console.log('filterFromBatch', filterFromBatch(rows_data))

  // console.log(maxpeplepr)

  const navigate = useNavigate()
  return (
    <>
      {/* {console.log(keywordpr)} */}
      <div className={` d-flex flex-column ${styles.right_card}`}>
        <div className={`${styles.sub_title}`}>
          <div className="d-flex p-0">
            <span className=" d-none d-lg-flex">
              <svg
                className={`${styles.Vector_long}`}
                width="378px"
                height="20"
                viewBox="0 0 380 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 18.5L9.75694 14.8245H17.2373L24.0147 18.5L34.6363 14.8245L49.6135 11.149H55.9002L60.6834 14.8245L70.7781 11.149L81.849 3.65024L88.1346 1.5L99.8764 7.93268L109.574 12.5276L119.274 14.8245L129.394 10.0006L137.837 7.93268L151.987 12.0673L190.167 18.5L198.924 14.8245H206.404L213.181 18.5L223.803 14.8245L238.78 11.149H245.067L249.85 14.8245L259.945 11.149L271.016 3.65024L277.301 1.5L289.043 7.93268L298.741 12.5276L308.44 14.8245L318.561 10.0006L327.004 7.93268L341.154 12.0673L379.333 18.5"
                  stroke="#6CBA7C"
                  strokeMiterlimit="10"
                  strokeDasharray="4 4"
                />
              </svg>
            </span>
            {/* FIXME: */}
            <div className="">
              <h5 className={`${styles.h5_sub_title_search}`}>
                「{keywordpr}」的搜尋結果
              </h5>
            </div>

            <span className=" d-none d-lg-flex">
              <svg
                className={`${styles.Vector_long}`}
                width="378px"
                height="20"
                viewBox="0 0 380 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 18.5L9.75694 14.8245H17.2373L24.0147 18.5L34.6363 14.8245L49.6135 11.149H55.9002L60.6834 14.8245L70.7781 11.149L81.849 3.65024L88.1346 1.5L99.8764 7.93268L109.574 12.5276L119.274 14.8245L129.394 10.0006L137.837 7.93268L151.987 12.0673L190.167 18.5L198.924 14.8245H206.404L213.181 18.5L223.803 14.8245L238.78 11.149H245.067L249.85 14.8245L259.945 11.149L271.016 3.65024L277.301 1.5L289.043 7.93268L298.741 12.5276L308.44 14.8245L318.561 10.0006L327.004 7.93268L341.154 12.0673L379.333 18.5"
                  stroke="#6CBA7C"
                  strokeMiterlimit="10"
                  strokeDasharray="4 4"
                />
              </svg>
            </span>
          </div>
        </div>
        {/* filter card */}
        {/* <DavisComFilterCard
          data={data}
          filterByKeyword={filterByKeyword}
          keywordpr={keywordpr}
          datepickpr={datepickpr}
        /> */}

        <DavisComFilterCardFilter
          data={data}
          filterByKeyword={filterByKeyword}
          keywordpr={keywordpr}
          startdatepr={startdatepr}
          enddatepr={enddatepr}
          maxpeplepr={maxpeplepr}
        />

        {/* pagination */}
        {/* <div
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
                  to={`/trails-filter?page=${data.page - 1}`}
                >
                  {' '}
                  <span aria-hidden="true">&laquo;</span>
                </Link>
              </li>
              <li className={`page-item ${styles.li_margin}`}>
                <Link
                  className={`page-link fw-bold ${styles.a_decoration}`}
                  aria-label="Previous"
                  to={`/trails-filter?page=${1}`}
                >
                  1
                </Link>
              </li>
              <li className={`page-item ${styles.li_margin}`}>
                <Link
                  className={`page-link fw-bold ${styles.a_decoration}`}
                  aria-label="Previous"
                  to={`/trails-filter?page=${data.page + 1}`}
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
                  to={`/trails-filter?page=${data.totalPages / 2}`}
                >
                  {data.totalPages / 2}
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
                  to={`/trails-filter?page=${data.totalPages - 1}`}
                >
                  {data.totalPages - 1}
                </Link>
              </li>
              <li className={`page-item ${styles.li_margin}`}>
                <Link
                  className={`page-link fw-bold ${styles.a_decoration}`}
                  aria-label="Previous"
                  to={`/trails-filter?page=${data.totalPages}`}
                >
                  {data.totalPages}
                </Link>
              </li>
              <li className={`page-item ${styles.li_margin}`}>
                <Link
                  className={`page-link ${styles.a_decoration}`}
                  aria-label="Next"
                  to={`/trails-filter?page=${data.page + 1}`}
                >
                  {' '}
                  <span aria-hidden="true">&raquo;</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div> */}
        {/* pagination */}
        {/* {[...Array(34)].map((v, i) => {
          const p = data.page - 5 + i
          if (p < 1 || p > data.totalPages) return null
          let myClass = 'page-item'
          if (p === data.page) {
            myClass = 'page-item active'
          }
          return (
            <li key={p}>
              <Link
                // to={`/trails-filter?page=${p}`}
                onClick={(e) => {
                  e.preventDefault()
                  navigate(`?page=${p}`)
                  console.log(p)
                }}
              >
                {p}
              </Link>
            </li>
          )
        })} */}
      </div>
    </>
  )
}

export default DavisFilterComRight
