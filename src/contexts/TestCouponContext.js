import React, { createContext, useEffect, useState } from 'react'

export const TestCouponContext = createContext(null)

export const TestCouponContextProvider = ({ children }) => {
  const [newCoupon, setNewCoupon] = useState(true)
  const [sale, setSale] = useState()
  const [coupon, setCoupon] = useState()

  // const [ifLogin, setIfLogin] = useState(false)
  // const isMyAuth = JSON.parse(localStorage.getItem('myAuth'))
  // if (isMyAuth) {
  //   setIfLogin(true)
  // }

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
      }}
    >
      {children}
    </TestCouponContext.Provider>
  )
}
