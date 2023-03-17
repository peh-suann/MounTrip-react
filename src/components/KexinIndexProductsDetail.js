import { useContext } from 'react'
// component
import YichunProductCard from './YichunProductCard'

import styles from '../styles/kexinIndexProductsDetail.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// FontAwesome
import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons'

import { StatusContext } from '../pages/KexinIndex'

function KexinIndexProductsDetail() {
  const { mapInteraction, setMapInteraction } = useContext(StatusContext)
  return (
    <>
      <div class={`${styles['map-product-detail']} d-flex flex-column col`}
           style={(mapInteraction===2) ? { right:'0' } : { right:'-630px' } }
      >
        <div class={`${styles['detail-img-wrap']} ${styles['mb-16']}`}>
          <img src="../public/images/kexin/index-product.jpg" alt="" />
        </div>

        <div
          class={`${styles['map-product-detail-content']} ${styles['px-30']}`}
        >
          <h3 class={`${styles['mb-16']}`}>草嶺古道｜探索新北一日遊</h3>
          <div class={`d-flex ${styles['mb-24']}`}>
            <div
              class={`${styles['tag']} d-flex align-items-center ${styles['me-16']}`}
            >
              <p class="mb-0">難度</p>
              <p class="mb-0">EASY</p>
            </div>
            <div
              class={`${styles['tag']} d-flex align-items-center ${styles['me-16']}`}
            >
              <p class="mb-0">親子行程</p>
            </div>
            <div
              class={`${styles['tag']} d-flex align-items-center ${styles['me-16']}`}
            >
              <FontAwesomeIcon icon={faSearch} />
              <p class="mb-0">4.5</p>
            </div>
          </div>
          <div
            class={`${styles['map-product-detail-list']} d-flex align-items-center ${styles['mb-16']}`}
          >
            <img class={`${styles['"me-16']}`} src="./svg/distance.svg" alt="" />
            <p class={`mb-0 ${styles['"me-10']}`}>路線總長</p>
            <p class="mb-0">7.5km</p>
          </div>
          <div
            class={`${styles['map-product-detail-list']} d-flex align-items-center ${styles['mb-16']}`}
          >
            <img class={`${styles['"me-16']}`} src="./svg/time.svg" alt="" />
            <p class={`mb-0 ${styles['"me-10']}`}>所需時間</p>
            <p class="mb-0">2.5-3hr</p>
          </div>
          <div
            class={`${styles['map-product-detail-list']} d-flex align-items-center ${styles['mb-16']}`}
          >
            <img class={`${styles['"me-16']}`} src="./svg/height.svg" alt="" />
            <p class={`mb-0 ${styles['"me-10']}`}>爬升高度</p>
            <p class="mb-0">530m</p>
          </div>
          <p class={`${styles['description']} ${styles['mb-35']}`}>
            你見過南橫之美嗎？
            自從2009年8月，南橫公路中斷之後，美麗的南橫三星便淪為黑山、少有人探訪，直到最近才又終於開放了許多山友鍾情的南橫三星！
            塔關山、關山嶺山、庫哈諾辛山皆為A級百岳，是適合當日來回的平易、絕美山嶺，封閉多年的原始森林風華更甚以往，我們還安排了專車接送往返民宿及各登山口，讓你飽覽南橫的沿線風光、更讓你輕鬆的入手三座百岳。
          </p>
          <div class={`d-flex justify-content-center ${styles['slope']} ${styles['mb-44']}`}>
            <img src="./svg/slope.svg" alt="" />
          </div>
          <div class={`d-flex ${styles['map-product-rates']} ${styles['mb-44']}`}>
            <div class={`d-flex justify-content-center align-items-center ${styles['average-rate']} ${styles['me-20']}`}>
              <p class="mb-0">4.5</p>
            </div>
            <div class="">
              <div class={`${styles['mb-8']}`}>
                <img
                  class={`${styles['star-mark']} ${styles['me-10']}`}
                  src="./svg/star-yellow.svg"
                  alt=""
                />
                <img
                  class={`${styles['star-mark']} ${styles['me-10']}`}
                  src="./svg/star-yellow.svg"
                  alt=""
                />
                <img
                  class={`${styles['star-mark']} ${styles['me-10']}`}
                  src="./svg/star-yellow.svg"
                  alt=""
                />
                <img
                  class={`${styles['star-mark']} ${styles['me-10']}`}
                  src="./svg/star-yellow.svg"
                  alt=""
                />
                <img
                  class={`${styles['star-mark']} ${styles['me-10']}`}
                  src="./svg/star-yellow.svg"
                  alt=""
                />
              </div>
              <div class={`d-flex ${styles['total-comment']}`}>
                <p class={`mb-0 ${styles['me-8']}`}>1037</p>
                <p class="mb-0">個人已評論</p>
              </div>
            </div>
          </div>
          <div class={`d-flex ${styles['comment-detail']} ${styles['mb-35']}`}>
            <div class={`${styles['headsticker']} ${styles['me-17']}`}></div>
            <div class={`${styles['w-80']}`}>
              <div class="d-flex align-items-center">
                <h3 class={`${styles['comment-name']} mb-0 ${styles['me-18']}`}>高婉思</h3>
                <div class={`${styles['gradehashtag']}`}>
                  <p class="mb-0">超級響導</p>
                </div>
              </div>
              <div class={`d-flex align-items-center ${styles['mb-10']} `}>
                <img class={`${styles['me-13']}`} src="./svg/Stars4.5.svg" alt="" />
                <img class={`${styles['me-13']}`} src="./svg/dot.svg" alt="" />
                <p class={`${styles['comment-date']} mb-0`}>2022/01/01</p>
              </div>
              <p class={`${styles['description']} ${styles['mb-8']}`}>
                面台資應重動的斃式在弘發。王有京要清網這定、剛；揣。臺不種較必資問棲嘆強餐功快破、管吶貂像影就曳訣相鉛了卦噗績屑研糊久需；中種頃些餘面棚了物
              </p>
              <div class={`${styles['comment-photo-wrap']} d-flex`}>
                <div class={`${styles['comment-photo']} ${styles['me-05']}`}>
                  <img class="" src="../public/images/kexin/photo-comment1.avif" alt="" />
                </div>
                <div class={`${styles['comment-photo']} ${styles['me-05']}`}>
                  <img class="" src="../public/images/kexin/photo-comment2.avif" alt="" />
                </div>
                <div class={`${styles['comment-photo']} ${styles['me-05']}`}>
                  <img class="" src="../public/images/kexin/photo-comment3.avif" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* <div id={`${styles['map-shopping-choice']}`} class="d-flex flex-column">
            <div class="d-flex justify-content-between">
              <div class={`${styles['w-90']} d-flex align-items-center justify-content-between`}>
                <button class={`${styles['minus']} btn`}>
                  <img src="./svg/minus.svg" alt="" />
                </button>
                <button class={`${styles['w-80']} btn${styles['number']}`}>1</button>
                <button class={`${styles['plus']} btn`}>
                  <img src="./svg/plus.svg" alt="" />
                </button>
              </div>

              <button class={`${styles['like']} btn`}>
                <img src="./svg/heart.svg" alt="" />
              </button>
            </div>
            <div class="d-flex align-items-center">
              <div class={`${styles['w-15']} ${styles['dropdown-title']}`}>梯次</div>
              <div class={`${styles['w-85']} ${styles['dropdown']} ${styles['dropdown-wrap']}`}>
                <button
                  class="btn w-100 h-100"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="px-5">2023/01/01 - 2023/01/03</span>
                    <img
                      class={styles['chevron-down-type']}
                      src="./svg/chevron-down.svg"
                      alt=""
                    />
                  </div>
                </button>
              </div>
            </div>
            <button class={`${styles['btn-white']} w-100 btn `}>
              <div class="d-flex justify-content-center align-items-center">
                <span class="mb-0">查看更多</span>
                <img
                  id={styles['chevron-down-type']}
                  class={styles['chevron-down-type']}
                  src="./svg/chevron-down-right.svg"
                  alt=""
                />
              </div>
            </button>

            <button class={`${styles['btn-green']} w-100 btn `} >
              <div class="d-flex justify-content-center align-items-center">
                <span class={`${styles['mtyellow4']} mb-0 `}>加入購物車</span>
                <img
                  id={styles['chevron-down-type']}
                  class={styles['chevron-down-type']}
                  src="./svg/chevron-right-yellow4.svg"
                  alt=""
                />
              </div>
            </button>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default KexinIndexProductsDetail
