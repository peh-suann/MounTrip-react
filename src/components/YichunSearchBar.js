// Packages
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import format from 'date-fns/format'
import { addDays } from 'date-fns'
import axios from 'axios'
import { Link } from 'react-router-dom'

// FontAwesome
import { faMinus, faAdd, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCalendar, faUser } from '@fortawesome/free-regular-svg-icons'

// Components
import YichunDateSelect from './YichunDateSelect'

// Connections
import { SEARCH_PRODUCTS } from '../connections/api-config'

// Search Context
import { SearchContext } from '../contexts/SearchContext'

// Styles
import styles from './../styles/yichun_styles/YichunSearchBar.module.css'

function YichunSearchBar() {
  const [location, setLocation] = useState('')
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: 'selection',
    },
  ])
  const [numOfPpl, setNumOfPpl] = useState(1)

  // search context
  const { search, setSearch } = useContext(SearchContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(SEARCH_PRODUCTS, {
        params: {
          location: location,
          startDate: format(dateRange[0].startDate, 'yyyy-MM-dd'),
          endDate: format(dateRange[0].endDate, 'yyyy-MM-dd'),
        },
      })
      // console.log(response.data)

      // navigate('/trails-filter')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <form action="/trails-filter" name="searchBar" onSubmit={handleSubmit}>
        <section id={styles.search_bar}>
          <div className={`${styles.search_item} ${styles.location}`}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className={styles.input_field}>
              <label htmlFor="location">目的地</label>
              <input
                type="text"
                id="location"
                placeholder="想去的地方..."
                onChange={(e) => {
                  setLocation(e.target.value)
                }}
              />
            </div>
          </div>
          <div className={`${styles.search_item} ${styles.date}`}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faCalendar} />
            </div>
            <div className={styles.input_field}>
              <label htmlFor="date">日期</label>
              <div className={styles.inputs}>
                <YichunDateSelect
                  dateRange={dateRange}
                  setDateRange={setDateRange}
                />
              </div>
            </div>
          </div>
          {/* <div className={`${styles.search_item} ${styles.num_of_ppl}`}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className={styles.input_field}>
              <label htmlFor="person">人數</label>
              <div className={styles.inputs}>
                <button
                  className={`${styles.num_of_ppl} ${
                    numOfPpl === 1 ? styles.disable : ''
                  }`}
                  onClick={(e) => {
                    if (numOfPpl > 1) {
                      setNumOfPpl(numOfPpl - 1)
                    }
                  }}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span>{numOfPpl}</span>
                <button
                  className={styles.num_of_ppl}
                  onClick={(e) => {
                    setNumOfPpl(numOfPpl + 1)
                  }}
                >
                  <FontAwesomeIcon icon={faAdd} />
                </button>
              </div>
            </div>
          </div> */}
          <button
            id={styles.search_btn}
            type="button"
            onClick={() => {
              // console.log({
              //   location: location,
              //   startDate: format(dateRange[0].startDate, 'yyyy-MM-dd'),
              //   endDate: format(dateRange[0].endDate, 'yyyy-MM-dd'),
              //   numOfPpl: numOfPpl,
              // })
              const searchData = {
                location: location,
                startDate: format(dateRange[0].startDate, 'yyyy-MM-dd'),
                endDate: format(dateRange[0].endDate, 'yyyy-MM-dd'),
              }
              setSearch(searchData)

              localStorage.setItem('mySearch', JSON.stringify(searchData))
            }}
          >
            <Link
              className="text-decoration-none text-white"
              to="/trails-filter"
            >
              搜尋
            </Link>
          </button>
        </section>
      </form>
    </>
  )
}

export default YichunSearchBar
