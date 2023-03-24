import React, { useState } from 'react'
import styles from './../styles/IanShoppingCart2.module.css'

function IanSameBtn(props) {
  const { setMySame } = props
  const [Same, setSame] = useState(false)
  return (
    <>
      <div className={`${styles['mb-48']} d-flex align-items-center`}>
        <input
          type="checkbox"
          id="sameOrder"
          name="sameOrder"
          checked={Same}
          onClick={() => {
            setMySame(!Same)
          }}
        />
        <label htmlFor="sameOrder" className={`${styles.dataSame}`}>
          同訂購人資料
        </label>
      </div>
    </>
  )
}

export default IanSameBtn
