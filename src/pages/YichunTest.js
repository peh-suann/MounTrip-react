// Packages
import React, { createContext, useEffect, useState, useRef } from 'react'
import axios from 'axios'

// Components
import YichunTestNotPlayed from './YichunTestNotPlayed'
import YichunTestPlayed from './YichunTestPlayed'

// Connections
import {
  TEST_QUES,
  TEST_PLAY,
  TEST_TOGGLE_PLAY,
} from '../connections/api-config'

function YichunTest() {
  const [play, setPlay] = useState(1)

  // get play status Data
  const getPlayStatus = async () => {
    try {
      const currentAccount = JSON.parse(localStorage.getItem('myAuth'))
      const response = await axios.get(TEST_PLAY, {
        params: {
          accountId: currentAccount.accountId,
        },
      })
      console.log('response', response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    // if logged in
    if (localStorage.getItem('myAuth')) {
      const fetchData = async () => {
        const playStatus = await getPlayStatus()
        // 資料表中是否有該項會員的資料
        // 沒有就代表沒玩過
        if (playStatus && playStatus.length > 0) {
          const play_status = playStatus[0].play_status
          setPlay(play_status)
        } else {
          setPlay(0)
        }
      }
      fetchData()
    } else {
      setPlay(0)
    }
  }, [])

  useEffect(() => {
    console.log('play has changed', play)
  }, [play])

  return <>{play ? <YichunTestPlayed /> : <YichunTestNotPlayed />}</>
}

export default YichunTest
