// Packages
import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// FontAwesome
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCalendar, faUser } from '@fortawesome/free-regular-svg-icons'

// Components
import YichunSearchBar from '../components/YichunSearchBar'
import YichunProductCard from '../components/YichunProductCard'
import YichunDiffRank from '../components/YichunDiffRank'
import Button from '../components/Button'
import YichunSearchBarMobile from '../components/YichunSearchBarMobile'

// Connections
import { ALL_PRODUCTS, POP_PRODUCTS } from '../connections/api-config'

// Styles
import DateSelectStyles from './../styles/yichun_styles/YichunSearchBar.module.css'
import styles from './../styles/yichun_styles/YichunProducts.module.css'
export const StylesContext = createContext(styles)
export const CountContext = createContext()

function YichunProducts() {
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
  const getListData = async () => {
    try {
      const response = await axios.get(ALL_PRODUCTS)
      console.log('getAllProducts', response.data)
      setProducts(response.data)
      return response.data
    } catch (error) {
      console.error(error)
      return []
    }
  }

  const getPopularProductsData = async () => {
    try {
      const response = await axios.get(POP_PRODUCTS)
      console.log('getPopularProductsData:', response.data)
      return response.data
    } catch (error) {
      console.error(error)
      return []
    }
  }

  const [popProducts, setPopProducts] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await getPopularProductsData()
      setPopProducts(data)
    }

    getData()

    window.scrollTo(0, 0)
  }, [])

  const rank = [1, 2, 3, 4, 5, 6]

  return (
    <>
      <CountContext.Provider value={{ count, setCount }}>
        <StylesContext.Provider value={styles}>
          <section id={styles.product_top_bar}></section>
          {document.documentElement.clientWidth > 390 ? (
            <YichunSearchBar
              getListData={getListData}
              products={products}
              setProducts={setProducts}
            />
          ) : (
            <YichunSearchBarMobile />
          )}
          <section className={styles.products}>
            <div className={styles.products_title}>
              <img
                src="./../images/product-page-img/mountain_left.svg"
                alt=""
              />
              <h2>本月最熱門</h2>
              <img
                src="./../images/product-page-img/mountain_right.svg"
                alt=""
              />
            </div>
            <div className={styles['row-of-products']}>
              {popProducts.slice(0, 3).map((el, i) => {
                return (
                  <YichunProductCard
                    key={el.sid}
                    el={el}
                    ranking={rank[i]}
                    shadow={0}
                  />
                )
              })}
            </div>
            <div className={styles['row-of-products']}>
              {popProducts.slice(3, 6).map((el, i) => {
                return (
                  <YichunProductCard
                    key={el.sid}
                    el={el}
                    ranking={rank[i + 3]}
                    shadow={0}
                  />
                )
              })}
            </div>
          </section>
          <section className={styles.theme}>
            <div className={styles.theme_intro}>
              <h2>野溪溫泉之旅 </h2>
              <p>
                武陵農場是著名的賞櫻景點，是攝影愛好者的最愛，
                <br />
                不必出國就可以看到滿到快炸出來的櫻花林～
                <br />
                整個浪漫到不行！
              </p>
              <Button text={'探索更多'} iconFront={0} iconEnd={1} />
            </div>
            <div className={styles['row-of-products']}>
              <button>
                <img src="./../icons/chevron-left.svg" alt="" />
              </button>
              {document.documentElement.clientWidth > 390
                ? popProducts.slice(0, 3).map((el, i) => {
                    // console.log(el.trail_name)
                    return (
                      <YichunProductCard
                        key={el.sid}
                        el={el}
                        ranking={0}
                        shadow={1}
                      />
                    )
                  })
                : popProducts.slice(0, 1).map((el, i) => {
                    // console.log(el.trail_name)
                    return (
                      <YichunProductCard
                        key={el.sid}
                        el={el}
                        ranking={0}
                        shadow={1}
                      />
                    )
                  })}
              <button>
                <img src="./../icons/chevron-right.svg" alt="" />
              </button>
            </div>
          </section>
          <section className={styles.difficulty}>
            <div className={styles.diff_intro_list}>
              <YichunDiffRank />
              <YichunDiffRank />
              <YichunDiffRank />
            </div>
            <div className={styles.diff_recommend}>
              <div className={styles.select_diff}>
                {document.documentElement.clientWidth > 390 ? (
                  <svg
                    width="1111"
                    height="301"
                    viewBox="0 0 1111 301"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M104.5 246L71 230V260L104.5 246Z" fill="#6CBA7C" />
                    <path
                      d="M71 290V260M71 260V230L104.5 246L71 260Z"
                      stroke="#6CBA7C"
                      strokeWidth="5"
                    />
                    <path
                      d="M556 161V131M556 131V101L589.5 117L556 131Z"
                      stroke="#6CBA7C"
                      strokeWidth="5"
                    />
                    <path
                      d="M1024 66V36M1024 36V6L1057.5 22L1024 36Z"
                      stroke="#6CBA7C"
                      strokeWidth="5"
                    />
                    <path
                      d="M1 297.999L36.021 291.712H68.7077L130.162 280.182L189.989 272.843L283.888 279.13L347.434 266.552L425.478 238.249L461.134 228.815H488.636L557.5 160.419L721.343 195.272L806.49 169.065L848.506 151.244L881.193 125.04L963 93.4995L988.677 76.7264L1023.7 64.1484H1054.05L1082.07 74.1068L1110.09 84.0651"
                      stroke="#6CBA7C"
                      strokeWidth="5"
                      strokeMiterlimit="10"
                    />
                  </svg>
                ) : (
                  <img src="images/yichun/ridge.png" alt="" />
                )}
              </div>
              <div className={styles.diff_products}>
                {document.documentElement.clientWidth > 390
                  ? popProducts.slice(0, 2).map((el, i) => {
                      // console.log(el.trail_name)
                      return (
                        <YichunProductCard
                          key={el.sid}
                          el={el}
                          ranking={0}
                          shadow={0}
                        />
                      )
                    })
                  : popProducts.slice(0, 1).map((el, i) => {
                      // console.log(el.trail_name)
                      return (
                        <YichunProductCard
                          key={el.sid}
                          el={el}
                          ranking={0}
                          shadow={0}
                        />
                      )
                    })}
              </div>
            </div>
          </section>
          <section className={styles.test}>
            <div className={styles.test_info}>
              <h5>登山知識大補帖</h5>
              <p>
                身為一名登山客，快樂登山當然也要平安回家！不論你是初級登山者、資深登山者，或是即將踏入登山的新手，都應該了解自然步道分級與分類，評估自身體能與技巧，選擇適合自己的行程再出發。
              </p>
              <Button text={'立即測驗'} link={'test'} />
            </div>
          </section>
        </StylesContext.Provider>
      </CountContext.Provider>
    </>
  )
}

export default YichunProducts
