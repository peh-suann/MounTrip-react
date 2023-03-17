import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { LOGIN } from './../components/api_config.js'
import AuthContext from '../context/AuthContext.js'

function Shopcar() {
  const [myForm, setMyForm] = useState({
    account: '',
    password: '',
  })
  const { setMyAuth } = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              axios.post(LOGIN, myForm).then((response) => {
                console.log(response.data)
                if (response.data.success) {
                  const { account, accountId, token } = response.data
                  localStorage.setItem(
                    'myAuth',
                    JSON.stringify({
                      account,
                      accountId,
                      token,
                    })
                  )
                  setMyAuth({
                    authorized: true,
                    account,
                    token,
                    sid: accountId,
                  })
                  navigate('/')
                } else {
                  alert(response.data.error || '帳號或密碼錯誤')
                }
              })
            }}
          >
            <div className="mb-3">
              <label htmlFor="account" className="form-label">
                Account
              </label>
              <input
                type="text"
                className="form-control"
                id="account"
                name="account"
                onChange={(e) => {
                  setMyForm((prev) => ({ ...myForm, account: e.target.value }))
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={(e) => {
                  setMyForm((prev) => ({
                    ...myForm,
                    password: e.target.value,
                  }))
                }}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
