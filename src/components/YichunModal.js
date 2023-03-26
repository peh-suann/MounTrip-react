// Packages
import React, { useState } from 'react'

// Components
import Button from './Button'

// Styles
import styles from './../styles/yichun_styles/YichunModalStyle.module.css'

function Modal(props) {
  const { handleClick, content, btnToggle, btnText, btnLink } = props

  return (
    <div className={styles.modalBg}>
      <div className={styles.modal_box}>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        {btnToggle ? (
          <>
            <Button
              text={btnText}
              link={btnLink}
              handleClick={handleClick}
            ></Button>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Modal
