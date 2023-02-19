import { useState, useEffect } from 'react'
import { LIST_DATA } from '../connections/api-config'

export default function MounTripTest1() {
  const [data, setData] = useState({
    perPage: 0,
    page: 0,
    totalPages: 0,
    totalRows: 0,
    rows: [],
  })
  const getListData = async () => {
    const r = await fetch(LIST_DATA)
    const json = await r.json()
    console.log(json)
    setData(json)
  }

  useEffect(() => {
    getListData()
    console.log('uesEffect')
  })
  return (
    <>
      <h1>MT1 page</h1>
    </>
  )
}
