import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { TRAILS_DATA } from '../connections/api-config'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styles from '../styles/DavisTrailsDetail.module.css'

function DavisTrailsImgGroup() {
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
      {data.rows.map((r, i) => {
        return (
          <div className="col flex-column me-5 d-none d-lg-flex">
            <div className="">
              <img
                className={`${styles.img_cover_one}`}
                src={`/imgs/Davis/${r.sid}-1.jpg`}
                alt=""
              />
            </div>
            <div className={`d-flex flex-row ${styles.img_wrap_three}`}>
              <img
                className={`${styles.img_cover_three}`}
                src={`/imgs/Davis/${r.sid}-1.jpg`}
                alt=""
              />
              <img
                className={`${styles.img_cover_three}`}
                src={`/imgs/Davis/${r.sid}-2.jpg`}
                alt=""
              />
              <img
                className={`${styles.img_cover_three}`}
                src={`/imgs/Davis/${r.sid}-3.jpg`}
                alt=""
              />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default DavisTrailsImgGroup
