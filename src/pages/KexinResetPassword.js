import { useState, useContext } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

// component
import LoginNavbar from '../layouts/NavbarLogin'

// BACKEND
import { VERIFY, PASSWORD } from '../connections/api-config'
import axios from 'axios'

// styles
import signinStyles from '../styles/kexinSignin.module.css'

// FontAwesome

function KexinResetPassword() {
  const [samePassword, setSamePassword] = useState(false)
  const [signinSuccess, setSigninSuccess] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [passwordVisible1, setPasswordVisible1] = useState(false)
  const location = useLocation()
  const usp = new URLSearchParams(location.search)

  console.log(usp)
  console.log(usp.get('token'))
  const token = usp.get('token')

  // const [token, setToken] = useState({
  //   token: '',
  // })
  if (token) {
    axios.post(VERIFY, token).then((response) => {
      console.log(response.data)
      // if (response.data.success) {
      //   const { account, accountId, token } = response.data
      //   localStorage.setItem(
      //     'myAuth',
      //     JSON.stringify({ account, accountId, token })
      //   )
      //   setMyAuth({
      //     authorized: true,
      //     account,
      //     token,
      //     sid: accountId,
      //   })
      //   navigate('/index')
      //   setShowbox(2)
      // } else {
      //   // alert(response.data.error || '帳號或密碼錯誤')
      // }
    })
  }

  const [myForm, setMyForm] = useState({
    email: '',
  })

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

                  axios.post(PASSWORD, myForm).then((response) => {
                    console.log(response.data)
                  })
                }}
              >
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    onChange={(e) => {
                      console.log(e.target.value)
                      setMyForm((prev) => ({
                        ...myForm,
                        email: e.target.value,
                      }))
                    }}
                  />
                  <div className="form-text"></div>
                </div>
                <div className={`${signinStyles['button']}`}>
                  <button
                    id={signinStyles['login']}
                    type="submit"
                    className="btn btn-primary"
                  >
                    發送信件
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default KexinResetPassword
