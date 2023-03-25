import { useContext, useState, useEffect } from 'react'
import axios from 'axios'

// component
import styles from '../styles/kexinIndexProductsDetail.module.css'
import { StatusContext, ProductContext } from '../pages/KexinIndex'
import { LoginContext } from '../App'
import KexinComment from './KexinComment'
import KexinFixedBox from './KexinFixedBox'
import AuthContext from '../contexts/AuthContexts'
import { SELECT_COMMENT, SELECT_BATCH } from '../connections/api-config'
import { USER_FAV } from '../connections/api-config'

function KexinIndexProductsDetail() {
  const { mapInteraction, setMapInteraction } = useContext(LoginContext)
  const { myProduct, setMyProduct } = useContext(ProductContext)
  const { myAuth, logout } = useContext(AuthContext)
  const [fav, setFav] = useState([])
  const [liked, setLiked] = useState(false)
  // console.log('myProduct', myProduct)

  // 抓comment資料
  const [data, setData] = useState({
    rows: [],
  })

  const getCommentData = async (sid) => {
    try {
      const response = await axios.get(SELECT_COMMENT, {
        params: {
          sid,
        },
      })
      setData(response.data)
    } catch (err) {}
  }

  console.log(data)

  useEffect(() => {
    getCommentData(myProduct.sid)
  }, [myProduct.sid])

  // console.log('data',data.length)

  // 抓batch資料
  const [batch, setBatch] = useState({
    rows: [],
  })

  const getBatchData = async (sid) => {
    try {
      const response = await axios.get(SELECT_BATCH, {
        params: {
          sid,
        },
      })
      setBatch(response.data)
    } catch (err) {}
  }

  useEffect(() => {
    getBatchData(myProduct.sid)
  }, [myProduct.sid])



  // 抓favorite資料

  const getFavorite = async (req, res) => {
    if (myAuth.account) {
      // console.log('登入狀態')
      const userString = localStorage.getItem('myAuth')
      const userData = JSON.parse(userString)
      const token = userData.token
      const mid = userData.accountId

      try {
        const res = await axios(USER_FAV, {
          headers: { Authorization: `Bearer ${token}`, sid: mid },
        })
        if (!res.data) return res.sendStatus(401)

        const currentFav = res.data
        setFav(currentFav)
      } catch (err) {
        console.log('coupon axios err')
        return []
      }
    } else {
      // console.log('未登入')
      setLiked(false)
    }
  }

  useEffect(() => {
    getFavorite()
  }, [myProduct.sid])

  // console.log(fav)
  // console.log(
  //   fav.filter((el, i) => {
  //     return el.trails_sid === myProduct.sid
  //   }).length
  // )

  // setLiked(like)

  // console.log(liked)

  return (
    <>
      <div
        className={`${styles['map-product-detail']} d-flex flex-column col`}
        style={mapInteraction === 2 ? { right: '0' } : { right: '-630px' }}
      >
        <div className={`${styles['detail-img-wrap']} ${styles['mb-16']}`}>
          <img
            src={`images/public_images/product_image/${myProduct.trail_img}`}
            alt=""
          />
        </div>

        <div
          className={`${styles['map-product-detail-content']} ${styles['px-30']}`}
        >
          <h3 className={`${styles['mb-16']}`}>{myProduct.trail_name}</h3>
          <div className={`d-flex ${styles['mb-24']}`}>
            <div
              className={`${styles['tag']} d-flex align-items-center ${styles['me-16']}`}
            >
              <p className="mb-0">難度</p>
              <p className="mb-0">{`${myProduct.difficulty_short}級`}</p>
            </div>
            <div
              className={`${styles['tag']} d-flex align-items-center ${styles['me-16']}`}
            >
              <p className="mb-0">親子行程</p>
            </div>
            <div
              className={`${styles['tag']} d-flex align-items-center ${styles['me-16']}`}
            >
              <img src="images/kexin/svg/star-yellow.svg" alt="" />
              <p className="mb-0">
                {myProduct.avg_score ? myProduct.avg_score.slice(0, 3) : ''}
              </p>
            </div>
          </div>
          <div
            className={`${styles['map-product-detail-list']} d-flex align-items-center ${styles['mb-16']}`}
          >
            <img
              className={`${styles['me-16']}`}
              src="images/kexin/svg/distance.svg"
              alt=""
            />
            <p className={`mb-0 ${styles['me-10']}`}>路線總長</p>
            <p className="mb-0">{myProduct.trail_length}</p>
          </div>
          <div
            className={`${styles['map-product-detail-list']} d-flex align-items-center ${styles['mb-16']}`}
          >
            <img
              className={`${styles['me-16']}`}
              src="images/kexin/svg/time.svg"
              alt=""
            />
            <p className={`mb-0 ${styles['me-10']}`}>所需時間</p>
            <p className="mb-0">{myProduct.trail_time}小時</p>
          </div>
          <div
            className={`${styles['map-product-detail-list']} d-flex align-items-center ${styles['mb-16']}`}
          >
            <img
              className={`${styles['me-16']}`}
              src="images/kexin/svg/height.svg"
              alt=""
            />
            <p className={`mb-0 ${styles['me-10']}`}>爬升高度</p>
            <p className="mb-0">{myProduct.trail_height}</p>
          </div>
          <p className={`${styles['description']} ${styles['mb-35']}`}>
            {myProduct.trail_describ}
          </p>
          <div
            className={`d-flex justify-content-center ${styles['slope']} ${styles['mb-44']}`}
          >
            <img src="images/kexin/svg/slope.svg" alt="" />
          </div>
          <div
            className={`d-flex ${styles['map-product-rates']} ${styles['mb-44']}`}
          >
            <div
              className={`d-flex justify-content-center align-items-center ${styles['average-rate']} ${styles['me-20']}`}
            >
              <p className="mb-0">
                {myProduct.avg_score ? myProduct.avg_score.slice(0, 3) : ''}
              </p>
            </div>
            <div className="">
              <div className={`${styles['mb-8']}`}>
                <img
                  className={`${styles['star-mark']} ${styles['me-10']}`}
                  src={
                    myProduct.avg_score
                      ? `images/kexin/svg/BigStars${myProduct.avg_score.slice(
                          0,
                          3
                        )}.svg`
                      : ''
                  }
                  alt=""
                />
              </div>
              <div className={`d-flex ${styles['total-comment']}`}>
                <p className={`mb-0 ${styles['me-8']}`}>
                  {data.length ? data.length : ''}
                </p>
                <p className="mb-0">個人已評論</p>
              </div>
            </div>
          </div>

          {data.length
            ? data.map((v, i) => {
                {
                  /* console.log(v, i) */
                }
                return (
                  <>
                    <KexinComment key={i} el={v} />
                  </>
                )
              })
            : ''}

          <KexinFixedBox
            el={batch}
            liked={
              fav &&
              fav.filter((el, i) => {
                return el.trails_sid === myProduct.sid
              }).length > 0
                ? true
                : false
            }
          />
        </div>
      </div>
    </>
  )
}

export default KexinIndexProductsDetail
