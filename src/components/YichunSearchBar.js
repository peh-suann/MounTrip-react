import React, { useContext } from 'react'
import { StylesContext } from './../pages/YichunProducts'

function YichunSearchBar() {
  const styles = useContext(StylesContext)
  return (
    <>
      <section id={styles.search_bar}>
        <div className={`${styles.search_item} ${styles.location}`}>
          <div className={styles.icon}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6666 23.3333C18.5576 23.3333 23.3333 18.5576 23.3333 12.6666C23.3333 6.77561 18.5576 2 12.6666 2C6.77561 2 2 6.77561 2 12.6666C2 18.5576 6.77561 23.3333 12.6666 23.3333Z"
                stroke="#6CBA7C"
                strokeWidth="2.5"
                strokeLinecap="square"
              />
              <path
                d="M26.0002 25.9992L20.2002 20.1992"
                stroke="#6CBA7C"
                strokeWidth="2.5"
                strokeLinecap="square"
              />
            </svg>
          </div>
          <div className={styles.input_field}>
            <label htmlFor="location">目的地</label>
            <input type="text" id="location" placeholder="想去的地方..." />
          </div>
        </div>
        <div className={`${styles.search_item} ${styles.date}`}>
          <div className={styles.icon}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.1667 4.66797H5.83333C4.54467 4.66797 3.5 5.71264 3.5 7.0013V23.3346C3.5 24.6233 4.54467 25.668 5.83333 25.668H22.1667C23.4553 25.668 24.5 24.6233 24.5 23.3346V7.0013C24.5 5.71264 23.4553 4.66797 22.1667 4.66797Z"
                stroke="#6CBA7C"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.6665 2.33203V6.9987"
                stroke="#6CBA7C"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.3335 2.33203V6.9987"
                stroke="#6CBA7C"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 11.668H24.5"
                stroke="#6CBA7C"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles.input_field}>
            <label htmlFor="date">日期</label>
            <div className={styles.inputs}>
              <input type="date" id="date_start" />
              <span>—</span>
              <input type="date" id="date_end" />
            </div>
          </div>
        </div>
        <div className={`${styles.search_item} ${styles.num_of_ppl}`}>
          <div className={styles.icon}>
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.6667 22.5V20.1667C20.6667 18.929 20.175 17.742 19.2998 16.8668C18.4247 15.9917 17.2377 15.5 16 15.5H6.66667C5.42899 15.5 4.242 15.9917 3.36683 16.8668C2.49166 17.742 2 18.929 2 20.1667V22.5"
                stroke="#6CBA7C"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.3337 10.8333C13.911 10.8333 16.0003 8.74399 16.0003 6.16667C16.0003 3.58934 13.911 1.5 11.3337 1.5C8.75633 1.5 6.66699 3.58934 6.66699 6.16667C6.66699 8.74399 8.75633 10.8333 11.3337 10.8333Z"
                stroke="#6CBA7C"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles.input_field}>
            <label htmlFor="person">人數</label>
            <div className={styles.inputs}>
              <input type="number" id="person" placeholder="2" />人
            </div>
          </div>
        </div>
        <button>搜尋</button>
      </section>
    </>
  )
}

export default YichunSearchBar
