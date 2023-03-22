// Packages
import React, { useEffect, useState, useRef } from 'react'
import { DateRange } from 'react-date-range'
import format from 'date-fns/format'

// Components

// Styles
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

import styles from './../styles/yichun_styles/YichunSearchBarCalendar.module.css'

function YichunDateSelect(props) {
  const { dateRange, setDateRange } = props

  // open close calendar select
  const [open, setOpen] = useState(false)

  const refOne = useRef(null)

  useEffect(() => {
    document.addEventListener('keydown', hideOnKeyDown, true)
    document.addEventListener('click', hideOnClickOutside, true)
  }, [])

  // hide on click outside
  const hideOnKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      setOpen(false)
    }
  }
  // hide on click outside
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false)
    }
  }

  return (
    <>
      <div
        className={
          document.documentElement.clientWidth > 390
            ? styles.calendarWrap
            : styles.calendarWrap_mobile
        }
      >
        <input
          type="text"
          name=""
          id=""
          placeholder={`${format(
            dateRange[0].startDate,
            'yyyy-MM-dd'
          )} — ${format(dateRange[0].endDate, 'yyyy-MM-dd')}`}
          readOnly
          onClick={() => setOpen((open) => !open)}
        />
        <div ref={refOne} className={styles.calenderWrapCalender}>
          {open &&
            (document.documentElement.clientWidth > 390 ? (
              <DateRange
                onChange={(item) => setDateRange([item.selection])}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
                months={1}
                direction="horizontal"
                className={styles.calendarElement}
                rangeColors={['#6CBA7C']}
                dateDisplayFormat="yyyy-MM-dd"
                color="#000000"
              />
            ) : (
              <DateRange
                onChange={(item) => setDateRange([item.selection])}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
                months={1}
                direction="vertical"
                className="calendarElement_mobile"
                rangeColors={['#6CBA7C']}
                dateDisplayFormat="yyyy-MM-dd"
                color="#000000"
              />
            ))}
        </div>
      </div>
    </>
  )
}

export default YichunDateSelect
