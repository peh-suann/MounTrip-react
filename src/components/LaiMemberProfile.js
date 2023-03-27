import React, { useState } from 'react'
import styles from './../styles/Member.module.css'
import LevelTag from './LaiMemberProfileLevelTag'
import { AnimatePresence, motion } from 'framer-motion'
import Modal from './LaiBackdrop/Modal'
import Backdrop from './LaiBackdrop/Backdrop'
import { USER_AVATAR } from '../connections/api-config'
import axios from 'axios' 

export default function LaiMemberProfile(props) {
  const {
    img,
    avatar,
    name,
    familyname,
    level,
    account,
    handleModalToggle,
    modalOpen,
    close,
    open,
  } = props
  const avatarUrl = USER_AVATAR + avatar
  // console.log('avatar:', avatarUrl)
  // console.log('avatar:', avatar) 

  return (
    <>
      <div className={styles['member-profile']}>
        <div className={styles['profile']}>
          <motion.button
            className={styles['pic-btn']}
            whileHover={{ scale: 1.1 }}
            whileTop={{ scale: 0.9 }}
            onClick={() => (modalOpen ? close() : open())}
          >
            <svg
              className={styles['camera']}
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.1668 14.8337C19.1668 15.2757 18.9912 15.6996 18.6786 16.0122C18.3661 16.3248 17.9421 16.5004 17.5001 16.5004H2.49972C2.05768 16.5004 1.63374 16.3248 1.32118 16.0122C1.00861 15.6996 0.833008 15.2757 0.833008 14.8337V5.66677C0.833008 5.22473 1.00861 4.8008 1.32118 4.48823C1.63374 4.17566 2.05768 4.00006 2.49972 4.00006H5.83313L7.49984 1.5H12.5L14.1667 4.00006H17.5001C17.9421 4.00006 18.3661 4.17566 18.6786 4.48823C18.9912 4.8008 19.1668 5.22473 19.1668 5.66677V14.8337Z"
                fill="#FFFFF2"
                stroke="#FFFFF2"
                strokeWidth="1.66671"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.0004 13.1666C11.8414 13.1666 13.3338 11.6742 13.3338 9.83317C13.3338 7.99218 11.8414 6.49976 10.0004 6.49976C8.15941 6.49976 6.66699 7.99218 6.66699 9.83317C6.66699 11.6742 8.15941 13.1666 10.0004 13.1666Z"
                stroke="#ADD9B1"
                strokeWidth="1.66671"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>

          <div className={styles['profile-wrap']}>
            {avatar ? (
              <div
                className={styles.avatar_pic}
                style={{
                  background: `url('${avatarUrl}') 0% 0% / cover`,
                  backgroundSize: 'cover',
                }}
              ></div>
            ) : (
              <div className={styles['profile-pic']}></div>
            )}
            {/* <div
              className={styles['profile-pic']}
              style={{ background: `url('${avatarUrl}')`, height: `100%` }}
            ></div> */}
          </div>
        </div>
        <div className={styles['member-name']}>
          <p className={styles['first-name']}>{familyname}</p>
          <p className={styles['last-name']}>{name}</p>
          {/* <span className={styles['level-tag']}>超級嚮導</span> */}
          <LevelTag level={level} />
        </div>
        <div className={styles['member-account']}>{account}</div>
      </div>
    </>
  )
}
