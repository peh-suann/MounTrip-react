import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import TrailsDetailTable from '../components/TrailsDetailTable'
import { TRAILS_DATA } from '../connections/api-config'
import { useLocation } from 'react-router-dom'

export default function TrailsDetail() {
  const location = useLocation()
  const usp = new URLSearchParams(location.search)
  const [data, setData] = useState({
    // page: 0,
    rows: [],
    // perPage: 0,
    // totalPages: 0,
    // totalRows: 0,
  })
  const getListData = async (page = 1) => {
    const response = await axios.get(TRAILS_DATA, {
      params: {
        page,
      },
    })
    console.log(response.data)
    setData(response.data)
  }

  useEffect(() => {
    getListData(+usp.get('page'))
    return () => {
      console.log('unmount')
    }
  }, [])
  return (
    <div className="container">
      {console.log('----', data.rows)}
      <TrailsDetailTable rows={data.rows} />
    </div>
  )
}
