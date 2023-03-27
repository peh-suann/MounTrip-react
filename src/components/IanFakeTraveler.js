import React, { useState } from 'react'
import styles from './../styles/IanShoppingCart2.module.css'
import IanTravelerBtn from './IanTravelerBtn'
import IanSameBtn from './IanSameBtn'

function IanFakeTraveler(props) {
  const { Auth, memberitems } = props
  const [mycheck, setMycheck] = useState(false)
  return (
    <>
      {mycheck
        ? memberitems.map((v2, i2) => {
            return (
              <div
                key={i2}
                className={`${styles['form-inline']} ${styles['mb-50']} `}
                action=" "
              >
                <div
                  className={`${styles['mb-20']} row justify-content-between `}
                >
                  <div className={`${styles['form-group']} col-6`}>
                    <label
                      htmlFor="
    traveler1-firstName"
                    >
                      名字
                    </label>
                    <input
                      type="text"
                      id="traveler1-firstName"
                      value={v2.firstname}
                      onChange={() => {}}
                    />
                  </div>
                  <div className={`${styles['form-group']} col-6`}>
                    <label htmlFor="traveler1-lastName">姓氏</label>
                    <input
                      type="text"
                      className={`${styles['form-control']} `}
                      id="traveler1-lastName"
                      value={v2.lastname}
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div
                  className={`${styles['form-group']} ${styles['mb-20']} col-12`}
                >
                  <label htmlFor="traveler1-phone">聯絡電話</label>
                  <input
                    type="tel"
                    id="traveler1-phone"
                    value={v2.phone}
                    onChange={() => {}}
                  />
                </div>
                <div
                  className={`${styles['form-group']} ${styles['mb-20']} col-12`}
                >
                  <label htmlFor="traveler1-email">電子郵件信箱</label>
                  <input
                    type="email"
                    id="traveler1-email"
                    value={v2.email}
                    onChange={() => {}}
                  />
                </div>
                <div
                  className={`${styles['mb-20']} row justify-content-between`}
                >
                  <div className={`${styles['form-group']} col-6`}>
                    <label
                      htmlFor="
    traveler1-id"
                    >
                      身分證字號
                    </label>
                    <input
                      type="text"
                      id="traveler1-id"
                      value={v2.idCard}
                      onChange={() => {}}
                    />
                  </div>
                  <div className={`${styles['form-group']} col-6`}>
                    <label htmlFor="traveler1-birthday">出生年月日</label>
                    <input
                      type="date"
                      id="traveler1-birthday"
                      value={v2.birthday}
                      onChange={() => {}}
                    />
                  </div>
                </div>
                {/* <IanTravelerBtn mycheck={mycheck} setMycheck={setMycheck} /> */}
                <IanSameBtn mycheck={mycheck} setMycheck={setMycheck} />
              </div>
            )
          })
        : Auth.map((v, i) => {
            return (
              <div
                key={i}
                className={`${styles['form-inline']} ${styles['mb-50']} `}
                action=" "
              >
                <div
                  className={`${styles['mb-20']} row justify-content-between `}
                >
                  <div className={`${styles['form-group']} col-6`}>
                    <label
                      htmlFor="
    traveler1-firstName"
                    >
                      名字
                    </label>
                    <input
                      type="text"
                      id="traveler1-firstName"
                      value={v.firstname}
                      onChange={() => {}}
                    />
                  </div>
                  <div className={`${styles['form-group']} col-6`}>
                    <label htmlFor="traveler1-lastName">姓氏</label>
                    <input
                      type="text"
                      className={`${styles['form-control']} `}
                      id="traveler1-lastName"
                      value={v.lastname}
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div
                  className={`${styles['form-group']} ${styles['mb-20']} col-12`}
                >
                  <label htmlFor="traveler1-phone">聯絡電話</label>
                  <input
                    type="tel"
                    id="traveler1-phone"
                    value={v.phone}
                    onChange={() => {}}
                  />
                </div>
                <div
                  className={`${styles['form-group']} ${styles['mb-20']} col-12`}
                >
                  <label htmlFor="traveler1-email">電子郵件信箱</label>
                  <input
                    type="email"
                    id="traveler1-email"
                    value={v.email}
                    onChange={() => {}}
                  />
                </div>
                <div
                  className={`${styles['mb-20']} row justify-content-between`}
                >
                  <div className={`${styles['form-group']} col-6`}>
                    <label
                      htmlFor="
    traveler1-id"
                    >
                      身分證字號
                    </label>
                    <input
                      type="text"
                      id="traveler1-id"
                      value={v.idCard}
                      onChange={() => {}}
                    />
                  </div>
                  <div className={`${styles['form-group']} col-6`}>
                    <label htmlFor="traveler1-birthday">出生年月日</label>
                    <input
                      type="date"
                      id="traveler1-birthday"
                      value={v.birthday}
                      onChange={() => {}}
                    />
                  </div>
                </div>
                {/* <IanTravelerBtn mycheck={mycheck} setMycheck={setMycheck} /> */}
                <IanSameBtn mycheck={mycheck} setMycheck={setMycheck} />
              </div>
            )
          })}
    </>
  )
}

export default IanFakeTraveler
