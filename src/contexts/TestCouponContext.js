import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

// Connections
import {
  TEST_QUES,
  TEST_PLAY,
  TEST_INSERT_PLAY,
  TEST_INSERT_COUPON,
} from '../connections/api-config'

export const TestCouponContext = createContext(null)

export const TestCouponContextProvider = ({ children }) => {
  const [newCoupon, setNewCoupon] = useState(false)
  const [sale, setSale] = useState()
  const [coupon, setCoupon] = useState()
  const [test, setTest] = useState(false)
  // const [ifLogin, setIfLogin] = useState(false)
  // const [loginAuth, setLoginAuth] = useState()

  const ifPlay = async () => {
    try {
      const currentAccount = JSON.parse(localStorage.getItem('myAuth'))
      if (currentAccount) {
        const response = await axios.get(TEST_PLAY, {
          params: {
            accountId: currentAccount.accountId,
          },
        })
        console.log('ifPlay', response.data)
        return response.data
      } else {
        console.log('false')
      }
    } catch (error) {
      console.error(error)
    }
  }
  const insertMemberPlay = async () => {
    try {
      const currentAccount = JSON.parse(localStorage.getItem('myAuth'))
      if (currentAccount) {
        const response = await axios.get(TEST_INSERT_PLAY, {
          params: {
            accountId: currentAccount.accountId,
          },
        })
        return response.data
      }
    } catch (error) {
      console.error(error)
    }
  }
  const insertMemberCoupon = async () => {
    try {
      const currentAccount = JSON.parse(localStorage.getItem('myAuth'))
      if (currentAccount) {
        const response = await axios.get(TEST_INSERT_COUPON, {
          params: {
            accountId: currentAccount.accountId,
            coupon: coupon,
          },
        })
        return response.data
      }
    } catch (error) {
      console.error(error)
    }
  }

  const toggleSale = (v) => {
    switch (v) {
      case 5:
      case 4:
        setSale('75')
        setCoupon(12)
        break
      case 3:
        setSale('85')
        setCoupon(30)
        break
      case 2:
      case 1:
      case 0:
        setSale('95')
        setCoupon(13)
        break
      default:
        setSale('75')
        setCoupon(12)
    }
  }

  // useEffect(() => {
  //   // if Logged in
  //   const currentAccount = JSON.parse(localStorage.getItem('myAuth'))
  //   if (currentAccount) {
  //     setLoginAuth(currentAccount)
  //     setIfLogin(true)
  //   } else {
  //     setIfLogin(false)
  //   }
  // }, [])

  useEffect(() => {
    // console.log('newCoupon', newCoupon)
  }, [newCoupon])
  return (
    <TestCouponContext.Provider
      value={{
        newCoupon,
        setNewCoupon,
        toggleSale,
        sale,
        setSale,
        coupon,
        setCoupon,
        insertMemberPlay,
        insertMemberCoupon,
        test,
        setTest,
        ifPlay,
      }}
    >
      {children}
    </TestCouponContext.Provider>
  )
}
