import React, { useState, useEffect } from 'react'
import styles from '../../styles/DavisTrailsFilter.module.css'
import { addDays } from 'date-fns'
import format from 'date-fns/format'
// import { format } from 'date-fns'

function DavisFilterComLeft(props) {
  const {
    data,
    keywordpr,
    startdatepr,
    setKeywordpr,
    setStartdatepr,
    setEnddatepr,
    setMaxpeplepr,
  } = props

  const [keyword, setKeyword] = useState('')
  const [startdate, setStartdate] = useState(format(new Date(), 'yyyy-MM-dd'))
  const [enddate, setEnddate] = useState(new Date(2024, 12, 31))
  const [inputText, setInputText] = useState('')
  const [newstartdate, setNewstartdate] = useState(
    format(new Date(1), 'yyyy-MM-dd')
  )
  const [newenddate, setNewenddate] = useState(format(new Date(), 'yyyy-MM-dd'))

  const [peoplecount, setPeoplecount] = useState(2)

  const [newpeoplecount, setNewpeoplecount] = useState()

  useEffect(() => {
    setKeywordpr(keyword)
    setStartdatepr(startdate)
    setEnddatepr(enddate)
    setMaxpeplepr(peoplecount)
  }, [keyword, startdate, enddate, peoplecount])

  // const filterByKeyword = (data, setKeyword) => {
  //   return data.filter((v, i) => {
  //     return v.trail_name.includes(setKeyword)
  //   })
  // }

  return (
    <>
      <div className={`card-body d-flex flex-column ${styles['left_card']} `}>
        <h5 className={`${styles.h5_sub_title}`}>搜尋</h5>
        <div className={`d-flex flex-column ${styles.search}`}>
          <p className={`mb-0 ${styles.p_content}`}>關鍵字搜尋</p>
          <div className={`d-flex flex-row ${styles.input_with_icon}`}>
            <span className={` ${styles.icon_span_one}`}>
              <svg
                className={`${styles.icon_size}`}
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00004 17C13.4183 17 17.0001 13.4183 17.0001 9C17.0001 4.58172 13.4183 1 9.00004 1C4.58174 1 1 4.58172 1 9C1 13.4183 4.58174 17 9.00004 17Z"
                  stroke="#6CBA7C"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
                <path
                  d="M18.9999 18.9999L14.6499 14.6499"
                  stroke="#6CBA7C"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </span>
            <div className="col">
              <div className={`${styles.input_wrap}`}>
                <input
                  className={`${styles.input_style_first}`}
                  type="text"
                  placeholder={keywordpr}
                  value={inputText}
                  onChange={(e) => {
                    setInputText(e.target.value)

                    // 如果使用者清除所有輸入時要回復為原本列表
                    if (e.target.value === '') {
                      setKeyword('')
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setKeyword(inputText)
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`d-flex flex-column ${styles.search}`}>
          <p className={`mb-0 ${styles.p_content}`}>出發日期</p>
          <div className={`d-flex flex-row ${styles.input_with_icon}`}>
            <span className={`${styles.icon_span}`}>
              <svg
                className={`${styles.icon_size}`}
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2418 2.7832H3.75844C2.77353 2.7832 1.9751 3.58163 1.9751 4.56655V17.0499C1.9751 18.0349 2.77353 18.8333 3.75844 18.8333H16.2418C17.2268 18.8333 18.0252 18.0349 18.0252 17.0499V4.56655C18.0252 3.58163 17.2268 2.7832 16.2418 2.7832Z"
                  stroke="#6CBA7C"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
                <path
                  d="M13.5669 1V4.56668"
                  stroke="#6CBA7C"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M6.43311 1V4.56668"
                  stroke="#6CBA7C"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M1.9751 8.1333H18.0252"
                  stroke="#6CBA7C"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </span>
            <div className={`${styles.input_wrap}`}>
              <input
                onChange={(event) => {
                  const newDate = event.target.value
                  setNewstartdate(newDate)
                  console.log(event.target.value)
                }}
                className={`${styles.input_style}`}
                // FIXME:
                type="date"
                id="picker"
              />
              {console.log('before startdatepr:', startdatepr)}
              {/* {console.log(format(startdatepr, 'yyyy-MM-dd'))} */}
              {/* {console.log(startdate)} */}
            </div>
          </div>
        </div>

        <div className={`d-flex flex-column ${styles.enddate}`}>
          <p className={`mb-0 ${styles.p_content}`}>返程日期</p>
          <div className={`d-flex flex-row ${styles.input_with_icon}`}>
            <span className={`${styles.icon_span}`}>
              <svg
                className={`${styles.icon_size}`}
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2418 2.7832H3.75844C2.77353 2.7832 1.9751 3.58163 1.9751 4.56655V17.0499C1.9751 18.0349 2.77353 18.8333 3.75844 18.8333H16.2418C17.2268 18.8333 18.0252 18.0349 18.0252 17.0499V4.56655C18.0252 3.58163 17.2268 2.7832 16.2418 2.7832Z"
                  stroke="#6CBA7C"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
                <path
                  d="M13.5669 1V4.56668"
                  stroke="#6CBA7C"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M6.43311 1V4.56668"
                  stroke="#6CBA7C"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M1.9751 8.1333H18.0252"
                  stroke="#6CBA7C"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </span>
            <div className={`${styles.input_wrap}`}>
              <input
                onChange={(event) => {
                  const newDate = event.target.value
                  setNewenddate(newDate)
                }}
                className={`${styles.input_style}`}
                type="date"
                id="picker"
                pseudo="-webkit-calendar-picker-indicator"
              />
            </div>
          </div>
        </div>

        {/* <div className={`d-flex flex-column ${styles.search_count}`}>
          <p className={`mb-0 ${styles.p_content}`}>人數</p>
          <div className={`d-flex flex-row ${styles.input_with_icon}`}>
            <span className={`col ${styles.icon_span}`}>
              <svg
                className={`${styles.icon_size}`}
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8 18.0002V16.1113C17.8 15.1093 17.3821 14.1485 16.6382 13.44C15.8943 12.7315 14.8854 12.3335 13.8334 12.3335H5.90002C4.84799 12.3335 3.83905 12.7315 3.09516 13.44C2.35127 14.1485 1.93335 15.1093 1.93335 16.1113V18.0002"
                  stroke="#6CBA7C"
                  strokeWidth="1.78948"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.86682 8.55556C12.0575 8.55556 13.8335 6.86419 13.8335 4.77778C13.8335 2.69137 12.0575 1 9.86682 1C7.67608 1 5.90015 2.69137 5.90015 4.77778C5.90015 6.86419 7.67608 8.55556 9.86682 8.55556Z"
                  stroke="#6CBA7C"
                  strokeWidth="1.78948"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="col">
              <div className={`${styles.input_wrap}`}>
                <input
                  onChange={(event) => {
                    const nerCount = event.target.value
                    setNewpeoplecount(nerCount)
                  }}
                  className={`${styles.input_style}`}
                  type="number"
                />
              </div>
            </div>
          </div>
        </div> */}
        <button
          className={`${styles.btn_search}`}
          type="button"
          onClick={() => {
            setKeyword(inputText)
            setStartdate(newstartdate)
            setEnddate(newenddate)
            setPeoplecount(newpeoplecount)
          }}
        >
          搜尋
        </button>
      </div>
    </>
  )
}

export default DavisFilterComLeft
