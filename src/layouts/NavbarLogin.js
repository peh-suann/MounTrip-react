import React from 'react'
import { Link } from 'react-router-dom'
import styles from './../styles/NavbarLogin.module.css'

export default function NavBar() {
  return (
    <>
      <nav>
        <div className={styles.navbar}>
          <div className={styles.left}>
            <button className={styles.menu}>
              <svg
                width="25"
                height="36"
                viewBox="0 0 25 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 18H23.5"
                  stroke="#6CBA7C"
                  strokeWidth="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.5 11H23.5"
                  stroke="#6CBA7C"
                  strokeWidth="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.5 25H23.5"
                  stroke="#6CBA7C"
                  strokeWidth="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button className={styles.logo}>
              <svg
                width="75"
                height="24"
                viewBox="0 0 75 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1006_8348)">
                  <path
                    d="M58.0327 22.7878V7.89408H42.4707V1.21484H69.9758L74.1431 4.55275L69.9758 7.89408H64.712V22.7878"
                    stroke="#FFFFF2"
                    stroke-linecap="square"
                  />
                  <path
                    d="M0.856445 22.7878C3.19366 10.3787 11.3842 1.21484 21.1306 1.21484C28.389 1.21484 34.7872 6.29366 38.5364 14.0147C39.7461 13.2539 41.0586 12.8427 42.426 12.8427C46.6961 12.8427 50.4144 16.866 52.2992 22.7878"
                    stroke="#FFFFF2"
                    stroke-linecap="square"
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
            </button>

            <ul className={styles.nav_navigations}>
              <li>
                <a className={styles.link} href="/">
                  {' '}
                  商品總覽{' '}
                </a>
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
                <a className={styles.link} href="/">
                  {' '}
                  線上測驗{' '}
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <ul className={styles.nav_icons}>
              <li>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6666 23.3333C18.5576 23.3333 23.3333 18.5576 23.3333 12.6666C23.3333 6.77561 18.5576 2 12.6666 2C6.77561 2 2 6.77561 2 12.6666C2 18.5576 6.77561 23.3333 12.6666 23.3333Z"
                    stroke="#FFFFF2"
                    stroke-width="1.5"
                    stroke-linecap="square"
                  />
                  <path
                    d="M26.0002 25.9992L20.2002 20.1992"
                    stroke="#FFFFF2"
                    stroke-width="1.5"
                    stroke-linecap="square"
                  />
                </svg>
              </li>
              <li>
                <a className={styles.link} href="/">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5 10C22.5 8.01088 21.7098 6.10322 20.3033 4.6967C18.8968 3.29018 16.9891 2.5 15 2.5C13.0109 2.5 11.1032 3.29018 9.6967 4.6967C8.29018 6.10322 7.5 8.01088 7.5 10C7.5 18.75 3.75 21.25 3.75 21.25H26.25C26.25 21.25 22.5 18.75 22.5 10Z"
                      stroke="#FFFFF2"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.1624 26.25C16.9426 26.6288 16.6272 26.9433 16.2477 27.1619C15.8682 27.3805 15.4379 27.4956 14.9999 27.4956C14.5619 27.4956 14.1316 27.3805 13.7521 27.1619C13.3726 26.9433 13.0572 26.6288 12.8374 26.25"
                      stroke="#FFFFF2"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a className={styles.link} href="/">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.909 26.3865C12.5241 26.3865 13.0227 25.8879 13.0227 25.2728C13.0227 24.6578 12.5241 24.1592 11.909 24.1592C11.294 24.1592 10.7954 24.6578 10.7954 25.2728C10.7954 25.8879 11.294 26.3865 11.909 26.3865Z"
                      stroke="#FFFFF2"
                      stroke-width="1.5"
                      stroke-linecap="square"
                    />
                    <path
                      d="M24.159 26.3865C24.7741 26.3865 25.2727 25.8879 25.2727 25.2728C25.2727 24.6578 24.7741 24.1592 24.159 24.1592C23.544 24.1592 23.0454 24.6578 23.0454 25.2728C23.0454 25.8879 23.544 26.3865 24.159 26.3865Z"
                      stroke="#FFFFF2"
                      stroke-width="1.5"
                      stroke-linecap="square"
                    />
                    <path
                      d="M3 3H7.45455L10.4391 17.9116C10.5409 18.4243 10.8199 18.8849 11.227 19.2126C11.6342 19.5404 12.1437 19.7146 12.6664 19.7045H23.4909C24.0135 19.7146 24.523 19.5404 24.9302 19.2126C25.3374 18.8849 25.6163 18.4243 25.7182 17.9116L27.5 8.56818H9.01364"
                      stroke="#FFFFF2"
                      stroke-width="1.5"
                      stroke-linecap="square"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
