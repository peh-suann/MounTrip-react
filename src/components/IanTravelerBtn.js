import React, { useState } from 'react'
import IanSameBtn from './IanSameBtn'
import IanEmptyBtn from './IanEmptyBtn'

function IanTravelerBtn(props) {
  const { mycheck, setMycheck } = props
  return (
    <>
      {mycheck ? (
        <IanSameBtn mycheck={mycheck} setMycheck={setMycheck} />
      ) : (
        <IanEmptyBtn setMycheck={setMycheck} />
      )}
    </>
  )
}

export default IanTravelerBtn
