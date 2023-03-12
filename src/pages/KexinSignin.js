import { useState, useContext  } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import signinStyles from '../styles/kexinSignin.module.css'
import LoginNavbar from '../layouts/NavbarLogin'

function KexinSignin() {

  const navigate = useNavigate()
  return (
    <>
      <div className={`${signinStyles['bg-image']}`}>
        <LoginNavbar />

        <div className={`${signinStyles['kexinSignin']} row`}>
          <div
            className={`${signinStyles['loginForm-wrap']} col-lg-3 col-sm-12`}
          >
            <div
              className={`${signinStyles['mobile-x']}  ${signinStyles['web-none']}`}
              onClick={()=>{
                navigate('/index')
              }}
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
              className={`${signinStyles['mobile-welcome']} ${signinStyles['web-none']} d-flex flex-column`}
            >
              <h3
                className={`mb-0 ${signinStyles['mtgreen1']} ${signinStyles['web-none']}`}
              >
                歡迎回來！
              </h3>
              <p
                className={`mb-0 ${signinStyles['mtgreen2']} ${signinStyles['web-none']}`}
              >
                與Mountrip一起繼續探索更多美好的旅程
              </p>
            </div>
            <div
              className={`${signinStyles['mobile-tag']} d-flex ${signinStyles['web-none']}`}
            >
              <Link
                to="/login"
                className={`w-50 text-decoration-none ${signinStyles['web-none']}`}
              >
                <p
                  className={`mb-0 text-center ${signinStyles['mtgrey3']} ${signinStyles['web-none']}`}
                >
                  登入
                </p>
              </Link>
              <Link
                className={`w-50 text-decoration-none ${signinStyles['web-none']}`}
              >
                <p
                  className={`mb-0 text-center ${signinStyles['mtgreen1']} ${signinStyles['web-none']}`}
                >
                  註冊
                </p>
              </Link>
            </div>
            <div className={`${signinStyles['loginForm']}`}>
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
                <div className="mb-4">
                  <label for="password" className="form-label">
                    密碼確認
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                  />
                  <div className="form-text"></div>
                </div>
                <div className={`${signinStyles['button']}`}>
                  <button
                    id={signinStyles['login']}
                    type="submit"
                    className="btn btn-primary"
                  >
                    登入
                  </button>

                  <div className="mb-0">
                    <button
                      id={signinStyles['quick-login']}
                      type="submit"
                      className="btn btn-primary mb-2"
                    >
                      <div className="d-flex justify-content-center align-items-center">
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
                            stroke="#6CBA7C"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M2 12.5H22"
                            stroke="#6CBA7C"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 2.5C14.5013 5.23835 15.9228 8.79203 16 12.5C15.9228 16.208 14.5013 19.7616 12 22.5C9.49872 19.7616 8.07725 16.208 8 12.5C8.07725 8.79203 9.49872 5.23835 12 2.5Z"
                            stroke="#6CBA7C"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span className={signinStyles['ms-06']}>
                          使用Google帳號快速註冊
                        </span>
                      </div>
                    </button>

                    <div
                      className={`${signinStyles['mobile-none']} d-flex justify-content-center`}
                    >
                      <p className={`${signinStyles['mobile-none']} mb-0 me-2`}>
                        已經有帳號了嗎?
                      </p>

                      <Link
                        className={`${signinStyles['mobile-none']} ${signinStyles['mtgreen1']}`}
                        to="/login"
                      >
                        立即登入
                      </Link>
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

export default KexinSignin
