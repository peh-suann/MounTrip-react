import styles from './../styles/Member.module.css'
import { useState, useEffect, useRef, useContext } from 'react'
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
import { MEMBER_DATA, USER_DATA } from '../connections/api-config'
import axios from 'axios'
// import Gift from '../../src/icons/gift.svg'

export default function Member() {
  //顯示localstorage的登入者的資訊
  const { myAuth, setMyAuth, logout } = useContext(AuthContext)
  //先設定為空陣列，在把一個個user obj放進去
  const [user, setUser] = useState([])
  //抓資料的函式
  const getUser = async () => {
    try {
      const res = await axios.get(MEMBER_DATA)
      const currentUserId = myAuth.sid
      const currentUserData = res.data.rows[currentUserId - 1]
      setUser(currentUserData)
      console.log('member-data-rows:', res.data.rows)
      console.log('user:', currentUserData)
      return currentUserData
    } catch (error) {
      console.log('error')
      return []
    }
  }
  //用useEffect呼叫getUser()
  useEffect(() => {
    getUser()
    window.scrollTo(0, 0)
  }, [])

  //useContext Navbar選擇分頁
  const { memberPage, setMemberPage } = useContext(MemberContext)

  //電腦版的sidebar分頁選擇狀態
  const [displayPage, setDisplayPage] = useState('member')
  const handleDisplayPage = (page) => {
    setMemberPage(page)
  }
  //電腦版的sidebar-tag 在該頁面會有active的樣式 //直接寫在sidebar連結的onclick事件就好

  //手機版的menu 開合狀態
  const [mobileMenu, setMobileMenu] = useState(false)

  //用useEffect讓手機menu點擊外面也可以關閉
  let menuRef = useRef()

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setMobileMenu(false)
      }
    }
    document.addEventListener('click', handler)
    return () => {
      document.removeEventListener('click', handler)
    }
  }, [])

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
  return (
    <>
      <div className={styles['grid-container']}>
        <div className={styles['sidebar']}>
          <MemberProfile
            img={''}
            name={user.firstname}
            familyname={user.lastname}
            level={user.member_status}
            account={myAuth.account}
          />
          <button
            className={styles['edit-btn']}
            onClick={() => {
              handleDisplayPage('member')
            }}
          >
            編輯個人資料
          </button>
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
        {/* <MemberContent /> */}
        {/* <CouponContent /> */}
        {memberPage === 'member' && (
          <MemberContent user={user} setUser={setUser} />
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
      <div className={styles['mobile-menu']}>
        <div
          className={styles['mobile-dropdown-btn']}
          style={{ top: `${btnTopPosition}%` }}
          onClick={(e) => {
            e.stopPropagation()
            setMobileMenu(!mobileMenu)
          }}
        >
          <svg
            className={`${styles['dropdown-icon']}`}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 50 50"
            fill="#6CBA7C"
          >
            {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
            <path
              stroke="#6CBA7C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
            />
          </svg>
          {/* <svg
            className={`${styles['dropdown-icon']}`}
            width="25"
            height="25"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5 10C22.5 8.01088 21.7098 6.10322 20.3033 4.6967C18.8968 3.29018 16.9891 2.5 15 2.5C13.0109 2.5 11.1032 3.29018 9.6967 4.6967C8.29018 6.10322 7.5 8.01088 7.5 10C7.5 18.75 3.75 21.25 3.75 21.25H26.25C26.25 21.25 22.5 18.75 22.5 10Z"
              stroke="#6CBA7C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.1624 26.25C16.9426 26.6288 16.6272 26.9433 16.2477 27.1619C15.8682 27.3805 15.4379 27.4956 14.9999 27.4956C14.5619 27.4956 14.1316 27.3805 13.7521 27.1619C13.3726 26.9433 13.0572 26.6288 12.8374 26.25"
              stroke="#6CBA7C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg> */}
        </div>
        {/* {mobileMenu === true && (
          <MobileDropdown
            memberPage={memberPage}
            setMemberPage={setMemberPage}
            ref={menuRef}
            scrollPosition={btnTopPosition}
          />
        )} */}
      </div>
    </>
  )
}
