import styles from './../styles/Member.module.css'
import { useState, useEffect, useRef, useContext, useReducer } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import MemberContent from '../components/LaiMemberContent'
import CouponContent from '../components/LaiCouponContent'
import AchievementContent from '../components/LaiAchievementContent'
import HistoryOrder from '../components/LaiHistoryOrder'
import CommentContent from '../components/LaiCommentContent'
import FavoriteContent from '../components/LaiFavoriteContent'
import MobileDropdown from '../components/LaiMobileDropdown'
import MemberProfile from '../components/LaiMemberProfile'
import { MemberContext } from './../contexts/MemberContext.js'
import AuthContext from './../contexts/AuthContexts.js'
import {
  MEMBER_DATA,
  USER_DATA,
  USER_LEVEL_UPDATE,
  USER_UPLOAD,
} from '../connections/api-config'
import axios from 'axios'
import { motion } from 'framer-motion'
import Modal from '../components/LaiBackdrop/Modal'
import PasswordModal from '../components/LaiBackdrop/PasswordModal'
// import Gift from '../../src/icons/gift.svg'

// test coupon status
import { TestCouponContext } from '../contexts/TestCouponContext'
// test coupon style
import YichunModal from '../components/YichunModal'
import LaiModal from '../components/LaiModal'
import LaiModalUpdate from '../components/LaiModalUpdate'

export default function Member() {
  //member-data update success modal
  const [updateModal, setUpdateModal] = useState(false)
  const closeUpdateModal = () => setUpdateModal(false)
  //modal彈出視窗的
  const [modalOpen, setModalOpen] = useState(false)
  const open = () => setModalOpen(true)
  const close = () => setModalOpen(false)
  const handleModalToggle = () => {
    modalOpen ? close() : open()
  }
  //密碼modal
  const [pwdModalOpen, setPwdModalOpen] = useState(false)
  const pwdOpen = () => setPwdModalOpen(true)
  const pwdClose = () => setPwdModalOpen(false)
  const handlePwdModalOpen = () => {
    pwdModalOpen ? close() : open()
  }
  //顯示localstorage的登入者的資訊
  const { myAuth, setMyAuth, logout } = useContext(AuthContext)
  //先設定為空陣列，在把一個個user obj放進去
  const [user, setUser] = useState({})

  const authString = localStorage.getItem('myAuth')
  const auth = JSON.parse(authString)
  //抓資料的函式，全部人的資料都在這個api
  // const getUser = async (req, res) => {
  //   try {
  //     const res = await axios.get(MEMBER_DATA)
  //     const currentUserId = myAuth.sid
  //     const currentUserData = res.data.rows[currentUserId - 1]
  //     setUser(currentUserData)
  //     console.log('member-data-rows:', res.data.rows)
  //     console.log('user:', currentUserData)
  //     // return currentUserData
  //   } catch (error) {
  //     console.log('u:', user)
  //     // console.log()

  //     return []
  //   }
  // }
  //抓資料的函式，只抓登入會員的資料
  const getUser2 = async (req, res) => {
    const userString = localStorage.getItem('myAuth')
    const userData = JSON.parse(userString)
    // console.log('u.id:', user.accountId)
    const token = userData.token
    const mid = userData.accountId
    if (!token || !mid) {
      alert('您尚未登入，請先登入會員')
      navigate('/login')
    } else {
      try {
        const res = await axios.get(USER_DATA(mid), {
          headers: { Authorization: `Bearer ${token}` },
        })
        if (!res) return res.sendStatus(401)
        // const currentUserId = myAuth.sid
        const currentUserData = res.data
        setUser(currentUserData)
        // TODO 大頭貼檔名 = user.img
        const avatarName = res.data.img
        setAvatar(avatarName)
        // console.log('檔名', avatar)
        // console.log('member-data-rows:', res.data)
        // console.log('user:', currentUserData)
      } catch (error) {
        console.log('uu:', user)
        return []
      }
    }
  }
  //useContext Navbar選擇分頁，電腦版的分頁選擇也一起用這個state
  const { memberPage, setMemberPage } = useContext(MemberContext)
  const { page, setPage } = useState('member')

  //用useEffect呼叫getUser()，並且把從mobile navbar得到的localstorage item設定為分頁的state
  const navigate = useNavigate()
  useEffect(() => {
    if (auth) {
      const pageState = localStorage.getItem('memberPage')
      if (!pageState) {
        setMemberPage('member')
      } else {
        setMemberPage(pageState)
      }
      getUser2()
      window.scrollTo(0, 0)
    } else {
      alert('您尚未登入，請先登入會員')
      navigate('/login')
    }
    // naviagate('/'))
  }, [])

  const handleDisplayPage = (page) => {
    setMemberPage(page)
  }

  //fetch會員過去消費資料的
  const [orderSum, setOrderSum] = useState('')
  const totalReducer = (state, action) => {
    switch (action.type) {
      case 'initial':
        return {
          total: action.payload.reduce((acc, curr) => acc + curr.total, 0),
        }
      case 'reload':
        return {
          state,
        }
      default:
        return {
          total: action.payload.reduce((acc, curr) => acc + curr.total, 0),
        }
    }
  }
  const userString = localStorage.getItem('myAuth')
  const userdata = JSON.parse(userString) //localstorage出來的東西都是字串，需要解析
  const token = userdata.token
  const mid = user.accountId
  const [orderList, dispatch] = useReducer(totalReducer, { total: 0 })
  //判定會員升級的函式
  const levelUp = async () => {
    let url = null
    let futureLevel = 1
    if (
      user.level === 1 &&
      orderList.total > 25000 &&
      50000 > orderList.total
    ) {
      url = USER_LEVEL_UPDATE
      futureLevel = 2
    } else if (user.level === 2 && orderList.total > 50000) {
      url = USER_LEVEL_UPDATE
      futureLevel = 3
    } else if (user.level === 1 && orderList.total > 50000) {
      url = USER_LEVEL_UPDATE
      futureLevel = 3
    } else {
      return
    }
    try {
      // console.log('do update')
      const update = await axios.post(
        url,
        { sid: mid, futurelevel: futureLevel },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      console.log('level up success', update.data)
    } catch (err) {
      console.log('level up err', err)
    }
  }

  useEffect(() => {
    levelUp()
  }, [orderSum])

  //scroll位置改變mobile menu的位置
  const [scrollPosition, setScrollPosition] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    //清除狀態
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  //設定與瀏覽器視窗的比例關係
  const windowHeight = window.innerHeight
  const btnTopPosition = Math.max(
    15,
    Math.min(60, (scrollPosition / windowHeight) * 100)
  )

  //upload avatar modal
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
  const [uploaded, setUploaded] = useState(false)
  const [avatar, setAvatar] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userString = localStorage.getItem('myAuth')
    const user = JSON.parse(userString)
    const sid = user.accountId
    const token = user.token
    // console.log(image)
    let formData = new FormData()
    formData.append('file', image.data)
    const res = await axios.post(USER_UPLOAD, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
        sid: `${sid}`,
      },
    })
    // TODO  照片上傳錯誤的判斷
    if (res) return setStatus('上傳成功'), setUploaded(true)
    // setStatus('上傳成功')
    // alert(res.status)
  }
  const handleFiles = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }


  // yichun's coupon
  const {
    newCoupon,
    setNewCoupon,
    sale,
    insertMemberPlay,
    insertMemberCoupon,
    ifPlay,
  } = useContext(TestCouponContext)

  // YichunModal Content
  const [content, setContent] = useState('')
  const newCouponContent = `<h4>
    恭喜您完成登山安全小測驗 <br />
    您已收到一張 <span>${sale}折</span> 優惠券
    <br />
    祝您旅途平安！
    </h4>`
  const playedContent = `<h4>您已經領取過優惠券啦！</h4>`

  useEffect(() => {
    const fetchData = async () => {
      // 查看登入前是否有玩遊戲
      const loginPlay = localStorage.getItem('test')
      // 查看該帳號是否玩過遊戲
      const play = await ifPlay()
      // console.log('play', play)
      // console.log('1--')
      if (loginPlay) {
        // 登入前玩遊戲
        // console.log('play', play)
        setNewCoupon(true)
        // console.log('play', play)
        if (play.length > 0 && play[0].play_status === 1) {
          // 已玩過遊戲
          // console.log('3--')
          setContent(playedContent)
        } else {
          // 沒玩過遊戲
          // console.log('2--')
          await Promise.all([insertMemberPlay(), insertMemberCoupon()])
          setContent(newCouponContent)
        }
      } else {
        // 登入狀態下玩遊戲
        setContent(newCouponContent)
      }
    }
    fetchData()
  }, [])

  const handleClick = () => {
    setNewCoupon(false)
    localStorage.removeItem('test')
  }

  return (
    <>
      {newCoupon ? (
        <YichunModal
          handleClick={handleClick}
          content={content}
          btnToggle={1}
          btnText={'知道了'}
          btnLink={'member'}
        />
      ) : (
        ''
      )}
      {modalOpen ? (
        <LaiModal
          handleClick={handleSubmit}
          handleClose={close}
          getUser={getUser2}
          // content={uploadContent}
          btnToggle={1}
          btnText={'更換大頭貼'}
          btnLink={'member'}
        />
      ) : (
        ''
      )}
      {updateModal ? (
        <LaiModalUpdate
          handleClose={closeUpdateModal}
          getUser={getUser2}
          btnToggle={1}
          btnText={'會員資料更新成功！'}
          btnLink={'member'}
        />
      ) : (
        ''
      )}

      <div className={styles['grid-container']}>
        <div className={styles['sidebar']}>
          <MemberProfile
            img={avatar}
            avatar={avatar}
            name={user.firstname}
            familyname={user.lastname}
            level={user.level}
            account={user.account}
            handleModalToggle={handleModalToggle}
            modalOpen={modalOpen}
            close={close}
            open={open}
          />
          <motion.button
            className={styles['edit-btn']}
            onClick={() => {
              handleDisplayPage('member')
            }}
            whileHover={{ scale: 1.1 }}
            whileTop={{ scale: 0.9 }}
          >
            編輯個人資料
          </motion.button>
          <div className={styles['btn-border']}></div>
          <div className={styles['sidebar-menu']}>
            <li className={memberPage === 'coupon' ? styles['active'] : null}>
              <button
                onClick={() => {
                  handleDisplayPage('coupon')
                }}
              >
                <svg
                  className={styles['menu-icon']}
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 12.5V22.5H4V12.5"
                    stroke="#9AA09B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 7.5H2V12.5H22V7.5Z"
                    stroke="#9AA09B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22.5V7.5"
                    stroke="#9AA09B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 7.5H7.5C6.83696 7.5 6.20107 7.23661 5.73223 6.76777C5.26339 6.29893 5 5.66304 5 5C5 4.33696 5.26339 3.70107 5.73223 3.23223C6.20107 2.76339 6.83696 2.5 7.5 2.5C11 2.5 12 7.5 12 7.5Z"
                    stroke="#9AA09B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 7.5H16.5C17.163 7.5 17.7989 7.23661 18.2678 6.76777C18.7366 6.29893 19 5.66304 19 5C19 4.33696 18.7366 3.70107 18.2678 3.23223C17.7989 2.76339 17.163 2.5 16.5 2.5C13 2.5 12 7.5 12 7.5Z"
                    stroke="#9AA09B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>我的優惠券</span>
              </button>
            </li>
            <li
              className={memberPage === 'achievement' ? styles['active'] : null}
            >
              <button
                onClick={() => {
                  handleDisplayPage('achievement')
                }}
              >
                <svg
                  className={styles['menu-icon']}
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1298_10889)">
                    <path
                      d="M12 15.5C15.866 15.5 19 12.366 19 8.5C19 4.63401 15.866 1.5 12 1.5C8.13401 1.5 5 4.63401 5 8.5C5 12.366 8.13401 15.5 12 15.5Z"
                      stroke="#9AA09B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.21 14.39L7 23.5L12 20.5L17 23.5L15.79 14.38"
                      stroke="#9AA09B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1298_10889">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span>成就獎章</span>
              </button>
            </li>
            <li
              className={
                memberPage === 'history-order' ? styles['active'] : null
              }
            >
              <button
                onClick={() => {
                  handleDisplayPage('history-order')
                }}
              >
                <svg
                  className={styles['menu-icon']}
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
                    stroke="#9AA09B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 6.5V12.5L16 14.5"
                    stroke="#9AA09B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>歷史訂單</span>
              </button>
            </li>
            <li className={memberPage === 'comment' ? styles['active'] : null}>
              <button
                onClick={() => {
                  handleDisplayPage('comment')
                }}
              >
                <svg
                  className={styles['menu-icon']}
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 12C21.0034 13.3199 20.6951 14.6219 20.1 15.8C19.3944 17.2118 18.3098 18.3992 16.9674 19.2293C15.6251 20.0594 14.0782 20.4994 12.5 20.5C11.1801 20.5035 9.87812 20.1951 8.7 19.6L3 21.5L4.9 15.8C4.30493 14.6219 3.99656 13.3199 4 12C4.00061 10.4218 4.44061 8.87488 5.27072 7.53258C6.10083 6.19028 7.28825 5.1056 8.7 4.40003C9.87812 3.80496 11.1801 3.49659 12.5 3.50003H13C15.0843 3.61502 17.053 4.49479 18.5291 5.97089C20.0052 7.44699 20.885 9.41568 21 11.5V12Z"
                    stroke="#9AA09B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>過往評論</span>
              </button>
            </li>
            <li className={memberPage === 'favorite' ? styles['active'] : null}>
              <button
                onClick={() => {
                  handleDisplayPage('favorite')
                }}
              >
                <svg
                  className={styles['menu-icon']}
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8401 5.10999C20.3294 4.599 19.7229 4.19364 19.0555 3.91708C18.388 3.64052 17.6726 3.49817 16.9501 3.49817C16.2276 3.49817 15.5122 3.64052 14.8448 3.91708C14.1773 4.19364 13.5709 4.599 13.0601 5.10999L12.0001 6.16999L10.9401 5.10999C9.90843 4.0783 8.50915 3.4987 7.05012 3.4987C5.59109 3.4987 4.19181 4.0783 3.16012 5.10999C2.12843 6.14169 1.54883 7.54096 1.54883 8.99999C1.54883 10.459 2.12843 11.8583 3.16012 12.89L4.22012 13.95L12.0001 21.73L19.7801 13.95L20.8401 12.89C21.3511 12.3792 21.7565 11.7728 22.033 11.1053C22.3096 10.4379 22.4519 9.72248 22.4519 8.99999C22.4519 8.27751 22.3096 7.5621 22.033 6.89464C21.7565 6.22718 21.3511 5.62075 20.8401 5.10999Z"
                    stroke="#9AA09B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>收藏路線</span>
              </button>
            </li>
          </div>
        </div>

        {memberPage === 'member' && (
          <MemberContent
            user={user}
            setUser={setUser}
            modalOpen={modalOpen}
            close={close}
            open={open}
            handlePwdModalOpen={handlePwdModalOpen}
            updateModal={updateModal}
            setUpdateModal={setUpdateModal}
          />
        )}
        {memberPage === 'coupon' && (
          <CouponContent user={user} setUser={setUser} />
        )}
        {memberPage === 'achievement' && (
          <AchievementContent user={user} setUser={setUser} />
        )}
        {memberPage === 'history-order' && (
          <HistoryOrder user={user} setUser={setUser} />
        )}
        {memberPage === 'comment' && (
          <CommentContent user={user} setUser={setUser} />
        )}
        {memberPage === 'favorite' && (
          <FavoriteContent user={user} setUser={setUser} />
        )}
      </div>
    </>
  )
}
