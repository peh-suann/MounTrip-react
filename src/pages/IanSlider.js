import { useState, useEffect } from 'react'
import styles from './../styles/IanSeason.module.css'
import { TRAILS_COMMENT } from '../connections/api-config'
import dayjs from 'dayjs'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'
// import styles from './../styles/IanSlider.module.css'
// function IanSlider() {
//   const [comment, setComment] = useState({
//     rows: [],
//   })
//   const getCommentData = async (req, res) => {
//     const d = await fetch(TRAILS_COMMENT)
//     const j = await d.json()
//     console.log(j)
//     setComment(j)
//   }
//   useEffect(() => {
//     getCommentData()
//   }, [])
//   const settings = {
//     dots: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 4,
//   }

//   return (
//     <div className={`${styles.All} d-flex`}>
//       {comment.rows.map((v2, i2) => {
//         return (
//           <div
//             className={`${styles.comment}`}
//             style={{
//               backgroundImage: `linear-gradient(180deg, rgba(1, 19, 6, 0) 66.99%, #011306 100%),
//           url(/imgs/Ian_img/${v2.trail_img})`,
//             }}
//             key={i2}
//           >
//             <div>
//               <h5>
//                 <span className={styles.account}>
//                   @{v2.lastname}
//                   {v2.firstname}
//                 </span>
//                 <span>•</span>
//                 <span className={styles.date}>
//                   {dayjs(v2.rate_date).format('YYYY-MM-DD')}
//                 </span>
//               </h5>
//               <p>{v2.comment}</p>
//             </div>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default IanSlider

function NextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'black',
        borderRadius: '50%',
        boxShadow: 'none',
      }}
      onClick={onClick}
    />
  )
}

function PrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'black',
        borderRadius: '50%',
        boxShadow: 'none',
      }}
      onClick={onClick}
    />
  )
}

export default function IanSlider() {
  const [comment, setComment] = useState({
    rows: [],
  })
  const getCommentData = async (req, res) => {
    const d = await fetch(TRAILS_COMMENT)
    const j = await d.json()
    console.log(j)
    setComment(j)
  }
  useEffect(() => {
    getCommentData()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <>
      <div className={`container`}>
        <h2> Multiple items </h2>

        <div className={`${styles.All} d-flex`}>
          {comment.rows.map((v2, i2) => {
            return (
              <div
                className={`${styles.comment}`}
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(1, 19, 6, 0) 66.99%, #011306 100%),
           url(/imgs/Ian_img/${v2.trail_img}) no-repeat`,
                }}
                key={i2}
              >
                <div>
                  <h5>
                    <span className={styles.account}>
                      @{v2.lastname}
                      {v2.firstname}
                    </span>
                    <span>•</span>
                    <span className={styles.date}>
                      {dayjs(v2.rate_date).format('YYYY-MM-DD')}
                    </span>
                  </h5>
                  <p>{v2.comment}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div
        id="carouselExampleControls"
        className={`carousel slide`}
        data-ride="carousel"
      >
        <div className={`carousel-inner`}>
          <div className={`carousel-item active`}>
            <img className={`d-block w-100`} src="..." alt="First slide" />
          </div>
          <div className={`carousel-item`}>
            <img className={`d-block w-100`} src="..." alt="Second slide" />
          </div>
          <div className={`carousel-item`}>
            <img className={`d-block w-100`} src="..." alt="Third slide" />
          </div>
        </div>
        <Link
          className={`carousel-control-prev`}
          to="#carouselExampleControls"
          role="button"
          dataSlide="prev"
        >
          <span
            className={`carousel-control-prev-icon`}
            ariaHidden="true"
          ></span>
          <span className={`sr-only`}>Previous</span>
        </Link>
        <Link
          className={`carousel-control-next`}
          to="#carouselExampleControls"
          role="button"
          dataSlide="next"
        >
          <span
            className={`carousel-control-next-icon`}
            ariaHidden="true"
          ></span>
          <span className={`sr-only`}>Next</span>
        </Link>
      </div>
    </>
  )
}
