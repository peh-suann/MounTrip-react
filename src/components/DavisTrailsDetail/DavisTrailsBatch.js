import { useEffect, useState } from 'react'
// import { TRAILS_BATCH_DATA } from '../../connections/api-config'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

function DavisTrailsBatch(props) {
  const { data } = props
  const location = useLocation()
  const usp = new URLSearchParams(location.search)

  // const [data, setData] = useState({
  //   rows: [],
  // })

  // const [count, setCount] = useState(0)

  // const getListData = async (page = 1) => {
  //   const response = await axios.get(TRAILS_BATCH_DATA, {
  //     params: {
  //       page,
  //     },
  //   })
  //   setData(response.data)
  // }

  // useEffect(() => {
  //   getListData(+usp.get('page'))
  //   return () => {
  //     console.log('unmount')
  //   }
  // }, [])

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
