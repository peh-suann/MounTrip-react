import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'
import ExpandInput from './ExpandInput'

export default function NavBar() {
  return (
    <div className="container d-none d-lg-flex ">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className={styles.brandlogo} to="/index">
            MounTrip
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="navlink active" aria-current="page" to="/"> */}
                <Link className={styles.link} aria-current="page" to="/">
                  商品總覽
                </Link>
              </li>
              <li className="nav-item">
                <Link className={styles.link} to="/member-list">
                  難易分級
                </Link>
              </li>
              <li className="nav-item">
                <Link className={styles.link} to="/">
                  季節推薦
                </Link>
              </li>
              <li className="nav-item">
                <Link className={styles.link} to="/">
                  線上測驗
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.right}>
          <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.ulRight}`}>
            <ExpandInput />
            <li className={`nav-item ${styles.liRight}`}>
              <Link className={styles.link} to="/">
                ##
              </Link>
            </li>
            <li className={`nav-item ${styles.liRight}`}>
              <Link className={styles.link} to="/">
                $$
              </Link>
            </li>
            <li className={`nav-item ${styles.liRight}`}>
              <Link className={styles.link} to="/">
                @@
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
