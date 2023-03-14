import React, { createContext, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// FontAwesome
import { faXmark, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

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
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={
                document.documentElement.clientWidth > 390
                  ? { fontSize: '28px' }
                  : { fontSize: '20px' }
              }
            />
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
            {Array(4)
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
