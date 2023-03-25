import { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// component
import LoginNavbar from '../layouts/NavbarLogin'

// BACKEND
import { SIGNIN, MEMBER_INSERT_COUPON } from '../connections/api-config'
import axios from 'axios'

// styles
import signinStyles from '../styles/kexinSignin.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// FontAwesome
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

function KexinSignin() {
  const [samePassword, setSamePassword] = useState(false)
  const [signinSuccess, setSigninSuccess] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [passwordVisible1, setPasswordVisible1] = useState(false)
  const [focus, setFocus] = useState(false)
  const [accountVal, setAccountVal] = useState(0)
  const [passVal, setPassVal] = useState(0)
  const [passVal1, setPassVal1] = useState(0)

  const [myForm, setMyForm] = useState({
    account: '',
    password: '',
    password1: '',
  })

  function checkAccount(str) {
    var regExp = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{5,}$/
    if (regExp.test(str)) return true
    else return false
  }

  function checkPassword(str) {
    var regExp = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{3,}$/
    if (regExp.test(str)) return true
    else return false
  }

  const [sign, setSign] = useState(false)
  const sendNewMemCoupon = async (accountId) => {
    try {
      const response = await axios.get(MEMBER_INSERT_COUPON, {
        params: {
          accountId: accountId,
        },
      })
      console.log('signup', response)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    if (sign === true) {
      if (localStorage.getItem('myAuth')) {
        const currentAccount = JSON.parse(localStorage.getItem('myAuth'))
        sendNewMemCoupon(currentAccount.accountId)
      }
    }
  }, [sign])

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
              <form
                name="form1"
                method="post"
                onSubmit={(e) => {
                  e.preventDefault()
                  const form1 = document.forms['form1']
                  // console.log(checkAccount(form1.account.value))
                  if (
                    checkAccount(form1.account.value) &&
                    checkPassword(form1.password.value)
                  ) {
                    if (form1.password.value != form1.password1.value) {
                      setSamePassword(true)
                      {
                        document
                          .querySelector('#password')
                          .setAttribute(
                            'class',
                            `form-control ${signinStyles.danger}`
                          )
                      }
                      {
                        document
                          .querySelector('#password1')
                          .setAttribute(
                            'class',
                            `form-control ${signinStyles.danger}`
                          )
                      }
                    } else {
                      setSamePassword(false)
                      {
                        document
                          .querySelector('#password')
                          .setAttribute('class', `form-control`)
                        document
                          .querySelector('#password1')
                          .setAttribute('class', `form-control`)
                      }
                      {
                        document.querySelector('#account').value = ''
                        document.querySelector('#password').value = ''
                        document.querySelector('#password1').value = ''
                      }
                      axios.post(SIGNIN, myForm).then((response) => {
                        if (response.data['success']) {
                          setSigninSuccess(true)
                          // setSign(true)
                          if (myForm.account) {
                            sendNewMemCoupon(myForm.account)
                          }
                          setTimeout(() => {
                            navigate('/login')
                          }, '2000')
                          
                        } else {
                          console.log('註冊失敗')
                        }
                      })
                    }
                  }
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
                      // console.log(e.target.value)
                      if (!checkAccount(e.target.value)) {
                        setAccountVal(1)
                      } else {
                        setAccountVal(0)
                      }
                      // setAccountVal(checkAccount(e.target.value))
                      setMyForm((prev) => ({
                        ...myForm,
                        account: e.target.value,
                      }))
                    }}
                    onFocus={(e) => {
                      setFocus(true)
                    }}
                  />
                  {signinSuccess ? (
                    ''
                  ) : accountVal === 1 ? (
                    <span className={signinStyles.textnotes}>
                      帳號不符合格式
                    </span>
                  ) : focus ? (
                    <div className="form-text">
                      帳號需包含英文及數字, 超過5個字元
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                <div className={`${signinStyles['password-wrap']} mb-3`}>
                  <label htmlFor="password" className="form-label">
                    密碼
                  </label>
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    className="form-control"
                    id="password"
                    name="password"
                    // placeholder="密碼需包含英文及數字"
                    required
                    onChange={(e) => {
                      if (!checkPassword(e.target.value)) {
                        setPassVal(1)
                      } else {
                        setPassVal(0)
                      }
                      setMyForm((prev) => ({
                        ...myForm,
                        password: e.target.value,
                      }))
                    }}
                    onFocus={(e) => {
                      setFocus(true)
                    }}
                  />
                  <button
                    className={`${signinStyles['password-visible']}`}
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
                  {signinSuccess ? (
                    ''
                  ) : passVal === 1 ? (
                    <span className={signinStyles.textnotes}>
                      密碼不符合格式
                    </span>
                  ) : samePassword ? (
                    <span className={signinStyles.textnotes}>
                      輸入密碼不相同
                    </span>
                  ) : focus ? (
                    <div className="form-text">密碼需包含英文及數字</div>
                  ) : (
                    ''
                  )}
                </div>
                <div className={`${signinStyles['password-wrap']} mb-4`}>
                  <label for="password1" className="form-label">
                    密碼確認
                  </label>
                  <input
                    type={passwordVisible1 ? 'text' : 'password'}
                    className="form-control"
                    id="password1"
                    name="password1"
                    // placeholder="密碼需包含英文及數字"
                    onChange={(e) => {
                      if (!checkPassword(e.target.value)) {
                        setPassVal1(1)
                      } else {
                        setPassVal1(0)
                      }

                      setMyForm((prev) => ({
                        ...myForm,
                        password1: e.target.value,
                      }))
                    }}
                  />
                  <button
                    className={`${signinStyles['password-visible']}`}
                    onClick={(e) => {
                      e.preventDefault()
                      setPasswordVisible1(!passwordVisible1)
                      console.log(e.currentTarget)
                    }}
                  >
                    {passwordVisible1 ? (
                      <FontAwesomeIcon icon={faEye} />
                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    )}
                  </button>
                  {signinSuccess ? (
                    ''
                  ) : passVal1 === 1 ? (
                    <span className={signinStyles.textnotes}>
                      密碼不符合格式
                    </span>
                  ) : samePassword ? (
                    <span className={signinStyles.textnotes}>
                      輸入密碼不相同
                    </span>
                  ) : focus ? (
                    <div className="form-text">密碼需包含英文及數字</div>
                  ) : (
                    ''
                  )}
                  <div className="form-text"></div>
                  <p className={`mt-2 mb-3  ${signinStyles['signinSuccess']}`}>
                    {signinSuccess ? '您已註冊成功, 請登入會員 ! ' : ''}{' '}
                  </p>
                </div>
                <div className={`${signinStyles['button']}`}>
                  <button
                    id={signinStyles['login']}
                    type="submit"
                    className="btn btn-primary"
                  >
                    註冊
                  </button>

                  <div className="mb-0">
                    {/* <button
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
                    </button> */}

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
