import React, { useContext } from 'react'

import { StylesContext } from './../pages/YichunTest'

function YichunQuestionSection() {
  const styles = useContext(StylesContext)

  return (
    <section className={`${styles.questions} ${styles['ques-odd']}`}>
      <img src="images/yichun/test/questions/01.jpg" alt="" />
      <div className={styles.num}>1</div>
      <div className={`${styles['ques-box']} ${styles['ques-box-web']}`}>
        好像迷路了，這條路感覺沒辦法抵達目的地
        <br />
        看起來不像是人走的......現在該怎麼辦？
      </div>
      <div className={`${styles['ques-box']} ${styles['ques-box-mobile']}`}>
        好像迷路了，這條路感覺沒辦法抵達目的地
        看起來不像是人走的......現在該怎麼辦？
      </div>
      <img src="images/yichun/test/hill-yellow.svg" alt="" />
      <div className={styles.cards}>
        <div className={styles.ans}>Ans A</div>
        <div className={styles.ans}>Ans B</div>
        <div className={styles.ans}>Ans C</div>
      </div>
    </section>
  )
}

export default YichunQuestionSection
