// Hooks
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// Components
import DropdownMobileCss from '../styles/NavbarDropdownMobile.module.css'
import AuthContext from '../contexts/AuthContexts'
import { MemberContext } from '../contexts/MemberContext'

function NavbarDropdown(props) {
  const { showListMobile, setShowListMobile } = props
  const { myAuth, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  //會員頁面換頁
  const { memberPage, setMemberPage } = useContext(MemberContext)

  return (
    <div
      className={DropdownMobileCss['dropdown-mobile-wrap']}
      style={
        showListMobile
          ? { backgroundColor: 'rgba(0,0,0,0.25)', pointerEvents: 'auto' }
          : { backgroundColor: 'rgba(0,0,0,0)', pointerEvents: 'none' }
      }
      onClick={(e) => {
        // console.log(e.target.className)
        // console.log(e.target.className.includes('dropdown-mobile-wrap'))
        if (e.target.className.includes('dropdown-mobile-wrap')) {
          setShowListMobile(!showListMobile)
        }
      }}
    >
      <div
        className={`${DropdownMobileCss['dropdown-mobile']} d-flex flex-column justify-content-start`}
        style={showListMobile ? { left: '0' } : { left: '-200px' }}
      >
        <div>
          <div className={DropdownMobileCss['top-chevronLeft']}>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 26L14 18L22 10"
                stroke="#6CBA7C"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <ul className={DropdownMobileCss['nav_navigations']}>
            <li>
              <a className={DropdownMobileCss['link']} href="/products">
                商品總覽
              </a>
            </li>
            <li>
              <a className={DropdownMobileCss['link']} href="/">
                難易分級
              </a>
            </li>
            <li>
              <a className={DropdownMobileCss['link']} href="/">
                季節推薦
              </a>
            </li>
            <li>
              <a className={DropdownMobileCss['link']} href="/test">
                線上測驗
              </a>
            </li>
          </ul>
        </div>
        <div className={DropdownMobileCss['member-list']}>
          <div
            className={`${DropdownMobileCss['bottom-padding']} d-flex align-items-center`}
          >
            <svg
              className="mobile-icon"
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.4446 30.0001V26.889C28.4446 25.2387 27.789 23.6561 26.6221 22.4892C25.4552 21.3223 23.8726 20.6667 22.2223 20.6667H9.77789C8.12765 20.6667 6.545 21.3223 5.37811 22.4892C4.21122 23.6561 3.55566 25.2387 3.55566 26.889V30.0001"
                stroke="#4d5a51"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.0005 14.4444C19.437 14.4444 22.2228 11.6587 22.2228 8.22222C22.2228 4.78578 19.437 2 16.0005 2C12.5641 2 9.77832 4.78578 9.77832 8.22222C9.77832 11.6587 12.5641 14.4444 16.0005 14.4444Z"
                stroke="#4d5a51"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <a
              className={`${DropdownMobileCss['dropdown-p']} mb-0`}
              href="/member"
              onClick={() => {
                setMemberPage('member')
                localStorage.setItem('memberPage', 'member')
              }}
            >
              會員中心
            </a>
          </div>
          <div
            className={`${DropdownMobileCss['bottom-padding']} d-flex align-items-center`}
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 12.5V22.5H4V12.5"
                stroke="#4d5a51"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 7.5H2V12.5H22V7.5Z"
                stroke="#4d5a51"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 22.5V7.5"
                stroke="#4d5a51"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 7.5H7.5C6.83696 7.5 6.20107 7.23661 5.73223 6.76777C5.26339 6.29893 5 5.66304 5 5C5 4.33696 5.26339 3.70107 5.73223 3.23223C6.20107 2.76339 6.83696 2.5 7.5 2.5C11 2.5 12 7.5 12 7.5Z"
                stroke="#4d5a51"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 7.5H16.5C17.163 7.5 17.7989 7.23661 18.2678 6.76777C18.7366 6.29893 19 5.66304 19 5C19 4.33696 18.7366 3.70107 18.2678 3.23223C17.7989 2.76339 17.163 2.5 16.5 2.5C13 2.5 12 7.5 12 7.5Z"
                stroke="#4d5a51"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <a
              className={`${DropdownMobileCss['dropdown-p']} mb-0`}
              href="/member"
              onClick={() => {
                setMemberPage('coupon')
                localStorage.setItem('memberPage', 'coupon')
              }}
            >
              我的優惠券
            </a>
          </div>
          <div
            className={`${DropdownMobileCss['bottom-padding']} d-flex align-items-center`}
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1298_10889)">
                <path
                  d="M12 15.5C15.866 15.5 19 12.366 19 8.5C19 4.63401 15.866 1.5 12 1.5C8.13401 1.5 5 4.63401 5 8.5C5 12.366 8.13401 15.5 12 15.5Z"
                  stroke="#4d5a51"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.21 14.39L7 23.5L12 20.5L17 23.5L15.79 14.38"
                  stroke="#4d5a51"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1298_10889">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <a
              className={`${DropdownMobileCss['dropdown-p']} mb-0`}
              href="/member"
              onClick={() => {
                setMemberPage('achievement')
                localStorage.setItem('memberPage', 'achievement')
              }}
            >
              成就獎章
            </a>
          </div>
          <div
            className={`${DropdownMobileCss['bottom-padding']} d-flex align-items-center`}
          >
            <svg
              className="menu-icon"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
                stroke="#4d5a51"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 6.5V12.5L16 14.5"
                stroke="#4d5a51"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <a
              className={`${DropdownMobileCss['dropdown-p']} mb-0`}
              href="/member"
              onClick={() => {
                setMemberPage('history-order')
                localStorage.setItem('memberPage', 'history-order')
              }}
            >
              歷史訂單
            </a>
          </div>
          <div
            className={`${DropdownMobileCss['bottom-padding']} d-flex align-items-center`}
          >
            <svg
              className="menu-icon"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 12C21.0034 13.3199 20.6951 14.6219 20.1 15.8C19.3944 17.2118 18.3098 18.3992 16.9674 19.2293C15.6251 20.0594 14.0782 20.4994 12.5 20.5C11.1801 20.5035 9.87812 20.1951 8.7 19.6L3 21.5L4.9 15.8C4.30493 14.6219 3.99656 13.3199 4 12C4.00061 10.4218 4.44061 8.87488 5.27072 7.53258C6.10083 6.19028 7.28825 5.1056 8.7 4.40003C9.87812 3.80496 11.1801 3.49659 12.5 3.50003H13C15.0843 3.61502 17.053 4.49479 18.5291 5.97089C20.0052 7.44699 20.885 9.41568 21 11.5V12Z"
                stroke="#4d5a51"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <a
              className={`${DropdownMobileCss['dropdown-p']} mb-0`}
              href="/member"
              onClick={() => {
                setMemberPage('comment')
                localStorage.setItem('memberPage', 'comment')
              }}
            >
              過往評論
            </a>
          </div>
          <div className="d-flex align-items-center">
            <svg
              className="menu-icon"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.8401 5.10999C20.3294 4.599 19.7229 4.19364 19.0555 3.91708C18.388 3.64052 17.6726 3.49817 16.9501 3.49817C16.2276 3.49817 15.5122 3.64052 14.8448 3.91708C14.1773 4.19364 13.5709 4.599 13.0601 5.10999L12.0001 6.16999L10.9401 5.10999C9.90843 4.0783 8.50915 3.4987 7.05012 3.4987C5.59109 3.4987 4.19181 4.0783 3.16012 5.10999C2.12843 6.14169 1.54883 7.54096 1.54883 8.99999C1.54883 10.459 2.12843 11.8583 3.16012 12.89L4.22012 13.95L12.0001 21.73L19.7801 13.95L20.8401 12.89C21.3511 12.3792 21.7565 11.7728 22.033 11.1053C22.3096 10.4379 22.4519 9.72248 22.4519 8.99999C22.4519 8.27751 22.3096 7.5621 22.033 6.89464C21.7565 6.22718 21.3511 5.62075 20.8401 5.10999Z"
                stroke="#4d5a51"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <a
              className={`${DropdownMobileCss['dropdown-p']} mb-0`}
              href="/member"
              onClick={() => {
                setMemberPage('favorite')
                localStorage.setItem('memberPage', 'favorite')
              }}
            >
              收藏路線
            </a>
          </div>

          <div
            className={`${DropdownMobileCss['bottom-padding']} d-flex align-items-center 
            ${DropdownMobileCss['logout']}`}
            onClick={() => {
              logout()
              navigate('/index')
              setShowListMobile(!showListMobile)
            }}
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 21.5H5C4.46957 21.5 3.96086 21.2893 3.58579 20.9142C3.21071 20.5391 3 20.0304 3 19.5V5.5C3 4.96957 3.21071 4.46086 3.58579 4.08579C3.96086 3.71071 4.46957 3.5 5 3.5H9"
                stroke="#4d5a51"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 17.5L21 12.5L16 7.5"
                stroke="#4d5a51"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 12H9"
                stroke="#4d5a51"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className={`${DropdownMobileCss['dropdown-p']} mb-0`}>登出</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarDropdown
