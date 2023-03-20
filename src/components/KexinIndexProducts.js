import { useContext, useState, useEffect } from 'react'
import axios from 'axios'
// component
import KexinProductCard from './KexinProductCard'

import styles from '../styles/kexinIndexProducts.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StatusContext, ProductContext } from '../pages/KexinIndex'
import { SELECT_COUNTY } from '../connections/api-config'

// FontAwesome
import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'

function KexinIndexProducts(props) {
  const { selectCounty } = props
  const { mapInteraction, setMapInteraction } = useContext(StatusContext)
  const { myProduct, setMyProduct } = useContext(ProductContext)
  const [data, setData] = useState({
    rows: [],
  })
  const [keyword, setKeyword] = useState('')

  // if (selectCounty) {
  // search data from selectcounty
  const getCountyData = async (county, keyword) => {
    try {
      const response = await axios.get(SELECT_COUNTY, {
        params: {
          county,
          keyword,
        },
      })
      setData(response.data)
    } catch (err) {}
  }

  useEffect(() => {
    getCountyData(selectCounty, keyword)
  }, [selectCounty, keyword])
  // getCountyData(selectCounty)
  // console.log('hi', selectCounty)
  // console.log(data.length)

  return (
    <>
      <div
        className={`${styles['map-product']} d-flex flex-column align-items-center justify-content-between px-0`}
        style={
          mapInteraction === 2
            ? { right: '530px' }
            : mapInteraction === 1
            ? { right: '0' }
            : { right: '-450px' }
        }
      >
        <div
          className={`${styles['search-input2']} align-items-center ${styles['mb-28']} ${styles['mt-19']}`}
        >
          <FontAwesomeIcon icon={faSearch} />
          <input
            className={styles.link}
            href="/"
            placeholder={`#${selectCounty}最熱門行程`}
            onChange={(e) => {
              setKeyword(e.target.value)
              console.log(e.target.value)
            }}
          />
        </div>

        <div className={`${styles['card']} d-flex flex-column px-0`}>
          {/* // TODO: 沒要到資料也不要跳錯誤
        // TODO: component樣式修改
        // TODO: 點擊有地理位置 */}
          {data.length
            ? data.map((v, i) => {
                {
                  /* console.log(v) */
                }
                return (
                  <>
                    <div className={styles['mb-20']}>
                      <KexinProductCard
                        key={v.trails_sid}
                        el={v}
                        ranking={0}
                        shadow={0}
                      />
                    </div>
                  </>
                )
              })
            : ''}

          <Button text={'探索更多'} iconFront={0} iconEnd={1} />
        </div>
      </div>
    </>
  )
  // }
}

export default KexinIndexProducts
