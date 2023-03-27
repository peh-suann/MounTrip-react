// Hooks
import { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useCart } from './IanUseCart'

// Components
import AuthContext from '../contexts/AuthContexts'
import { MemberContext } from '../contexts/MemberContext'
import { StatusContext } from '../pages/KexinIndex'
import { LoginContext } from '../App'

//styles
import DropdownCss from '../styles/NavbarDropdown.module.css'
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
import { contourDensity } from 'd3'

function NavbarDropdown(props) {
  // const { mapInteraction } = useContext(LoginContext)

  const { mapInteraction, showBox, setShowbox } = useContext(LoginContext)
  const { showList, setShowList } = props
  const { myAuth, logout } = useContext(AuthContext)
  const navigate = useNavigate()
  const { memberPage, setMemberPage } = useContext(MemberContext)
  const { clearCart } = useCart()

  return (
    <>
      <div
        className={DropdownCss['dropdown-wrap']}
        onClick={(e) => {
          if (e.target.className.includes('dropdown-wrap')) {
            setShowList(!showList)
          }
        }}
        onWheel={() => {
          setShowList(false)
        }}
      >
        <div
          className={DropdownCss.dropdown}
          style={
            mapInteraction === 2
              ? { right: '990px' }
              : mapInteraction === 1
              ? { right: '530px' }
              : { right: '100px' }
          }
        >
          <div
            className={`${DropdownCss['rect']} d-flex flex-column justify-content-between`}
          >
            <span></span>
            <div
              className={`${DropdownCss['bottom-line']} d-flex align-items-center ${DropdownCss['member-list']}`}
            >
              <FontAwesomeIcon icon={faUser} />
              <Link
                className={`${DropdownCss['dropdown-p']} mb-0`}
                to="/member"
                onClick={() => {
                  setMemberPage('member')
                  localStorage.setItem('memberPage', 'member')
                }}
              >
                會員中心
              </Link>
            </div>
            <div
              className={`d-flex align-items-center ${DropdownCss['member-list']}`}
            >
              <FontAwesomeIcon icon={faGift} />
              <Link
                className={`${DropdownCss['dropdown-p']} mb-0`}
                onClick={() => {
                  setMemberPage('coupon')
                  localStorage.setItem('memberPage', 'coupon')
                }}
                to="/member"
              >
                我的優惠券
              </Link>
            </div>
            <div
              className={`d-flex align-items-center ${DropdownCss['member-list']}`}
            >
              <FontAwesomeIcon icon={faAward} />
              <Link
                className={`${DropdownCss['dropdown-p']} mb-0`}
                to="/member"
                onClick={() => {
                  setMemberPage('achievement')
                  localStorage.setItem('memberPage', 'achievement')
                }}
              >
                成就獎章
              </Link>
            </div>
            <div
              className={`d-flex align-items-center ${DropdownCss['member-list']}`}
            >
              <FontAwesomeIcon icon={faClock} />
              <Link
                className={`${DropdownCss['dropdown-p']} mb-0`}
                to="/member"
                onClick={() => {
                  setMemberPage('history-order')
                  localStorage.setItem('memberPage', 'history-order')
                }}
              >
                歷史訂單
              </Link>
            </div>
            <div className="d-flex align-items-center">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 12C21.0034 13.3199 20.6951 14.6219 20.1 15.8C19.3944 17.2118 18.3098 18.3992 16.9674 19.2293C15.6251 20.0594 14.0782 20.4994 12.5 20.5C11.1801 20.5035 9.87812 20.1951 8.7 19.6L3 21.5L4.9 15.8C4.30493 14.6219 3.99656 13.3199 4 12C4.00061 10.4218 4.44061 8.87488 5.27072 7.53258C6.10083 6.19028 7.28825 5.1056 8.7 4.40003C9.87812 3.80496 11.1801 3.49659 12.5 3.50003H13C15.0843 3.61502 17.053 4.49479 18.5291 5.97089C20.0052 7.44699 20.885 9.41568 21 11.5V12Z"
                  stroke="#4d5a51"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Link
                className={`${DropdownCss['dropdown-p']} mb-0`}
                to="/member"
                onClick={() => {
                  setMemberPage('comment')
                  localStorage.setItem('memberPage', 'comment')
                }}
              >
                過往評論
              </Link>
            </div>
            <div
              className={`${DropdownCss['bottom-line']} d-flex align-items-center ${DropdownCss['member-list']}`}
            >
              <FontAwesomeIcon icon={faHeart} />
              <Link
                className={`${DropdownCss['dropdown-p']} mb-0`}
                to="/member"
                onClick={() => {
                  setMemberPage('favorite')
                  localStorage.setItem('memberPage', 'favorite')
                }}
              >
                收藏路線
              </Link>
            </div>

            <button
              className={`d-flex align-items-center ${DropdownCss['member-list']} ${DropdownCss['logout']}`}
              onClick={(e) => {
                e.preventDefault()
                logout()
                navigate('/index')
                setShowList(!showList)
                setShowbox(1)
                clearCart()
                console.log('looooog', showBox)
              }}
            >
              <FontAwesomeIcon icon={faArrowRightToBracket} />
              <p
                className={`${DropdownCss['dropdown-p']} mb-0 ${DropdownCss['logout-pointer']}`}
              >
                登出
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarDropdown
