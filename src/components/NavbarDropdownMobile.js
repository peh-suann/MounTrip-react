// Hooks
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// Components
import AuthContext from '../contexts/AuthContexts'
import { MemberContext } from '../contexts/MemberContext'

// styles
import DropdownMobileCss from '../styles/NavbarDropdownMobile.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// FontAwesome
import {
  faUser,
  faGift,
  faAward,
  faClock,
  faComment,
  faHeart,
  faArrowRightFromBracket,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons'

function NavbarDropdown(props) {
  const { showListMobile, setShowListMobile } = props
  const { myAuth, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  //會員頁面換頁
  const { memberPage, setMemberPage } = useContext(MemberContext)

  return (
    <div
      className={DropdownMobileCss['dropdown-mobile-wrap']}
      style={
        showListMobile
          ? { backgroundColor: 'rgba(0,0,0,0.25)', pointerEvents: 'auto' }
          : { backgroundColor: 'rgba(0,0,0,0)', pointerEvents: 'none' }
      }
      onClick={(e) => {
        // console.log(e.target.className)
        // console.log(e.target.className.includes('dropdown-mobile-wrap'))
        if (e.target.className.includes('dropdown-mobile-wrap')) {
          setShowListMobile(!showListMobile)
        }
      }}
    >
      <div
        className={`${DropdownMobileCss['dropdown-mobile']} d-flex flex-column justify-content-between`}
        style={showListMobile ? { left: '0' } : { left: '-200px' }}
      >
        <div>
          <div
            className={DropdownMobileCss['top-chevronLeft']}
            onClick={(e) => {
              setShowListMobile(!showListMobile)
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 26L14 18L22 10"
                stroke="#6CBA7C"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <ul className={DropdownMobileCss['nav_navigations']}>
            <li>
              <a className={DropdownMobileCss['link']} href="/products">
                商品總覽
              </a>
            </li>
            <li>
              <a className={DropdownMobileCss['link']} href="/">
                難易分級
              </a>
            </li>
            <li>
              <a className={DropdownMobileCss['link']} href="/">
                季節推薦
              </a>
            </li>
            <li>
              <a className={DropdownMobileCss['link']} href="/test">
                線上測驗
              </a>
            </li>
          </ul>
        </div>

        {myAuth.authorized ? (
          <div className={DropdownMobileCss['member-list']}>
            <div
              className={`${DropdownMobileCss['bottom-padding']} d-flex align-items-center`}
            >
              <FontAwesomeIcon icon={faUser} />
              <a
              className={`${DropdownMobileCss['dropdown-p']} mb-0`}
              href="/member"
              onClick={() => {
                setMemberPage('member')
                localStorage.setItem('memberPage', 'member')
              }}
            >
              會員中心
            </a>
            </div>
            <div
              className={`${DropdownMobileCss['bottom-padding']} d-flex align-items-center`}
            >
              <FontAwesomeIcon icon={faGift} />
              <a
              className={`${DropdownMobileCss['dropdown-p']} mb-0`}
              href="/member"
              onClick={() => {
                setMemberPage('coupon')
                localStorage.setItem('memberPage', 'coupon')
              }}
            >
              我的優惠券
            </a>
            </div>
            <div
              className={`${DropdownMobileCss['bottom-padding']} d-flex align-items-center`}
            >
              <FontAwesomeIcon icon={faAward} />
              <a
              className={`${DropdownMobileCss['dropdown-p']} mb-0`}
              href="/member"
              onClick={() => {
                setMemberPage('achievement')
                localStorage.setItem('memberPage', 'achievement')
              }}
            >
              成就獎章
            </a>
            </div>
            <div
              className={`${DropdownMobileCss['bottom-padding']} d-flex align-items-center`}
            >
              <FontAwesomeIcon icon={faClock} />
              <a
              className={`${DropdownMobileCss['dropdown-p']} mb-0`}
              href="/member"
              onClick={() => {
                setMemberPage('history-order')
                localStorage.setItem('memberPage', 'history-order')
              }}
            >
              歷史訂單
            </a>
            </div>
            <div
              className={`${DropdownMobileCss['bottom-padding']} d-flex align-items-center`}
            >
              <FontAwesomeIcon icon={faComment} />
              <a
              className={`${DropdownMobileCss['dropdown-p']} mb-0`}
              href="/member"
              onClick={() => {
                setMemberPage('comment')
                localStorage.setItem('memberPage', 'comment')
              }}
            >
              過往評論
            </a>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faHeart} />
              <a
              className={`${DropdownMobileCss['dropdown-p']} mb-0`}
              href="/member"
              onClick={() => {
                setMemberPage('favorite')
                localStorage.setItem('memberPage', 'favorite')
              }}
            >
              收藏路線
            </a>
            </div>
            <div
              className={`${DropdownMobileCss['bottom-padding']} d-flex align-items-center 
            ${DropdownMobileCss['logout']}`}
              onClick={() => {
                logout()
                navigate('/index')
                // setShowListMobile(!showListMobile)
              }}
            >
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              <p className={`${DropdownMobileCss['dropdown-p']} mb-0`}>登出</p>
            </div>
          </div>
        ) : (
          <div className={DropdownMobileCss['member-list']}>
            <div
              className={`${DropdownMobileCss['bottom-padding']} d-flex align-items-center 
           ${DropdownMobileCss['login']}`}
              onClick={() => {
                navigate('/login')
              }}
            >
              <FontAwesomeIcon icon={faArrowRightToBracket} />
              <p className={`${DropdownMobileCss['dropdown-p']} mb-0`}>登入</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavbarDropdown
