import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMinus, faAdd } from '@fortawesome/free-solid-svg-icons'

import { StylesContext } from './NavbarShoppingCart'

function NavbarShoppingCartItem() {
  const styles = useContext(StylesContext)
  return (
    <div className={styles.shoppingcart_item}>
      <div className={styles.item_info}>
        <div className={styles.pic}></div>
        <div className={styles.detail}>
          <h5 className={styles.item_name}>
            草嶺古道｜探索新北一日遊探索新北一日遊
          </h5>
          <h6 className={styles.item_describe}>草嶺古道單日行程</h6>
          <p className={styles.item_date}>2023/01/01 - 2023/01/02</p>
        </div>
      </div>
      <div className={styles.price_num}>
        <div className={styles.price}>
          <div className={styles.single}>NTD 1200</div>
          <div className={styles.total}>NTD 2400</div>
        </div>
        <div className={styles.num}>
          <button className={styles.disable}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span>2</span>
          <button>
            <FontAwesomeIcon icon={faAdd} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavbarShoppingCartItem
