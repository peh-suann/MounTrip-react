import { useContext } from 'react'
// component
import YichunProductCard from './YichunProductCard'

import styles from '../styles/kexinIndexProducts.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StatusContext } from '../pages/KexinIndex'

  
// FontAwesome
import {
  faSearch,
  faStar
} from '@fortawesome/free-solid-svg-icons'

function KexinIndexProducts() {
  const { mapInteraction, setMapInteraction } = useContext(StatusContext)
  return (
    <>
      <div
        class={`${styles['map-product']} d-flex flex-column align-items-center justify-content-between px-0`}
        style={(mapInteraction===2) ? { right:'530px' } : (mapInteraction===1) ? { right: '0' } : {right: '-450px'}}
      >
        <div
          class={`${styles['search-input2']} align-items-center ${styles['mb-28']} ${styles['mt-19']}`}
        >
          <FontAwesomeIcon icon={faSearch} />
          <input
            className={styles.link}
            href="/"
            placeholder={`＃新北市最熱門行程`}
          />
        </div>
        {/* <YichunProductCard /> */}
        <div
          class={`${styles['card']} d-flex flex-column px-0 ${styles['mb-20']}`}
          onClick={()=>{
            setMapInteraction(2)
            console.log('click card')
          }}
        >
          <div class={styles['img-wrap']}>
            {/* <!-- <img src="./img/index-product.jpg" alt="" /> --> */}
            <div
              class={`${styles['rates-wrap']} d-flex justify-content-between`}
            >
              <div class="d-flex align-items-center rate">
                <FontAwesomeIcon icon={faStar} />
                <p class={`${styles['mtgreen4']} ${styles['rates']}`}>4.5</p>
              </div>
              <div class="d-flex align-items-center">
                <p class={`${styles['mtgreen4']} ${styles['rates']}`}>難度</p>
                <p class={`${styles['mtgreen4']} ${styles['rates']}`}>EASY</p>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-column justify-content-start">
              <p class={`${styles['information-title']} ${styles['mtgrey1']}`}>
                草嶺古道｜探索新北一日遊
              </p>
              <p
                class={`${styles['information-title']} mb-0 ${styles['mtgrey2']}`}
              >
                新北市雙溪區
              </p>
            </div>
            <div class="d-flex flex-column">
              <p
                class={`${styles['information-mark']} mb-0 ${styles['mtgrey3']}`}
              >
                NTD
              </p>
              <p
                class={`${styles['information-price']} mb-0 ${styles['mtgreen1']}`}
              >
                1,200
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default KexinIndexProducts
