import React from 'react'
import dayjs from 'dayjs'
import { FcDeleteRow } from 'react-icons/fc'
// import ThemeContext from '../contexts/ThemeContext'
// import { useContext } from 'react'

export default function TestMemberTable(props) {
  const { rows, removeItem } = props
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">
            <FcDeleteRow />
          </th>
          <th scope="col">#</th>
          <th scope="col">姓名</th>
          <th scope="col">Email</th>
          <th scope="col">手機</th>
          <th scope="col">生日</th>
          <th scope="col">註冊日期</th>
          <th scope="col">地址</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => {
          return (
            <tr key={r.sid}>
              <td>
                <a
                  href="#/"
                  onClick={(e) => {
                    removeItem(r.sid)
                  }}
                >
                  <FcDeleteRow />
                </a>
              </td>
              <td>{r.sid}</td>
              <td>
                {r.lastname}
                {r.firstname}
              </td>
              <td>{r.email}</td>
              <td>{r.mobile}</td>
              <td>{dayjs(r.birthday).format('YYYY-MM-DD')}</td>
              <td>{dayjs(r.regist_date).format('YYYY-MM-DD')}</td>
              <td>{r.address}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

// TestMemberTable.defaultProps = {
//   rows: [],
//   removeItem: () => {},
// }
