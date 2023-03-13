import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './../styles/Navbar.module.css'
import NavbarMobileMenu from './NavbarMobileMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// FontAwesome
import {
  faBars,
  faSearch,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'

// Components
import NavbarShoppingCart from '../components/NavbarShoppingCart'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav>
        <div className={styles.navbar}>
          <div className={styles.left}>
            <button className={styles.menu}>
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
                <a className={styles.link} href="/">
                  {' '}
                  難易分級{' '}
                </a>
              </li>
              <li>
                <a className={styles.link} href="/">
                  {' '}
                  季節推薦{' '}
                </a>
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
                <a className={styles.link} href="/">
                  <div className={styles.profile}></div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <NavbarShoppingCart open={open} setOpen={setOpen} />
      <NavbarMobileMenu />
    </>
  )
}
