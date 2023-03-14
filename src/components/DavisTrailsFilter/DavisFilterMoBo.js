import React from 'react'
import styles from '../../styles/DavisTrailsFilter.module.css'
import { Link } from 'react-router-dom'

function DavisFilterMoBo() {
  return (
    <>
      {/* FIXME: phone_card*n */}
      <div className={`d-flex flex-column ${styles.phone_card}`}>
        <div className={`${styles.text_re}`}>
          <div className={`${styles.trails_img_wrap}`}>
            <img
              className={`w-100 ${styles.img_style}`}
              src="./imgs/Davis/5-1.jpg"
              alt=""
            />
          </div>
          <div className={`${styles.img_text}`}>
            <p className={`${styles.rate}`}>4.5</p>
            <div className={`d-flex flex-row ${styles.p_wrap}`}>
              <p className={`${styles.difficulty}`}>難度</p>
              <p className={`${styles.difficulty_en}`}>EASY</p>
            </div>
          </div>
        </div>
        <div className="w-100 d-flex flex-row justify-content-between">
          <div>
            <h6 className={`mb-0 ${styles.phone_h6_sub_t}`}>
              草嶺古道｜探索新北一日遊
            </h6>
            <p className={`mb-0 ${styles.phone_p_tag}`}>新北市雙溪區</p>
          </div>
          <div>
            <p className={`mb-0 ${styles.phone_p_ntd}`}>NTD</p>
            <h6 className={`mb-0 ${styles.phone_h6_price}`}>1300</h6>
          </div>
        </div>
      </div>

      {/* mobile_phone bottom > pagination */}
      <div
        className={`page-bar col d-flex align-self-center ${styles.details_pagination}`}
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
    </>
  )
}

export default DavisFilterMoBo
