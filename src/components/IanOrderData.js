import { useState } from 'react'

function IanOrderData(props) {
  const { styles, items, setItems } = props

  const [orderData, setOrderData] = useState(items)
  setItems(orderData)
  return (
    <>
      {orderData.map((v, i) => {
        return (
          <form key={v.id} className={`${styles['form-inline']}`} action=" ">
            <div className={`${styles['mb-20']} row justify-content-between `}>
              <div className={`${styles['form-group']} col-6`}>
                <label htmlFor="firstName">名字</label>
                <input
                  type="text"
                  id="firstName"
                  value={v.firstname}
                  onChange={(e) => {
                    // e.preventDefault()
                  }}
                />
              </div>
              <div className={`${styles['form-group']} col-6`}>
                <label htmlFor="lastName">姓氏</label>
                <input
                  type="text"
                  id="lastName"
                  value={v.lastname}
                  onChange={(e) => {
                    // e.preventDefault()
                  }}
                />
              </div>
            </div>
            <div
              className={`${styles['form-group']} ${styles['mb-20']}  col-12`}
            >
              <label htmlFor="phone">聯絡電話</label>
              <input
                type="tel"
                id="phone"
                value={v.phone}
                onChange={(e) => {
                  // e.preventDefault()
                }}
              />
            </div>
            <div
              className={`${styles['form-group']} ${styles['mb-20']} col-12`}
            >
              <label htmlFor="email">電子郵件信箱</label>
              <input
                type="email"
                id="email"
                value={v.email}
                onChange={(e) => {
                  // e.preventDefault()
                }}
              />
            </div>
            <div className={`${styles['mb-20']} row justify-content-between`}>
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
                  onChange={(e) => {
                    // e.preventDefault()
                  }}
                />
              </div>
              <div
                className={`${styles['form-group']} ${styles['mb-88']} col-6`}
              >
                <label htmlFor="traveler1-birthday">出生年月日</label>
                <input
                  type="date"
                  id="traveler1-birthday"
                  value={v.birthday}
                  onChange={(e) => {
                    // e.preventDefault()
                  }}
                />
              </div>
            </div>
          </form>
        )
      })}
    </>
  )
}

export default IanOrderData
