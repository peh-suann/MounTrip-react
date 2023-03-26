import React from 'react'

// styles
import styles from './../styles/yichun_styles/YichunLanding.module.css'

function YichunLanding() {
  return (
    <>
      <section className={styles.landing}>
        <p>Plan your Trip with</p>
        <img src="images/yichun/1x/2x/hard.png" alt="" />
        <img src="images/yichun/1x/2x/hard-right.png" alt="" />
        <img src="images/yichun/1x/2x/medium.png" alt="" />
        <img src="images/yichun/1x/2x/medium.png" alt="" />
        <h2>MOUNTRIP</h2>
        <img src="images/yichun/1x/2x/easy.png" alt="" />
        <div className={styles.box}></div>
      </section>
    </>
  )
}

export default YichunLanding
