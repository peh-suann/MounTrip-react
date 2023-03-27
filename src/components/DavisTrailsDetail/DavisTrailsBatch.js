import { useEffect, useState } from 'react'
// import { TRAILS_BATCH_DATA } from '../../connections/api-config'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import styles from '../../styles/DavisTrailsDetail.module.css'

// api
import { TRAILS_BATCH_DATA } from '../../connections/api-config'

function DavisTrailsBatch(props) {
  const { data, setDetailCount } = props
  const location = useLocation()
  const usp = new URLSearchParams(location.search)
  const [myCount, setMyCount] = useState(0)

  const [batch, setBatch] = useState({
    rows: [],
  })
  const getBatchData = async (page) => {
    const response = await axios.get(TRAILS_BATCH_DATA, {
      params: {
        page,
      },
    })
    console.log(response.data)
    setBatch(response.data)
  }

  useEffect(() => {
    getBatchData(+usp.get('page'))
    return () => {
      // console.log('unmount')
    }
  }, [])

  let page_sid = data.rows[0].trail_sid

  // console.log(page_sid)

  const filterFromBatch = (data) => {
    if (!Array.isArray(data)) {
      return []
    }
    return data.filter((v, i) => {
      return v.trail_sid === page_sid
    })
  }

  const [rotate, setRotate] = useState()
  const batch_data = batch.rows

  const rows_data = data.rows

  // console.log(rows_data)
  return (
    <>
      <div className={`col ${styles.shop_btn_two}`}>
        <div className=" d-flex flex-row align-items-center ">
          <div className={`col-2 col-lg-1 ${styles.batch}`}>
            <h5 className={`ps-3 mb-0 lh-lg ${styles.btn_font}`}>梯次</h5>
          </div>
          <div className="col d-flex justify-content-center">
            <h5 className={`d-flex flex-grow-3 mb-0 ${styles.batch_font}`}>
              <select
                // FIXME: 出現下拉選單時旋轉SVG，收合時回復
                className={`d-flex flex-grow-3 ${styles.select_btn}`}
                onClick={() => {
                  setRotate(!rotate)
                }}
                name=""
                id=""
                value={myCount}
                onChange={(e) => {
                  console.log('trailsBatch:', e.target.value)
                  setMyCount(e.target.value)
                  setDetailCount(e.target.value)
                }}
              >
                {filterFromBatch(batch_data).map((r, i) => {
                  return (
                    <option key={r.sid} id={i} value={i}>
                      {r.batch_start}-{r.batch_end}
                    </option>
                  )
                })}
              </select>
            </h5>
          </div>
          <button className={`${styles.btn_style}`}>
            <svg
              className={rotate ? `${styles.rotate_a}` : `${styles.not_rotate}`}
              // className={`${styles.rotate_a}`}
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.25 25L21.25 15L11.25 5"
                stroke="#6CBA7C"
                strokeWidth="3.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default DavisTrailsBatch
