import dayjs from 'dayjs'
import styles from './../styles/IanShoppingCart2.module.css'

function IanOrderData(props) {
  // const handleFieldChange = (e) => {
  //   const newUser = { ...user, [e.target.name]: e.target.value }
  //   setUser(newUser)
  // }

  const { user, setUser } = props

  // const [orderData, setOrderData] = useState(user)
  // setMemberItems(orderData)

  return (
    <>
      {/* {memberitems.map((v, i) => {
        return ( */}
      <div className={`${styles['form-inline']}`} action=" ">
        <div className={`${styles['mb-20']} row justify-content-between `}>
          <div className={`${styles['form-group']} col-6`}>
            <label htmlFor="firstName">名字</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={user.firstname}
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
              value={user.lastname}
              onChange={(e) => {
                setUser(e.target.value)
              }}
              required
            />
          </div>
        </div>
        <div className={`${styles['form-group']} ${styles['mb-20']}  col-12`}>
          <label htmlFor="phone">聯絡電話</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={user.mobile}
            onChange={(e) => {
              setUser(e.target.value)
            }}
            required
          />
        </div>
        <div className={`${styles['form-group']} ${styles['mb-20']} col-12`}>
          <label htmlFor="email">電子郵件信箱</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
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
              value={user.personal_id}
              name="idCard"
              onChange={(e) => {
                setUser(e.target.value)
              }}
              required
            />
          </div>
          <div className={`${styles['form-group']} ${styles['mb-88']} col-6`}>
            <label htmlFor="traveler1-birthday">出生年月日</label>
            <input
              type="date"
              id="birthday"
              value={dayjs(user.birthday).format('YYYY-MM-DD')}
              name="birthday"
              onChange={(e) => {
                setUser(e.target.value)
              }}
              required
            />
          </div>
        </div>
      </div>
      {/* )
      })}*/}
    </>
  )
}

export default IanOrderData
