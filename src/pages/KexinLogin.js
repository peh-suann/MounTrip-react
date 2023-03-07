import React from 'react'
import loginStyles from '../styles/kexinLogin.module.css'
import LoginNavbar from '../layouts/NavbarLogin'

function KexinLogin() {
  return (
    <>
      <div className={`${loginStyles['bg-image']}`}>
        <LoginNavbar />

        <div className={`${loginStyles['kexinLogin']} row`}>
          <div
            className={`${loginStyles['loginForm-wrap']} col-lg-3 col-sm-12`}
          >
            <div
              className={`${loginStyles['mobile-x']}  ${loginStyles['web-none']}`}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 8L8 24"
                  stroke="#011306"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 8L24 24"
                  stroke="#011306"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div
              className={`${loginStyles['mobile-welcome']} ${loginStyles['web-none']} d-flex flex-column`}
            >
              <h3
                className={`mb-0 ${loginStyles['mtgreen1']} ${loginStyles['web-none']}`}
              >
                歡迎回來！
              </h3>
              <p
                className={`mb-0 ${loginStyles['mtgreen2']} ${loginStyles['web-none']}`}
              >
                與Mountrip一起繼續探索更多美好的旅程
              </p>
            </div>
            <div
              className={`${loginStyles['mobile-tag']} d-flex ${loginStyles['web-none']}`}
            >
              <a
                href="./login.html"
                className={`w-50 text-decoration-none ${loginStyles['web-none']}`}
              >
                <p
                  className={`mb-0 text-center ${loginStyles['mtgreen1']} ${loginStyles['web-none']}`}
                >
                  登入
                </p>
              </a>
              <a
                href="./signin.html"
                className={`w-50 text-decoration-none ${loginStyles['web-none']}`}
              >
                <p
                  className={`mb-0 text-center ${loginStyles['mtgrey3']} ${loginStyles['web-none']}`}
                >
                  註冊
                </p>
              </a>
            </div>
            <div className={`${loginStyles['loginForm']}`}>
              <form name="form1" method="post">
                <div className="mb-3">
                  <label htmlFor="account" className="form-label">
                    帳號/Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="account"
                    name="account"
                    required
                  />
                  <div className="form-text"></div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    密碼
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                  />
                  <div className="form-text"></div>
                </div>
                <div className="mb-3 d-flex justify-content-between">
                  <div>
                    <input
                      type="checkbox"
                      id={loginStyles.rememberme}
                      name="rememberme"
                    />
                    <label
                      className={`${loginStyles['checkmark']}`}
                      htmlFor="rememberme"
                    >
                      記住我
                    </label>
                  </div>
                  <div>
                    <a href="#" className={loginStyles['mtgrey1']}>
                      忘記密碼
                    </a>
                  </div>
                </div>
                <div className={`${loginStyles['button']}`}>
                  <button
                    id={loginStyles['login']}
                    type="submit"
                    className="btn btn-primary"
                  >
                    登入
                  </button>

                  <div className="mb-0">
                    <button
                      id={loginStyles['quick-login']}
                      type="submit"
                      className="btn btn-primary mb-2"
                    >
                      <div className="d-flex justify-content-center align-items-center">
                        <img
                          className={`${loginStyles['me-06']}`}
                          src="./svg/globe.svg"
                          alt=""
                        />
                        <span>使用Google帳號快速登入</span>
                      </div>
                    </button>

                    <div
                      className={`${loginStyles['mobile-none']} d-flex justify-content-center`}
                    >
                      <p className={`${loginStyles['mobile-none']} mb-0 me-2`}>
                        還沒有帳號嗎?
                      </p>
                      <a
                        href="./signin.html"
                        className={`${loginStyles['mobile-none']} ${loginStyles['mtgreen1']}`}
                      >
                        立即註冊
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default KexinLogin
