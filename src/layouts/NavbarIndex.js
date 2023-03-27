import { createContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../contexts/AuthContexts'
import { StatusContext } from '../pages/KexinIndex'
import { LoginContext } from '../App'
import { SELECT_MEMBER } from '../connections/api-config'
import YichunModal from '../components/YichunModal'
import axios from 'axios'
import { USER_AVATAR } from '../connections/api-config'

// styles
import styles from './../styles/NavbarIndex.module.css'
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
import { useCart } from '../components/IanUseCart'

// search
import { format } from 'date-fns'
import { SearchContext } from '../contexts/SearchContext'

export default function NavBar() {
  const { cart } = useCart()
  const { mapInteraction } = useContext(LoginContext)
  const { myAuth, logout } = useContext(AuthContext)
  const [open, setOpen] = useState(false)
  const { showBox, setShowbox } = useContext(LoginContext)

  //轉換會員頁面用
  const [memberPage, setMemberPage] = useState('member')

  const [showList, setShowList] = useState(false)
  const handleClick = function () {
    setShowList(!showList)
  }

  const [showListMobile, setShowListMobile] = useState(false)
  const navigate = useNavigate()

  // 抓member資料
  const [data, setData] = useState({
    rows: [],
  })
  // const getMember = function
  const getMember = async (sid) => {
    try {
      const response = await axios.get(SELECT_MEMBER, {
        params: {
          sid,
        },
      })
      setData(response.data)
    } catch (err) {}
  }

  useEffect(() => {
    getMember(myAuth.accountId)
  }, [])

  console.log('data', data[0])
  console.log('data', !!data[0])

  if (showBox === 2 || showBox === 1) {
    setTimeout(() => {
      setShowbox(0)
    }, '2000')
  }

  // search context
  const { search, setSearch } = useContext(SearchContext)

  const [navKeyWorld, setNavKeyWorld] = useState()
  let startdate = new Date(2022, 1, 1)
  let enddate = new Date(2024, 12, 31)
  const formattedDate = format(startdate, 'yyyy-MM-dd')
  const formattedDateEnd = format(enddate, 'yyyy-MM-dd')
  const [newstartdate, setNewstartdate] = useState(formattedDate)
  const [newenddate, setNewenddate] = useState(formattedDateEnd)

  useEffect(() => {
    console.log('navKeyWorld', navKeyWorld)
  }, [navKeyWorld])

  return (
    <>
      <nav
        className={
          mapInteraction === 2
            ? styles.mapstate2
            : mapInteraction === 1
            ? styles.mapstate1
            : ''
        }
      >
        <div className={styles.navbar}>
          <div className={styles.left}>
            <button
              className={styles.menu}
              onClick={(e) => {
                setShowListMobile(!showListMobile)
              }}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            <button className={styles.logo}>
              <Link to="/index">
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
                  商品總覽
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
              <li
                className={styles.searchBar}
                style={mapInteraction !== 0 ? { display: 'none' } : {}}
              >
                <FontAwesomeIcon icon={faSearch} />
                {document.documentElement.clientWidth > 390 ? (
                  <input
                    className={styles.link}
                    href="/"
                    placeholder="搜尋關鍵字、目的地"
                    onChange={(e) => {
                      setNavKeyWorld(e.target.value)
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        const searchData = {
                          location: navKeyWorld,
                          startDate: newstartdate,
                          endDate: newenddate,
                        }
                        setSearch(searchData)

                        localStorage.setItem(
                          'mySearch',
                          JSON.stringify(searchData)
                        )
                        navigate('/trails-filter')
                      }
                    }}
                  />
                ) : (
                  ''
                )}
              </li>
              <li
                className={styles.shopping_cart}
                onClick={(e) => {
                  e.preventDefault()
                  if (myAuth.account) {
                    setOpen((prev) => !prev)
                  } else {
                    setShowbox(3)
                    // TODO:請先登入會員
                    // navigate('/login')
                    // setTimeout(() => {
                    //   navigate('/login')
                    // }, '2000')
                  }
                }}
              >
                <a className={styles.link} href="/">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </a>
                {myAuth.account
                  ? cart.isEmpty || (
                      <span
                        className={`${styles.shoppingCount} d-flex justify-content-center align-items-center`}
                      >
                        {cart.totalItems}
                      </span>
                    )
                  : ''}
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
                  <div className={styles.profile}>
                    {/* {data[0] && myAuth.account ? (
                      <div
                        className={styles.avatar_pic}
                        style={{
                          background: `url('${avatarUrl}') 0% 0% / cover`,
                          backgroundSize: 'cover',
                        }}
                      ></div>
                    ) : (
                      ''
                    )} */}
                    {data[0] && myAuth.account ? (
                      <img src={`${USER_AVATAR}${data[0].img}`} alt="" />
                    ) : (
                      ''
                    )}
                  </div>
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

      {showBox === 2 ? (
        <div className={styles['showBox-wrap']}>
          <div id="showLogin" className={`${styles['showBox']}`}>
            <h4>您已成功登入會員</h4>
          </div>
        </div>
      ) : (
        ''
      )}
      {showBox === 1 ? (
        <div className={styles['showBox-wrap']}>
          <div id="showLogout" className={`${styles['showBox']}`}>
            <h4>您已成功登出會員</h4>
          </div>
        </div>
      ) : (
        ''
      )}

      {showBox === 3 ? (
        <div className={styles['showBox3-wrap']}>
          <div id="showLoginFirst" className={`${styles['showBox3']}`}>
            <h4>請先登入會員</h4>
            <button
              className={styles['btn-green']}
              onClick={() => {
                setShowbox(0)
              }}
            >
              OK
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
{
  /* <div className={styles['showBox-wrap']}>
            <div id="showLoginFirst" className={`${styles['showBox']}`}>
              請先登入會員
            </div>
          </div> */
}
