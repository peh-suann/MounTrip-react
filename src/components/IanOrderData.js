import dayjs from 'dayjs'
import styles from './../styles/IanShoppingCart2.module.css'

function IanOrderData(props) {
  const { user, setUser, setAuth } = props

  return (
    <>
      {user.map((v, i) => {
        return (
          <div key={i} className={`${styles['form-inline']}`}>
            <div className={`${styles['mb-20']} row justify-content-between `}>
              <div className={`${styles['form-group']} col-6`}>
                <label htmlFor="firstName">名字</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={v.firstname}
                  onChange={(e) => {
                    setUser(e.target.value)
                  }}
                  required
                />
              </div>
              <div className={`${styles['form-group']} col-6`}>
                <label htmlFor="lastName">姓氏</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={v.lastname}
                  onChange={(e) => {
                    setUser(e.target.value)
                  }}
                  required
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
                name="phone"
                value={v.phone}
                onChange={(e) => {
                  setUser(e.target.value)
                }}
                required
              />
            </div>
            <div
              className={`${styles['form-group']} ${styles['mb-20']} col-12`}
            >
              <label htmlFor="email">電子郵件信箱</label>
              <input
                type="email"
                id="email"
                name="email"
                value={v.email}
                onChange={(e) => {
                  setUser(e.target.value)
                }}
                required
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
                  id="idCard"
                  value={v.idCard}
                  name="idCard"
                  onChange={(e) => {
                    setUser(e.target.value)
                  }}
                  required
                />
              </div>
              <div
                className={`${styles['form-group']} ${styles['mb-88']} col-6`}
              >
                <label htmlFor="traveler1-birthday">出生年月日</label>
                <input
                  type="date"
                  id="birthday"
                  value={v.birthday}
                  name="birthday"
                  onChange={(e) => {
                    setAuth(e.target.value)
                  }}
                  required
                />
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default IanOrderData
