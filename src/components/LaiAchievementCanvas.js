import React from 'react'
import styles from './../styles/Achievement.module.css'

export default function LaiAchievementCanvas() {
  return (
    <>
      <canvas className={styles.tree_animation}>
        <svg
          id="tree2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <g id="brown">
            <path
              class="cls-1"
              fill="#7f5440"
              d="m102.01,200.64v-95.97s-7.32-3.4-12.29,0v40.55l-26.81-26.81-3.01,4.58,29.11,29.11v48.55h13.01Z"
            />
            <path
              class="cls-3"
              fill="#9a815f"
              d="m95.89,200.64v-97.46s-2.56-1.27-6.18,1.49v43.96l-28.24-28.05-1.58,2.4,29.11,29.11v48.55h6.9Z"
            />
          </g>
          <g id="green_top">
            <circle
              class="cls-2"
              fill="#7cb074"
              cx="107.4"
              cy="102.88"
              r="25.01"
            />
            <circle
              class="cls-2"
              fill="#7cb074"
              cx="42.3"
              cy="105.07"
              r="21.83"
            />
            <circle
              class="cls-2"
              fill="#7cb074"
              cx="73.17"
              cy="78.4"
              r="28.84"
            />
            <path
              class="cls-2"
              fill="#7cb074"
              d="m59.89,127.9h47.51s7.09-37.2-18.29-48.15-48.53,13.69-48.28,16.18c0,0-30.59,31.97,19.07,31.97Z"
            />
          </g>
        </svg>
      </canvas>
    </>
  )
}
