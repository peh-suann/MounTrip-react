// component
import React from 'react'
import { useEffect, useState } from 'react'
import DavisTrailsBatch from './DavisTrailsBatch'
import styles from '../../styles/DavisTrailsDetail.module.css'
import { useCart } from '../IanUseCart'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

// api
import { TRAILS_BATCH_DATA } from '../../connections/api-config'

function DavisTrailsShopGroup(props) {
  const { data, filterFromBatch, plusOne, setData } = props
  const [count, setCount] = useState(1)
  const { addItem } = useCart()
  const [detailCount, setDetailCount] = useState(0)

  const Rows = { ...data }
  console.log('Rows:', Rows.rows[0].trail_sid)
  // console.log('Rows:', Rows[1].trail_time)
  // const batch = Rows.rows[0].batch_start
  // console.log(batch)

  const [productName, setProductName] = useState('')
  const showModal = (name) => {
    setProductName('產品：' + name + '已成功加入購物車')
  }
  const navigate = useNavigate()

  // batch data
  const location = useLocation()
  const usp = new URLSearchParams(location.search)
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

  let page_sid = Rows.rows[0].trail_sid

  const filterBatch = (data) => {
    if (!Array.isArray(data)) {
      return []
    }
    return data.filter((v, i) => {
      return v.trail_sid === page_sid
    })
  }

  return (
    <>
      <div className="d-none d-lg-flex flex-column ">
        {/* Count */}
        <div
          className={`col d-flex flex-row justify-content-between ${styles.btn_one_margin}`}
        >
          <div
            className={`col  d-flex flex-row align-items-center me-2 ${styles.shop_btn_one}`}
          >
            <button
              onClick={() => {
                setCount(count - 1 || 1)
              }}
              className={`${styles.btn_style}`}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12.5H19"
                  stroke="#6CBA7C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <h3 className={`col mb-0 ${styles.count_style}`}>{count}人</h3>
            <button
              onClick={() => {
                setCount(count + 1)
              }}
              className={`${styles.btn_style}`}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5.5V19.5"
                  stroke="#6CBA7C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 12.5H19"
                  stroke="#6CBA7C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <button className={`${styles.btn_style}`}>
            <svg
              width="43"
              height="43"
              viewBox="0 0 43 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.34 14.11C29.8292 13.599 29.2228 13.1936 28.5554 12.9171C27.8879 12.6405 27.1725 12.4982 26.45 12.4982C25.7275 12.4982 25.0121 12.6405 24.3446 12.9171C23.6772 13.1936 23.0708 13.599 22.56 14.11L21.5 15.17L20.44 14.11C19.4083 13.0783 18.009 12.4987 16.55 12.4987C15.091 12.4987 13.6917 13.0783 12.66 14.11C11.6283 15.1417 11.0487 16.541 11.0487 18C11.0487 19.459 11.6283 20.8583 12.66 21.89L13.72 22.95L21.5 30.73L29.28 22.95L30.34 21.89C30.851 21.3792 31.2563 20.7728 31.5329 20.1053C31.8095 19.4379 31.9518 18.7225 31.9518 18C31.9518 17.2775 31.8095 16.5621 31.5329 15.8946C31.2563 15.2272 30.851 14.6208 30.34 14.11Z"
                stroke="#6CBA7C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 5C1 2.79086 2.79086 1 5 1H38C40.2091 1 42 2.79086 42 5V38C42 40.2091 40.2091 42 38 42H5C2.79086 42 1 40.2091 1 38V5Z"
                stroke="#6CBA7C"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
        {/* level2 */}

        <DavisTrailsBatch data={data} setDetailCount={setDetailCount} />

        {/* level3 shop_btn TODO:  */}

        <button
          onClick={() => {
            // const item = { ...Rows[detailCount], quantity: count }
            console.log('filterBatch(batch):', filterBatch(batch.rows))
            const item = {
              ...filterBatch(batch.rows)[detailCount],
              quantity: count,
            }

            addItem(item)
            // console.log('item:', item)
            showModal(filterBatch(batch.rows)[detailCount].trail_name)
          }}
          type="button"
          className={`col d-flex flex-row justify-content-center mb-2 ${styles.shop_btn_three}`}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <h5 className={`mb-0 align-self-center ${styles.btn_font}`}>
            加入購物車
          </h5>
        </button>

        <div
          className={`modal fade`}
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className={`modal-dialog ${styles.modal}`}>
            <div className={`modal-content ${styles.modalContent}`}>
              <div className={`modal-header`}>
                <h1 className={`modal-title fs-5`} id="exampleModalLabel">
                  已加入購物車
                </h1>
                <button
                  type="button"
                  className={`btn-close`}
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className={`modal-body`}>
                <h5>{productName}</h5>
              </div>
              <div className={`modal-footer ${styles.shopModal_footer}`}>
                <button
                  type="button"
                  className={`${styles.shopModal_btn_forth}`}
                  data-bs-dismiss="modal"
                >
                  <span className={`${styles.shopModal_continue}`}>
                    繼續購物
                  </span>
                </button>
                <button
                  onClick={() => {
                    navigate('/SC1')
                  }}
                  type="button"
                  className={`${styles.shopModal_btn_forth}`}
                  data-bs-dismiss="modal"
                >
                  <span className={`${styles.shopModal_continue}`}>
                    查看購物車
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DavisTrailsShopGroup
