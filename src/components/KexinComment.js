import React from 'react'
import styles from '../styles/kexinIndexProductsDetail.module.css'
import { StatusContext, ProductContext } from '../pages/KexinIndex'

function KexinComment(props) {
  const { el } = props

  return (
    <>
      <div className={`d-flex ${styles['comment-detail']} ${styles['mb-35']}`}>
        <div className={`${styles['headsticker']} ${styles['me-16']}`}>
        {
          el.img ? <img src={`images/public_images/member/${el.img}`} alt="" /> : ''
        }
          
        </div>
        <div className={`${styles['w-80']}`}>
          <div className="d-flex align-items-center">
            <h3 className={`${styles['comment-name']} mb-0 ${styles['me-18']}`}>
              {el.lastname}
              {el.firstname}
            </h3>
            <div
              className={`${styles['gradehashtag']}`}
              style={
                el.level === 1
                  ? { background: '#6cba7c' }
                  : el.level === 2
                  ? { background: '#add9b1' }
                  : { background: '#f7db97' }
              }
            >
              <p className="mb-0">
                {el.level === 1
                  ? '新手山友'
                  : el.level === 2
                  ? '初級嚮導'
                  : '超級嚮導'}
              </p>
            </div>
          </div>
          <div className={`d-flex align-items-center ${styles['mb-10']} `}>
            <img
              className={`${styles['me-13']}`}
              src={`images/kexin/svg/Stars${el.score}.svg`}
              alt=""
            />
            <img
              className={`${styles['me-13']}`}
              src="images/kexin/svg/dot.svg"
              alt=""
            />
            <p className={`${styles['comment-date']} mb-0`}>
              {el.rate_date.slice(0, 10)}
            </p>
          </div>
          <p className={`${styles['description']} ${styles['mb-8']}`}>
            {el.comment}{' '}
          </p>
          <div className={`${styles['comment-photo-wrap']} d-flex`}>
            {/* {el.rating_img
              ? el.rating_img.map((v,i) => {
                  <div
                    className={`${styles['comment-photo']} ${styles['me-05']}`}
                  >
                    <img
                      className=""
                      src={`../public/public_images/rating/${v}`}
                      alt=""
                    />
                  </div>
                })
              : ''} */}
            {/* <div className={`${styles['comment-photo']} ${styles['me-05']}`}>
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default KexinComment
