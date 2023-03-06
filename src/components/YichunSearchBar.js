
import React from 'react'
import './../html/css/yichun_products.css'

function YichunSearchBar() {
  return (
    <>
      <section id="search_bar">
        <div className="search_item location">
          <div className="icon">
            <img
              src="./../images/product-page-img/searchbar-icon/search.svg"
              alt=""
            />
          </div>
          <div className="input_field">
            <label for="location">目的地</label>
            <input type="text" id="location" placeholder="想去的地方..." />
          </div>
        </div>
        <div className="search_item date">
          <div className="icon">
            <img
              src="./../images/product-page-img/searchbar-icon/calendar.svg"
              alt=""
            />
          </div>
          <div className="input_field">
            <label for="date">日期</label>
            <div className="inputs">
              <input type="date" id="date_start" />
              <span>—</span>
              <input type="date" id="date_end" />
            </div>
          </div>
        </div>
        <div className="search_item num_of_ppl">
          <div className="icon">
            <img
              src="./../images/product-page-img/searchbar-icon/num of ppl.svg"
              alt=""
            />
          </div>
          <div className="input_field">
            <label for="person">人數</label>
            <div className="inputs">
              <input type="number" id="person" placeholder="2" />人
            </div>
          </div>
        </div>
        <button>搜尋</button>
      </section>
    </>
  )
}

export default YichunSearchBar
