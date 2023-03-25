// Packages
import React, {
  createContext,
  useEffect,
  useState,
  useRef,
  useContext,
} from 'react'
import axios from 'axios'

// Components
import YichunQuestionSection from '../components/YichunQuestionSection'
import Button from '../components/Button'

// Connections
import { TEST_QUES } from '../connections/api-config'

// Context
import { TestCouponContext } from '../contexts/TestCouponContext'

// Styles
import styles from './../styles/yichun_styles/YichunTest.module.css'
export const StylesContext = createContext(styles)

function YichunTestNotPlayed() {
  const [ques, setQues] = useState([])
  const [display, setDisplay] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ])
  const [correct, setCorrect] = useState([false, false, false, false, false])
  const {
    newCoupon,
    setNewCoupon,
    toggleSale,
    sale,
    coupon,
    insertMemberPlay,
    insertMemberCoupon,
    test,
    setTest,
  } = useContext(TestCouponContext)
  const [ifLogin, setIfLogin] = useState(false)

  // mountain moving effect
  const mountainG2Ref = useRef(null)
  const mountainY2Ref = useRef(null)
  const mountainG1Ref = useRef(null)
  const mountainY1Ref = useRef(null)

  const prizemountainG2Ref = useRef(null)
  const prizemountainY2Ref = useRef(null)
  const prizemountainG1Ref = useRef(null)
  const prizemountainY1Ref = useRef(null)

  let timeoutId
  let mouseX, mouseY

  const getListData = async () => {
    try {
      const response = await axios.get(TEST_QUES)
      setQues(response.data)
      //   console.log(response.data)
      return response.data
    } catch (err) {
      console.error(err)
      return []
    }
  }

  const handleClick = () => {
    const currentAccount = JSON.parse(localStorage.getItem('myAuth'))
    if (currentAccount) {
      // 已登入但未玩過
      console.log('已登入但未玩過')
      setNewCoupon(true)
      setIfLogin(true)
      setTest(false)
      insertMemberPlay()
      insertMemberCoupon()
    } else {
      // 未登入
      console.log('未登入')
      localStorage.setItem(
        'test',
        JSON.stringify({
          sale,
          coupon,
        })
      )
      setNewCoupon(true)
      setIfLogin(true)
      setTest(true)
    }
  }

  useEffect(() => {
    getListData()
    localStorage.setItem('memberPage', 'coupon')
    const currentAccount = JSON.parse(localStorage.getItem('myAuth'))
    if (currentAccount) {
      setIfLogin(true)
    } else {
      setIfLogin(false)
    }
  }, [])

  useEffect(() => {
    if (display[5]) {
      toggleSale(correct.filter(Boolean).length)
    }
  }, [display])

  const scrollTo = async (index) => {
    const windowHeight = window.innerHeight
    // console.log(index)
    await setDisplay((prev) => {
      const newDisplay = [...prev]
      newDisplay[index] = true
      return newDisplay
    })
    window.scrollTo({
      top: windowHeight + windowHeight * index,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <StylesContext.Provider value={styles}>
        <section
          className={styles['intro-page']}
          onMouseMove={(e) => {
            if (window.innerWidth > 390) {
              clearTimeout(timeoutId)
              timeoutId = setTimeout(function () {
                // code to be executed after 100ms delay
                const windowHeight = window.innerHeight
                const windowWidth = window.innerWidth
                const halfHeight = windowHeight / 2
                const halfWidth = windowWidth / 2

                mouseX = e.clientX
                mouseY = e.clientY

                const moveX = (mouseX - halfWidth) / halfWidth
                const moveY = (mouseY - halfHeight) / halfHeight

                // console.log('----------------------')
                // console.log('mouseX: ', mouseX)
                // console.log('mouseY: ', mouseY)
                // console.log('moveX: ', moveX)
                // console.log('moveY: ', moveY)

                // console.log('mountainY1Ref', mountainY1Ref)

                mountainG2Ref.current.style.transform = `translate(${
                  moveX * 1
                }%,${moveY * 4}%) scale(1.1)`
                mountainY2Ref.current.style.transform = `translate(${
                  moveX * -1
                }%,${moveY * 2}%) scale(1.105)`
                mountainG1Ref.current.style.transform = `translate(${
                  moveX * 0.5
                }%,${moveY * 2}%) scale(1.2)`
                mountainY1Ref.current.style.transform = `translate(${
                  moveX * -0.5
                }%,${moveY * -3}%) scale(1.11)`
              })
            }
          }}
        >
          <img
            className={styles['clouds-web']}
            src="images/yichun/test/clouds/pic20.png"
            alt="cloud"
          />
          <img
            className={styles['clouds-web']}
            src="images/yichun/test/clouds/pic19.png"
            alt="cloud"
          />
          <img
            className={styles['clouds-web']}
            src="images/yichun/test/clouds/pic18.png"
            alt="cloud"
          />
          <img
            className={styles['clouds-web']}
            src="images/yichun/test/clouds/pic17.png"
            alt="cloud"
          />
          <img
            className={styles['clouds-web']}
            src="images/yichun/test/clouds/pic16.png"
            alt="cloud"
          />
          <img
            className={styles['clouds-web']}
            src="images/yichun/test/clouds/pic15.png"
            alt="cloud"
          />
          <img
            className={styles['clouds-web']}
            src="images/yichun/test/clouds/pic14.png"
            alt="cloud"
          />
          <img
            className={styles['clouds-web']}
            src="images/yichun/test/clouds/pic13.png"
            alt="cloud"
          />
          <img
            className={styles['clouds-web']}
            src="images/yichun/test/clouds/pic12.png"
            alt="cloud"
          />
          <img
            className={styles['clouds-web']}
            src="images/yichun/test/clouds/pic11.png"
            alt="cloud"
          />
          <img
            className={styles['clouds-web']}
            src="images/yichun/test/clouds/pic10.png"
            alt="cloud"
          />
          <img
            className={styles['clouds-web']}
            src="images/yichun/test/clouds/pic09.png"
            alt="cloud"
          />
          <img
            className={styles['clouds-web']}
            src="images/yichun/test/clouds/pic08.png"
            alt="cloud"
          />
          <img
            className={styles['clouds-web']}
            src="images/yichun/test/clouds/pic07.png"
            alt="cloud"
          />
          <img
            className={styles['clouds-web']}
            src="images/yichun/test/clouds/pic06.png"
            alt="cloud"
          />
          <img
            className={styles['clouds-web']}
            src="images/yichun/test/clouds/pic05.png"
            alt="cloud"
          />
          <img
            className={styles['clouds-web']}
            src="images/yichun/test/clouds/pic04.png"
            alt="cloud"
          />
          <img
            className={styles['clouds-web']}
            src="images/yichun/test/clouds/pic03.png"
            alt="cloud"
          />
          <img
            className={styles['clouds-web']}
            src="images/yichun/test/clouds/pic02.png"
            alt="cloud"
          />
          <img
            className={styles['clouds-web']}
            src="images/yichun/test/clouds/pic01.png"
            alt="cloud"
          />
          <img
            className={styles['clouds-mobile']}
            src="images/yichun/test/clouds/mobile/pic11.png"
            alt=""
          />
          <img
            src="images/yichun/test/clouds/mobile/pic10.png"
            alt=""
            className={styles['clouds-mobile']}
          />
          <img
            src="images/yichun/test/clouds/mobile/pic09.png"
            alt=""
            className={styles['clouds-mobile']}
          />
          <img
            src="images/yichun/test/clouds/mobile/pic08.png"
            alt=""
            className={styles['clouds-mobile']}
          />
          <img
            src="images/yichun/test/clouds/mobile/pic07.png"
            alt=""
            className={styles['clouds-mobile']}
          />
          <img
            src="images/yichun/test/clouds/mobile/pic06.png"
            alt=""
            className={styles['clouds-mobile']}
          />
          <img
            src="images/yichun/test/clouds/mobile/pic05.png"
            alt=""
            className={styles['clouds-mobile']}
          />
          <img
            src="images/yichun/test/clouds/mobile/pic04.png"
            alt=""
            className={styles['clouds-mobile']}
          />
          <img
            src="images/yichun/test/clouds/mobile/pic03.png"
            alt=""
            className={styles['clouds-mobile']}
          />
          <img
            src="images/yichun/test/clouds/mobile/pic02.png"
            alt=""
            className={styles['clouds-mobile']}
          />
          <img
            src="images/yichun/test/clouds/mobile/pic01.png"
            alt=""
            className={styles['clouds-mobile']}
          />

          <img
            className={`${styles.mountains} ${styles.g2}`}
            src="images/yichun/test/mountain/g-2.svg"
            alt=""
            ref={mountainG2Ref}
          />
          <img
            className={`${styles.mountains} ${styles.y2}`}
            src="images/yichun/test/mountain/y-2.svg"
            alt=""
            ref={mountainY2Ref}
          />
          <img
            className={`${styles.mountains} ${styles.g1}`}
            src="images/yichun/test/mountain/g-1.svg"
            alt=""
            ref={mountainG1Ref}
          />

          <button
            className={styles.start_test}
            onClick={() => {
              scrollTo(0)
            }}
          >
            開始
            <br />
            作答
          </button>

          <img
            className={`${styles.mountains} ${styles.y1}`}
            src="images/yichun/test/mountain/y-1.svg"
            alt=""
            ref={mountainY1Ref}
          />
        </section>
        <section className={styles['intro-text']}>
          <div className={styles['intro-title']}>登山小測驗</div>
          <h3>在山上迷路了，你能平安下山嗎？</h3>
          <p>
            在山上迷路，一直以來是山難發生的最大主因。許多人遇到迷路時會嚇到，一下子陷入慌張，反而容易做錯決定，降低自己求救成功、平安下山的機會；假如你今天在山上迷路了你有辦法順利脫困嗎？接下來你將置身於5種迷路常見的情境中，嘗試做出讓自己能平安獲救的選擇吧～
          </p>
        </section>
        {ques.map((el, i) => {
          if (i % 2 === 0) {
            // even
            return (
              <YichunQuestionSection
                key={el.sid}
                index={i}
                element={el}
                odd={true}
                display={display[i]}
                scrollTo={scrollTo}
                correct={correct}
                setCorrect={setCorrect}
              />
            )
          } else {
            // odd
            return (
              <YichunQuestionSection
                key={el.sid}
                index={i}
                element={el}
                odd={false}
                display={display[i]}
                scrollTo={scrollTo}
                correct={correct}
                setCorrect={setCorrect}
              />
            )
          }
        })}
        <section
          className={`${styles.price} ${display[5] ? '' : styles.display}`}
          onMouseMove={(e) => {
            if (window.innerWidth > 390) {
              clearTimeout(timeoutId)
              timeoutId = setTimeout(function () {
                // code to be executed after 100ms delay
                const windowHeight = window.innerHeight
                const windowWidth = window.innerWidth
                const halfHeight = windowHeight / 2
                const halfWidth = windowWidth / 2

                mouseX = e.clientX
                mouseY = e.clientY

                const moveX = (mouseX - halfWidth) / halfWidth
                const moveY = (mouseY - halfHeight) / halfHeight

                // console.log('----------------------')
                // console.log('mouseX: ', mouseX)
                // console.log('mouseY: ', mouseY)
                // console.log('moveX: ', moveX)
                // console.log('moveY: ', moveY)

                prizemountainG2Ref.current.style.transform = `translate(${
                  moveX * 1
                }%,${moveY * 4}%) scale(1.1)`
                prizemountainY2Ref.current.style.transform = `translate(${
                  moveX * -1
                }%,${moveY * 2}%) scale(1.105)`
                prizemountainG1Ref.current.style.transform = `translate(${
                  moveX * 0.5
                }%,${moveY * 2}%) scale(1.2)`
                prizemountainY1Ref.current.style.transform = `translate(${
                  moveX * -0.5
                }%,${moveY * -3}%) scale(1.11)`
              })
            }
          }}
        >
          <div className={styles['price-text']}>
            {correct.filter(Boolean).length >= 4 ? (
              <h1 className={styles.congrats}>Congratulation!!!</h1>
            ) : correct.filter(Boolean).length > 2 ? (
              <h1 className={styles.congrats}>Keep Going!!</h1>
            ) : (
              <h1 className={styles.congrats}>Practice harder!</h1>
            )}
            <h3 className={styles['num-of-Ques']}>
              您在此測驗中一共答對 <span>{correct.filter(Boolean).length}</span>{' '}
              題
              <br />
              {correct.filter(Boolean).length >= 4
                ? '登山小達人就是你！'
                : correct.filter(Boolean).length > 2
                ? '繼續加油，學習更多安全知識吧！'
                : '新手上路，多多練習吧！'}
            </h3>
            <p>恭喜獲得 {sale}折 優惠券 乙張</p>
            <div className={styles.buttons}>
              <Button
                text={'來去逛逛'}
                link={'products'}
                style={window.innerHeight > 390 ? '' : { width: '100%' }}
              />
              <Button
                text={'前往我的優惠券'}
                link={ifLogin ? 'member' : 'login'}
                style={window.innerHeight > 390 ? '' : { width: '100%' }}
                handleClick={handleClick}
              />
            </div>
          </div>
          <img
            className={`${styles.mountains} ${styles.g2}`}
            src="images/yichun/test/mountain/g-2.svg"
            alt=""
            ref={prizemountainG2Ref}
          />
          <img
            className={`${styles.mountains} ${styles.y2}`}
            src="images/yichun/test/mountain/y-2.svg"
            alt=""
            ref={prizemountainY2Ref}
          />
          <img
            className={`${styles.mountains} ${styles.g1}`}
            src="images/yichun/test/mountain/g-1.svg"
            alt=""
            ref={prizemountainG1Ref}
          />
          <img
            className={`${styles.mountains} ${styles.y1}`}
            src="images/yichun/test/mountain/y-1.svg"
            alt=""
            ref={prizemountainY1Ref}
          />
          <svg
            className={styles.test_svg_web}
            width="1920"
            height="1080"
            viewBox="0 0 1920 1080"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="curve"
              d="M 5 1080 V 110 a50,50 0 0 1 50,-50 H 1900 a50,50 0 0 1 20,20 V 1080 H30"
              strokeLinejoin="round"
            />
            {/* <path
              id="curve"
              d="M -80 1080 V 120 a50,50 0 0 1 50,-50 H 1980 a50,50 0 0 1 20,20 V 1080 H30"
              strokeLinejoin="round"
            /> */}
            <text>
              <textPath
                alignmentBaseline="middle"
                href="#curve"
                startOffset="100%"
              >
                <animate
                  attributeName="startOffset"
                  from="100%"
                  to="0%"
                  begin="0s"
                  dur="30s"
                  repeatCount="indefinite"
                ></animate>
                SAFETYFIRST!!SAFETYFIRST!!SAFETYFIRST!!!SAFETYFIRST!!SAFETYFIRST!!SAFETYFIRST!!!SAFETYFIRST!!SAFETYFIRST!!SAFETYFIRST!!SAFETYFIRST!!SAFETYFIRST!!SAFETYFIRST!!!SAFETYFIRST!!SAFETYFIRST!!!
              </textPath>
            </text>
          </svg>
          <svg
            className={styles.test_svg_mobile}
            width="390"
            height="844"
            viewBox="0 0 390 844"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="curve_mobile_01"
              d="M -50 30 H 440 V -50 H -50 V 30"
              strokeLinejoin="round"
            />
            <path
              id="curve_mobile_02"
              d="M -50 80 H 440 V -50 H -50 V 80"
              strokeLinejoin="round"
            />
            <path
              id="curve_mobile_03"
              d="M -50 130 H 440 V -50 H -50 V 130"
              strokeLinejoin="round"
            />
            <text>
              <textPath
                alignmentBaseline="middle"
                href="#curve_mobile_01"
                startOffset="100%"
              >
                <animate
                  attributeName="startOffset"
                  from="100%"
                  to="0%"
                  begin="0s"
                  dur="6s"
                  repeatCount="indefinite"
                ></animate>
                SAFETYFIRST!!SAFETYFIRST!!SAFETYFIRST!!!SAFETYFIRST!!!SAFETYFIRST!!!
              </textPath>
              <textPath
                alignmentBaseline="middle"
                href="#curve_mobile_02"
                startOffset="100%"
              >
                <animate
                  attributeName="startOffset"
                  from="0%"
                  to="100%"
                  begin="0s"
                  dur="8s"
                  repeatCount="indefinite"
                ></animate>
                SAFETYFIRST!!SAFETYFIRST!!SAFETYFIRST!!!SAFETYFIRST!!!SAFETYFIRST!!!SAFETYFIRST!!!SAFETYFIRST!!!
              </textPath>
              <textPath
                alignmentBaseline="middle"
                href="#curve_mobile_03"
                startOffset="100%"
              >
                <animate
                  attributeName="startOffset"
                  from="100%"
                  to="0%"
                  begin="0s"
                  dur="6.5s"
                  repeatCount="indefinite"
                ></animate>
                SAFETYFIRST!!SAFETYFIRST!!!SAFETYFIRST!!!SAFETYFIRST!!SAFETYFIRST!!!SAFETYFIRST!!!!
              </textPath>
            </text>
          </svg>
        </section>
      </StylesContext.Provider>
    </>
  )
}

export default YichunTestNotPlayed
