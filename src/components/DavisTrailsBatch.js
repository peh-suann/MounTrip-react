import { useEffect, useState } from 'react'
import { TRAILS_BATCH_DATA } from '../connections/api-config'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

function DavisTrailsBatch(rows) {
  const location = useLocation()
  const usp = new URLSearchParams(location.search)
  // trails_data
  const [data, setData] = useState({
    // page: 0,
    rows: [],
    // perPage: 0,
    // totalPages: 0,
    // totalRows: 0,
  })

  const [count, setCount] = useState(0)

  const getListData = async (page = 1) => {
    const response = await axios.get(TRAILS_BATCH_DATA, {
      params: {
        page,
      },
    })
    // console.log(response.data)
    setData(response.data)
  }

  useEffect(() => {
    getListData(+usp.get('page'))
    return () => {
      console.log('unmount')
    }
  }, [])

  return (
    <>
      {data.rows.map((r, i) => {
        return (
          <option id={i} value="">
            {r.batch_start}-{r.batch_end}
          </option>
        )
      })}
    </>
  )
}

export default DavisTrailsBatch
