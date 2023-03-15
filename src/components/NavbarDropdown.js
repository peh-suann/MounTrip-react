// Hooks
import { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

// Components
import AuthContext from '../contexts/AuthContexts'
import { MemberContext } from '../contexts/MemberContext'

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

function NavbarDropdown(props) {
  const { showList, setShowList } = props
  const { myAuth, logout } = useContext(AuthContext)
  const navigate = useNavigate()
  const { memberPage, setMemberPage } = useContext(MemberContext)

  return (
    <div
      className={DropdownCss['dropdown-wrap']}
      onClick={(e) => {
        if (e.target.className.includes('dropdown-wrap')) {
          setShowList(!showList)
        }
      }}
    >
      <div className={DropdownCss.dropdown}>
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
              }}
            >
              會員中心
            </Link>
          </div>
          <div className={`d-flex align-items-center ${DropdownCss['member-list']}`}>
            <FontAwesomeIcon icon={faGift} />
            <Link
              className={`${DropdownCss['dropdown-p']} mb-0`}
              onClick={() => {
                setMemberPage('coupon')
              }}
              to="/member"
            >
              我的優惠券
            </Link>
          </div>
          <div className={`d-flex align-items-center ${DropdownCss['member-list']}`}>
            <FontAwesomeIcon icon={faAward} />
            <Link
              className={`${DropdownCss['dropdown-p']} mb-0`}
              onClick={() => {
                setMemberPage('achievement')
              }}
            >
              成就獎章
            </Link>
          </div>
          <div className={`d-flex align-items-center ${DropdownCss['member-list']}`}>
            <FontAwesomeIcon icon={faClock} />
            <p className={`${DropdownCss['dropdown-p']} mb-0`}>歷史訂單</p>
          </div>
          <div className={`d-flex align-items-center ${DropdownCss['member-list']}`}>
            <FontAwesomeIcon icon={faComment} />
            <p className={`${DropdownCss['dropdown-p']} mb-0`}>過往評論</p>
          </div>
          <div
            className={`${DropdownCss['bottom-line']} d-flex align-items-center ${DropdownCss['member-list']}`}
          >
            <FontAwesomeIcon icon={faHeart} />
            <p className={`${DropdownCss['dropdown-p']} mb-0`}>收藏路線</p>
          </div>

          <div
            className={`d-flex align-items-center ${DropdownCss['member-list']} ${DropdownCss['logout']}`}
            onClick={() => {
              // e.preventDefault();
              logout()
              navigate('/index')
              setShowList(!showList)
            }}
          >
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            <p className={`${DropdownCss['dropdown-p']} mb-0`}>登出</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarDropdown
