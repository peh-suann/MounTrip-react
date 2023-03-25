import { useState, useContext, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

// components
import LoginNavbar from '../layouts/NavbarLogin'
import AuthContext from '../contexts/AuthContexts'
import { LOGIN } from '../connections/api-config'
import { LoginContext } from '../App'

// styles
import loginStyles from '../styles/kexinLogin.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// FontAwesome
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

// Context
import { TestCouponContext } from './../contexts/TestCouponContext'

function KexinLogin() {
  const [myForm, setMyForm] = useState({
    account: '',
    password: '',
  })
  const { setMyAuth } = useContext(AuthContext)
  const navigate = useNavigate()
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)
  const { showBox, setShowbox } = useContext(LoginContext)

  // for Test
  // useEffect(() => {}, [myForm])
  const { newCoupon } = useContext(TestCouponContext)

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
              onClick={() => {
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
              <Link
                className={`w-50 text-decoration-none ${loginStyles['web-none']}`}
              >
                <p
                  className={`mb-0 text-center ${loginStyles['mtgreen1']} ${loginStyles['web-none']}`}
                >
                  登入
                </p>
              </Link>
              <Link
                to="/signin"
                className={`w-50 text-decoration-none ${loginStyles['web-none']}`}
              >
                <p
                  className={`mb-0 text-center ${loginStyles['mtgrey3']} ${loginStyles['web-none']}`}
                >
                  註冊
                </p>
              </Link>
            </div>
            <div className={`${loginStyles['loginForm']}`}>
              <form
                name="form1"
                method="post"
                onSubmit={(e) => {
                  e.preventDefault()
                  axios.post(LOGIN, myForm).then((response) => {
                    console.log(response.data)
                    if (response.data.success) {
                      {
                        document
                          .querySelector('#account')
                          .setAttribute('class', `form-control`)
                      }
                      {
                        document
                          .querySelector('#password')
                          .setAttribute('class', `form-control`)
                      }
                      const { account, accountId, token } = response.data
                      localStorage.setItem(
                        'myAuth',
                        JSON.stringify({ account, accountId, token })
                      )
                      setMyAuth({
                        authorized: true,
                        account,
                        token,
                        sid: accountId,
                      })
                      if (newCoupon) {
                        navigate('/member')
                        localStorage.setItem('memberPage', 'coupon')
                      } else {
                        navigate('/index')
                      }
                      setShowbox(2)
                    } else {
                      setLoginSuccess(true)
                      {
                        document
                          .querySelector('#account')
                          .setAttribute(
                            'class',
                            `form-control ${loginStyles.danger}`
                          )
                      }
                      {
                        document
                          .querySelector('#password')
                          .setAttribute(
                            'class',
                            `form-control ${loginStyles.danger}`
                          )
                      }
                      // alert(response.data.error || '帳號或密碼錯誤')
                    }
                  })
                }}
              >
                <div className="mb-3">
                  <label htmlFor="account" className="form-label">
                    帳號
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="account"
                    name="account"
                    required
                    onChange={(e) => {
                      setMyForm((prev) => ({
                        ...myForm,
                        account: e.target.value,
                      }))
                    }}
                  />
                  <div className="form-text"></div>
                </div>
                <div className={`${loginStyles['password-wrap']} mb-3`}>
                  <label htmlFor="password" className="form-label">
                    密碼
                  </label>
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    className="form-control"
                    id="password"
                    name="password"
                    required
                    onChange={(e) => {
                      setMyForm((prev) => ({
                        ...myForm,
                        password: e.target.value,
                      }))
                    }}
                  />
                  <button
                    className={`${loginStyles['password-visible']}`}
                    onClick={(e) => {
                      e.preventDefault()
                      setPasswordVisible(!passwordVisible)
                      console.log(e.currentTarget)
                    }}
                  >
                    {passwordVisible ? (
                      <FontAwesomeIcon icon={faEye} />
                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    )}
                  </button>

                  <div className="form-text"></div>
                </div>
                <div className="mb-3 d-flex justify-content-between align-items-end">
                  <div className="d-flex justify-content-between align-items-end">
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
                <p className={`mt-2   ${loginStyles['loginSuccess']}`}>
                  {loginSuccess ? '帳號或密碼錯誤 ! ' : ''}
                </p>
                <div className={`${loginStyles['button']}`}>
                  <button
                    id={loginStyles['login']}
                    type="submit"
                    className="btn btn-primary"
                  >
                    登入
                  </button>

                  <div className="mb-0">
                    {/* <button
                      id={loginStyles['quick-login']}
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
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2 12.5H22"
                            stroke="#6CBA7C"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 2.5C14.5013 5.23835 15.9228 8.79203 16 12.5C15.9228 16.208 14.5013 19.7616 12 22.5C9.49872 19.7616 8.07725 16.208 8 12.5C8.07725 8.79203 9.49872 5.23835 12 2.5Z"
                            stroke="#6CBA7C"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className={loginStyles['ms-06']}>
                          使用Google帳號快速登入
                        </span>
                      </div>
                    </button> */}

                    <div
                      className={`${loginStyles['mobile-none']} d-flex justify-content-center`}
                    >
                      <p className={`${loginStyles['mobile-none']} mb-0 me-2`}>
                        還沒有帳號嗎?
                      </p>

                      <Link
                        className={`${loginStyles['mobile-none']} ${loginStyles['mtgreen1']}`}
                        to="/signin"
                      >
                        立即註冊
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

export default KexinLogin
