import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/kexinIndexProductsDetail.module.css'
import { StatusContext, ProductContext } from '../pages/KexinIndex'
import { useCart } from './IanUseCart'
import { LoginContext } from '../App'
import AuthContext from '../contexts/AuthContexts'
import KexinFavoriteBtnOff from './KexinFavoriteBtnOff'

function KexinFixedBox(props) {
  const { el, liked } = props
  // console.log(liked)
  const { cart, setCart } =
    useContext(StatusContext)
  const { myProduct, setMyProduct } = useContext(ProductContext)
  const [chooseBatch, setChooseBatch] = useState(0)
  const { myAuth, logout } = useContext(AuthContext)
  const { showBox, setShowbox,mapInteraction, setMapInteraction } = useContext(LoginContext)

  // 購物車
  const { addItem } = useCart()
  const [count, setCount] = useState(1)
  const [detailCount, setDetailCount] = useState(0)

  const Rows = {
    batch_end: '2023-03-29',
    batch_max: 10,
    batch_min: 2,
    batch_sold: 0,
    batch_start: '2023-03-29',
    batch_switch: 1,
    coupon_status: 1,
    difficulty_describ: '初階行程',
    difficulty_list_sid: 1,
    difficulty_short: myProduct.difficulty_short,
    geo_location_sid: myProduct.geo_location_sid,
    geo_location_town_sid: myProduct.geo_location_town_sid,
    price: myProduct.price,
    season_coupon: 1,
    sid: 1, // batch sid
    trail_describ: myProduct.trail_describ,
    trail_gpx: myProduct.trail_gpx,
    trail_height: myProduct.trail_height,
    trail_img: myProduct.trail_img,
    trail_length: myProduct.trail_length,
    trail_name: myProduct.trail_name,
    trail_sid: myProduct.sid,
    trail_time: myProduct.trail_time,
    trails_display: 0,
  }
  // // console.log('Rows:', Rows)
  // const batch = Rows.rows[0].batch_start
  // // const handleChange(event) {
  // //   setChooseBatch(event);
  // // }

  return (
    <>
      <div
        id={`${styles['map-shopping-choice']}`}
        className="d-flex flex-column"
        style={mapInteraction === 2 ? { right: '0' } : { right: '-630px' }}
      >
        <div className="d-flex justify-content-between">
          <div
            className={`${styles['w-90']} d-flex align-items-center justify-content-between`}
          >
            <button
              className={`${styles['minus']} btn`}
              onClick={() => {
                setCount(count - 1 || 1)
              }}
            >
              <img src="images/kexin/svg/minus.svg" alt="" />
            </button>
            <button className={`${styles['w-80']} btn ${styles['number']}`}>
              {count}
            </button>
            <button
              className={`${styles['plus']} btn`}
              onClick={() => {
                setCount(count + 1)
              }}
            >
              <img src="images/kexin/svg/plus.svg" alt="" />
            </button>
          </div>
          <button className={`${styles['like']} btn`}
            onClick={() => {
            if (myAuth.account) {
            } else {
              setShowbox(3)
            }
          }}
          >
            <KexinFavoriteBtnOff trailSID={myProduct.sid} liked={liked} />
          </button>
        </div>
        <div className="d-flex align-items-center">
          <div className={`${styles['w-15']} ${styles['dropdown-title']}`}>
            梯次
          </div>
          <div
            className={`${styles['w-85']} ${styles['dropdown']} ${styles['dropdown-wrap']}`}
          >
            <button
              className="btn w-100 h-100"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="d-flex justify-content-between align-items-center">
                <select
                  onChange={(e) => {
                    setDetailCount(e.target.value)
                    Rows.batch_start = el[detailCount].batch_start
                    Rows.end = el[detailCount].end
                    Rows.sid = el[detailCount].batch_sid
                  }}
                >
                  {el.length
                    ? el.map((v, i) => (
                        <option key={i} value={i}>
                          {v.trail_time > 24
                            ? `${v.batch_start.slice(
                                0,
                                10
                              )} - ${v.batch_end.slice(0, 10)}`
                            : `${v.batch_start.slice(0, 10)}`}
                        </option>
                      ))
                    : ''}
                </select>
              </div>
            </button>
          </div>
        </div>
        {el.length ? (
          <Link to={`/trails-detail?page=${el[0].sid}`}>
            <button className={`${styles['btn-white']} w-100 btn `}>
              <div className="d-flex justify-content-center align-items-center">
                <span className="mb-0">查看更多</span>
                <img
                  id={styles['chevron-down-type']}
                  className={styles['chevron-down-type']}
                  src="images/kexin/svg/chevron-down-right.svg"
                  alt=""
                />
              </div>
            </button>
          </Link>
        ) : (
          ''
        )}

        <button
          // className={`${styles['btn-green']} w-100 btn `}
          onClick={() => {
            if (myAuth.account) {
              setCart(1)

              const item = { ...Rows, quantity: count }
              addItem(item)
              console.log(detailCount)
            } else {
              setShowbox(3)
            }
          }}
          type="button"
          className={`${styles['btn-green']} w-100 btn col d-flex flex-row justify-content-center mb-2 ${styles.shop_btn_three}`}
        >
          <div className="d-flex justify-content-center align-items-center">
            <span className={`${styles['mtyellow4']} mb-0 `}>加入購物車</span>
            <img
              id={styles['chevron-down-type']}
              className={styles['chevron-down-type']}
              src="images/kexin/svg/chevron-right-yellow4.svg"
              alt=""
            />
          </div>
        </button>
      </div>
    </>
  )
}

export default KexinFixedBox
