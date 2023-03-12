import React from 'react'

function DavisTrailsDetailTable(props) {
  const { rows } = props
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => {
          return (
            <tr key={r.sid}>
              <td>{r.sid}</td>
              <td>{r.trail_name}</td>
              <td>{r.trail_describ}</td>
              <td>{r.trail_timetable}</td>
              <td>{r.trail_time}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default DavisTrailsDetailTable
