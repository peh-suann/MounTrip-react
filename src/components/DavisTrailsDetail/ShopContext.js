import { createContext, useState } from 'react'

const unShop = {
  trail_sid: '',
  // trail_img: '',
  trail_name: '',
  batch_start: '',
  batch_end: '',
  sid: '', //batch
  count: 0,
  price: 0,
  total_price: 0,
}

let initShop = { ...unShop }

const str = localStorage.getItem('myShopcar')

try {
  if (str) {
    const localShop = JSON.parse(str)
    if (localShop.token && localShop.account && localShop.accountId) {
      initShop = {
        sid: localShop.trail_sid,
      }
    }
  }
} catch (ex) {}

const ShopContext = createContext({})
export default ShopContext

export const ShopContextProvider = function ({ children }) {
  const [shopcar, setShopcar] = useState(initShop)
  return (
    <ShopContext.Provider value={{ shopcar, setShopcar }}>
      {children}
    </ShopContext.Provider>
  )
}
