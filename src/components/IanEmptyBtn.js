import React, { useState } from 'react'
import styles from './../styles/IanShoppingCart2.module.css'

function IanEmptyBtn(props) {
  const { setMycheck } = props
  const [empty, setEmpty] = useState(false)
  return (
    <>
      <div className={`${styles['mb-48']} d-flex align-items-center`}>
        <input
          type="checkbox"
          id="sameOrder"
          name="sameOrder"
          checked={empty}
          onChange={() => {
            setMycheck(!empty)
            setEmpty(!empty)
          }}
        />
        <label htmlFor="sameOrder" className={`${styles.dataSame}`}>
          同訂購人資料
        </label>
      </div>
    </>
  )
}

export default IanEmptyBtn
