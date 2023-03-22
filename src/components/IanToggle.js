import { useState } from 'react'
import { useCart } from '../components/IanUseCart'

function IanToggle(props) {
  const { setOpen } = props
  const [toggleOpen, setToggleOpen] = useState(false)
  const { items } = useCart()

  //   const getId = (sid) => {
  //     return items.map((v, i) => {
  //       if (v.sid === sid) {
  //         setOpen(!open)
  //         setShow(!toggleShow)
  //       } else {
  //         return { ...v }
  //       }
  //     })
  //   }

  const id = items.map((v, i) => {
    return v.sid
  })

  return (
    <>
      {/* <svg
        onClick={(e) => {
          console.log(e.currentTarget.id)
          setOpen(!toggleopen)
        }}
        id={id}
        className={`me-2`}
        style={{ transform: `${toggleopen ? 'rotate(-90deg)' : ''}` }}
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 11.25L15 18.75L22.5 11.25"
          stroke="#6CBA7C"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg> */}
      <svg
        onClick={(e) => {
          console.log(e.currentTarget.id)
          setToggleOpen(!toggleOpen)
          setOpen(!toggleOpen)
        }}
        id={id}
        className={`me-2`}
        style={{ transform: `${toggleOpen ? 'rotate(90deg)' : ''}` }}
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.25 22.5L18.75 15L11.25 7.5"
          stroke="#6CBA7C"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  )
}

export default IanToggle
