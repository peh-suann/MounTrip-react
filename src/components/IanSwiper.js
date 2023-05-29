import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import styles from './../styles/IanSeason.module.css'
import dayjs from 'dayjs'
import 'swiper/swiper-bundle.min.css'
import 'swiper/css/bundle'

export const IanSwiper = ({ comment }) => {
  console.log(comment.rows)
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      // loop={true}
      // spaceBetween={0}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {comment.rows.map((v, i) => {
        return (
          <SwiperSlide key={i}>
            <div className={`${styles.abc}`}>
              <div className={styles.content}>
                <div className={`d-flex align-items-center`}>
                  <h5 className={`${styles.commentMember} me-lg-2`}>
                    @{v.lastname}
                    {v.firstname}
                  </h5>
                  <p className={`${styles.commentDate} me-lg-2`}>•</p>
                  <p className={styles.commentDate}>
                    {dayjs(v.rate_date).format('YYYY-MM-DD')}
                  </p>
                </div>
                <p className={styles.haveComment}>{v.comment}</p>
              </div>
              <img
                src={`/imgs/Ian_img/${v.rating_img}`}
                alt={v.rating_img}
                className={`${styles.commentImg}`}
              />
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
