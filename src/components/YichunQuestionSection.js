// Packages
import axios from 'axios'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// FontAwesome
// import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import {
  faCircleCheck,
  faCircleMinus,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons'

// Connections
import { TEST_ANS } from '../connections/api-config'

// Styles
import { StylesContext } from './../pages/YichunTestNotPlayed'

function YichunQuestionSection(props) {
  const { index, odd, element, display, scrollTo, setCorrect } = props
  const styles = useContext(StylesContext)

  const [ans, setAns] = useState([])
  const [flip, setFlip] = useState([false, false, false])
  const [hover, setHover] = useState([false, false, false])

  const cardRefs = useRef([])
  const buttonRef = useRef(null)

  // getting data
  const getListData = async () => {
    try {
      const response = await axios.get(TEST_ANS)
      // console.log(response.data)
      setAns(response.data)
      return response.data
    } catch (error) {
      console.error(error)
      return []
    }
  }
  useEffect(() => {
    getListData()
  }, [])

  // re-render while value of flip is changed
  useEffect(() => {
    if (flip.filter(Boolean).length === 3) {
      if (window.innerWidth > 390) {
        // console.log('here------', cardRefs.current[0])
        cardRefs.current[0].style.transform = 'rotateZ(-8deg) rotateY(180deg)'
        cardRefs.current[1].style.transform = 'rotateY(180deg)'
        cardRefs.current[2].style.transform = 'rotateZ(8deg) rotateY(180deg)'
      } else {
        console.log('hi')
        cardRefs.current[0].style.transform = 'rotateY(180deg)'
        cardRefs.current[1].style.transform = 'rotateY(180deg)'
        cardRefs.current[2].style.transform = 'rotateY(180deg)'
      }
    }
  }, flip)

  return (
    <section
      className={`${styles.questions} 
      ${
        // 判斷是否要呈現
        display ? '' : styles.display
      }
      ${
        // 判斷為奇數or偶數的卡片
        odd ? styles['ques-odd'] : styles['ques-even']
      }`}
    >
      <img src={`images/yichun/test/questions/0${index + 1}.jpg`} alt="" />
      <div className={styles.num}>{index + 1}</div>
      <div className={`${styles['ques-box']} ${styles['ques-box-web']}`}>
        {element.question}
      </div>
      <div className={`${styles['ques-box']} ${styles['ques-box-mobile']}`}>
        {element.question}
      </div>
      <img
        src={
          window.innerWidth > 390
            ? odd
              ? 'images/yichun/test/hill-yellow.svg'
              : 'images/yichun/test/hill-green.svg'
            : odd
            ? 'images/yichun/test/hill-y-mobile.svg'
            : 'images/yichun/test/hill-g-mobile.svg'
        }
        alt=""
      />
      <div className={styles.cards}>
        {ans
          .filter((el) => el.question_sid === element.sid)
          .map((el, i) => {
            return (
              <div
                className={`${styles.ans} ${hover[i] ? styles.hover : ''}`}
                key={el.sid}
                ref={(el) => {
                  cardRefs.current[i] = el
                }}
                onMouseEnter={
                  // 還沒翻面
                  !flip[i]
                    ? (e) => {
                        if (window.innerWidth > 390) {
                          // 把hover功能打開
                          setHover((prev) => {
                            const newHover = [...prev]
                            newHover[i] = true
                            return newHover
                          })
                          switch (i) {
                            case 1:
                              e.currentTarget.style.transform =
                                'translateY(-8px)'
                              break
                            case 2:
                              e.currentTarget.style.transform =
                                'translateY(-8px) rotateZ(8deg)'
                              break
                            default:
                              e.currentTarget.style.transform =
                                'translateY(-8px) rotateZ(-8deg)'
                          }
                        }
                      }
                    : // 已經翻面
                      (e) => {
                        // 把hover功能關掉
                        setHover((prev) => {
                          const newHover = [...prev]
                          newHover[i] = false
                          return newHover
                        })
                      }
                }
                onMouseLeave={
                  // 翻面後MouseEnter跟MouseLeave都不會有任何動作，所以只判斷還沒翻面時的狀態
                  !flip[i]
                    ? (e) => {
                        if (window.innerWidth > 390) {
                          // 把hover功能關掉
                          setHover((prev) => {
                            const newHover = [...prev]
                            newHover[i] = false
                            return newHover
                          })
                          switch (i) {
                            case 1:
                              e.currentTarget.style.transform =
                                'translateY(0px)'
                              e.currentTarget.style.boxShadow =
                                '0px 4px 10px 1px rgba(1, 19, 6, 0.2);'
                              break
                            case 2:
                              e.currentTarget.style.transform =
                                'translateY(0px) rotateZ(8deg)'
                              e.currentTarget.style.boxShadow =
                                '0px 4px 10px 1px rgba(1, 19, 6, 0.2);'
                              break
                            default:
                              e.currentTarget.style.transform =
                                'translateY(0px) rotateZ(-8deg)'
                          }
                        }
                      }
                    : null
                }
                onClick={(e) => {
                  // 如果還沒有卡片被翻面就執行以下
                  if (flip.filter(Boolean).length === 0) {
                    // 如果還沒翻面就翻面，如果已經翻面了再click也不會有任何動作
                    if (!flip[i]) {
                      setHover((prev) => {
                        const newHover = [...prev]
                        newHover[i] = false
                        return newHover
                      })
                      if (window.innerWidth > 390) {
                        switch (i) {
                          case 1:
                            e.currentTarget.style.transform = 'rotateY(180deg)'
                            e.currentTarget.style.border = '8px solid #6cba7c'
                            break
                          case 2:
                            e.currentTarget.style.transform =
                              'rotateZ(8deg) rotateY(180deg)'
                            e.currentTarget.style.border = '8px solid #6cba7c'
                            break
                          default:
                            e.currentTarget.style.transform =
                              'rotateZ(-8deg) rotateY(180deg)'
                            e.currentTarget.style.border = '8px solid #6cba7c'
                        }
                      } else {
                        switch (i) {
                          case 1:
                            e.currentTarget.style.transform = 'rotateY(180deg)'
                            e.currentTarget.style.border = '8px solid #6cba7c'
                            break
                          case 2:
                            e.currentTarget.style.transform = 'rotateY(180deg)'
                            e.currentTarget.style.border = '8px solid #6cba7c'
                            break
                          default:
                            e.currentTarget.style.transform = 'rotateY(180deg)'
                            e.currentTarget.style.border = '8px solid #6cba7c'
                        }
                      }
                      const newFlip = [...flip]
                      newFlip[i] = true
                      setFlip(newFlip)

                      if (el.correct_sid === 2) {
                        setCorrect((prev) => {
                          const newCorrect = [...prev]
                          newCorrect[el.question_sid - 1] = true
                          return newCorrect
                        })
                        // console.log('correct')
                      }

                      window.setTimeout(() => {
                        const newFlip = flip.fill(true)
                        setFlip(newFlip)
                        window.setTimeout(() => {
                          buttonRef.current.style.opacity = 1
                          buttonRef.current.style.visibility = 'visible'
                          buttonRef.current.style.pointerEvents = 'auto'
                        }, 700)
                      }, 600)
                    }
                  }
                }}
              >
                <div key={el.sid} className={styles.front_side}>
                  {el.answer}
                </div>
                <div className={styles.back_side}>
                  <div className={styles.correct}>
                    {el.correct_sid === 0 ? (
                      <FontAwesomeIcon
                        icon={faCircleXmark}
                        style={{ color: '#e85f5c' }}
                      />
                    ) : el.correct_sid === 1 ? (
                      <FontAwesomeIcon
                        icon={faCircleMinus}
                        style={{ color: '#f3c969' }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        style={{ color: '#6cba7c' }}
                      />
                    )}
                    <h5>{el.answer}</h5>
                  </div>
                  <p>{el.ans_describe}</p>
                </div>
              </div>
            )
          })}
      </div>
      <button
        className={styles.next}
        ref={buttonRef}
        onClick={() => {
          scrollTo(index + 1)
        }}
      >
        {index === 4 ? '測驗結果' : '下一題'}
      </button>
    </section>
  )
}

export default YichunQuestionSection
