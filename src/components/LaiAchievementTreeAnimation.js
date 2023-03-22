import React from 'react'
import styles from './../styles/AchievementTree.module.css'
import { motion } from 'framer-motion'

export default function LaiAchievementTreeAnimation() {
  return (
    <>
      <div className={styles.tree_div}>
        <motion.svg
          className={styles.tree1_1}
          initial={{ scale: 0, translateY: 5 }}
          animate={{ scale: '100%', translateY: 0 }}
          transition={{ delay: 2, duration: 3 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <g>
            <path
              d="m108.9,199.36v-66.95s5.95-16.73,10.78-23.79,25.27-27.13,25.27-27.13c-23.79,15.24-36.05,26.02-36.05,26.02,0,0,9.66-33.08,23.79-46.83-24.53,19.7-33.75,48.32-33.75,48.32,0,0-8.24-24.9-31.66-33.82,14.5,17.84,22.3,25.65,23.79,43.86s-1.12,23.42-1.12,23.42l-.37,7.43s-5.2,2.23-6.32-9.29-8.92-26.76-8.92-26.76l4.46,26.76s1.12,7.06,3.35,9.66,6.32,12.64,7.06,15.24v34.51l19.7-.64Z"
              style={{ fill: '#7f5440' }}
            />
            <path
              d="m99.05,199.68l-9.86.32v-34.51c-.74-2.6-4.83-12.64-7.06-15.24s-3.35-9.66-3.35-9.66l-4.46-26.76s7.81,15.24,8.92,26.76,6.32,9.29,6.32,9.29l.37-7.43s2.6-5.2,1.12-23.42c-1.49-18.21-9.29-26.02-23.79-43.86,23.42,8.92,31.66,33.82,31.66,33.82l.12,90.69Z"
              style={{ fill: '#9a815f' }}
            />
          </g>
          <motion.g
            animate={{
              x: [0, 20, -1, -2, -1, 0],
              y: [0, 10, 3, 2, -1, 0],
            }}
            transition={{ duration: 5.6, repeat: Infinity, type: 'spring' }}
          >
            <motion.ellipse
              cx="98.26"
              cy="75.63"
              rx="67.31"
              ry="67.83"
              style={{ fill: '#2b4d30' }}
            />
            <motion.path
              animate={{ rotate: [0, 100, 0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity, type: 'spring' }}
              d="m98.26,143.46c-37.18,0-67.31-30.37-67.31-67.83S61.08,7.79,98.26,7.79v135.66Z"
              style={{ fill: '#67a061' }}
            />
          </motion.g>
        </motion.svg>
        <motion.svg
          className={styles.tree2_1}
          initial={{ scale: 0, translateY: 4 }}
          animate={{ scale: '100%', translateY: 0 }}
          transition={{ delay: 1.5, duration: 2.5 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <g>
            <path
              d="m102.01,200.64v-95.97s-7.32-3.4-12.29,0v40.55l-26.81-26.81-3.01,4.58,29.11,29.11v48.55h13.01Z"
              style={{ fill: '#7f5440' }}
            />
            <path
              d="m95.89,200.64v-97.46s-2.56-1.27-6.18,1.49v43.96l-28.24-28.05-1.58,2.4,29.11,29.11v48.55h6.9Z"
              style={{ fill: '#9a815f' }}
            />
          </g>
          <g>
            <motion.circle
              animate={{
                scale: [1, 1.05, 1.07, 1, 0.9, 0.85, 1],
              }}
              transition={{ duration: 6, repeat: Infinity, type: `spring` }}
              cx="143.87"
              cy="67.49"
              r="35.66"
              style={{ fill: '#489f58' }}
            />
            <motion.circle
              animate={{
                scale: [1, 1.05, 1.08, 1, 0.9, 0.85, 1],
              }}
              transition={{ duration: 6, repeat: Infinity, type: 'spring' }}
              cx="98.53"
              cy="33.67"
              r="32.38"
              style={{ fill: '#489f58' }}
            />
            <motion.circle
              animate={{
                scale: [1, 1.05, 1.07, 1, 0.9, 0.85, 1],
              }}
              transition={{ duration: 6, repeat: Infinity, type: 'spring' }}
              cx="55.72"
              cy="73"
              r="32.38"
              style={{ fill: '#489f58' }}
            />
            <motion.circle
              animate={{
                scale: [1.05, 1.11, 1, 0.9, 0.85, 1.05],
              }}
              transition={{ duration: 6, repeat: Infinity, type: 'spring' }}
              cx="132.91"
              cy="110.36"
              r="27.38"
              style={{ fill: '#489f58' }}
            />
            <motion.circle
              animate={{
                scale: [1.05, 1.09, 1, 0.9, 0.85, 1.05],
              }}
              transition={{ duration: 6, repeat: Infinity, type: 'spring' }}
              cx="45"
              cy="103.15"
              r="24.53"
              style={{ fill: '#489f58' }}
            />
            <path
              d="m57.25,127.69h73.67s24.39-8.12,20.41-32.51c-3.98-24.39-21.9-36.09-21.9-36.09,0,0-39.07-17.42-66.2,3.73-27.13,21.15-32.85,33.85-32.85,33.85,0,0-13.19,31.01,26.88,31.01Z"
              style={{ fill: '#489f58' }}
            />
          </g>
          <g>
            <motion.circle
              animate={{
                scale: [0.85, 1.05, 1.1, 1, 0.9, 0.85],
              }}
              transition={{ duration: 6, repeat: Infinity, type: 'spring' }}
              cx="107.4"
              cy="102.88"
              r="25.01"
              style={{ fill: '#7cb074' }}
            />
            <motion.circle
              animate={{
                scale: [0.85, 1.06, 1.09, 1, 0.9, 0.85],
              }}
              transition={{ duration: 6, repeat: Infinity, type: 'spring' }}
              cx="42.3"
              cy="105.07"
              r="21.83"
              style={{ fill: '#7cb074' }}
            />
            <motion.circle
              animate={{
                scale: [0.9, 1.05, 1.1, 1, 0.9],
              }}
              transition={{ duration: 5.5, repeat: Infinity, type: 'spring' }}
              cx="73.17"
              cy="78.4"
              r="28.84"
              style={{ fill: '#7cb074' }}
            />
            <path
              d="m59.89,127.9h47.51s7.09-37.2-18.29-48.15-48.53,13.69-48.28,16.18c0,0-30.59,31.97,19.07,31.97Z"
              style={{ fill: '#7cb074' }}
            />
          </g>
        </motion.svg>
        <motion.svg
          className={styles.tree2_2}
          initial={{ scale: 0, translateY: 2 }}
          animate={{ scale: '100%', translateY: 0 }}
          transition={{ delay: 2, duration: 1.5 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <g>
            <path
              d="m102.01,200.64v-95.97s-7.32-3.4-12.29,0v40.55l-26.81-26.81-3.01,4.58,29.11,29.11v48.55h13.01Z"
              style={{ fill: '#7f5440' }}
            />
            <path
              d="m95.89,200.64v-97.46s-2.56-1.27-6.18,1.49v43.96l-28.24-28.05-1.58,2.4,29.11,29.11v48.55h6.9Z"
              style={{ fill: '#9a815f' }}
            />
          </g>
          <motion.g
            initial={{ x: 0, y: 0 }}
            animate={{
              x: [0, 2, -1, -2, -1, 0],
              y: [1, 1, 3, 2, -1, 1],
            }}
            // transition={{ duration: 5.5, repeat: Infinity, type: 'spring' }}
          >
            <motion.circle
              animate={{
                scale: [1, 1.1, 1, 0.95, 1],
              }}
              transition={{ duration: 5.5, repeat: Infinity, type: 'spring' }}
              cx="143.87"
              cy="67.49"
              r="35.66"
              style={{ fill: '#489f58' }}
            />
            <motion.circle
              animate={{
                scale: [1, 1.1, 1, 0.95, 1],
              }}
              transition={{ duration: 5.5, repeat: Infinity, type: 'spring' }}
              cx="98.53"
              cy="33.67"
              r="32.38"
              style={{ fill: '#489f58' }}
            />
            <motion.circle
              animate={{
                scale: [0.95, 1.05, 1.1, 1, 0.95],
              }}
              transition={{ duration: 5.5, repeat: Infinity, type: 'spring' }}
              cx="55.72"
              cy="73"
              r="32.38"
              style={{ fill: '#489f58' }}
            />
            <motion.circle
              animate={{
                scale: [1, 1.1, 1, 0.95, 1],
              }}
              transition={{ duration: 5.5, repeat: Infinity, type: 'spring' }}
              cx="132.91"
              cy="110.36"
              r="27.38"
              style={{ fill: '#489f58' }}
            />
            <motion.circle
              animate={{
                scale: [0.95, 1.05, 1.1, 1, 0.95],
              }}
              transition={{ duration: 5.5, repeat: Infinity, type: 'spring' }}
              cx="45"
              cy="103.15"
              r="24.53"
              style={{ fill: '#489f58' }}
            />
            <path
              d="m57.25,127.69h73.67s24.39-8.12,20.41-32.51c-3.98-24.39-21.9-36.09-21.9-36.09,0,0-39.07-17.42-66.2,3.73-27.13,21.15-32.85,33.85-32.85,33.85,0,0-13.19,31.01,26.88,31.01Z"
              style={{ fill: '#489f58' }}
            />
          </motion.g>
          <motion.g
            animate={{
              x: [0, 2, -1, -2, -1, 0],
              y: [1, 1, 3, 2, -1, 1],
            }}
            transition={{ duration: 5.5, repeat: Infinity, type: 'spring' }}
          >
            <motion.circle
              animate={{
                scale: [0.9, 1.05, 1.15, 1, 0.9],
              }}
              transition={{ duration: 6.5, repeat: Infinity, type: 'spring' }}
              cx="107.4"
              cy="102.88"
              r="25.01"
              style={{ fill: '#7cb074' }}
            />
            <motion.circle
              animate={{
                scale: [0.95, 1.05, 1.1, 1, 0.95],
              }}
              transition={{ duration: 5.5, repeat: Infinity, type: 'spring' }}
              cx="42.3"
              cy="105.07"
              r="21.83"
              style={{ fill: '#7cb074' }}
            />
            <motion.circle
              animate={{
                scale: [0.9, 1.05, 1.15, 1, 0.9],
              }}
              transition={{ duration: 5.5, repeat: Infinity, type: 'spring' }}
              cx="73.17"
              cy="78.4"
              r="28.84"
              style={{ fill: '#7cb074' }}
            />
            <path
              d="m59.89,127.9h47.51s7.09-37.2-18.29-48.15-48.53,13.69-48.28,16.18c0,0-30.59,31.97,19.07,31.97Z"
              style={{ fill: '#7cb074' }}
            />
          </motion.g>
        </motion.svg>
        <motion.svg
          className={styles.tree3_1}
          initial={{ scale: 0, translateY: 4 }}
          animate={{ scale: '100%', translateY: 0 }}
          transition={{ delay: 0.5, duration: 2.5 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <polygon
            points="101.02 200 101.02 126.45 119.78 102.3 117.6 99.97 101.02 120.22 101.02 73.22 93.86 73.22 93.86 152.16 82.67 138.4 80.22 140.74 93.86 157.62 93.86 200 101.02 200"
            style={{ fill: '#7f5440' }}
          />
          <motion.g
            animate={{
              x: [0, 2, -1, -2, -1, 0],
              y: [1, 1, 3, 2, -1, 1],
            }}
            transition={{ duration: 5.5, repeat: Infinity, type: 'spring' }}
          >
            <circle cx="95.76" cy="53.22" r="50" style={{ fill: '#2b4d30' }} />
            <ellipse
              cx="62.61"
              cy="118.77"
              rx="37.39"
              ry="31.93"
              style={{ fill: '#2b4d30' }}
            />
            <ellipse
              cx="127.05"
              cy="91.77"
              rx="22.97"
              ry="19.61"
              style={{ fill: '#2b4d30' }}
            />
          </motion.g>
          <motion.g
            animate={{
              x: [0, 2, -1, -2, -1, 0],
              y: [1, 1, 3, 2, -1, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, type: 'spring' }}
          >
            <motion.path
              animate={{ rotate: [0, -1, 0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity, type: 'spring' }}
              d="m95.76,103.22c-27.61,0-50-22.39-50-50S68.15,3.22,95.76,3.22v100"
              style={{ fill: '#67a061' }}
            />
            <motion.path
              animate={{ rotate: [0, -1, 0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity, type: 'spring' }}
              d="m62.61,86.85c-20.65,0-37.39,14.29-37.39,31.93s16.74,31.93,37.39,31.93v-63.85Z"
              style={{ fill: '#67a061' }}
            />
            <motion.path
              animate={{ rotate: [0, -1, 0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity, type: 'spring' }}
              d="m127.05,111.38c-12.69,0-22.97-8.78-22.97-19.61s10.28-19.61,22.97-19.61v39.22Z"
              style={{ fill: '#67a061' }}
            />
          </motion.g>
        </motion.svg>
        <motion.svg
          className={styles.tree3_2}
          initial={{ scale: 0, translateY: 1 }}
          animate={{ scale: '100%', translateY: 0 }}
          transition={{ delay: 1, duration: 3.5 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <polygon
            points="101.02 200 101.02 126.45 119.78 102.3 117.6 99.97 101.02 120.22 101.02 73.22 93.86 73.22 93.86 152.16 82.67 138.4 80.22 140.74 93.86 157.62 93.86 200 101.02 200"
            style={{ fill: '#7f5440' }}
          />
          <motion.g
            animate={{
              x: [0, 2, -1, -2, -1, 0],
              y: [1, 1, 3, 2, -1, 1],
            }}
            transition={{ duration: 5, repeat: Infinity, type: 'spring' }}
          >
            <circle cx="95.76" cy="53.22" r="50" style={{ fill: '#2b4d30' }} />
            <ellipse
              cx="62.61"
              cy="118.77"
              rx="37.39"
              ry="31.93"
              style={{ fill: '#2b4d30' }}
            />
            <ellipse
              cx="127.05"
              cy="91.77"
              rx="22.97"
              ry="19.61"
              style={{ fill: '#2b4d30' }}
            />
          </motion.g>
          <motion.g
            animate={{
              x: [0, 2, -1, -2, -1, 0],
              y: [1, 1, 3, 2, -1, 1],
            }}
            transition={{ duration: 5, repeat: Infinity, type: 'spring' }}
          >
            <path
              d="m95.76,103.22c-27.61,0-50-22.39-50-50S68.15,3.22,95.76,3.22v100"
              style={{ fill: '#67a061' }}
            />
            <path
              d="m62.61,86.85c-20.65,0-37.39,14.29-37.39,31.93s16.74,31.93,37.39,31.93v-63.85Z"
              style={{ fill: '#67a061' }}
            />
            <path
              d="m127.05,111.38c-12.69,0-22.97-8.78-22.97-19.61s10.28-19.61,22.97-19.61v39.22Z"
              style={{ fill: '#67a061' }}
            />
          </motion.g>
        </motion.svg>
        <motion.svg
          className={styles.sprout_1}
          initial={{ scale: 0, translateY: 1 }}
          animate={{ scale: '100%', translateY: 0 }}
          transition={{ delay: 2.5, duration: 2.5 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <path
            d="m63.15,200c0-10.65,16.5-19.28,36.85-19.28s36.85,8.63,36.85,19.28H63.15Z"
            style={{ fill: '#7f5440' }}
          />

          <g
            animate={{
              scale: [1, 0.9, 1.2, 1, 1.1, 1],
              rotate: [0, 1, 0, -1, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, type: 'spring' }}
          >
            <path
              d="m100,185.56s6.88-26.03,3.22-47.3c-1.1-5.13-2.98-9.9,1.08-15.03,4.06-5.13,4.06-4.77,10.66-4.4-5.13-2.2-12.66-4.77-14.95,9.53-7.42-9.53-11.82-11.14-15.12-11.25s5.98-.18,10.74,10.45c3.07,7.27,4.37,14.04,4.37,16.2,0,16.89-1.92,27.36-6.68,41.8,6.68,4.8,6.68,0,6.68,0Z"
              style={{ fill: '#2b4d30' }}
            />
            <path
              d="m115.89,110.04c1.24-.73,15.12-8.73,23.7,1.09,8.58,9.82,9.98,15.28,10.14,15.9s2.49,3.27-2.96,2.49-6.55.14-6.55.14c0,0-14.97,1.42-21.36-2.95-6.39-4.37-11.34-9.2-13.37-8.64s7.36-6.23,10.41-8.04Z"
              style={{ fill: '#67a061' }}
            />
            <path
              d="m82.61,110.91c-1.24-.73-15.12-8.73-23.7,1.09-8.58,9.82-9.98,15.28-10.14,15.9s-2.49,3.27,2.96,2.49c5.46-.78,6.55.14,6.55.14,0,0,14.97,1.42,21.36-2.95,6.39-4.37,11.09-7.56,13.12-7s-7.11-7.87-10.16-9.69Z"
              style={{ fill: '#67a061' }}
            />
          </g>
        </motion.svg>
        <motion.svg
          className={styles.tree4_1}
          initial={{ scale: 0, translateY: 2 }}
          animate={{ scale: '100%', translateY: 0 }}
          transition={{ delay: 3, duration: 0.8, type: 'spring' }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <g>
            <rect
              x="94.73"
              y="29.61"
              width="12.54"
              height="170.39"
              style={{ fill: '#7f5440' }}
            />
            <polygon
              data-name="1"
              points="61.82 119.27 104.41 173.19 104.41 162.73 68.39 116.49 61.82 119.27"
              style={{ fill: '#7f5440' }}
            />
            <polygon
              data-name="2"
              points="134.45 77.71 97.46 130.76 97.46 119.32 129.34 72.6 134.45 77.71"
              style={{ fill: '#7f5440' }}
            />
            <polygon
              data-name="3"
              points="65.58 58.22 96 98.86 96 107.62 56.82 58.22 65.58 58.22"
              style={{ fill: '#7f5440' }}
            />
            <polygon
              data-name="4"
              points="105.25 51.16 115.96 34.61 113.52 34.61 105.25 47.76 105.25 51.16"
              style={{ fill: '#7f5440' }}
            />
          </g>
          <motion.g
            animate={{
              x: [0, 1.4, 0.6, 3.6, 0.2, -0.55, 0],
            }}
            transition={{ duration: 7, repeat: Infinity, type: 'spring' }}
          >
            <path
              d="m25.39,140.34s21.74,9.41,42.42,1.02c9.49-2.83,17.12,3.48,17.12,3.48,0,0,21.37-1.5,25.44-8.34s-13.23-11.93-20.61-12.19c2.54-9.92-12.72-19.59-26.71-16.03-13.99,3.56-13.74,10.43-13.74,10.43,0,0-7.63-3.82-15.01,6.36-7.89.76-20.61,7.38-8.9,15.27Z"
              style={{ fill: '#2b4d30' }}
            />
            <path
              d="m138.1,93.27s21.37,5.34,30.02-3.05c8.65-8.4-3.31-12.72-3.31-12.72l-3.56-1.02s-5.34-6.87-13.48-7.63c-7.38-7.63-28.24-15.01-33.84,6.61-8.24,2.29-30.79,14.76,0,18.06,16.43-4.66,14.25-6.11,24.17-.25Z"
              style={{ fill: '#2b4d30' }}
            />
            <path
              d="m35.06,65.29s14.25,2.8,21.63,0c7.38-2.8,23.66,0,23.66,0,0,0,12.47-1.34,12.72-4.1s-.76-7.85-14.5-8.36c-3.31-9.92-15.01-11.7-25.7-7.38l-3.05,2.8s-9.41,2.54-12.72,5.6c-4.33.25-14.25,6.11-2.04,11.45Z"
              style={{ fill: '#2b4d30' }}
            />
            <path
              d="m115.71,36.28s27.22,2.54,28.24-8.4c0-7.38-9.21-9.41-9.21-9.41,0,0-2.24-4.33-14.71-6.87-3.31-7.12-12.72-11.7-24.93-8.14-12.21,3.56-9.67,13.48-9.67,13.48,0,0-18.21,1.02-17.63,8.9.58,7.89,17.43,11.96,25.29,10.69s10.65-6.11,22.61-.26Z"
              style={{ fill: '#2b4d30' }}
            />
          </motion.g>
          <motion.g
            animate={{
              x: [0, 1.2, 0.4, 3.3, 0, -0.75, 0],
            }}
            transition={{ duration: 7, repeat: Infinity, type: 'spring' }}
          >
            <path
              d="m26.27,140.3c1.64-.24,9.95-1.7,26.51-8.22,3.23-1.27,6.66-2.02,10.12-2.12,9.53-.29,21.47,1.99,22.68,2.22.07.01.12.03.19.07,1.49.77,21.25,10.84,25.17,4.25,3.92-6.58-11.94-11.54-19.72-12.14-.44-.03-.78-.44-.71-.88,1.53-9.62-13.28-18.67-26.89-15.2-10.95,2.79-13.18,7.6-13.63,9.56-.1.43-.55.68-.97.55-2.17-.64-8.12-1.43-13.95,6.41-.12.17-.31.28-.52.3-7.84.9-19.95,7.35-8.84,15.05.16.11.37.16.57.14Z"
              style={{ fill: '#7cb074' }}
            />
            <path
              d="m99.06,85.55c1.28-4.28,10.28-8.55,15.04-9.97.26-.08.44-.28.51-.54,5.71-20.94,26.07-13.89,33.55-6.38.12.12.27.19.44.21,7.23.8,12.2,6.37,13.08,7.43.1.12.23.2.37.24l3.3.94s.03,0,.05.02c.43.16,6.69,2.59,6.42,7.18-.09,1.55-.93,3.34-2.98,5.38-.1.1-.22.17-.36.21-1.67.44-13.25,3.22-18.44-3.62-3.87-5.1-15.17-5.7-21.77-5.58-2.92.05-5.8.66-8.49,1.79-7.18,3.02-22.59,8.88-20.73,2.68Z"
              style={{ fill: '#7cb074' }}
            />
            <path
              d="m93.64,61.18c1.72-2.14-.7-7.71-13.98-8.34-.31-.01-.58-.22-.69-.51-3.51-9.45-14.92-11.13-25.39-6.95-.09.04-.18.09-.25.16l-2.81,2.57c-.09.08-.19.14-.31.17-1.27.35-9.21,2.65-12.38,5.4-.12.1-.24.16-.4.17-2.74.27-7.37,2.57-7.67,5.53-.18,1.81-1.31,3.86,3.14,5.85.07.03.15.06.23.07.93.11,7.34.68,13.39-4.25.64-.52,1.17-1.17,1.59-1.88,3.11-5.3,18.95-.95,19.65-.76.02,0,.03,0,.05.02.79.29,21.65,7.97,25.83,2.76Z"
              style={{ fill: '#7cb074' }}
            />
            <path
              d="m68.38,25.85c-2.73-4.57,6.2-7.02,12.34-8.14,2.69-.49,4.75-2.6,5.32-5.28.66-3.1,2.9-7.01,9.64-8.98,11.02-3.21,19.77.2,23.8,6.14.87,1.28,2.18,2.2,3.68,2.58,6.98,1.75,10.1,4.04,11.37,5.32.63.63,1.39,1.11,2.23,1.41.52.18,1.14.43,1.8.76,7.47,3.65,2.16,15.05-5.48,11.78-1.25-.53-2.62-1.28-4.14-2.28-12.72-8.4-17.96-3.56-17.96-3.56,0,0-8.75,6.11-16.13,4.07s-9.67-4.83-15.01-3.05-9.17,3.05-11.45-.76Z"
              style={{ fill: '#7cb074' }}
            />
          </motion.g>
        </motion.svg>
        <motion.svg
          className={styles.tree4_2}
          initial={{ scale: 0, translateY: 0 }}
          animate={{ scale: '100%', translateY: 0 }}
          transition={{ delay: 1, duration: 2 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <g>
            <rect
              x="94.73"
              y="29.61"
              width="12.54"
              height="170.39"
              style={{ fill: '#7f5440' }}
            />
            <polygon
              data-name="1"
              points="61.82 119.27 104.41 173.19 104.41 162.73 68.39 116.49 61.82 119.27"
              style={{ fill: '#7f5440' }}
            />
            <polygon
              data-name="2"
              points="134.45 77.71 97.46 130.76 97.46 119.32 129.34 72.6 134.45 77.71"
              style={{ fill: '#7f5440' }}
            />
            <polygon
              data-name="3"
              points="65.58 58.22 96 98.86 96 107.62 56.82 58.22 65.58 58.22"
              style={{ fill: '#7f5440' }}
            />
            <polygon
              data-name="4"
              points="105.25 51.16 115.96 34.61 113.52 34.61 105.25 47.76 105.25 51.16"
              style={{ fill: '#7f5440' }}
            />
          </g>
          <motion.g
            animate={{
              x: [0, 1.5, 0.6, 3, 0.2, -0.85, 0],
            }}
            transition={{ duration: 7, repeat: Infinity, type: 'spring' }}
          >
            <path
              d="m25.39,140.34s21.74,9.41,42.42,1.02c9.49-2.83,17.12,3.48,17.12,3.48,0,0,21.37-1.5,25.44-8.34s-13.23-11.93-20.61-12.19c2.54-9.92-12.72-19.59-26.71-16.03-13.99,3.56-13.74,10.43-13.74,10.43,0,0-7.63-3.82-15.01,6.36-7.89.76-20.61,7.38-8.9,15.27Z"
              style={{ fill: '#2b4d30' }}
            />
            <path
              d="m138.1,93.27s21.37,5.34,30.02-3.05c8.65-8.4-3.31-12.72-3.31-12.72l-3.56-1.02s-5.34-6.87-13.48-7.63c-7.38-7.63-28.24-15.01-33.84,6.61-8.24,2.29-30.79,14.76,0,18.06,16.43-4.66,14.25-6.11,24.17-.25Z"
              style={{ fill: '#2b4d30' }}
            />
            <path
              d="m35.06,65.29s14.25,2.8,21.63,0c7.38-2.8,23.66,0,23.66,0,0,0,12.47-1.34,12.72-4.1s-.76-7.85-14.5-8.36c-3.31-9.92-15.01-11.7-25.7-7.38l-3.05,2.8s-9.41,2.54-12.72,5.6c-4.33.25-14.25,6.11-2.04,11.45Z"
              style={{ fill: '#2b4d30' }}
            />
            <path
              d="m115.71,36.28s27.22,2.54,28.24-8.4c0-7.38-9.21-9.41-9.21-9.41,0,0-2.24-4.33-14.71-6.87-3.31-7.12-12.72-11.7-24.93-8.14-12.21,3.56-9.67,13.48-9.67,13.48,0,0-18.21,1.02-17.63,8.9.58,7.89,17.43,11.96,25.29,10.69s10.65-6.11,22.61-.26Z"
              style={{ fill: '#2b4d30' }}
            />
          </motion.g>
          <motion.g
            animate={{
              x: [0, 1.2, 0.4, 3.3, 0, -0.75, 0],
            }}
            transition={{ duration: 7, repeat: Infinity, type: 'spring' }}
          >
            <path
              d="m26.27,140.3c1.64-.24,9.95-1.7,26.51-8.22,3.23-1.27,6.66-2.02,10.12-2.12,9.53-.29,21.47,1.99,22.68,2.22.07.01.12.03.19.07,1.49.77,21.25,10.84,25.17,4.25,3.92-6.58-11.94-11.54-19.72-12.14-.44-.03-.78-.44-.71-.88,1.53-9.62-13.28-18.67-26.89-15.2-10.95,2.79-13.18,7.6-13.63,9.56-.1.43-.55.68-.97.55-2.17-.64-8.12-1.43-13.95,6.41-.12.17-.31.28-.52.3-7.84.9-19.95,7.35-8.84,15.05.16.11.37.16.57.14Z"
              style={{ fill: '#7cb074' }}
            />
            <path
              d="m99.06,85.55c1.28-4.28,10.28-8.55,15.04-9.97.26-.08.44-.28.51-.54,5.71-20.94,26.07-13.89,33.55-6.38.12.12.27.19.44.21,7.23.8,12.2,6.37,13.08,7.43.1.12.23.2.37.24l3.3.94s.03,0,.05.02c.43.16,6.69,2.59,6.42,7.18-.09,1.55-.93,3.34-2.98,5.38-.1.1-.22.17-.36.21-1.67.44-13.25,3.22-18.44-3.62-3.87-5.1-15.17-5.7-21.77-5.58-2.92.05-5.8.66-8.49,1.79-7.18,3.02-22.59,8.88-20.73,2.68Z"
              style={{ fill: '#7cb074' }}
            />
            <path
              d="m93.64,61.18c1.72-2.14-.7-7.71-13.98-8.34-.31-.01-.58-.22-.69-.51-3.51-9.45-14.92-11.13-25.39-6.95-.09.04-.18.09-.25.16l-2.81,2.57c-.09.08-.19.14-.31.17-1.27.35-9.21,2.65-12.38,5.4-.12.1-.24.16-.4.17-2.74.27-7.37,2.57-7.67,5.53-.18,1.81-1.31,3.86,3.14,5.85.07.03.15.06.23.07.93.11,7.34.68,13.39-4.25.64-.52,1.17-1.17,1.59-1.88,3.11-5.3,18.95-.95,19.65-.76.02,0,.03,0,.05.02.79.29,21.65,7.97,25.83,2.76Z"
              style={{ fill: '#7cb074' }}
            />
            <path
              d="m68.38,25.85c-2.73-4.57,6.2-7.02,12.34-8.14,2.69-.49,4.75-2.6,5.32-5.28.66-3.1,2.9-7.01,9.64-8.98,11.02-3.21,19.77.2,23.8,6.14.87,1.28,2.18,2.2,3.68,2.58,6.98,1.75,10.1,4.04,11.37,5.32.63.63,1.39,1.11,2.23,1.41.52.18,1.14.43,1.8.76,7.47,3.65,2.16,15.05-5.48,11.78-1.25-.53-2.62-1.28-4.14-2.28-12.72-8.4-17.96-3.56-17.96-3.56,0,0-8.75,6.11-16.13,4.07s-9.67-4.83-15.01-3.05-9.17,3.05-11.45-.76Z"
              style={{ fill: '#7cb074' }}
            />
          </motion.g>
        </motion.svg>
        <motion.svg
          className={styles.tree5_1}
          initial={{ scale: 0, translateY: 3 }}
          animate={{ scale: '100%', translateY: 0 }}
          transition={{ delay: 1, duration: 3 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <g>
            <rect
              x="88.47"
              y="101.28"
              width="6.79"
              height="100.23"
              style={{ fill: '#7f5440' }}
            />
            <polygon
              points="90.01 149.92 71.01 126.62 68.68 130.21 90.01 155.48 90.01 149.92"
              style={{ fill: '#7f5440' }}
            />
            <polygon
              points="94.13 122.5 101.66 113.54 100 109.06 91.86 118.92 94.13 122.5"
              style={{ fill: '#7f5440' }}
            />
          </g>
          <g>
            <motion.circle
              animate={{ x: [0, 3, -1, -3, 1, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, type: 'spring' }}
              cx="123.16"
              cy="86.6"
              r="40.03"
              style={{ fill: '#7cb074' }}
            />
            <motion.circle
              animate={{ x: [0, 2, 0, -3, -1, 0] }}
              transition={{ duration: 6.8, repeat: Infinity, type: 'spring' }}
              cx="140.49"
              cy="91.97"
              r="11.7"
              style={{ fill: '#4d7e52' }}
            />
          </g>
          <g>
            <motion.circle
              animate={{ x: [0, 3, 2, -2, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, type: 'spring' }}
              cx="60.09"
              cy="118.94"
              r="19.25"
              style={{ fill: '#7cb074' }}
            />
            <motion.circle
              animate={{ x: [0, 3, 1, -3, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, type: 'spring' }}
              cx="52.59"
              cy="123.39"
              r="5.63"
              style={{ fill: '#4d7e52' }}
            />
          </g>
          <g>
            <motion.circle
              animate={{ x: [0, 3, 1, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity, type: 'spring' }}
              cx="101.66"
              cy="42.89"
              r="40.91"
              style={{ fill: '#2b4d30' }}
            />
            <motion.circle
              animate={{ x: [0, 4, 0, -3, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, type: 'spring' }}
              cx="81.81"
              cy="30.36"
              r="12.53"
              style={{ fill: '#7cb074' }}
            />
          </g>
          <g>
            <motion.circle
              animate={{ x: [0, 2, -3, -5, -1, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, type: 'spring' }}
              cx="57.95"
              cy="73.95"
              r="27.38"
              style={{ fill: '#2b4d30' }}
            />
            <motion.circle
              animate={{ x: [0, 2, -3, -5, -1, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 5.5, repeat: Infinity, type: 'spring' }}
              cx="49.77"
              cy="65.03"
              r="8.92"
              style={{ fill: '#7cb074' }}
            />
          </g>
        </motion.svg>
        <motion.svg
          className={styles.tree5_2}
          initial={{ scale: 0, translateY: 2 }}
          animate={{ scale: '100%', translateY: 0 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <g>
            <rect
              x="88.47"
              y="101.28"
              width="6.79"
              height="100.23"
              style={{ fill: '#7f5440' }}
            />
            <polygon
              points="90.01 149.92 71.01 126.62 68.68 130.21 90.01 155.48 90.01 149.92"
              style={{ fill: '#7f5440' }}
            />
            <polygon
              points="94.13 122.5 101.66 113.54 100 109.06 91.86 118.92 94.13 122.5"
              style={{ fill: '#7f5440' }}
            />
          </g>
          <g>
            <motion.circle
              animate={{ x: [0, 1.5, -1, -2, 1, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, type: 'spring' }}
              cx="123.16"
              cy="86.6"
              r="40.03"
              style={{ fill: '#7cb074' }}
            />
            <motion.circle
              animate={{ x: [0, 1.5, -1, -2, 1, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, type: 'spring' }}
              cx="140.49"
              cy="91.97"
              r="11.7"
              style={{ fill: '#4d7e52' }}
            />
          </g>
          <g>
            <motion.circle
              animate={{ x: [0, 1.5, -1, -2, 1, 0] }}
              transition={{ duration: 5, repeat: Infinity, type: 'spring' }}
              cx="60.09"
              cy="118.94"
              r="19.25"
              style={{ fill: '#7cb074' }}
            />
            <motion.circle
              animate={{ x: [0, 1, -0.5, -3, -1, 0] }}
              transition={{ duration: 5, repeat: Infinity, type: 'spring' }}
              cx="52.59"
              cy="123.39"
              r="5.63"
              style={{ fill: '#4d7e52' }}
            />
          </g>
          <g>
            <motion.circle
              animate={{ x: [0, 1.5, -0.5, -2, -1, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, type: 'spring' }}
              cx="101.66"
              cy="42.89"
              r="40.91"
              style={{ fill: '#2b4d30' }}
            />
            <motion.circle
              animate={{ x: [0, 1.5, -0.5, -2, -1, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, type: 'spring' }}
              cx="81.81"
              cy="30.36"
              r="12.53"
              style={{ fill: '#7cb074' }}
            />
          </g>
          <g>
            <motion.circle
              animate={{ x: [0, 1.5, -0.5, -2, -1, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, type: 'spring' }}
              cx="57.95"
              cy="73.95"
              r="27.38"
              style={{ fill: '#2b4d30' }}
            />
            <motion.circle
              animate={{ x: [0, 1, -2.5, -4, -1, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, type: 'spring' }}
              cx="49.77"
              cy="65.03"
              r="8.92"
              style={{ fill: '#7cb074' }}
            />
          </g>
        </motion.svg>
      </div>
    </>
  )
}
