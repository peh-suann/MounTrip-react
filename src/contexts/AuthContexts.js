import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext({})
export default AuthContext

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate()
  // 預設為未登入狀態
  const unAuth = {
    authorized: false,
    sid: 0,
    account: '',
    token: '',
  }

  let initAuth = { ...unAuth }

  const str = localStorage.getItem('myAuth')

  try {
    if (str) {
      const localAuth = JSON.parse(str)
      if (localAuth.token && localAuth.account && localAuth.accountId) {
        initAuth = {
          authorized: true,
          sid: localAuth.accountId,
          account: localAuth.account,
          token: localAuth.token,
        }
      }
    }
  } catch (ex) {}

  const [myAuth, setMyAuth] = useState(initAuth)
  const logout = () => {
    localStorage.removeItem('myAuth')
    setMyAuth(unAuth)
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{ myAuth, setMyAuth, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
