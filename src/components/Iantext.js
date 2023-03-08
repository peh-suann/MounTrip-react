import React, { useState } from 'react'
import './Iantext.css'

function Iantext() {
  //   const [boxMove, setBoxMove] = useState('translateY(0px)')
  const css = {
    transform: `translateY('0px')`,
  }

  return (
    <>
      <div className="d-flex">
        <div className="wrap">
          <div className="box"></div>
        </div>
        <div className="wrap">
          <div className="box2" onClick={() => {}}></div>
        </div>
      </div>
    </>
  )
}
export default Iantext
