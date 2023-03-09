// Packages
import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

// Components
import YichunQuestionSection from '../components/YichunQuestionSection'

// Connections
import { TEST_QUES } from '../connections/api-config'

// Styles
import styles from './../styles/yichun_styles/Test.module.css'
export const StylesContext = createContext(styles)

function YichunTest() {
  const [ques, setQues] = useState([])
  const getListData = async () => {
    try {
      const response = await axios.get(TEST_QUES)
      setQues(response.data)
      console.log(response.data)
      return response.data
    } catch (err) {
      console.error(err)
      return []
    }
  }

  useEffect(() => {
    getListData()
    console.log('ques', ques)
  }, [])
  return (
    <>
      <StylesContext.Provider value={styles}>
        <section className={styles['intro-page']}>
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
          />
          <img
            className={`${styles.mountains} ${styles.y2}`}
            src="images/yichun/test/mountain/y-2.svg"
            alt=""
          />
          <img
            className={`${styles.mountains} ${styles.g1}`}
            src="images/yichun/test/mountain/g-1.svg"
            alt=""
          />

          <button className={styles.start_test}>
            開始
            <br />
            作答
          </button>

          <img
            className={`${styles.mountains} ${styles.y1}`}
            src="images/yichun/test/mountain/y-1.svg"
            alt=""
          />
        </section>
        <section className={styles['intro-text']}>
          <div className={styles['intro-title']}>登山小測驗</div>
          <h3>在山上迷路了，你能平安下山？</h3>
          <p>
            在山上迷路，一直以來是山難發生的最大主因。許多人遇到迷路時會嚇到，一下子陷入慌張，反而容易做錯決定，降低自己求救成功、平安下山的機會；假如你今天在山上迷路了你有辦法順利脫困嗎？接下來你將置身於8種迷路常見的情境中，嘗試做出讓自己能平安獲救的選擇吧～
          </p>
        </section>
        {ques.map((el, i) => {
          return <YichunQuestionSection key={el.sid} />
        })}

        <section className={styles.price}>
          <div className={styles['price-text']}>
            <h1 className={styles.congrats}>Congrats!!!</h1>
            <h3 className={styles['num-of-Ques']}>
              您在此測驗中一共答對 <span>5/5</span> 題，
              <br />
              登山小達人就是你！
            </h3>
            <p>
              恭喜獲得 優惠券 乙張
              <br />
              快去 <a href="/">我的優惠券</a> 查收吧！
            </p>
            <div className={styles.buttons}>
              <button>來去逛逛</button>
              <button>前往我的優惠券</button>
            </div>
          </div>
          <img
            className={`${styles.mountains} ${styles.g2}`}
            src="images/yichun/test/mountain/g-2.svg"
            alt=""
          />
          <img
            className={`${styles.mountains} ${styles.y2}`}
            src="images/yichun/test/mountain/y-2.svg"
            alt=""
          />
          <img
            className={`${styles.mountains} ${styles.g1}`}
            src="images/yichun/test/mountain/g-1.svg"
            alt=""
          />
          <img
            className={`${styles.mountains} ${styles.y1}`}
            src="images/yichun/test/mountain/y-1.svg"
            alt=""
          />
          <svg
            width="1920"
            height="1080"
            viewBox="0 0 1920 1080"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="curve"
              d="M 35 1080 V 110 a50,50 0 0 1 50,-50 H 1865 a20,20 0 0 1 20,20 V 1080 H30"
              strokeLinejoin="round"
            />
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
        </section>
      </StylesContext.Provider>
    </>
  )
}

export default YichunTest
