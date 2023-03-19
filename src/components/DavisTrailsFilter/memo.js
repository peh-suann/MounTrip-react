import { useState, useEffect } from 'react'
import axios from 'axios'

import './User.css'

// 要使用chunk(分塊)函式用
import _ from 'lodash'

function User() {
  const [users, setUsers] = useState([]) // 注意要保持此狀態一直是陣列

  // 呈現用
  const [usersDisplay, setUsersDisplay] = useState([])

  // 文字輸入框可控表單元件使用
  const [inputText, setInputText] = useState('')

  // 真正用於搜尋過濾的狀態
  const [keyword, setKeyword] = useState('')

  const ageOptions = ['全部', '大於等於20', '小於20']
  const [ageFilter, setAgeFilter] = useState('全部')

  const [sortType, setSortType] = useState(3)

  // 分頁用
  // pageNow 目前頁號
  // perPage 每頁多少數量
  // pageTotal 目前有多少頁
  const [pageNow, setPageNow] = useState(1) // 預設為第1頁
  const [perPage, setPerPage] = useState(3) // 預設為每頁有2筆
  const [pageTotal, setPageTotal] = useState(0) // 預設總頁數為0

  const [isLoading, setIsLoading] = useState(true)

  //向伺服器用get獲取資料
  const getUsers = async () => {
    const res = await axios.get(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
    )

    setUsers(res.data)
  }

  // 純函式-傳入資料陣列，以keyword進行過濾 => 回傳過濾後的資料陣列
  const filterByKeyword = (users, keyword) => {
    return users.filter((v, i) => {
      return v.name.includes(keyword)
    })
  }

  // 純函式-傳入資料陣列，以ageFilter進行過濾 => 回傳過濾後的資料陣列
  const filterByAge = (users, ageFilter) => {
    switch (ageFilter) {
      case '大於等於20':
        return users.filter((v, i) => {
          return v.age >= 20
        })
      case '小於20':
        return users.filter((v, i) => {
          return v.age < 20
        })
      case '全部':
      default:
        return users
    }
  }

  // 純函式 排序用
  const sortByType = (users, type) => {
    switch (type) {
      // 以age排序-由小至大 => type=1
      case 1:
        return [...users].sort((a, b) => a.age - b.age)
      // 以age排序-由大至小 => type=2
      case 2:
        return [...users].sort((a, b) => b.age - a.age)
      // 以id排序-由小至大 => type=3 (預設)
      case 3:
        return [...users].sort((a, b) => Number(a.id) - Number(b.id))
      // 以id排序-由大至小 => type=4
      case 4:
        return [...users].sort((a, b) => Number(b.id) - Number(a.id))
      // 以id排序-由小至大 => type=3 (預設)
      default:
        return [...users].sort((a, b) => Number(a.id) - Number(b.id))
    }
  }

  // 排序的類型分成2個的寫法
  // const sortByFieldAndDirection = (users, field, direction = 'asc') => {
  //   switch (direction) {
  //     case 'desc':
  //       return [...users].sort((a, b) => Number(b[field]) - Number(a[field]))
  //     case 'asc':
  //     default:
  //       return [...users].sort((a, b) => Number(a[field]) - Number(b[field]))
  //   }
  // }

  // didMount (After first render，初次render之後執行一次)
  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    // 作keyword過濾
    let newUsers = filterByKeyword(users, keyword)

    // 作age選項過濾
    newUsers = filterByAge(newUsers, ageFilter)

    // 作sort排序
    newUsers = sortByType(newUsers, sortType)
    // newUsers = sortByFieldAndDirection(newUsers, sortField, sortDirection)

    // 拆分頁
    //  _.chunk([1,2,3,4], 2) => [[1,2],[3,4]]
    const pageArray = _.chunk(newUsers, perPage)

    if (pageArray.length > 0) {
      setUsersDisplay(pageArray)
      setPageTotal(pageArray.length)
      setPageNow(1) //設回第一頁
    } else {
      setUsersDisplay([])
      setPageTotal(0)
    }
  }, [users, keyword, ageFilter, sortType])

  // 2s後自動關掉載入指示動畫
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    }
  }, [isLoading])

  // 當keyword或age選項有變化時，開起loader指示動畫
  useEffect(() => {
    setIsLoading(true)
  }, [keyword, ageFilter])

  // 搭配css的純載入指示動畫
  const loader = (
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )

  // 伺服器資料獲取後呈現的資料表格
  const display = (
    <table>
      <thead>
        <tr>
          <th>學號</th>
          <th>姓名</th>
          <th>年齡</th>
        </tr>
      </thead>
      <tbody>
        {usersDisplay[pageNow - 1] &&
          usersDisplay[pageNow - 1].map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.age}</td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )

  return (
    <>
      <h1>學生名單</h1>

      <section id="search-input">
        <div>
          <input
            type="text"
            placeholder="輸入姓名"
            // 可控表單元件要求-1
            value={inputText}
            onChange={(e) => {
              // 可控表單元件要求-2
              setInputText(e.target.value)

              // 如果使用者清除所有輸入時要回復為原本列表
              // 注意：這裡要以e.target.value來判斷，"不可"使用inputText(異步，尚未更動)
              if (e.target.value === '') {
                setKeyword('')
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setKeyword(inputText)
              }
            }}
          />
          <button
            onClick={() => {
              setKeyword(inputText)
            }}
          >
            搜尋
          </button>
          <label>按下Enter進行搜尋</label>
        </div>
      </section>
      <section id="age-radio-group">
        {ageOptions.map((v, i) => {
          return (
            <span key={i}>
              <input
                type="radio"
                value={v}
                checked={ageFilter === v}
                onChange={(e) => {
                  setAgeFilter(e.target.value)
                }}
              />
              <label>{v}</label>
            </span>
          )
        })}
      </section>
      <section id="sort-buttons">
        <button
          onClick={() => {
            setSortType(1)
          }}
        >
          age 小到大
        </button>
        <button
          onClick={() => {
            setSortType(2)
          }}
        >
          age 大到小
        </button>
        <button
          onClick={() => {
            setSortType(3)
          }}
        >
          id 小到大
        </button>
        <button
          onClick={() => {
            setSortType(4)
          }}
        >
          id 大到小
        </button>
      </section>
      <section id="user-data-table">{isLoading ? loader : display}</section>
      <section id="pagination">
        <div className="pagination">
          {Array(pageTotal)
            .fill(1)
            .map((v, i) => {
              return (
                <a
                  key={i}
                  href="#/"
                  onClick={() => {
                    setPageNow(i + 1)
                  }}
                >
                  {i + 1}
                </a>
              )
            })}
        </div>
      </section>
    </>
  )
}

export default User
