import React, { useEffect } from 'react'
import * as d3 from 'd3'
import NavbarIndex from '../layouts/NavbarIndex'
import IndexStyles from '../styles/kexinIndex.module.css'

function KexinIndex() {
  // useEffect();

  // map basic setting
  const WIDTH = window.innerWidth
  const HEIGHT = window.innerHeight
  const ZOOM_THRESHOLD = [0.3, 10]
  const OVERLAY_MULTIPLIER = 10
  const OVERLAY_OFFSET = OVERLAY_MULTIPLIER / 2 - 0.5
  const ZOOM_DURATION = 500
  const ZOOM_IN_STEP = 2
  const ZOOM_OUT_STEP = 1 / ZOOM_IN_STEP
  const HOVER_COLOR = 'rgba(10, 140, 45, 0.4)'
  const CLICK_COLOR = 'rgba(10, 140, 45, 0.6)'

  return (
    <>
      <NavbarIndex />
      <div id={`${IndexStyles['info']}`}></div>
    </>
  )
}

export default KexinIndex
