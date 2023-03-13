// Packages
import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addDays } from 'date-fns'

// FontAwesome
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCalendar, faUser } from '@fortawesome/free-regular-svg-icons'

// Components
import YichunDateSelect from '../components/YichunDateSelect'
import Button from './Button'

// Styles
import { StylesContext } from './../pages/YichunProducts'

function YichunSearchBarMobile() {
  const styles = useContext(StylesContext)
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: 'selection',
    },
  ])
  return (
    <div className={styles.search_bar}>
      <div className={styles.inputs_row}>
        <div className={styles.mobile_input}>
          <label htmlFor="location">目的地</label>
          <div className={styles.input_icon}>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="想去的地方..."
            />
            <FontAwesomeIcon
              icon={faSearch}
              style={{ color: 'var(--mtgreen-1)', fontSize: '18px' }}
            />
          </div>
        </div>
        <div className={styles.mobile_input}>
          <label htmlFor="num_of_ppl">人數</label>
          <div className={styles.input_icon}>
            <input type="text" name="num_of_ppl" id="num_of_ppl" />
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: 'var(--mtgreen-1)', fontSize: '18px' }}
            />
          </div>
        </div>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="date">日期</label>
        <div className={styles.inputs}>
          <div className={styles.input_icon}>
            <YichunDateSelect
              dateRange={dateRange}
              setDateRange={setDateRange}
            />
            <FontAwesomeIcon
              icon={faCalendar}
              style={{ color: 'var(--mtgreen-1)', fontSize: '18px' }}
            />
          </div>
        </div>
      </div>
      <Button text={'搜尋'} style={{ width: '100%', paddingTop: '10px' }} />
    </div>
  )
}

export default YichunSearchBarMobile
