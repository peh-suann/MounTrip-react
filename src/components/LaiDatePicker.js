import React, { useState, useRef, useEffect } from 'react'
import { Calendar } from 'react-date-range'
// import format from 'date-fns/format'
import dayjs from 'dayjs'

//date-picker-style
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import './../styles/LaiDatePicker.css'

export default function LaiDatePicker(props) {
  const { userInfo, onDateChange, onHandleUpdate } = props
  const refInput = useRef(null)
  // open close calendar select
  const [open, setOpen] = useState(false)

  //   const bd = new Date(userInfo.userData.birthday)
  //   const userBD = userInfo.userData.birthday || new Date()
  //   const bdFormat = format(bd, 'yyyy-MM-dd')
  const [date, setDate] = useState(new Date())
  //   console.log('userInfo', userInfo)
  // console.log('date:', date)
  //   console.log(
  //     'birthday',
  //     dayjs(userInfo.userData.birthday).format('YYYY-MM-DD')
  //   )
  //   console.log('birthday2', typeof userInfo.userData.birthday)

  const handleselect = (date) => {
    setDate(dayjs(date).format('YYYY-MM-DD'))
    onDateChange(dayjs(date).format('YYYY-MM-DD'))
  }
  // hide on click outside
  const hideOnKeyDown = (e) => {
    // e.stopPropogation()
    if (e.key === 'Enter' || e.key === 'Escape') {
      setOpen(false)
    }
  }
  // hide on click outside
  const hideOnClickOutside = (e) => {
    // e.stopPropogation()
    if (refInput.current && !refInput.current.contains(e.target)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', hideOnKeyDown, true)
    document.addEventListener('click', hideOnClickOutside, true)
    setDate(dayjs(new Date(userInfo.userData.birthday)).format('YYYY-MM-DD'))

    return (
      document.removeEventListener('keydown', hideOnKeyDown),
      document.removeEventListener('click', hideOnClickOutside)
    )
  }, [userInfo.userData])
  return (
    <>
      <div
        className={
          document.documentElement.clientWidth > 390
            ? 'calendarWrap'
            : 'calendarWrap_mobile'
        }
      >
        <input
          type="text"
          className="calendarInput"
          id="birthday"
          name="birthday"
          value={date}
          onClick={() => {
            setOpen((open) => !open)
          }}
          onChange={(e) => {
            handleselect(e)
            onHandleUpdate(e)
            // onDateChange(e)
          }}
        />
        <div ref={refInput}>
          {open &&
            (document.documentElement.clientWidth > 390 ? (
              <Calendar
                date={new Date(date)}
                className="calenderElement"
                name="birthday"
                onChange={(e) => {
                  handleselect(e)
                  onHandleUpdate(e)
                  // onDateChange(e.value)
                }}
                dateDisplayFormat="yyyy-MM-dd"
                color="#6CBA7C"
              />
            ) : (
              <Calendar
                date={new Date(date)}
                className="calenderElementMobile"
                name="birthday"
                onChange={(e) => {
                  handleselect(e)
                  onHandleUpdate(e)
                  // onDateChange(e.value)
                }}
                dateDisplayFormat="yyyy-MM-dd"
                color="#6CBA7C"
              />
            ))}
        </div>
      </div>
    </>
  )
}
