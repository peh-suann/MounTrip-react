// import '../styles/M'
import styles from './../styles/Member.module.css'
import React from 'react'

export default function Member() {
  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.sidebar}>
          <div className={styles.memberProfile}>
            <div className={styles.profile}>
              <div className={styles.picBtn}>
                <svg
                  className={styles.camera}
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1668 14.8337C19.1668 15.2757 18.9912 15.6996 18.6786 16.0122C18.3661 16.3248 17.9421 16.5004 17.5001 16.5004H2.49972C2.05768 16.5004 1.63374 16.3248 1.32118 16.0122C1.00861 15.6996 0.833008 15.2757 0.833008 14.8337V5.66677C0.833008 5.22473 1.00861 4.8008 1.32118 4.48823C1.63374 4.17566 2.05768 4.00006 2.49972 4.00006H5.83313L7.49984 1.5H12.5L14.1667 4.00006H17.5001C17.9421 4.00006 18.3661 4.17566 18.6786 4.48823C18.9912 4.8008 19.1668 5.22473 19.1668 5.66677V14.8337Z"
                    fill="#FFFFF2"
                    stroke="#FFFFF2"
                    stroke-width="1.66671"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.0004 13.1666C11.8414 13.1666 13.3338 11.6742 13.3338 9.83317C13.3338 7.99218 11.8414 6.49976 10.0004 6.49976C8.15941 6.49976 6.66699 7.99218 6.66699 9.83317C6.66699 11.6742 8.15941 13.1666 10.0004 13.1666Z"
                    stroke="#ADD9B1"
                    stroke-width="1.66671"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.profileWrap}>
                <img
                  className={styles.profilePic}
                  src="../../public/profile-picture.jpeg"
                  alt=""
                />
              </div>
            </div>
            <div className={styles.memberName}>
              <p className={styles.firstName}>趙</p>
              <p className={styles.lastName}>宜展</p>
            </div>
            <div className={styles.memberAccount}>yichunccc0830</div>
          </div>
          <button className={styles.editBtn}>編輯個人資料</button>
          <div className="btn-border"></div>
          <div className="sidebar-menu">
            <li className="coupon-link">
              <a href="">
                <svg
                  className="menu-icon"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 12.5V22.5H4V12.5"
                    stroke="#9AA09B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 7.5H2V12.5H22V7.5Z"
                    stroke="#9AA09B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 22.5V7.5"
                    stroke="#9AA09B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 7.5H7.5C6.83696 7.5 6.20107 7.23661 5.73223 6.76777C5.26339 6.29893 5 5.66304 5 5C5 4.33696 5.26339 3.70107 5.73223 3.23223C6.20107 2.76339 6.83696 2.5 7.5 2.5C11 2.5 12 7.5 12 7.5Z"
                    stroke="#9AA09B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 7.5H16.5C17.163 7.5 17.7989 7.23661 18.2678 6.76777C18.7366 6.29893 19 5.66304 19 5C19 4.33696 18.7366 3.70107 18.2678 3.23223C17.7989 2.76339 17.163 2.5 16.5 2.5C13 2.5 12 7.5 12 7.5Z"
                    stroke="#9AA09B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                我的優惠券
              </a>
            </li>
            <li className="achievement-link">
              <a href="">
                <svg
                  className="menu-icon"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1298_10889)">
                    <path
                      d="M12 15.5C15.866 15.5 19 12.366 19 8.5C19 4.63401 15.866 1.5 12 1.5C8.13401 1.5 5 4.63401 5 8.5C5 12.366 8.13401 15.5 12 15.5Z"
                      stroke="#9AA09B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.21 14.39L7 23.5L12 20.5L17 23.5L15.79 14.38"
                      stroke="#9AA09B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                成就獎章
              </a>
            </li>
            <li className="history-order-link">
              <a href="">
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
                    stroke="#9AA09B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 6.5V12.5L16 14.5"
                    stroke="#9AA09B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                歷史訂單
              </a>
            </li>
            <li className="comment-link">
              <a href="">
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
                    stroke="#9AA09B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                過往評論
              </a>
            </li>
            <li className="favorite-link">
              <a href="">
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
                    stroke="#9AA09B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                收藏路線
              </a>
            </li>
          </div>
        </div>
        <div className="member-data">
          <div className="title">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.4446 30.0001V26.889C28.4446 25.2387 27.789 23.6561 26.6221 22.4892C25.4552 21.3223 23.8726 20.6667 22.2223 20.6667H9.77789C8.12765 20.6667 6.545 21.3223 5.37811 22.4892C4.21122 23.6561 3.55566 25.2387 3.55566 26.889V30.0001"
                stroke="#6CBA7C"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.0005 14.4444C19.437 14.4444 22.2228 11.6587 22.2228 8.22222C22.2228 4.78578 19.437 2 16.0005 2C12.5641 2 9.77832 4.78578 9.77832 8.22222C9.77832 11.6587 12.5641 14.4444 16.0005 14.4444Z"
                stroke="#6CBA7C"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h1>會員中心</h1>
          </div>
          <div className="data-area">
            <div class="input-blocks name-wrap">
              <label for="" className="">
                名字
              </label>
              <input type="text" className="" id="" name="" required />
            </div>
            <div className="input-blocks fname-wrap">
              <label for="" className="">
                姓氏
              </label>
              <input type="text" className="" id="" name="" required />
            </div>
            <div className="input-blocks gender-wrap">
              <label for="" className="">
                性別
              </label>
              <select>
                <option>男性</option>
                <option>女性</option>
                <option>不透露</option>
              </select>
            </div>
            <div className="birth-wrap input-blocks">
              <label for="" className="">
                出生年月日
              </label>
              <input type="date" className="" id="" name="" required />
            </div>
            <div className="id-wrap input-blocks">
              <label for="" className="">
                身分證字號
              </label>
              <input type="text" className="" id="" name="" required />
            </div>
            <div className="phone-wrap input-blocks">
              <label for="" className="">
                聯絡電話
              </label>
              <input type="text" className="" id="" name="" required />
            </div>
            <div className="account-wrap input-blocks">
              <label for="" className="">
                會員帳號
              </label>
              <input type="text" className="" id="" name="" required />
            </div>
            <div className="email-wrap input-blocks">
              <label for="" className="">
                電子信箱
              </label>
              <input type="email" className="" id="" name="" required />
            </div>
            <div className="zip-wrap input-blocks">
              <label for="" className="">
                聯絡地址
              </label>
              <input type="text" className="" id="" name="" required />
            </div>
            <div className="city-wrap input-blocks">
              <div className="fake-label-city"></div>
              <select>
                <option>台北市</option>
                <option>新北市</option>
                <option>桃園市</option>
                <option>台中市</option>
                <option>台南市</option>
                <option>高雄市</option>
              </select>
            </div>
            <div className="address-wrap input-blocks">
              <div className="fake-label-add"></div>
              <input type="text" className="" id="" name="" required />
            </div>
            <button className="save-btn">儲存變更</button>
          </div>
        </div>
      </div>
    </>
  )
}
