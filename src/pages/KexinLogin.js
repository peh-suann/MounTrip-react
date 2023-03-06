import React from 'react'
import LoginCss from '../../src/html/css/KexinLogin.css'
import Navbar from '../layouts/Navbar'

function KexinLogin() {
  return (
    <>
      <div className="bg-image">
        <Navbar />

        <div className="row">
          <div className="loginForm-wrap col-lg-3 col-sm-12">
            <img className="mobile-x web-none mb-40" src="./svg/x.svg" alt="" />
            <div className="mobile-welcome web-none d-flex flex-column">
              <h3 className="mb-0 mtgreen1 web-none">歡迎回來！</h3>
              <p className="mb-0 mtgreen2 web-none">
                與Mountrip一起繼續探索更多美好的旅程
              </p>
            </div>
            <div className="mobile-tag d-flex web-none">
              <a href="./login.html" className="w-50 text-decoration-none">
                <p className="mb-0 text-center mtgreen1 web-none">登入</p>
              </a>
              <a href="./signin.html" className="w-50 text-decoration-none">
                <p className="mb-0 text-center mtgrey3 web-none">註冊</p>
              </a>
            </div>
            <div className="loginForm">
              <form name="form1" method="post">
                <div className="mb-3">
                  <label for="account" className="form-label">
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
                  <label for="password" className="form-label">
                    密碼
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                  />
                  <div className="form-text"></div>
                </div>
                <div className="mb-3 d-flex justify-content-between">
                  <div>
                    <input type="checkbox" id="rememberme" name="rememberme" />
                    <label className="checkmark" for="rememberme">
                      記住我
                    </label>
                  </div>
                  <div>
                    <a href="#">忘記密碼</a>
                  </div>
                </div>
                <div className="button">
                  <button id="login" type="submit" className="btn btn-primary">
                    登入
                  </button>

                  <div className="mb-0">
                    <button
                      id="quick-login"
                      type="submit"
                      className="btn btn-primary mb-2"
                    >
                      <div className="d-flex justify-content-center align-items-center">
                        <img className="me-06" src="./svg/globe.svg" alt="" />
                        <span>使用Google帳號快速登入</span>
                      </div>
                    </button>

                    <div className="mobile-none d-flex justify-content-center">
                      <p className="mobile-none mb-0 me-2">還沒有帳號嗎?</p>
                      <a href="./signin.html" className="mobile-none">
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
