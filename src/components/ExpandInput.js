import React from 'react'
import styles from '../styles/ExpandInput.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function ExpandInput() {
  return (
    <>
      {/* <FontAwesomeIcon icon={regular('magnifying-glass')} /> */}
      <FontAwesomeIcon icon={solid('user-secret')} />
      <FontAwesomeIcon icon={regular('user')} />
      <FontAwesomeIcon icon={solid('magnifying-glass')} />
      <input
        className={styles.input}
        type="text"
        name="username"
        value=""
        onChange=""
        required
      />
    </>
  )
}
