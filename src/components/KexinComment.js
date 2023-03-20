import React from 'react'
import styles from '../styles/kexinIndexProductsDetail.module.css'
import { StatusContext, ProductContext } from '../pages/KexinIndex'

function KexinComment() {
  return (
    <>
      <div className={`d-flex ${styles['comment-detail']} ${styles['mb-35']}`}>
        <div className={`${styles['headsticker']} ${styles['me-16']}`}></div>
        <div className={`${styles['w-80']}`}>
          <div className="d-flex align-items-center">
            <h3 className={`${styles['comment-name']} mb-0 ${styles['me-18']}`}>
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
            <div className={`${styles['comment-photo']} ${styles['me-05']}`}>
              <img
                className=""
                src="../public/images/kexin/photo-comment1.avif"
                alt=""
              />
            </div>
            <div className={`${styles['comment-photo']} ${styles['me-05']}`}>
              <img
                className=""
                src="../public/images/kexin/photo-comment2.avif"
                alt=""
              />
            </div>
            <div className={`${styles['comment-photo']} ${styles['me-05']}`}>
              <img
                className=""
                src="../public/images/kexin/photo-comment3.avif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default KexinComment
