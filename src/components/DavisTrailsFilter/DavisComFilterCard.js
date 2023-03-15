import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../../styles/DavisTrailsFilter.module.css'

function DavisComFilterCard(props) {
  const { data, filterByKeyword } = props
  console.log('data', data)
  return (
    <>
      {/* {filterByKeyword(data.rows).map((r) => ( */}
      {data.rows.map((r) => (
        <div className="col">
          {/* card*n  */}
          <div className={`${styles.trails_card}`}>
            <div className="row g-0 d-flex flex-row ">
              <div className={`col-4 ${styles.trails_img_wrap}`}>
                <img
                  src={`/images/public_images/product_image/${r.sid}-2.jpg`}
                  className={`rounded-start ${styles.trails_img}`}
                  alt="..."
                />
              </div>
              <div className="col ">
                <div className={`card-body ${styles.card_padding}`}>
                  {/* TODO: */}
                  <h5 className={`${styles.product_name}`}>
                    <Link
                      className={`${styles.link_style}`}
                      //後端要有 ${trails.sid} or ${batch.trail_sid}
                      to={`/trails-detail?page=${r.sid}`}
                    >
                      {r.trail_name}
                    </Link>
                  </h5>
                  <div className="mb-2">
                    <p
                      className={`mb-0 ${styles['overflow_p']} ${styles['p_line_clamp']} `}
                    >
                      {r.trail_describ}
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
                      <p className="mb-0">
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default DavisComFilterCard
