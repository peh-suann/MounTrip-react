import React, { useState } from 'react'
import styles from './../styles/IanShoppingCart2.module.css'
import IanEmptyDetail from './IanEmptyDetail'
import IanSameDetail from './IanSameDetail'

function IanShowDetail(props) {
  const { toggleOpen, quantity, memberitems } = props
  const [same, setSame] = useState(false)

  return (
    <>
      {same ? (
        <IanSameDetail
          toggleOpen={toggleOpen}
          memberitems={memberitems}
          same={same}
          setSame={setSame}
        />
      ) : (
        <IanEmptyDetail
          toggleOpen={toggleOpen}
          quantity={quantity}
          setSame={setSame}
        />
      )}
    </>
  )
}

export default IanShowDetail
