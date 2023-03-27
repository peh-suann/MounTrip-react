import React, { useState, Fragment } from 'react'
import IanTravelerSame from './IanTravelerSame'

function IanShowDetail(props) {
  const { toggleOpen, quantity, memberitems, traveler, Auth, setAuth } = props
  const [mySame, setMySame] = useState(false)
  return (
    <>
      {toggleOpen
        ? Array(quantity)
            .fill(1)
            .map((v, i) => {
              return (
                <Fragment key={i}>
                  <IanTravelerSame
                    mySame={mySame}
                    memberitems={memberitems}
                    firstname={v.firstname}
                    lastname={v.lastname}
                    phone={v.phone}
                    email={v.email}
                    idCard={v.idCard}
                    birthday={v.birthday}
                    id={i}
                    setMySame={setMySame}
                    traveler={traveler}
                    setAuth={setAuth}
                  />
                </Fragment>
              )
            })
        : null}
    </>
  )
}

export default IanShowDetail
