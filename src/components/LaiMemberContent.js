import React from 'react'
import styles from './../styles/Member.module.css'

export default function MemberContent() {
  // const { sidebarPage } = props
  // const displayMember = (
  //   <div className={styles['member-data']}>
  //     <div className={styles['title']}>
  //       <svg
  //         width="32"
  //         height="32"
  //         viewBox="0 0 32 32"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <path
  //           d="M28.4446 30.0001V26.889C28.4446 25.2387 27.789 23.6561 26.6221 22.4892C25.4552 21.3223 23.8726 20.6667 22.2223 20.6667H9.77789C8.12765 20.6667 6.545 21.3223 5.37811 22.4892C4.21122 23.6561 3.55566 25.2387 3.55566 26.889V30.0001"
  //           stroke="#6CBA7C"
  //           strokeWidth="3"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M16.0005 14.4444C19.437 14.4444 22.2228 11.6587 22.2228 8.22222C22.2228 4.78578 19.437 2 16.0005 2C12.5641 2 9.77832 4.78578 9.77832 8.22222C9.77832 11.6587 12.5641 14.4444 16.0005 14.4444Z"
  //           stroke="#6CBA7C"
  //           strokeWidth="3"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //       </svg>
  //       <h1>會員中心</h1>
  //     </div>
  //     <div className={styles['data-area']}>
  //       <div className={`${styles['name-wrap']} ${styles['input-blocks']}`}>
  //         <label htmlFor="" className="">
  //           名字
  //         </label>
  //         <input type="text" className="" id="" name="" required />
  //       </div>
  //       <div className={`${styles['fname-wrap']} ${styles['input-blocks']}`}>
  //         <label htmlFor="" className={''}>
  //           姓氏
  //         </label>
  //         <input type="text" className={''} id="" name="" required />
  //       </div>
  //       <div className={`${styles['gender-wrap']} ${styles['input-blocks']}`}>
  //         <label htmlFor="" className="">
  //           性別
  //         </label>
  //         <select>
  //           <option>男性</option>
  //           <option>女性</option>
  //           <option>不透露</option>
  //         </select>
  //       </div>
  //       <div
  //         className={`${styles['birth-wrap']} ${styles['input-blocks']}`}
  //         //   className={styles['birth-wrap']}
  //       >
  //         <label htmlFor="" className="">
  //           出生年月日
  //         </label>
  //         <input type="date" className="" id="" name="" required />
  //       </div>
  //       <div className={`${styles['id-wrap']} ${styles['input-blocks']}`}>
  //         <label htmlFor="" className="">
  //           身分證字號
  //         </label>
  //         <input type="text" className="" id="" name="" required />
  //       </div>
  //       <div className={`${styles['phone-wrap']} ${styles['input-blocks']}`}>
  //         <label htmlFor="" className="">
  //           聯絡電話
  //         </label>
  //         <input type="text" className="" id="" name="" required />
  //       </div>
  //       <div className={`${styles['account-wrap']} ${styles['input-blocks']}`}>
  //         <label htmlFor="" className="">
  //           會員帳號
  //         </label>
  //         <input type="text" className={''} id="" name="" required />
  //       </div>
  //       <div className={`${styles['email-wrap']} ${styles['input-blocks']}`}>
  //         <label htmlFor="" className="">
  //           電子信箱
  //         </label>
  //         <input type="email" className="" id="" name="" required />
  //       </div>
  //       <div className={`${styles['zip-wrap']} ${styles['input-blocks']}`}>
  //         <label htmlFor="" className="">
  //           聯絡地址
  //         </label>
  //         <input type="text" className="" id="" name="" required />
  //       </div>
  //       <div className={`${styles['city-wrap']} ${styles['input-blocks']}`}>
  //         <div className={styles['fake-label-city']}></div>
  //         <select>
  //           <option>台北市</option>
  //           <option>新北市</option>
  //           <option>桃園市</option>
  //           <option>台中市</option>
  //           <option>台南市</option>
  //           <option>高雄市</option>
  //         </select>
  //       </div>
  //       <div className={`${styles['address-wrap']} ${styles['input-blocks']}`}>
  //         <div className={styles['fake-label-add']}></div>
  //         <input type="text" className="" id="" name="" required />
  //       </div>
  //       <button className={styles['save-btn']}>儲存變更</button>
  //     </div>
  //   </div>
  // )
  const displayPage = (user, sidebarPage) => {
    // switch (sidebarPage) {
    //   case 'member':
    //   default:
    //     return displayMember
    //   case 'coupon':
    //     return displayCoupon
    // }
  }
  return (
    <>
      <div className={styles['member-data']}>
        <div className={styles['title']}>
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
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.0005 14.4444C19.437 14.4444 22.2228 11.6587 22.2228 8.22222C22.2228 4.78578 19.437 2 16.0005 2C12.5641 2 9.77832 4.78578 9.77832 8.22222C9.77832 11.6587 12.5641 14.4444 16.0005 14.4444Z"
              stroke="#6CBA7C"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h1>會員中心</h1>
        </div>
        <div className={styles['data-area']}>
          <div className={`${styles['name-wrap']} ${styles['input-blocks']}`}>
            <label htmlFor="" className="">
              名字
            </label>
            <input type="text" className="" id="" name="" required />
          </div>
          <div className={`${styles['fname-wrap']} ${styles['input-blocks']}`}>
            <label htmlFor="" className={''}>
              姓氏
            </label>
            <input type="text" className={''} id="" name="" required />
          </div>
          <div className={`${styles['gender-wrap']} ${styles['input-blocks']}`}>
            <label htmlFor="" className="">
              性別
            </label>
            <select>
              <option>男性</option>
              <option>女性</option>
              <option>不透露</option>
            </select>
          </div>
          <div
            className={`${styles['birth-wrap']} ${styles['input-blocks']}`}
            //   className={styles['birth-wrap']}
          >
            <label htmlFor="" className="">
              出生年月日
            </label>
            <input type="date" className="" id="" name="" required />
          </div>
          <div className={`${styles['id-wrap']} ${styles['input-blocks']}`}>
            <label htmlFor="" className="">
              身分證字號
            </label>
            <input type="text" className="" id="" name="" required />
          </div>
          <div className={`${styles['phone-wrap']} ${styles['input-blocks']}`}>
            <label htmlFor="" className="">
              聯絡電話
            </label>
            <input type="text" className="" id="" name="" required />
          </div>
          <div
            className={`${styles['account-wrap']} ${styles['input-blocks']}`}
          >
            <label htmlFor="" className="">
              會員帳號
            </label>
            <input type="text" className={''} id="" name="" required />
          </div>
          <div className={`${styles['email-wrap']} ${styles['input-blocks']}`}>
            <label htmlFor="" className="">
              電子信箱
            </label>
            <input type="email" className="" id="" name="" required />
          </div>
          <div className={`${styles['zip-wrap']} ${styles['input-blocks']}`}>
            <label htmlFor="" className="">
              聯絡地址
            </label>
            <input type="text" className="" id="" name="" required />
          </div>
          <div className={`${styles['city-wrap']} ${styles['input-blocks']}`}>
            <div className={styles['fake-label-city']}></div>
            <select>
              <option>台北市</option>
              <option>新北市</option>
              <option>桃園市</option>
              <option>台中市</option>
              <option>台南市</option>
              <option>高雄市</option>
            </select>
          </div>
          <div
            className={`${styles['address-wrap']} ${styles['input-blocks']}`}
          >
            <div className={styles['fake-label-add']}></div>
            <input type="text" className="" id="" name="" required />
          </div>
          <button className={styles['save-btn']}>儲存變更</button>
        </div>
      </div>
    </>
  )
}