import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import TrailsDetailTable from '../components/TrailsDetailTable'
import { TRAILS_DATA } from '../connections/api-config'
import { useLocation } from 'react-router-dom'
import '../html/css/trails_detail.css'

export default function TrailsDetail() {
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
      <div className="container">
        {console.log('----', data.rows)}
        <TrailsDetailTable rows={data.rows} />
      </div>
      <div class="container_all d-flex flex-column ">
        <div className="col ">
          <nav className="bread" aria-label="breadcrumb">
            <ol className="breadcrumb ">
              <li className="breadcrumb-item  ">
                <a className="text-decoration-none li_font" href="#">
                  臺北市
                </a>
              </li>
              <li className="breadcrumb-item li_font" aria-current="page">
                北投區
              </li>
              <li
                className="breadcrumb-item li_font underline"
                aria-current="page"
              >
                七星山主峰、東峰步道
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <section>
        <div class=" d-lg-flex flex-lg-row col mb-5  d-sm-flex flex-sm-column">
          <div class="col flex-column me-5 d-none d-lg-flex">
            <div class="">
              <img class="img_cover_one" src="./imgs/3-1.jpg" alt="" />
            </div>
            <div class="d-flex flex-row  img_wrap_three">
              <img class="img_cover_three " src="./imgs/3-1.jpg" alt="" />
              <img class="img_cover_three " src="./imgs/3-1.jpg" alt="" />
              <img class="img_cover_three " src="./imgs/3-1.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
