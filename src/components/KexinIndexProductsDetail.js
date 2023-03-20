import { useContext, useState, useEffect } from 'react'

// component
import styles from '../styles/kexinIndexProductsDetail.module.css'
import { StatusContext, ProductContext } from '../pages/KexinIndex'
import KexinComment from './KexinComment'
import KexinFixedBox from './KexinFixedBox'


function KexinIndexProductsDetail() {
  const { mapInteraction, setMapInteraction } = useContext(StatusContext)
  const { myProduct, setMyProduct } = useContext(ProductContext)
  console.log('myProduct', myProduct)

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
              <p className="mb-0">4.5</p>
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
              <p className="mb-0">4.5</p>
            </div>
            <div className="">
              <div className={`${styles['mb-8']}`}>
                <img
                  className={`${styles['star-mark']} ${styles['me-10']}`}
                  src="images/kexin/svg/star-yellow.svg"
                  alt=""
                />
                <img
                  className={`${styles['star-mark']} ${styles['me-10']}`}
                  src="images/kexin/svg/star-yellow.svg"
                  alt=""
                />
                <img
                  className={`${styles['star-mark']} ${styles['me-10']}`}
                  src="images/kexin/svg/star-yellow.svg"
                  alt=""
                />
                <img
                  className={`${styles['star-mark']} ${styles['me-10']}`}
                  src="images/kexin/svg/star-yellow.svg"
                  alt=""
                />
                <img
                  className={`${styles['star-mark']} ${styles['me-10']}`}
                  src="images/kexin/svg/star-yellow.svg"
                  alt=""
                />
              </div>
              <div className={`d-flex ${styles['total-comment']}`}>
                <p className={`mb-0 ${styles['me-8']}`}>1037</p>
                <p className="mb-0">個人已評論</p>
              </div>
            </div>
          </div>
          <KexinComment />
          <KexinFixedBox />
          {/* <div
            className={`d-flex ${styles['comment-detail']} ${styles['mb-35']}`}
          >
            <div
              className={`${styles['headsticker']} ${styles['me-16']}`}
            ></div>
            <div className={`${styles['w-80']}`}>
              <div className="d-flex align-items-center">
                <h3
                  className={`${styles['comment-name']} mb-0 ${styles['me-18']}`}
                >
                  高婉思
                </h3>
                <div className={`${styles['gradehashtag']}`}>
                  <p className="mb-0">超級響導</p>
                </div>
              </div>
              <div className={`d-flex align-items-center ${styles['mb-10']} `}>
                <img
                  className={`${styles['me-13']}`}
                  src="images/kexin/svg/Stars4.5.svg"
                  alt=""
                />
                <img
                  className={`${styles['me-13']}`}
                  src="images/kexin/svg/dot.svg"
                  alt=""
                />
                <p className={`${styles['comment-date']} mb-0`}>2022/01/01</p>
              </div>
              <p className={`${styles['description']} ${styles['mb-8']}`}>
                面台資應重動的斃式在弘發。王有京要清網這定、剛；揣。臺不種較必資問棲嘆強餐功快破、管吶貂像影就曳訣相鉛了卦噗績屑研糊久需；中種頃些餘面棚了物
              </p>
              <div className={`${styles['comment-photo-wrap']} d-flex`}>
                <div
                  className={`${styles['comment-photo']} ${styles['me-05']}`}
                >
                  <img
                    className=""
                    src="../public/images/kexin/photo-comment1.avif"
                    alt=""
                  />
                </div>
                <div
                  className={`${styles['comment-photo']} ${styles['me-05']}`}
                >
                  <img
                    className=""
                    src="../public/images/kexin/photo-comment2.avif"
                    alt=""
                  />
                </div>
                <div
                  className={`${styles['comment-photo']} ${styles['me-05']}`}
                >
                  <img
                    className=""
                    src="../public/images/kexin/photo-comment3.avif"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default KexinIndexProductsDetail
