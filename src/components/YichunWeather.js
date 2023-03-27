// Packages
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// FontAwesome
import {
  faSun,
  faCloudSun,
  faCloud,
  faCloudShowersHeavy,
  faCloudSunRain,
} from '@fortawesome/free-solid-svg-icons'

// Styles
import { StylesContext } from './../pages/YichunProducts'

function YichunWeather(props) {
  const { location, setLocation } = props
  const styles = useContext(StylesContext)
  const weekday = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
  const [weather, setWeather] = useState([])

  // get weather data
  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-DC624EB8-BAF7-4C0D-94AE-FE5108A7450B&format=JSON&elementName=MinT,MaxT,PoP12h,Wx'
      )
      console.log('weather data:', response.data.records.locations[0].location)
      return response.data.records.locations[0].location
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    console.log(weather)
    const fetchData = async () => {
      try {
        const weatherData = await getWeatherData()
        setWeather(weatherData)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    console.log(weather)
  }, [weather])

  return (
    <>
      {/* <button
        onClick={() => {
          console.log(
            'aaa',
            weather?.filter((el, i) => el.locationName === location)[0]
              ?.weatherElement[1].time[0].elementValue[1].value
          )
        }}
      >
        aaa
      </button> */}
      <div className={styles.weather_box}>
        <div className={styles.weather_layout}>
          <div className={styles.weather_search}>
            <label htmlFor="">Location:</label>
            <select
              name=""
              onChange={(e) => {
                setLocation(e.target.value)
              }}
              value={location}
            >
              {weather &&
                weather.map((el, i) => {
                  return (
                    <option key={el.geocode} value={el.locationName}>
                      {el.locationName}
                    </option>
                  )
                })}
            </select>
          </div>
          <div className={styles.current_weather}>
            {weather &&
              weather
                ?.filter((el, i) => el.locationName === location)[0]
                ?.weatherElement[1].time[1].elementValue.map((el, i) => {
                  let icon
                  if (i === 1) {
                    switch (el.value) {
                      case '01':
                        icon = <FontAwesomeIcon icon={faSun} />
                        break
                      case '02':
                      case '03':
                        icon = <FontAwesomeIcon icon={faCloudSun} />
                        break
                      case '04':
                      case '05':
                      case '06':
                      case '07':
                        icon = <FontAwesomeIcon icon={faCloud} />
                        break
                      case '08':
                      case '09':
                      case '10':
                      case '11':
                      case '12':
                      case '13':
                      case '14':
                      case '15':
                      case '16':
                      case '17':
                      case '18':
                        icon = <FontAwesomeIcon icon={faCloudShowersHeavy} />
                        break
                      case '19':
                        icon = <FontAwesomeIcon icon={faCloudSunRain} />
                        break
                      case '20':
                      case '21':
                      case '22':
                        icon = <FontAwesomeIcon icon={faCloudShowersHeavy} />
                        break
                      default:
                        icon = <FontAwesomeIcon icon={faCloud} />
                    }
                  }
                  return icon
                })}
            <div className={styles.orbit}></div>
            <h3 className={styles.temp}>
              {weather &&
                weather
                  .filter((el, i) => {
                    return el.locationName === location
                  })
                  .map((el, i) => {
                    return el.weatherElement[2].time[0].elementValue[0].value
                  })}
              °C
            </h3>
            <div className={styles.weather_describe}>
              <h6 className={styles.describe}>
                {weather &&
                  weather
                    .filter((el, i) => {
                      return el.locationName === location
                    })
                    .map((el, i) => {
                      return el.weatherElement[1].time[0].elementValue[0].value
                    })}
              </h6>
              <p className={styles.temperature}>
                H:{' '}
                {weather &&
                  weather
                    .filter((el, i) => {
                      return el.locationName === location
                    })
                    .map((el, i) => {
                      return el.weatherElement[3].time[0].elementValue[0].value
                    })}
                ° L:{' '}
                {weather &&
                  weather
                    .filter((el, i) => {
                      return el.locationName === location
                    })
                    .map((el, i) => {
                      return el.weatherElement[2].time[0].elementValue[0].value
                    })}
                °
              </p>
            </div>
          </div>
        </div>

        <div className={styles.daily_weather}>
          {weather &&
            weather
              .filter((el, i) => {
                return el.locationName === location
              })[0]
              ?.weatherElement[1]?.time?.filter((el, i) => i % 2 !== 0)
              ?.map((el, i) => {
                let icon
                switch (el.elementValue[1].value) {
                  case '01':
                    icon = <FontAwesomeIcon icon={faSun} />
                    break
                  case '02':
                  case '03':
                    icon = <FontAwesomeIcon icon={faCloudSun} />
                    break
                  case '04':
                  case '05':
                  case '06':
                  case '07':
                    icon = <FontAwesomeIcon icon={faCloud} />
                    break
                  case '08':
                  case '09':
                  case '10':
                  case '11':
                  case '12':
                  case '13':
                  case '14':
                  case '15':
                  case '16':
                  case '17':
                  case '18':
                    icon = <FontAwesomeIcon icon={faCloudShowersHeavy} />
                    break
                  case '19':
                    icon = <FontAwesomeIcon icon={faCloudSunRain} />
                    break
                  case '20':
                  case '21':
                  case '22':
                    icon = <FontAwesomeIcon icon={faCloudShowersHeavy} />
                    break
                  default:
                    icon = <FontAwesomeIcon icon={faCloud} />
                }
                const dateTimeString = el.startTime // Replace with your date/time string
                const date = dateTimeString.split(' ')[0].split('-')
                const dateTime = new Date(dateTimeString)
                const daysOfWeek = [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ]
                const dayOfWeek = daysOfWeek[dateTime.getUTCDay()]
                  .toUpperCase()
                  .substring(0, 3)
                return (
                  <div className={styles.daily} key={i}>
                    <h6 className={styles.weekday}>{dayOfWeek}</h6>
                    {/* <p>
                      {date[1]}/{date[2]}
                    </p> */}
                    {icon}
                    <p>
                      {weather &&
                        weather
                          ?.filter((el, i) => el.locationName === location)[0]
                          ?.weatherElement[2].time?.filter(
                            (el, i) => i % 2 !== 0
                          )[i].elementValue[0].value}
                      °-{' '}
                      {weather &&
                        weather
                          ?.filter((el, i) => el.locationName === location)[0]
                          ?.weatherElement[3].time?.filter(
                            (el, i) => i % 2 !== 0
                          )[i].elementValue[0].value}
                      °
                    </p>
                  </div>
                )
              })}
        </div>
      </div>
    </>
  )
}

export default YichunWeather
