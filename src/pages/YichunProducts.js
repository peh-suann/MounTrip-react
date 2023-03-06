import React from 'react'

import './../html/css/yichun_products.css'

import YichunSearchBar from '../components/YichunSearchBar'
import YichunProductCard from '../components/YichunProductCard'
import YichunDiffRank from '../components/YichunDiffRank'

function YichunProducts() {
  return (
    <>
      <section id="product_top_bar"></section>
      <YichunSearchBar />
      <section class="products">
        <div class="products_title">
          <img src="./../images/product-page-img/mountain_left.svg" alt="" />
          <h2>本月最熱門</h2>
          <img src="./../images/product-page-img/mountain_right.svg" alt="" />
        </div>
        <div class="row-of-products">
          <YichunProductCard />
          <YichunProductCard />
          <YichunProductCard />
        </div>
        <div class="row-of-products">
          <YichunProductCard />
          <YichunProductCard />
          <YichunProductCard />
        </div>
      </section>
      <section class="theme">
        <div class="theme_intro"></div>
        <div class="row-of-products">
          <button>
            <img src="./../icons/chevron-left.svg" alt="" />
          </button>
          <YichunProductCard />
          <YichunProductCard />
          <YichunProductCard />
          <button>
            <img src="./../icons/chevron-right.svg" alt="" />
          </button>
        </div>
      </section>
      <section class="difficulty">
        <div class="diff_intro_list">
          <YichunDiffRank />
          <YichunDiffRank />
          <YichunDiffRank />
        </div>
        <div class="diff_recommend">
          <div class="select_diff">
            <svg
              width="1111"
              height="301"
              viewBox="0 0 1111 301"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M104.5 246L71 230V260L104.5 246Z" fill="#6CBA7C" />
              <path
                d="M71 290V260M71 260V230L104.5 246L71 260Z"
                stroke="#6CBA7C"
                stroke-width="5"
              />
              <path
                d="M556 161V131M556 131V101L589.5 117L556 131Z"
                stroke="#6CBA7C"
                stroke-width="5"
              />
              <path
                d="M1024 66V36M1024 36V6L1057.5 22L1024 36Z"
                stroke="#6CBA7C"
                stroke-width="5"
              />
              <path
                d="M1 297.999L36.021 291.712H68.7077L130.162 280.182L189.989 272.843L283.888 279.13L347.434 266.552L425.478 238.249L461.134 228.815H488.636L557.5 160.419L721.343 195.272L806.49 169.065L848.506 151.244L881.193 125.04L963 93.4995L988.677 76.7264L1023.7 64.1484H1054.05L1082.07 74.1068L1110.09 84.0651"
                stroke="#6CBA7C"
                stroke-width="5"
                stroke-miterlimit="10"
              />
            </svg>
          </div>
          <div class="diff_products">
            <div class="product">
              <div class="pic">
                <div class="rates">
                  <p>
                    <img src="./../icons/star.svg" alt="" />
                    4.5
                  </p>
                  <p class="difficulty">難度 EASY</p>
                </div>
              </div>
              <div class="information">
                <div class="info">
                  <h4>草嶺古道｜探索新北一日遊</h4>
                  <p>新北市雙溪區</p>
                </div>
                <div class="price">
                  <p>NTD</p>
                  <h4>1,200</h4>
                </div>
              </div>
            </div>
            <div class="product">
              <div class="pic">
                <div class="rates">
                  <p>
                    <img src="./../icons/star.svg" alt="" />
                    4.5
                  </p>
                  <p class="difficulty">難度 EASY</p>
                </div>
              </div>
              <div class="information">
                <div class="info">
                  <h4>草嶺古道｜探索新北一日遊</h4>
                  <p>新北市雙溪區</p>
                </div>
                <div class="price">
                  <p>NTD</p>
                  <h4>1,200</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="test">
        <div class="test_info">
          <h5>登山知識大補帖</h5>
          <p>
            身為一名登山客，快樂登山當然也要平安回家！不論你是初級登山者、資深登山者，或是即將踏入登山的新手，都應該了解自然步道分級與分類，評估自身體能與技巧，選擇適合自己的行程再出發。
          </p>
          <button>立即測驗</button>
        </div>
      </section>
    </>
  )
}

export default YichunProducts
