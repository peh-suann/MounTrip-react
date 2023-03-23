// Packages
import React, { createContext, useEffect, useState, useRef } from 'react'
import axios from 'axios'

// Components
import YichunQuestionSection from '../components/YichunQuestionSection'
import Button from '../components/Button'

// Connections
import {
  TEST_QUES,
  TEST_PLAY,
  TEST_TOGGLE_PLAY,
} from '../connections/api-config'

// Styles
import styles from './../styles/yichun_styles/YichunTestPlayed.module.css'
export const StylesContext = createContext(styles)

function YichunTestPlayed() {
  return <section className={styles.played}>
    <h2>you've already played!!</h2>
  </section>
}

export default YichunTestPlayed
