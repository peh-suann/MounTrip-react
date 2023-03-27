// Packages
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from 'react'
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
import YichunWeather from '../components/YichunWeather'

// Connections
import {
  ALL_PRODUCTS,
  POP_PRODUCTS,
  HOTSPRING_PRODUCTS,
  SUNRISE_PRODUCTS,
  HOLIDAY_PRODUCTS,
  FLOWERS_PRODUCTS,
  LOCATION_PRODUCTS,
  WEATHER_LOCATION,
} from '../connections/api-config'

// Search Context
import { SearchContext } from '../contexts/SearchContext'

// Styles
import styles from './../styles/yichun_styles/YichunProducts.module.css'
export const StylesContext = createContext(styles)

function YichunProducts() {
  const [popProducts, setPopProducts] = useState([])
  const [hotSpringProducts, setHotSpringProducts] = useState([])
  const [locationProducts, setLocationProducts] = useState({})
  const [weatherLocation, setWeatherLocation] = useState({})

  // search context
  const { search, setSearch } = useContext(SearchContext)

  const filterTitle = ['所有熱門', '清明連假', '賞花春遊', '最美日出']
  const [filter, setFilter] = useState('所有熱門')
  const [filterData, setFilterData] = useState([])

  const [filterIndex, setFilterIndex] = useState(0)
  const [location, setLocation] = useState('臺北市')

  const diffData = [
    { diffCn: '初', diffEng: 'EASY', describe: '好朋友' },
    { diffCn: '中', diffEng: 'MEDIUM', describe: '好夥伴' },
    { diffCn: '高', diffEng: 'HARD', describe: '好挑戰' },
  ]
  const [diff, setDiff] = useState(0)
  const flag01 = useRef(null)
  const flag02 = useRef(null)
  const flag03 = useRef(null)

  // get popular products
  const getPopularProductsData = async () => {
    try {
      const response = await axios.get(POP_PRODUCTS)
      // console.log('getPopularProductsData:', response.data)
      return response.data
    } catch (error) {
      console.error(error)
      return []
    }
  }
  // get products of holiday
  const getHolidayProducts = async () => {
    try {
      const response = await axios.get(HOLIDAY_PRODUCTS)
      // console.log('getHolidayProducts', response.data)
      return response.data
    } catch (error) {
      console.error(error)
      return []
    }
  }
  // get products of sunrise
  const getSunriseProducts = async () => {
    try {
      const response = await axios.get(SUNRISE_PRODUCTS)
      // console.log('getSunriseProducts', response.data)
      return response.data
    } catch (error) {
      console.error(error)
      return []
    }
  }
  // get products of flowers
  const getFlowersProducts = async () => {
    try {
      const response = await axios.get(FLOWERS_PRODUCTS)
      // console.log('getFlowersProducts', response.data)
      return response.data
    } catch (error) {
      console.error(error)
      return []
    }
  }
  // get products of theme of hot spring
  const getHotSpringProducts = async () => {
    try {
      const response = await axios.get(HOTSPRING_PRODUCTS)
      // console.log('getHotSpringProducts', response.data)
      return response.data
    } catch (error) {
      console.error(error)
      return []
    }
  }
  // get products of theme of hot spring
  const getLocationProducts = async () => {
    try {
      const response = await axios.get(LOCATION_PRODUCTS)
      console.log('getLocationProducts', response.data)
      return response.data
    } catch (error) {
      console.error(error)
      return []
    }
  }

  // get weather location products
  const getWeatherLocationProducts = async () => {
    try {
      const response = await axios.get(WEATHER_LOCATION)
      // console.log('getLocationProducts', response.data)
      return response.data
    } catch (error) {
      console.error(error)
      return []
    }
  }

  const toggleDiff = (el) => {
    switch (el.diffEng) {
      case 'MEDIUM':
        setDiff(1)
        break
      case 'HARD':
        setDiff(2)
        break
      default:
        setDiff(0)
    }
  }
  const toggleFlag = () => {
    if (flag01.current && flag02.current && flag03.current) {
      switch (diff) {
        case 1:
          flag01.current.style.transform = `translateY(0%)`
          flag02.current.style.transform = `translateY(-100%)`
          flag03.current.style.transform = `translateY(0%)`
          break
        case 2:
          flag01.current.style.transform = `translateY(0%)`
          flag02.current.style.transform = `translateY(0%)`
          flag03.current.style.transform = `translateY(-100%)`
          break
        default:
          flag01.current.style.transform = `translateY(-100%)`
          flag02.current.style.transform = `translateY(0%)`
          flag03.current.style.transform = `translateY(0%)`
      }
    }
  }

  useEffect(() => {
    console.log('weatherLocationProducts', weatherLocation)
  }, [weatherLocation])

  // flag move
  useEffect(() => {
    toggleFlag()
  }, [diff])

  useEffect(() => {
    toggleFlag()
    const fetchData = async () => {
      try {
        const popProducts = await getPopularProductsData()
        const sunriseProducts = await getSunriseProducts()
        const holidayProducts = await getHolidayProducts()
        const flowersProducts = await getFlowersProducts()
        const hotSpringProducts = await getHotSpringProducts()
        const locationProducts = await getLocationProducts()
        const weatherLocationProducts = await getWeatherLocationProducts()

        setFilterData([
          popProducts,
          holidayProducts,
          flowersProducts,
          sunriseProducts,
        ])
        setLocationProducts(locationProducts)
        setHotSpringProducts(hotSpringProducts)
        setPopProducts(popProducts)
        setWeatherLocation(weatherLocationProducts)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
    document.documentElement.scrollTop = 0
  }, [])

  const rank = [1, 2, 3, 4, 5, 6]

  return (
    <>
      <StylesContext.Provider value={styles}>
        <section id={styles.product_top_bar}></section>
        {document.documentElement.clientWidth > 390 ? (
          <YichunSearchBar />
        ) : (
          <YichunSearchBarMobile />
        )}
        <section className={styles.products}>
          <div className={styles.products_title}>
            {document.documentElement.clientWidth > 390 ? (
              <svg
                width="668"
                height="20"
                viewBox="0 0 668 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 18.5L16.4269 14.8245H29.6048L41.5443 18.5L60.2561 14.8245L86.6412 11.149H97.7162L106.143 14.8245L123.926 11.149L143.43 3.65024L154.503 1.5L175.188 7.93268L192.273 12.5276L209.359 14.8245L227.188 10.0006L242.063 7.93268L266.99 12.0673L334.25 18.5L349.677 14.8245H362.855L374.794 18.5L393.506 14.8245L419.891 11.149H430.966L439.393 14.8245L457.176 11.149L476.68 3.65024L487.753 1.5L508.438 7.93268L525.523 12.5276L542.609 14.8245L560.438 10.0006L575.313 7.93268L600.24 12.0673L667.5 18.5"
                  stroke="#6CBA7C"
                  strokeMiterlimit="10"
                  strokeDasharray="4 4"
                />
              </svg>
            ) : (
              <svg
                width="109"
                height="25"
                viewBox="0 0 109 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_870_13270)">
                  <path
                    d="M73.6736 3.99115C73.6736 3.99115 69.3904 9.64591 68.1889 11.1438C66.9924 12.6416 65.62 12.9734 62.8802 13.6369C60.1403 14.3054 59.1148 17.2913 56.8827 20.37C54.6557 23.4437 52.7704 23.8877 52.7704 23.8877H0.125488C0.125488 23.8877 6.63573 23.7804 8.34498 22.1166C10.0542 20.4529 12.4572 19.9552 13.3169 20.37C14.1765 20.7847 17.4291 18.6233 19.3144 19.4576C21.2046 20.287 27.0311 19.9065 28.5695 19.2624C30.1128 18.6233 33.1995 17.2913 38.1664 16.9644C43.1383 16.6278 44.1639 13.471 44.5057 12.4709C44.8526 11.4755 46.7328 6.81609 50.1613 6.65021C53.5899 6.48432 54.7914 3.48861 55.4701 2.4933C56.1588 1.49798 61.1257 -0.165757 64.9011 1.3321C68.6665 2.82995 69.3502 2.16153 70.1244 1.82975C70.8935 1.49798 71.6124 2.00052 73.6736 3.99115Z"
                    stroke="#99CC99"
                    strokeWidth="1.50816"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M108.457 24.4878C108.457 24.4878 106.914 22.946 104.174 21.9507C101.434 20.9554 100.745 17.462 96.834 17.0717C92.9228 16.6863 92.6966 13.632 90.2936 13.9248C87.8956 14.2224 87.7247 12.1342 86.865 11.4706C86.0054 10.8071 82.064 10.285 82.064 10.285C82.064 10.285 77.2631 8.30903 75.7197 5.98174C74.1814 3.65934 73.6636 3.98623 73.6636 3.98623"
                    stroke="#99CC99"
                    strokeWidth="1.50816"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M52.7705 23.8875C52.7705 23.8875 54.6557 23.4484 56.8828 20.3697C59.1098 17.296 60.1404 14.3003 62.8802 13.6367C65.6201 12.9732 66.9925 12.6365 68.194 11.1436C69.3955 9.65058 73.6787 3.99094 73.6787 3.99094C73.6787 3.99094 74.1915 3.65917 75.7348 5.98645C77.2782 8.31373 82.0741 10.2897 82.0741 10.2897C82.0741 10.2897 86.0155 10.8118 86.8701 11.4753C87.7247 12.1389 87.9007 14.2271 90.2986 13.9295C92.6966 13.6318 92.9279 16.691 96.839 17.0764C100.75 17.4619 101.439 20.9552 104.179 21.9505C106.919 22.9507 108.462 24.4876 108.462 24.4876"
                    stroke="#99CC99"
                    strokeWidth="0.502721"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M56.1084 23.9999C56.6765 23.7071 58.1494 23.2046 59.9492 21.5701C62.0305 19.6819 63.7196 18.1646 66.1628 17.7011C68.1687 17.3254 69.4456 17.0278 70.7074 16.2764C72.2256 15.3738 75.3676 12.5391 76.3278 12.4708C76.6446 12.4464 77.102 12.3732 78.2985 13.4027C79.7665 14.6614 83.1045 15.447 83.924 15.4031C84.3261 15.3835 86.709 15.6177 87.5436 15.9593C88.3781 16.3008 88.8154 17.34 90.3839 17.2668C92.1987 17.1839 92.9026 18.9159 95.3709 19.4575C97.8393 19.9991 99.0257 21.9312 101.157 22.6093C102.962 23.1899 104.148 24.0633 104.51 24.1804"
                    stroke="#99CC99"
                    strokeWidth="0.502721"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M59.4468 24.1168C62.4882 22.5312 66.0123 22.1164 69.4459 21.7749C74.8853 21.2333 80.3348 20.8186 85.7944 20.5259C88.5895 20.3746 91.6159 20.3161 93.9234 21.853C95.6628 23.0093 98.5786 23.2386 100.579 23.8875"
                    stroke="#99CC99"
                    strokeWidth="0.502721"
                    strokeMiterlimit="10"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_870_13270">
                    <rect width="109" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
            <h2>本月最熱門</h2>
            {document.documentElement.clientWidth > 390 ? (
              <svg
                width="668"
                height="20"
                viewBox="0 0 668 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 18.5L15.9269 14.8245H29.1048L41.0443 18.5L59.7561 14.8245L86.1412 11.149H97.2162L105.643 14.8245L123.426 11.149L142.93 3.65024L154.003 1.5L174.688 7.93268L191.773 12.5276L208.859 14.8245L226.688 10.0006L241.563 7.93268L266.49 12.0673L333.75 18.5L349.177 14.8245H362.355L374.294 18.5L393.006 14.8245L419.391 11.149H430.466L438.893 14.8245L456.676 11.149L476.18 3.65024L487.253 1.5L507.938 7.93268L525.023 12.5276L542.109 14.8245L559.938 10.0006L574.813 7.93268L599.74 12.0673L667 18.5"
                  stroke="#6CBA7C"
                  strokeMiterlimit="10"
                  strokeDasharray="4 4"
                />
              </svg>
            ) : (
              <svg
                width="109"
                height="25"
                viewBox="0 0 109 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_870_13280)">
                  <path
                    d="M35.3262 3.99115C35.3262 3.99115 39.6094 9.64591 40.8109 11.1438C42.0073 12.6416 43.3798 12.9734 46.1196 13.6369C48.8594 14.3054 49.885 17.2913 52.1171 20.37C54.3441 23.4437 56.2293 23.8877 56.2293 23.8877H108.874C108.874 23.8877 102.364 23.7804 100.655 22.1166C98.9455 20.4529 96.5425 19.9552 95.6829 20.37C94.8232 20.7847 91.5706 18.6233 89.6854 19.4576C87.7952 20.287 81.9686 19.9065 80.4303 19.2624C78.887 18.6233 75.8002 17.2913 70.8334 16.9644C65.8614 16.6278 64.8359 13.471 64.494 12.4709C64.1472 11.4755 62.267 6.81609 58.8384 6.65021C55.4099 6.48432 54.2084 3.48861 53.5297 2.4933C52.841 1.49798 47.8741 -0.165757 44.0986 1.3321C40.3333 2.82995 39.6496 2.16153 38.8754 1.82975C38.1062 1.49798 37.3873 2.00052 35.3262 3.99115Z"
                    stroke="#99CC99"
                    strokeWidth="1.50816"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M0.542845 24.4878C0.542845 24.4878 2.0862 22.946 4.82603 21.9507C7.56586 20.9554 8.25459 17.462 12.1658 17.0717C16.0769 16.6863 16.3032 13.632 18.7062 13.9248C21.1041 14.2224 21.2751 12.1342 22.1347 11.4706C22.9944 10.8071 26.9357 10.285 26.9357 10.285C26.9357 10.285 31.7367 8.30903 33.2801 5.98174C34.8184 3.65934 35.3362 3.98623 35.3362 3.98623"
                    stroke="#99CC99"
                    strokeWidth="1.50816"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M56.2295 23.8875C56.2295 23.8875 54.3443 23.4484 52.1172 20.3697C49.8902 17.296 48.8596 14.3003 46.1198 13.6367C43.3799 12.9732 42.0075 12.6365 40.806 11.1436C39.6045 9.65058 35.3213 3.99094 35.3213 3.99094C35.3213 3.99094 34.8085 3.65917 33.2652 5.98645C31.7218 8.31373 26.9259 10.2897 26.9259 10.2897C26.9259 10.2897 22.9845 10.8118 22.1299 11.4753C21.2753 12.1389 21.0993 14.2271 18.7014 13.9295C16.3034 13.6318 16.0721 16.691 12.161 17.0764C8.24979 17.4619 7.56106 20.9552 4.82123 21.9505C2.0814 22.9507 0.538046 24.4876 0.538046 24.4876"
                    stroke="#99CC99"
                    strokeWidth="0.502721"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M52.8914 23.9999C52.3233 23.7071 50.8503 23.2046 49.0506 21.5701C46.9693 19.6819 45.2802 18.1646 42.8369 17.7011C40.8311 17.3254 39.5542 17.0278 38.2923 16.2764C36.7741 15.3738 33.6321 12.5391 32.6719 12.4708C32.3552 12.4464 31.8977 12.3732 30.7012 13.4027C29.2333 14.6614 25.8952 15.447 25.0758 15.4031C24.6736 15.3835 22.2907 15.6177 21.4562 15.9593C20.6217 16.3008 20.1843 17.34 18.6158 17.2668C16.801 17.1839 16.0972 18.9159 13.6288 19.4575C11.1605 19.9991 9.97405 21.9312 7.84252 22.6093C6.03775 23.1899 4.85133 24.0633 4.48937 24.1804"
                    stroke="#99CC99"
                    strokeWidth="0.502721"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M49.5535 24.1168C46.512 22.5312 42.9879 22.1164 39.5543 21.7749C34.1149 21.2333 28.6654 20.8186 23.2059 20.5259C20.4107 20.3746 17.3843 20.3161 15.0769 21.853C13.3374 23.0093 10.4217 23.2386 8.42082 23.8875"
                    stroke="#99CC99"
                    strokeWidth="0.502721"
                    strokeMiterlimit="10"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_870_13280">
                    <rect
                      width="109"
                      height="25"
                      fill="white"
                      transform="matrix(-1 0 0 1 109 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            )}
          </div>
          <div className={styles.filter_buttons}>
            {filterTitle.map((el, i) => {
              return (
                <button
                  key={i}
                  className={filter === el ? '' : styles.disable}
                  onClick={() => {
                    setFilter(el)
                    switch (el) {
                      case '清明連假':
                        setFilterIndex(1)
                        break
                      case '賞花春遊':
                        setFilterIndex(2)
                        break
                      case '最美日出':
                        setFilterIndex(3)
                        break
                      default:
                        setFilterIndex(0)
                    }
                  }}
                >
                  {el}
                </button>
              )
            })}
          </div>
          <div className={styles['row-of-products']}>
            {filterData[filterIndex] &&
              filterData[filterIndex].slice(0, 3).map((el, i) => {
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
            {filterData[filterIndex] &&
              filterData[filterIndex].slice(3, 6).map((el, i) => {
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
            {/* <Button text={'探索更多'} iconFront={0} iconEnd={1} /> */}
          </div>
          <div className={styles['row-of-products']}>
            <button>
              <img src="./../icons/chevron-left.svg" alt="" />
            </button>
            {document.documentElement.clientWidth > 390
              ? hotSpringProducts.map((el, i) => {
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
        <section className={styles.weather}>
          <YichunWeather location={location} setLocation={setLocation} />
          <div className={styles['row-of-products']}>
            {weatherLocation &&
              weatherLocation[location]?.map((el, i) => {
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
        </section>
        <section className={styles.difficulty}>
          <div className={styles.diff_intro_list}>
            {diffData.map((el, i) => {
              return (
                <YichunDiffRank
                  key={i}
                  el={el}
                  index={i}
                  diff={diff}
                  toggleDiff={toggleDiff}
                />
              )
            })}
          </div>
          <div className={styles.diff_recommend}>
            <div className={styles.select_diff}>
              {document.documentElement.clientWidth > 390 ? (
                <>
                  <svg
                    ref={flag01}
                    className={`${styles.flag} ${styles.easy}`}
                    width="43"
                    height="64"
                    viewBox="0 0 43 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M36.5 20L3 4V34L36.5 20Z" fill="#f3c969" />
                    <path
                      d="M3 64V34M3 34V4L36.5 20L3 34Z"
                      stroke="#f3c969"
                      strokeWidth="5"
                    />
                  </svg>
                  <svg
                    ref={flag02}
                    className={`${styles.flag} ${styles.medium}`}
                    width="43"
                    height="64"
                    viewBox="0 0 43 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M36.5 20L3 4V34L36.5 20Z" fill="#f3c969" />
                    <path
                      d="M3 64V34M3 34V4L36.5 20L3 34Z"
                      stroke="#f3c969"
                      strokeWidth="5"
                    />
                  </svg>
                  <svg
                    ref={flag03}
                    className={`${styles.flag} ${styles.hard}`}
                    width="43"
                    height="64"
                    viewBox="0 0 43 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M36.5 20L3 4V34L36.5 20Z" fill="#f3c969" />
                    <path
                      d="M3 64V34M3 34V4L36.5 20L3 34Z"
                      stroke="#f3c969"
                      strokeWidth="5"
                    />
                  </svg>
                  <img
                    src="images/yichun/1x/2x/hard.png"
                    alt="hard"
                    className={`${styles.diff_mountain} ${styles.hard}`}
                  />
                  <img
                    src="images/yichun/1x/2x/medium.png"
                    alt="medium"
                    className={`${styles.diff_mountain} ${styles.medium}`}
                  />
                  <img
                    src="images/yichun/1x/2x/easy.png"
                    alt="easy"
                    className={`${styles.diff_mountain} ${styles.easy}`}
                  />
                </>
              ) : (
                <img src="images/yichun/ridge.png" alt="" />
              )}
            </div>
            <div className={styles.diff_products}>
              {document.documentElement.clientWidth > 390
                ? locationProducts['Taichung_City'] &&
                  locationProducts['Taichung_City'][diff + 1].map((el, i) => {
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
                : locationProducts['Taichung_City'] &&
                  locationProducts['Taichung_City'][diff + 1].map((el, i) => {
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
    </>
  )
}

export default YichunProducts
