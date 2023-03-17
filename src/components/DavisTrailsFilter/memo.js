;<ul className="pagination">
  {/* 以map新增序號陣列的方式 */}
  {[...Array(11)].map((v, i) => {
    const p = page - 5 + i
    if (p < 1 || p > totalPages) return null
    let myClass = 'page-item'
    if (p === page) {
      myClass = 'page-item active'
    }

    return (
      <li className={myClass} key={p}>
        <a
          className="page-link"
          href="#/"
          onClick={(e) => {
            e.preventDefault()
            // getListData(p);
            navigate(`?page=${p}`)
          }}
        >
          {p}
        </a>
      </li>
    )
  })}
</ul>
