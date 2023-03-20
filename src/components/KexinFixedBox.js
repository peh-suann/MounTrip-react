import { useContext, useState, useEffect } from 'react'
import styles from '../styles/kexinIndexProductsDetail.module.css'
import { StatusContext, ProductContext } from '../pages/KexinIndex'

function KexinFixedBox() {
  const { mapInteraction, setMapInteraction } = useContext(StatusContext)
  const { myProduct, setMyProduct } = useContext(ProductContext)
  const [productNum, setProductNum] = useState(1)
  const [liked, setLiked] = useState(false)

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
                productNum > 1
                  ? setProductNum(productNum - 1)
                  : setProductNum(1)
              }}
            >
              <img src="images/kexin/svg/minus.svg" alt="" />
            </button>
            <button className={`${styles['w-80']} btn ${styles['number']}`}>
              {productNum}
            </button>
            <button
              className={`${styles['plus']} btn`}
              onClick={() => {
                setProductNum(productNum + 1)
              }}
            >
              <img src="images/kexin/svg/plus.svg" alt="" />
            </button>
          </div>
          <button
            className={`${styles['like']} btn`}
            onClick={() => {
              setLiked(!liked)
              console.log(liked)
            }}
          >
            {liked ? (
              <img src="images/kexin/svg/heart-red.svg" alt="" />
            ) : (
              <img src="images/kexin/svg/heart.svg" alt="" />
            )}
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
                <span className="px-3">2023/01/01 - 2023/01/03</span>
                <img
                  className={styles['chevron-down-type']}
                  src="images/kexin/svg/chevron-down.svg"
                  alt=""
                />
              </div>
            </button>
          </div>
        </div>
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
        <button className={`${styles['btn-green']} w-100 btn `}>
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
