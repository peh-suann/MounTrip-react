import { Fragment, useState } from 'react'
import IanToggleDetail from './IanToggleDetail'
import { useCart } from '../components/IanUseCart'
import styles from './../styles/IanShoppingCart2.module.css'

function IanOrderDetail(props) {
  const { items } = useCart()
  const { memberitems } = props
  const [open, setOpen] = useState(false)

  return (
    <>
      {items.map((v, i) => {
        return (
          <Fragment key={i}>
            <IanToggleDetail
              setOpen={setOpen}
              open={open}
              memberitems={memberitems}
              trail_name={v.trail_name}
              quantity={v.quantity}
              batch_start={v.batch_start}
              batch_end={v.batch_end}
            />
          </Fragment>
        )
      })}
    </>
  )
}

export default IanOrderDetail
