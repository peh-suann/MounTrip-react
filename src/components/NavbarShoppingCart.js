import React, { createContext, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faAdd } from '@fortawesome/free-solid-svg-icons'

// FontAwesome
import { faXmark, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

// Component
import NavbarShoppingCartItem from './NavbarShoppingCartItem'
import Button from './Button'

// Styles
import styles from './../styles/NavbarShoppingCart.module.css'

//useCart
import { useCart } from './IanUseCart'
import { Link, useNavigate } from 'react-router-dom'

export const StylesContext = createContext(styles)

function NavbarShoppingCart(props) {
  const { cart, items, plusOne, minusOne, removeItem } = useCart()
  const { open, setOpen } = props
  const shoppingCart = useRef(null)
  const navigate = useNavigate()

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
            {/* {Array(4)
              .fill(0)
              .map((el, i) => {
                return <NavbarShoppingCartItem key={i} />
              })} */}
            {items.map((v, i) => {
              return (
                <div key={i} className={styles.shoppingcart_item}>
                  <div className={styles.item_info}>
                    <div
                      className={styles.pic}
                      style={{
                        backgroundImage: `url('./imgs/Ian_img/${v.trail_img}')`,
                      }}
                    ></div>
                    <div className={styles.detail}>
                      <h5 className={styles.item_name}>{v.trail_name}</h5>
                      {/* <button
                        onClick={() => {
                          console.log('click')
                          removeItem(v.sid)
                        }}
                        className={`${styles.cancel} btn btn-unstyle`}
                      >
                        <FontAwesomeIcon icon={faXmark} />
                      </button> */}
                      <h6 className={styles.item_describe}>
                        {v.trail_name}單日行程
                      </h6>
                      <p className={styles.item_date}>
                        {v.batch_start} - {v.batch_end}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        console.log('click')
                        removeItem(v.sid)
                      }}
                      className={`${styles.cancel} btn btn-unstyle`}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                  </div>
                  <div className={styles.price_num}>
                    <div className={styles.price}>
                      <div className={styles.single}>NTD {v.price}</div>
                      <div className={styles.total}>NTD {v.itemTotal}</div>
                    </div>
                    <div className={styles.num}>
                      <button className={styles.disable}>
                        <FontAwesomeIcon
                          icon={faMinus}
                          onClick={() => {
                            console.log('plusclick:', v.sid)
                            minusOne(v.sid)
                          }}
                        />
                      </button>
                      <span>{v.quantity} 人</span>
                      <button>
                        <FontAwesomeIcon
                          icon={faAdd}
                          onClick={() => {
                            console.log('plusclick:', v.sid)
                            plusOne(v.sid)
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className={styles.checkout}>
            <div className={styles.total_price}>
              <span>合計</span>
              <div className={styles.order_price}>NTD {cart.cartTotal}</div>
            </div>
            {/* <Link to="/SC1" style={{ width: '100%' }}> */}
            <Button text={'前往結賬'} style={{ width: '100%' }} link="SC1" />
            {/* </Link> */}
          </div>
        </div>
      </section>
    </StylesContext.Provider>
  )
}

export default NavbarShoppingCart
