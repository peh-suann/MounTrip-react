import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../contexts/AuthContexts'

// styles
import styles from './../styles/Navbar.module.css'
// import NavbarMobileMenu from './NavbarMobileMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// FontAwesome
import {
  faBars,
  faSearch,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'

// components
import NavbarShoppingCart from '../components/NavbarShoppingCart'
import NavbarDropdown from '../components/NavbarDropdown'
import NavbarDropdownMobile from '../components/NavbarDropdownMobile'

export default function NavBar() {
  // const [open, setOpen] = useState(false)
  const { myAuth, logout } = useContext(AuthContext)
  const [open, setOpen] = useState(false)

  //轉換會員頁面用
  const [memberPage, setMemberPage] = useState('member')

  const [showList, setShowList] = useState(false)
  const handleClick = function () {
    setShowList(!showList)
  }

  const [showListMobile, setShowListMobile] = useState(false)
  const handleClickMobile = function () {
    setShowListMobile(!showListMobile)
  }
  const navigate = useNavigate()

  return (
    <>
      <nav>
        <div className={styles.navbar}>
          <div className={styles.left}>
            <button
              className={styles.menu}
              onClick={(e) => {
                e.preventDefault()
                if (myAuth.account) {
                  handleClickMobile()
                } else {
                  navigate('/login')
                }
              }}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            <button className={styles.logo}>
              <Link to="/products">
                <svg
                  width="75"
                  height="24"
                  viewBox="0 0 75 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1006_8348)">
                    <path
                      d="M58.0327 22.7878V7.89408H42.4707V1.21484H69.9758L74.1431 4.55275L69.9758 7.89408H64.712V22.7878"
                      stroke="#6CBA7C"
                      strokeWidth="2"
                      strokeLinecap="square"
                    />
                    <path
                      d="M0.856445 22.7878C3.19366 10.3787 11.3842 1.21484 21.1306 1.21484C28.389 1.21484 34.7872 6.29366 38.5364 14.0147C39.7461 13.2539 41.0586 12.8427 42.426 12.8427C46.6961 12.8427 50.4144 16.866 52.2992 22.7878"
                      stroke="#6CBA7C"
                      strokeWidth="2"
                      strokeLinecap="square"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1006_8348">
                      <rect
                        width="75"
                        height="23.2865"
                        fill="white"
                        transform="translate(0 0.357422)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </button>

            <ul className={styles.nav_navigations}>
              <li>
                <Link className={styles.link} to="/products">
                  {' '}
                  商品總覽{' '}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/difficulty">
                  {' '}
                  難易分級{' '}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/season">
                  {' '}
                  季節推薦{' '}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/test">
                  {' '}
                  線上測驗{' '}
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <ul className={styles.nav_icons}>
              <li>
                <FontAwesomeIcon icon={faSearch} />
                {document.documentElement.clientWidth > 390 ? (
                  <input
                    className={styles.link}
                    href="/"
                    placeholder="搜尋關鍵字、目的地"
                  />
                ) : (
                  ''
                )}
              </li>
              <li
                className={styles.shopping_cart}
                onClick={(e) => {
                  e.preventDefault()
                  setOpen((prev) => !prev)
                }}
              >
                <a className={styles.link} href="/">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </a>
              </li>
              <li>
                <Link
                  className={styles.link}
                  to="#/"
                  onClick={(e) => {
                    e.preventDefault()
                    if (myAuth.account) {
                      handleClick()
                    } else {
                      navigate('/login')
                    }
                  }}
                >
                  <div className={styles.profile}></div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <NavbarShoppingCart open={open} setOpen={setOpen} />

      {showList && (
        <NavbarDropdown showList={showList} setShowList={setShowList} />
      )}

      <NavbarDropdownMobile
        showListMobile={showListMobile}
        setShowListMobile={setShowListMobile}
        // setMemberPage={setMemberPage}
      />
    </>
  )
}
