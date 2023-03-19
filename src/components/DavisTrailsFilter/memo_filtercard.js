import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'

import styles from '../../styles/DavisTrailsFilter.module.css'

// API
import { FILTER_ALL_DATA } from '../../connections/api-config'

function DavisComFilterCardFilter(props) {
  const {
    data,
    filterByKeyword,
    keywordpr,
    startdatepr,
    enddatepr,
    maxpeplepr,
  } = props
  // console.log('data', data)

  const [alldata, setAlldata] = useState({
    rows: [],
  })

  const getListData = async (page = 1) => {
    const response = await axios.get(FILTER_ALL_DATA, {
      params: {
        page,
      },
    })
    // console.log(response.data)
    setAlldata(response.data)
  }

  const [pagedata, setpagedata] = useState({ rows: [] })

  // 分頁
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 10
  const startIndex = (currentPage - 1) * perPage
  const endIndex = startIndex + perPage
  // const dataSubset = setpagedata(alldata).slice(startIndex, endIndex)
  const dataSubset = (rows_data) => {
    if (!Array.isArray(rows_data)) {
      return []
    }
    return rows_data.slice(startIndex, endIndex)
  }

  function nextPage() {
    setCurrentPage(currentPage + 1)
  }

  // 分割同樣trails_sid的資料
  const oddRows = (rows_data) => {
    if (!Array.isArray(rows_data)) {
      return []
    }
    return rows_data.filter((_, index) => index % 2 === 0)
  }

  useEffect(() => {
    // 設定功能
    console.log('useEffect--')
    getListData()
    setAlldata(alldata)
    setCurrentPage(currentPage)
    return () => {
      // 解除功能
      console.log('unmount AbList--')
    }
  }, [setAlldata, setCurrentPage])

  return (
    <>
      {/* {console.log(startdatepr)} */}
      {/* {data.rows.map((r) => ( */}
      {dataSubset(
        oddRows(
          filterByKeyword(
            alldata.rows,
            keywordpr,
            startdatepr,
            enddatepr,
            maxpeplepr
          )
        )
      ).map((r) => (
        <div className="col"></div>