import React, { useState, useEffect } from 'react'
import styles from './../styles/Comment.module.css'
import CommentAmount from './LaiCommentAmount'
import CommentCard from './LaiCommentCard'
import axios from 'axios'
import { USER_COMMENT } from '../connections/api-config'

export default function LaiComment() {
  const [userComment, setUserComment] = useState([])
  let currentUserComment = []

  const getComment = async (req, res) => {
    const userString = localStorage.getItem('myAuth')
    const user = JSON.parse(userString) //localstorage出來的東西都是字串，需要解析
    const token = user.token
    const mid = user.accountId

    try {
      const res = await axios.get(USER_COMMENT(mid), {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (!res) return res.sendStatus(401)
      // const currentUserId = myAuth.sid

      currentUserComment = res.data
      setUserComment(currentUserComment)
      // console.log('member-data-rows:', res.data)
      console.log('currentUserComment:', currentUserComment)
    } catch (error) {
      console.log("there's an error in db connection")
      return []
    }
  }
  useEffect(() => {
    getComment()
    console.log('state:', userComment)
    console.log('length:', userComment.length)
  }, [userComment])
  return (
    <>
      <div className={styles['member-data']}>
        <div className={styles['title']}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 12C21.0034 13.3199 20.6951 14.6219 20.1 15.8C19.3944 17.2118 18.3098 18.3992 16.9674 19.2293C15.6251 20.0594 14.0782 20.4994 12.5 20.5C11.1801 20.5035 9.87812 20.1951 8.7 19.6L3 21.5L4.9 15.8C4.30493 14.6219 3.99656 13.3199 4 12C4.00061 10.4218 4.44061 8.87488 5.27072 7.53258C6.10083 6.19028 7.28825 5.1056 8.7 4.40003C9.87812 3.80496 11.1801 3.49659 12.5 3.50003H13C15.0843 3.61502 17.053 4.49479 18.5291 5.97089C20.0052 7.44699 20.885 9.41568 21 11.5V12Z"
              stroke="#6cba7c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h1>過往評論</h1>
        </div>
        <div className={styles['container']}>
          <div className={styles['filter-area']}>
            <div className={styles['show-number']}>
              <p>共有</p>
              {/* TODO連結評論數量 */}
              <CommentAmount amount={userComment.length} />
              {/* <p id={styles['comment-amount']}>4</p> */}
              <p>則評論</p>
            </div>
            <div className={styles['filter-btn']}>
              <select>
                <option>排列順序</option>
                <option>未回覆在前</option>
                <option>已回覆在前</option>
                <option>依照評論順序</option>
              </select>
            </div>
          </div>
          <div className={styles['comment-list']}>
            {userComment.map((v, i) => {
              return (
                <CommentCard
                  title={'草嶺古道｜探索新北一日遊'}
                  orderId={'S12345678'}
                  dateStart={'2023/01/04'}
                  dateEnd={'2023/01/07'}
                  comment={v.comment}
                  reply={v.reply}
                />
              )
            })}
            {/* <CommentCard
              title={'草嶺古道｜探索新北一日遊'}
              orderId={'S12345678'}
              dateStart={'2023/01/04'}
              dateEnd={'2023/01/07'}
              comment={
                '高鐵台北站不僅是台灣高速鐵路的車站之一，同時也是台灣鐵路縱貫線、台北捷運紅線、藍線、機場捷運的轉運車站，是大台北地區最大的交通轉運中心。'
              }
              reply={
                '高鐵台北站整體建築地上六層、地下四層，［地上一樓］為大廳樓層，設有東、南、北、西每面各三個出口，［地上二樓］是由微風廣場接手的微風台北車站以精緻的美食料理為商場招牌，［地上三樓至六樓］則為台鐵和高鐵的行政中心'
              }
            /> */}
            {/* <CommentCard
              title={'楊金縱走｜探索大台北三日遊'}
              orderId={'S87654322'}
              dateStart={'2023/04/04'}
              dateEnd={'2023/04/07'}
              comment={
                '同時也是台灣鐵路縱貫線、台北捷運紅線、藍線、機場捷運的轉運車站，是大台北地區最大的交通轉運中心。'
              }
              reply={
                '［地上一樓］為大廳樓層，設有東、南、北、西每面各三個出口，［地上二樓］是由微風廣場接手的微風台北車站以精緻的美食料理為商場招牌，［地上三樓至六樓］則為台鐵和高鐵的行政中心'
              }
            /> */}
            {/* <div className={styles['comment-card']}>
              <div className={styles['title-area']}>
                <div className={styles['product-title']}>
                  <h6>名樹，斷崖，十峻之一 | 武陵四秀 三天三夜夜夜夜夜夜</h6>
                  <p>2022/10/01 - 2022/10/04</p>
                </div>
                <div className={styles['order-id']}>
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 4.5H18C18.5304 4.5 19.0391 4.71071 19.4142 5.08579C19.7893 5.46086 20 5.96957 20 6.5V20.5C20 21.0304 19.7893 21.5391 19.4142 21.9142C19.0391 22.2893 18.5304 22.5 18 22.5H6C5.46957 22.5 4.96086 22.2893 4.58579 21.9142C4.21071 21.5391 4 21.0304 4 20.5V6.5C4 5.96957 4.21071 5.46086 4.58579 5.08579C4.96086 4.71071 5.46957 4.5 6 4.5H8"
                      stroke="#9AA09B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 2.5H9C8.44772 2.5 8 2.94772 8 3.5V5.5C8 6.05228 8.44772 6.5 9 6.5H15C15.5523 6.5 16 6.05228 16 5.5V3.5C16 2.94772 15.5523 2.5 15 2.5Z"
                      stroke="#9AA09B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p>訂單編號：</p>
                  <p>S12565689</p>
                </div>
              </div>
              <div className={styles['comment-bar']}></div>
              <div className={styles['comment-text']}>
                <div className={styles['customer-comment']}>
                  <h6>您的評論：</h6>
                  <p>
                    地下一樓有高鐵相關事宜服務台，地下二樓則是兩個［島式台鐵］月台和兩個［島式高鐵］月台；地下三樓和四樓分別為台北捷運藍線和紅線的島式月台，捷運月台共設有8個出入口
                  </p>
                </div>
                <div className={styles['reply']}>
                  <h6>業主回覆：</h6>
                  <p>
                    高鐵台北站形成路線密集可與其他地區互通有無的交通樞紐地帶；高鐵台北站從台北火車站發展而來
                  </p>
                </div>
              </div>
            </div>
            <div className={styles['comment-card']}>
              <div className={styles['title-area']}>
                <div className={styles['product-title']}>
                  <h6>草嶺古道｜探索新北一日遊探索新北一日遊</h6>
                  <p>2022/01/01 - 2022/01/03</p>
                </div>
                <div className={styles['order-id']}>
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 4.5H18C18.5304 4.5 19.0391 4.71071 19.4142 5.08579C19.7893 5.46086 20 5.96957 20 6.5V20.5C20 21.0304 19.7893 21.5391 19.4142 21.9142C19.0391 22.2893 18.5304 22.5 18 22.5H6C5.46957 22.5 4.96086 22.2893 4.58579 21.9142C4.21071 21.5391 4 21.0304 4 20.5V6.5C4 5.96957 4.21071 5.46086 4.58579 5.08579C4.96086 4.71071 5.46957 4.5 6 4.5H8"
                      stroke="#9AA09B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 2.5H9C8.44772 2.5 8 2.94772 8 3.5V5.5C8 6.05228 8.44772 6.5 9 6.5H15C15.5523 6.5 16 6.05228 16 5.5V3.5C16 2.94772 15.5523 2.5 15 2.5Z"
                      stroke="#9AA09B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p>訂單編號：</p>
                  <p>S12345678</p>
                </div>
              </div>
              <div className={styles['comment-bar']}></div>
              <div className={styles['comment-text']}>
                <div className={styles['customer-comment']}>
                  <h6>您的評論：</h6>
                  <p>
                    高鐵台北站不僅是台灣高速鐵路的車站之一，同時也是台灣鐵路縱貫線、台北捷運紅線、藍線、機場捷運的轉運車站，是大台北地區最大的交通轉運中心。
                  </p>
                </div>
                <div className={styles['reply']}>
                  <h6>業主回覆：</h6>
                  <p>
                    高鐵台北站整體建築地上六層、地下四層，［地上一樓］為大廳樓層，設有東、南、北、西每面各三個出口，［地上二樓］是由微風廣場接手的微風台北車站以精緻的美食料理為商場招牌，［地上三樓至六樓］則為台鐵和高鐵的行政中心
                  </p>
                </div>
              </div>
            </div>
            <div className={styles['comment-card']}>
              <div className={styles['title-area']}>
                <div className={styles['product-title']}>
                  <h6>草嶺古道｜探索新北一日遊探索新北一日遊</h6>
                  <p>2022/01/01 - 2022/01/03</p>
                </div>
                <div className={styles['order-id']}>
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 4.5H18C18.5304 4.5 19.0391 4.71071 19.4142 5.08579C19.7893 5.46086 20 5.96957 20 6.5V20.5C20 21.0304 19.7893 21.5391 19.4142 21.9142C19.0391 22.2893 18.5304 22.5 18 22.5H6C5.46957 22.5 4.96086 22.2893 4.58579 21.9142C4.21071 21.5391 4 21.0304 4 20.5V6.5C4 5.96957 4.21071 5.46086 4.58579 5.08579C4.96086 4.71071 5.46957 4.5 6 4.5H8"
                      stroke="#9AA09B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 2.5H9C8.44772 2.5 8 2.94772 8 3.5V5.5C8 6.05228 8.44772 6.5 9 6.5H15C15.5523 6.5 16 6.05228 16 5.5V3.5C16 2.94772 15.5523 2.5 15 2.5Z"
                      stroke="#9AA09B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p>訂單編號：</p>
                  <p>S12345678</p>
                </div>
              </div>
              <div className={styles['comment-bar']}></div>
              <div className={styles['comment-text']}>
                <div className={styles['customer-comment']}>
                  <h6>您的評論：</h6>
                  <p>
                    高鐵台北站不僅是台灣高速鐵路的車站之一，同時也是台灣鐵路縱貫線、台北捷運紅線、藍線、機場捷運的轉運車站，是大台北地區最大的交通轉運中心。
                  </p>
                </div>
                <div className={styles['reply']}>
                  <h6>業主回覆：</h6>
                  <p>
                    高鐵台北站整體建築地上六層、地下四層，［地上一樓］為大廳樓層，設有東、南、北、西每面各三個出口，［地上二樓］是由微風廣場接手的微風台北車站以精緻的美食料理為商場招牌，［地上三樓至六樓］則為台鐵和高鐵的行政中心
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
