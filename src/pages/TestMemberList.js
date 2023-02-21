import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import TestMemberTable from '../components/TestMemberTable'
import { LIST_DATA } from '../connections/api-config'
import { useLocation } from 'react-router-dom'

export default function TestMemberList() {
  const location = useLocation()
  const usp = new URLSearchParams(location.search)
  const [data, setData] = useState({
    page: 0,
    rows: [],
    perPage: 0,
    totalPages: 0,
    totalRows: 0,
  })
  const getListData = async (page = 1) => {
    const response = await axios.get(LIST_DATA, {
      params: {
        page,
      },
    })
    console.log(response.data)
    setData(response.data)
  }

  const removeItem = async (itemId = 0) => {
    if (!+itemId) {
      return
    }
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
      <TestMemberTable rows={data.rows} removeItem={removeItem} />
    </div>
  )
}
