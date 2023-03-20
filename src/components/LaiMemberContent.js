import React, { useContext, useState, useReducer, useEffect } from 'react'
import styles from './../styles/Member.module.css'
import { MemberContext } from './../contexts/MemberContext.js'
import AuthContext from './../contexts/AuthContexts'
import { motion } from 'framer-motion'
import Backdrop from './LaiBackdrop/Backdrop'
import axios from 'axios'
import { USER_DATA_UPDATE } from '../connections/api-config'

export default function MemberContent(props) {
  const {
    user,
    setUser,
    modalOpen,
    pwdModalOpen,
    handlePwdModalOpen,
    pwdClose,
    pwdOpen,
    close,
    open,
  } = props
  // console.log('user:',user)
  const ACTIONS = {
    INITIAL: 'initial', //載入資料庫
    UPDATE: 'update', //使用者更新資料
    SETDATA: 'setdata', //設定資料庫資料 submit用
  }
  const initialState = {
    userData: {
      lastname: '',
      firstname: '',
      gender: '',
      birthday: '',
      personalId: '',
      mobile: '',
      account: '',
      email: '',
      zip: '',
      city: '',
      address: '',
    },
    loading: false,
  }
  const userReducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.INITIAL:
        return {
          ...state,
          userData: action.payload,
          loading: false,
        }
      case ACTIONS.UPDATE:
        return {
          ...state,
          userData: {
            ...state.userData,
            [action.payload.name]: action.payload.value,
          },
        }
      default:
        return state.userData
    }
    // return { lastname: state.lastname }
  }
  //用useReducer改寫，參數放reducer func 和 initialState
  const [userInfo, dispatch] = useReducer(userReducer, initialState)

  //state = 現在的state action就是要pass進dispatch的func
  //reducer會在我們呼叫dispatch的時候回傳新的state

  function handleUpdateLastname(e) {
    // e.preventDefault()
    dispatch({ type: ACTIONS.UPDATE, payload: {} }) //payload是常用名稱，內容就是要給dispatch的參數
  }
  function handleUpdate(e) {
    // e.preventDefault()
    dispatch({
      type: ACTIONS.UPDATE,
      payload: { name: e.target.name, value: e.target.value },
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const userString = localStorage.getItem('myAuth')
    const user = JSON.parse(userString)
    const sid = user.accountId
    const token = user.token
    let formData = new FormData()
    const convertBirthday = new Date(userInfo.userData.birthday)
    const year = convertBirthday.getFullYear()
    const month = String(convertBirthday.getMonth() + 1).padStart(2, '0')
    const day = String(convertBirthday.getDate()).padStart(2, '0')
    const birthdayFormat = `${year}-${month}-${day}`
    formData.append('firstname', userInfo.userData.firstname)
    formData.append('lastname', userInfo.userData.lastname)
    formData.append('gender', userInfo.userData.gender)
    formData.append('birthday', birthdayFormat)
    formData.append('personalId', userInfo.userData.personal_id)
    formData.append('mobile', userInfo.userData.mobile)
    formData.append('account', userInfo.userData.account)
    formData.append('email', userInfo.userData.email)
    formData.append('zip', userInfo.userData.zip)
    formData.append('city', userInfo.userData.city)
    formData.append('address', userInfo.userData.address)
    const res = await axios.post(USER_DATA_UPDATE(sid), formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
        sid: `${sid}`,
      },
    })
    // FIXME 生日資料還不能上傳
    // FIXME 按下enter會跳出表單
    // TODO  照片上傳錯誤的判斷
    if (!res) return alert('上傳失敗')
  }
  function handleLoad(e) {
    dispatch({
      type: ACTIONS.INITIAL,
      payload: { name: e.user.name, value: e.user.value },
    })
  }
  function handleSubmitXX(e) {
    e.preventDefault()
    dispatch({
      type: ACTIONS.SETDATA,
      // payload: { name: e.target.name, value: e.target.value },
    })
  }
  //現在的state
  console.log('userInfo', userInfo)
  //資料庫的資料
  // console.log('user:', user)

  useEffect(() => {
    dispatch({
      type: ACTIONS.INITIAL,
      payload: user,
    })
  }, [user])
  // const [lastname, setLastname] = useState('')
  // const [firstname, setFirstname] = useState(user.firstname)
  // const [gender, setGender] = useState(user.gender)
  // const [bday, setBday] = useState(user.birthday)
  // const [personalId, setPersonalId] = useState(user.personal_id)
  // const [mobile, setMobile] = useState(user.mobile)
  // const [account, setAccount] = useState(user.account)
  // const [email, setEmail] = useState(user.email)
  // const [zip, setZip] = useState(user.zip)
  // const [city, setCity] = useState(user.city)
  // const [address, setAddress] = useState(user.address)
  // const { myAuth, setMyAuth, logout } = useContext(AuthContext)
  // function setUserData() {
  //   setLastname(user.lastname)
  // }
  // setGender(user.gender)
  // console.log('user', user.email)
  // console.log(user.gender, 'genderstate:', gender)
  //彈出重設密碼表單
  function modalControl() {
    if (pwdModalOpen) {
      pwdClose()
    } else {
      pwdOpen()
    }
  }

  //生日日期格式轉換
  const birthDate = new Date(user.birthday)
  const year = birthDate.getFullYear()
  const month = String(birthDate.getMonth() + 1).padStart(2, '0') //預設字串長度要兩個字，用0填充不夠的部分
  const day = String(birthDate.getDate()).padStart(2, '0')
  const dateFormat = `${year}-${month}-${day}`

  // console.log('生日：', dateFormat)

  return (
    <>
      <Backdrop />
      <div className={styles['member-data']}>
        <div className={styles['title']}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.4446 30.0001V26.889C28.4446 25.2387 27.789 23.6561 26.6221 22.4892C25.4552 21.3223 23.8726 20.6667 22.2223 20.6667H9.77789C8.12765 20.6667 6.545 21.3223 5.37811 22.4892C4.21122 23.6561 3.55566 25.2387 3.55566 26.889V30.0001"
              stroke="#6CBA7C"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.0005 14.4444C19.437 14.4444 22.2228 11.6587 22.2228 8.22222C22.2228 4.78578 19.437 2 16.0005 2C12.5641 2 9.77832 4.78578 9.77832 8.22222C9.77832 11.6587 12.5641 14.4444 16.0005 14.4444Z"
              stroke="#6CBA7C"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h1>會員中心</h1>
        </div>
        <form
          className={styles['data-area']}
          action=""
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <div className={`${styles['name-wrap']} ${styles['input-blocks']}`}>
            <label htmlFor="firstname" className="">
              名字
            </label>
            <input
              type="text"
              className=""
              id="firstname"
              name="firstname"
              value={userInfo.userData.firstname}
              onChange={(e) => {
                handleUpdate(e)
                // setFirstname(e.target.value.firstname)
                // handleUpdateLastname(e.target.value)
              }}
              required
            />
          </div>
          <div className={`${styles['fname-wrap']} ${styles['input-blocks']}`}>
            <label htmlFor="lastname" className={''}>
              姓氏
            </label>
            <input
              type="text"
              className={''}
              id="lastname"
              name="lastname"
              value={userInfo.userData.lastname}
              onChange={(e) => {
                handleUpdate(e)
                // setLastname(e.target.value.lastname)
              }}
              required
            />
          </div>
          <div className={`${styles['gender-wrap']} ${styles['input-blocks']}`}>
            <label htmlFor="" className="">
              性別
            </label>
            <select
              name="gender"
              value={userInfo.userData.gender}
              onChange={(e) => {
                handleUpdate(e)
                // setGender(e.target.value)
              }}
            >
              <option value="male">男性</option>
              <option value="female">女性</option>
              <option value="none">不透露</option>
            </select>
            {/* {genderSwitch(user.gender)} */}
            {/* <option value="male">男性</option>
                  <option value="female">女性</option>
                  <option value="none">不透露</option> */}
          </div>
          <div
            className={`${styles['birth-wrap']} ${styles['input-blocks']}`}
            //   className={styles['birth-wrap']}
          >
            <label htmlFor="birthday" className="">
              出生年月日
            </label>
            <input
              type="date"
              className=""
              id="birthday"
              name="birthday"
              value={userInfo.userData.bdFormat}
              onChange={(e) => {
                handleUpdate(e)
                // setBday(e.target.value.birthday)
              }}
              required
            />
          </div>
          <div className={`${styles['id-wrap']} ${styles['input-blocks']}`}>
            <label htmlFor="personal_id" className="">
              身分證字號
            </label>
            <input
              type="text"
              className=""
              id="personal_id"
              name="personal_id"
              value={userInfo.userData.personal_id}
              onChange={(e) => {
                handleUpdate(e)
                // setPersonalId(e.target.value.personal_id)
              }}
              required
            />
          </div>
          <div className={`${styles['phone-wrap']} ${styles['input-blocks']}`}>
            <label htmlFor="mobile" className="">
              聯絡電話
            </label>
            <input
              type="text"
              className=""
              id="mobile"
              name="mobile"
              value={userInfo.userData.mobile}
              onChange={(e) => {
                handleUpdate(e)
                // setMobile(e.target.value.mobile)
              }}
              required
            />
          </div>
          <div
            className={`${styles['account-wrap']} ${styles['input-blocks']}`}
          >
            <label htmlFor="account" className="">
              會員帳號
            </label>
            <input
              type="text"
              className={''}
              id="account"
              name="account"
              value={userInfo.userData.account}
              onChange={(e) => {
                handleUpdate(e)
                // setAccount(e.target.value)
              }}
              required
            />
          </div>
          <div className={`${styles['email-wrap']} ${styles['input-blocks']}`}>
            <label htmlFor="email" className="">
              電子信箱
            </label>
            <input
              type="email"
              className=""
              id="email"
              name="email"
              value={userInfo.userData.email}
              onChange={(e) => {
                handleUpdate(e)
                // setEmail(e.target.value)
              }}
              required
            />
          </div>
          <div className={`${styles['zip-wrap']} ${styles['input-blocks']}`}>
            <label htmlFor="zip" className="">
              聯絡地址
            </label>
            <input
              type="text"
              className=""
              id="zip"
              name="zip"
              value={userInfo.userData.zip}
              onChange={(e) => {
                handleUpdate(e)
                // setZip(e.target.value)
              }}
              required
            />
          </div>
          <div className={`${styles['city-wrap']} ${styles['input-blocks']}`}>
            <div className={styles['fake-label-city']}></div>
            <select
              name="city"
              value={userInfo.userData.city}
              onChange={(e) => {
                handleUpdate(e)
                // setCity(e.target.value)
              }}
            >
              <option>基隆市</option>
              <option>臺北市</option>
              <option>新北市</option>
              <option>桃園市</option>
              <option>新竹市</option>
              <option>新竹縣</option>
              <option>苗栗縣</option>
              <option>臺中市</option>
              <option>彰化縣</option>
              <option>南投縣</option>
              <option>嘉義市</option>
              <option>嘉義縣</option>
              <option>臺南市</option>
              <option>高雄市</option>
              <option>屏東縣</option>
              <option>宜蘭縣</option>
              <option>台東縣</option>
              <option>花蓮縣</option>
              <option>澎湖縣</option>
              <option>連江縣</option>
            </select>
          </div>
          <div
            className={`${styles['address-wrap']} ${styles['input-blocks']}`}
          >
            <div className={styles['fake-label-add']}></div>
            <input
              type="text"
              className=""
              id="address"
              name="address"
              value={userInfo.userData.address}
              onChange={(e) => {
                handleUpdate(e)
                // setAddress(e.target.value)
              }}
            />
          </div>
          <div className={styles.btn_group}>
            <motion.button
              className={styles.password_btn}
              whileHover={{ scale: 1.1 }}
              whileTop={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault()
                modalControl(e)
              }}
            >
              更改密碼
            </motion.button>
            <motion.button
              className={styles['save-btn']}
              whileHover={{ scale: 1.1 }}
              whileTop={{ scale: 0.9 }}
              type="submit"
            >
              儲存變更
            </motion.button>
          </div>
        </form>
      </div>
    </>
  )
}
