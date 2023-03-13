import React, { createContext, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// FontAwesome
import { faXmark } from '@fortawesome/free-solid-svg-icons'

// Component
import NavbarShoppingCartItem from './NavbarShoppingCartItem'
import Button from './Button'

// Styles
import styles from './../styles/NavbarShoppingCart.module.css'
export const StylesContext = createContext(styles)

function NavbarShoppingCart(props) {
  const { open, setOpen } = props
  const shoppingCart = useRef(null)
  return (
    <StylesContext.Provider value={styles}>
      <div
        className={styles.bgColor}
        onClick={(e) => {
          console.log('click!')
          if (
            shoppingCart.current &&
            !e.currentTarget.contains(shoppingCart.current)
          ) {
            setOpen(false)
          }
        }}
        style={
          open
            ? { backgroundColor: 'rgba(0,0,0,0.5)', pointerEvents: 'auto' }
            : { backgroundColor: 'rgba(0,0,0,0)', pointerEvents: 'none' }
        }
      ></div>
      <section
        id={styles.nav_cart}
        ref={shoppingCart}
        style={open ? { right: '0' } : { right: '-500px' }}
      >
        <div className={styles.nav_bar_content}>
          <div className={styles.topbar}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1699_18358)">
                <path
                  d="M12.167 30.5C12.9954 30.5 13.667 29.8284 13.667 29C13.667 28.1716 12.9954 27.5 12.167 27.5C11.3386 27.5 10.667 28.1716 10.667 29C10.667 29.8284 11.3386 30.5 12.167 30.5Z"
                  fill="#6CBA7C"
                  stroke="#6CBA7C"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.5 30.5C27.3284 30.5 28 29.8284 28 29C28 28.1716 27.3284 27.5 26.5 27.5C25.6716 27.5 25 28.1716 25 29C25 29.8284 25.6716 30.5 26.5 30.5Z"
                  fill="#6CBA7C"
                  stroke="#6CBA7C"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 1.5H7.09091L10.5018 21.1382C10.6182 21.8134 10.937 22.42 11.4023 22.8516C11.8677 23.2833 12.45 23.5127 13.0473 23.4995H25.4182C26.0155 23.5127 26.5978 23.2833 27.0631 22.8516C27.5285 22.42 27.8473 21.8134 27.9636 21.1382L30 8.83315H8.36364"
                  stroke="#6CBA7C"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1699_18358">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h3 className={styles.title}>購物車</h3>
            <button
              onClick={() => {
                setOpen(false)
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div className={styles.shoppingcart_list}>
            {Array(10)
              .fill(0)
              .map((el, i) => {
                return <NavbarShoppingCartItem key={i} />
              })}
          </div>
          <div className={styles.checkout}>
            <div className={styles.total_price}>
              <span>合計</span>
              <div className={styles.order_price}>NTD 3200</div>
            </div>
            <Button text={'前往結賬'} style={{ width: '100%' }} />
          </div>
        </div>
      </section>
    </StylesContext.Provider>
  )
}

export default NavbarShoppingCart
