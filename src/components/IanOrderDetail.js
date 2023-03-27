import { Fragment, useState } from 'react'
import IanToggleDetail from './IanToggleDetail'
import { useCart } from '../components/IanUseCart'
import styles from './../styles/IanShoppingCart2.module.css'

function IanOrderDetail(props) {
  const { items } = useCart()
  const { memberitems, traveler, setAuth, Auth } = props

  return (
    <>
      {items.map((v, i) => {
        return (
          <Fragment key={i}>
            <IanToggleDetail
              memberitems={memberitems}
              trail_name={v.trail_name}
              quantity={v.quantity}
              batch_start={v.batch_start}
              batch_end={v.batch_end}
              traveler={traveler}
              Auth={Auth}
              setAuth={setAuth}
            />
          </Fragment>
        )
      })}
    </>
  )
}

export default IanOrderDetail
