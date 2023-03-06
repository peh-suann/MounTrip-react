import React from 'react'
import './../html/css/shoppingCart4.css'

function IanShoppingCart4() {
  return (
    <>
      <div className="bg-image">
        <div className="container">
          <section className="row shopping-cart-process justify-content-center mobile-none">
            <img src="./svg/shopping-cart4.svg" />
            <div className="d-flex justify-content-center mb-42">
              <p className="me-142 mtgrey3">確認訂單</p>
              <p className="me-142 mtgrey3">填寫資料</p>
              <p className="me-142 mtgrey3">付款頁面</p>
              <p className="mtgrey1">完成訂單</p>
            </div>
          </section>

          <section className="row shopping-cart-process justify-content-center web-none">
            {/* 購物車流程png & li */}
            <img src="./svg/shopping-cart3-mobile.svg" />
            <div className="d-flex justify-content-center mb-42">
              <p className="me-27 mtgrey3 mb-0">確認訂單</p>
              <p className="me-27 mtgrey3 mb-0">填寫資料</p>
              <p className="me-27 mtgrey3 mb-0">付款頁面</p>
              <p className="mtgrey1 mb-0">完成訂單</p>
            </div>
          </section>
        </div>

        <div className="wrap-container shopping-cart-contain mb-50">
          <img src="./svg/complete.svg" alt="" />
          <p className="mt-36 mb-68">
            謝謝您的購買！
            <br />
            您的訂單正在處理中
          </p>

          <div
            id="shopping-cart-title"
            className="d-flex align-items-center mb-28"
          >
            <img src="./svg/check-circle.svg" alt="" className="me-12" />
            <h3>訂單細節</h3>
          </div>
          <div className="d-flex justify-content-between mb-15">
            <p className="mtgrey2">訂單編號</p>
            <p className="mtgrey1 fw-600">S12345678</p>
          </div>
          <div className="d-flex justify-content-between mb-15">
            <p className="mtgrey2">訂單編號</p>
            <p className="mtgrey1 fw-600">2023/01/01</p>
          </div>
          <div className="d-flex justify-content-between border-green">
            <p className="mtgrey2">付款方式</p>
            <p className="mtgrey1 fw-600">信用卡支付</p>
          </div>

          <div className="row mb-102">
            <div className="col-7"></div>
            <div className="col-5">
              <div className="d-flex justify-content-between">
                <p className="mtgrey2">小計</p>
                <p className="mtgrey1">NTD $2,330</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mtgrey2">優惠券</p>
                <p className="mtgrey1">-NTD $100</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mtgrey2 fw-600">合計</p>
                <p className="mtgrey1 fw-600">NTD $2,230</p>
              </div>
            </div>
          </div>

          <div className="shoppingcart-product">
            {/* web購物車商品細節 */}
            <div className="row d-flex w-100 product-col justify-content-between mobile-none">
              <div className="w2 mobile-none">
                <div className="row w-100">
                  <div className="col-4">
                    <div className="product-img-wrap">
                      <img src="./img/shopping-cart1.png" />
                    </div>
                  </div>
                  <div className="col-8 px-0">
                    <p className="product-title">
                      草嶺古道｜探索新北一日遊探索新北一日遊
                    </p>
                    <p className="product-subtitle mb-0">草嶺古道單日行程</p>
                  </div>
                </div>
              </div>
              <div className="w3 ps-0 mobile-none">
                <p className="mb-0 mtgrey3">2023/01/01</p>
                <p className="mb-0 mtgrey3">&emsp;&emsp;|</p>
                <p className="mb-0 mtgrey3">2023/01/02</p>
              </div>
              <div className="w4 ps-0 mobile-none">NTD 1,200</div>
              <div className="w5 ps-0 mobile-none">
                <div className="d-flex">
                  <p className="product-number me-3">x 1</p>
                </div>
              </div>
              <div className="w6 ps-0 mobile-none">NTD 1,200</div>
            </div>
            {/* mobile購物車商品細節 */}
            <div className="d-flex flex-column product-col-mobile web-none">
              <div className="w-100 mb-12 web-none">
                <div className="row w-100 justify-content-between mx-0">
                  <div className="col-4 product-mobile ps-0">
                    <div className="product-img-wrap">
                      <img src="./img/shopping-cart1.png" />
                    </div>
                  </div>
                  <div className="col-8 px-0">
                    <p className="product-title mb-1 mtgrey1">
                      草嶺古道｜探索新北一日遊探索新北一日遊
                    </p>
                    <p className="product-subtitle mb-0 mtgrey2">
                      草嶺古道單日行程
                    </p>
                    <p className="product-subtitle mb-0 mtgrey1">
                      2023/01/01 - 2023/01/02
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-100 d-flex justify-content-between align-items-end web-none">
                <div className="web-none d-flex">
                  <img
                    className="me-12 web-none"
                    src="./svg/users_grey.svg"
                    alt=""
                  />
                  <span className="mtgrey2 ticketnumber web-none">2張</span>
                </div>
                <div className="web-none">
                  <p className="single-price mtgrey2 mb-0">NTD 1,200</p>
                  <p className="total-price mtgrey1 mb-0">NTD 1,200</p>
                </div>
              </div>
            </div>
          </div>
          <div className="shoppingcart-product">
            {/* web購物車商品細節  */}
            <div className="row d-flex w-100 product-col justify-content-between mobile-none">
              <div className="w2 mobile-none">
                <div className="row w-100">
                  <div className="col-4">
                    <div className="product-img-wrap">
                      <img src="./img/shopping-cart1.png" />
                    </div>
                  </div>
                  <div className="col-8 px-0">
                    <p className="product-title">
                      草嶺古道｜探索新北一日遊探索新北一日遊
                    </p>
                    <p className="product-subtitle mb-0">草嶺古道單日行程</p>
                  </div>
                </div>
              </div>
              <div className="w3 ps-0 mobile-none">
                <p className="mb-0 mtgrey3">2023/01/01</p>
                <p className="mb-0 mtgrey3">&emsp;&emsp;|</p>
                <p className="mb-0 mtgrey3">2023/01/02</p>
              </div>
              <div className="w4 ps-0 mobile-none">NTD 1,200</div>
              <div className="w5 ps-0 mobile-none">
                <div className="d-flex">
                  <p className="product-number me-3">x 1</p>
                </div>
              </div>
              <div className="w6 ps-0 mobile-none">NTD 1,200</div>
            </div>
            {/* mobile購物車商品細節 */}
            <div className="d-flex flex-column product-col-mobile web-none">
              <div className="w-100 mb-12 web-none">
                <div className="row w-100 justify-content-between mx-0">
                  <div className="col-4 product-mobile ps-0">
                    <div className="product-img-wrap">
                      <img src="./img/shopping-cart1.png" />
                    </div>
                  </div>
                  <div className="col-8 px-0">
                    <p className="product-title mb-1 mtgrey1">
                      草嶺古道｜探索新北一日遊探索新北一日遊
                    </p>
                    <p className="product-subtitle mb-0 mtgrey2">
                      草嶺古道單日行程
                    </p>
                    <p className="product-subtitle mb-0 mtgrey1">
                      2023/01/01 - 2023/01/02
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-100 d-flex justify-content-between align-items-end web-none">
                <div className="web-none d-flex">
                  <img
                    className="me-12 web-none"
                    src="./svg/users_grey.svg"
                    alt=""
                  />
                  <span className="mtgrey2 ticketnumber web-none">2張</span>
                </div>
                <div className="web-none">
                  <p className="single-price mtgrey2 mb-0">NTD 1,200</p>
                  <p className="total-price mtgrey1 mb-0">NTD 1,200</p>
                </div>
              </div>
            </div>
          </div>
          <div className="shoppingcart-product">
            {/* web購物車商品細節  */}
            <div className="row d-flex w-100 product-col justify-content-between mobile-none">
              <div className="w2 mobile-none">
                <div className="row w-100">
                  <div className="col-4">
                    <div className="product-img-wrap">
                      <img src="./img/shopping-cart1.png" />
                    </div>
                  </div>
                  <div className="col-8 px-0">
                    <p className="product-title">
                      草嶺古道｜探索新北一日遊探索新北一日遊
                    </p>
                    <p className="product-subtitle mb-0">草嶺古道單日行程</p>
                  </div>
                </div>
              </div>
              <div className="w3 ps-0 mobile-none">
                <p className="mb-0 mtgrey3">2023/01/01</p>
                <p className="mb-0 mtgrey3">&emsp;&emsp;|</p>
                <p className="mb-0 mtgrey3">2023/01/02</p>
              </div>
              <div className="w4 ps-0 mobile-none">NTD 1,200</div>
              <div className="w5 ps-0 mobile-none">
                <div className="d-flex">
                  <p className="product-number me-3">x 1</p>
                </div>
              </div>
              <div className="w6 ps-0 mobile-none">NTD 1,200</div>
            </div>
            {/* mobile購物車商品細節  */}
            <div className="d-flex flex-column product-col-mobile web-none">
              <div className="w-100 mb-12 web-none">
                <div className="row w-100 justify-content-between mx-0">
                  <div className="col-4 product-mobile ps-0">
                    <div className="product-img-wrap">
                      <img src="./img/shopping-cart1.png" />
                    </div>
                  </div>
                  <div className="col-8 px-0">
                    <p className="product-title mb-1 mtgrey1">
                      草嶺古道｜探索新北一日遊探索新北一日遊
                    </p>
                    <p className="product-subtitle mb-0 mtgrey2">
                      草嶺古道單日行程
                    </p>
                    <p className="product-subtitle mb-0 mtgrey1">
                      2023/01/01 - 2023/01/02
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-100 d-flex justify-content-between align-items-end web-none">
                <div className="web-none d-flex">
                  <img
                    className="me-12 web-none"
                    src="./svg/users_grey.svg"
                    alt=""
                  />
                  <span className="mtgrey2 ticketnumber web-none">2張</span>
                </div>
                <div className="web-none">
                  <p className="single-price mtgrey2 mb-0">NTD 1,200</p>
                  <p className="total-price mtgrey1 mb-0">NTD 1,200</p>
                </div>
              </div>
            </div>
          </div>
          <div className="shoppingcart-product">
            {/* web購物車商品細節  */}
            <div className="row d-flex w-100 product-col justify-content-between mobile-none">
              <div className="w2 mobile-none">
                <div className="row w-100">
                  <div className="col-4">
                    <div className="product-img-wrap">
                      <img src="./img/shopping-cart1.png" />
                    </div>
                  </div>
                  <div className="col-8 px-0">
                    <p className="product-title">
                      草嶺古道｜探索新北一日遊探索新北一日遊
                    </p>
                    <p className="product-subtitle mb-0">草嶺古道單日行程</p>
                  </div>
                </div>
              </div>
              <div className="w3 ps-0 mobile-none">
                <p className="mb-0 mtgrey3">2023/01/01</p>
                <p className="mb-0 mtgrey3">&emsp;&emsp;|</p>
                <p className="mb-0 mtgrey3">2023/01/02</p>
              </div>
              <div className="w4 ps-0 mobile-none">NTD 1,200</div>
              <div className="w5 ps-0 mobile-none">
                <div className="d-flex">
                  <p className="product-number me-3">x 1</p>
                </div>
              </div>
              <div className="w6 ps-0 mobile-none">NTD 1,200</div>
            </div>
            {/* mobile購物車商品細節  */}
            <div className="d-flex flex-column product-col-mobile web-none">
              <div className="w-100 mb-12 web-none">
                <div className="row w-100 justify-content-between mx-0">
                  <div className="col-4 product-mobile ps-0">
                    <div className="product-img-wrap">
                      <img src="./img/shopping-cart1.png" />
                    </div>
                  </div>
                  <div className="col-8 px-0">
                    <p className="product-title mb-1 mtgrey1">
                      草嶺古道｜探索新北一日遊探索新北一日遊
                    </p>
                    <p className="product-subtitle mb-0 mtgrey2">
                      草嶺古道單日行程
                    </p>
                    <p className="product-subtitle mb-0 mtgrey1">
                      2023/01/01 - 2023/01/02
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-100 d-flex justify-content-between align-items-end web-none">
                <div className="web-none d-flex">
                  <img
                    className="me-12 web-none"
                    src="./svg/users_grey.svg"
                    alt=""
                  />
                  <span className="mtgrey2 ticketnumber web-none">2張</span>
                </div>
                <div className="web-none">
                  <p className="single-price mtgrey2 mb-0">NTD 1,200</p>
                  <p className="total-price mtgrey1 mb-0">NTD 1,200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default IanShoppingCart4
