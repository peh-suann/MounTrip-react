import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from '../../styles/DavisTrailsDetail.module.css'

function DavisTrailsImgGroup(props) {
  const {
    data,
    key,
    // getListData
  } = props

  const [selectedImage, setSelectedImage] = useState(null)

  const changePicture = (newImage) => {
    setSelectedImage(newImage)
  }

  return (
    <>
      {data.rows.map((r, i) => {
        return (
          <div key={key} className="col flex-column me-5 d-none d-lg-flex">
            <div className="">
              <img
                className={`${styles.img_cover_one}`}
                src={
                  selectedImage ||
                  `/images/public_images/product_image/${r.trail_sid}-1.jpg`
                }
                alt=""
              />
            </div>
            <div className={`d-flex flex-row ${styles.img_wrap_three}`}>
              <img
                onClick={() =>
                  changePicture(
                    `/images/public_images/product_image/${r.trail_sid}-1.jpg`
                  )
                }
                id="select_img1"
                className={`${styles.img_cover_three}`}
                src={`/images/public_images/product_image/${r.trail_sid}-1.jpg`}
                alt=""
              />
              <img
                onClick={() =>
                  changePicture(
                    `/images/public_images/product_image/${r.trail_sid}-2.jpg`
                  )
                }
                id="select_img2"
                className={`${styles.img_cover_three}`}
                src={`/images/public_images/product_image/${r.trail_sid}-2.jpg`}
                alt=""
              />
              <img
                onClick={() =>
                  changePicture(
                    `/images/public_images/product_image/${r.trail_sid}-3.jpg`
                  )
                }
                id="select_img3"
                className={`${styles.img_cover_three}`}
                src={`/images/public_images/product_image/${r.trail_sid}-3.jpg`}
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
