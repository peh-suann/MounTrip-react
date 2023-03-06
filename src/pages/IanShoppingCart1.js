import React from 'react'
import './../html/css/shoppingCart1.css'

function IanShoppingCart1() {
  return (
    <>
      <div className="bg-image">
        <div className="container">
          <section className="row shopping-cart-process justify-content-center mobile-none">
            {/* 購物車流程png & li */}
            <img src="./svg/shopping-cart1.svg" />
            <div className="d-flex justify-content-center mb-42">
              <p className="me-142 mtgrey1">確認訂單</p>
              <p className="me-142 mtgrey3">填寫資料</p>
              <p className="me-142 mtgrey3">付款頁面</p>
              <p className="mtgrey3">完成訂單</p>
            </div>
          </section>

          <section className="row shopping-cart-process justify-content-center web-none">
            {/* 購物車流程png & li  */}
            <img src="./svg/shopping-cart1-mobile.svg" />
            <div className="d-flex justify-content-center mb-42">
              <p className="me-27 mtgrey1 mb-0">確認訂單</p>
              <p className="me-27 mtgrey3 mb-0">填寫資料</p>
              <p className="me-27 mtgrey3 mb-0">付款頁面</p>
              <p className="mtgrey3 mb-0">完成訂單</p>
            </div>
          </section>

          <section className="row shopping-cart-contain">
            <div className="col-lg-9 col-sm-12">
              <div
                id="shopping-cart-title"
                className="d-flex align-items-center mb-4"
              >
                <img src="./../icons/shopping-cart.svg" className="" alt="" />
                <h3>購物車</h3>
              </div>
              <div className="d-flex product-col-title mobile-none">
                <div className="w1 mobile-none">
                  <input type="checkbox" />
                </div>
                <div className="w2 mobile-none">商品資料</div>
                <div className="w3 mobile-none">日期</div>
                <div className="w4 mobile-none">單件價格</div>
                <div className="w5 mobile-none">數量</div>
                <div className="w6 mobile-none">小計</div>
                <div className="w7 mobile-none"></div>
              </div>
              <div className="shoppingcart-product">
                web商品細節
                <div className="d-flex product-col mobile-none">
                  <div className="w1 mobile-none">
                    <input type="checkbox" />
                  </div>
                  <div className="w2 mobile-none">
                    <div className="row w-100">
                      <div className="col-4">
                        <div className="product-img-wrap">
                          <img src="./img/shopping-cart1.png" />
                        </div>
                      </div>
                      <div className="col-8 px-0">
                        <p className="product-title mb-3">
                          草嶺古道｜探索新北一日遊探索新北一日遊
                        </p>
                        <p className="product-subtitle mb-0">
                          草嶺古道單日行程
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w3 mobile-none">
                    <p className="mb-0">2023/01/01</p>
                    <p className="mb-0">&emsp;&emsp;|</p>
                    <p className="mb-0">2023/01/02</p>
                  </div>
                  <div className="w4 mobile-none">NTD 1,200</div>
                  <div className="w5 mobile-none">
                    <div className="d-flex">
                      <button className="plus-button">
                        <img
                          className="minus-icon me-3"
                          src="./svg/minus.svg"
                          alt=""
                        />
                      </button>
                      <p className="product-number mb-0 me-3">1</p>
                      <button className="plus-button">
                        <img
                          className="minus-icon"
                          src="./svg/plus.svg"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                  <div className="w6 mobile-none">NTD 1,200</div>
                  <div className="w7 mobile-none">
                    <img src="./svg/trash-2.svg" />
                  </div>
                </div>
                mobile 商品細節
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
                    <div className="web-none">
                      <p className="single-price mtgrey2 mb-0">NTD 1,200</p>
                      <p className="total-price mtgrey1 mb-0">NTD 1,200</p>
                    </div>
                    <div className="web-none">
                      <div className="d-flex align-items-center">
                        <button className="plus-button">
                          <img
                            className="minus-icon"
                            src="./svg/minus.svg"
                            alt=""
                          />
                        </button>
                        <p className="product-number mb-0 mx-3">1</p>
                        <button className="plus-button">
                          <img
                            className="minus-icon"
                            src="./svg/plus.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shoppingcart-product">
                web商品細節
                <div className="d-flex product-col mobile-none">
                  <div className="w1 mobile-none">
                    <input type="checkbox" />
                  </div>
                  <div className="w2 mobile-none">
                    <div className="row w-100">
                      <div className="col-4">
                        <div className="product-img-wrap">
                          <img src="./img/shopping-cart1.png" />
                        </div>
                      </div>
                      <div className="col-8 px-0">
                        <p className="product-title mb-3">
                          草嶺古道｜探索新北一日遊探索新北一日遊
                        </p>
                        <p className="product-subtitle mb-0">
                          草嶺古道單日行程
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w3 mobile-none">
                    <p className="mb-0">2023/01/01</p>
                    <p className="mb-0">&emsp;&emsp;|</p>
                    <p className="mb-0">2023/01/02</p>
                  </div>
                  <div className="w4 mobile-none">NTD 1,200</div>
                  <div className="w5 mobile-none">
                    <div className="d-flex">
                      <button className="plus-button">
                        <img
                          className="minus-icon me-3"
                          src="./svg/minus.svg"
                          alt=""
                        />
                      </button>
                      <p className="product-number mb-0 me-3">1</p>
                      <button className="plus-button">
                        <img
                          className="minus-icon"
                          src="./svg/plus.svg"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                  <div className="w6 mobile-none">NTD 1,200</div>
                  <div className="w7 mobile-none">
                    <img src="./svg/trash-2.svg" />
                  </div>
                </div>
                mobile 商品細節
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
                    <div className="web-none">
                      <p className="single-price mtgrey2 mb-0">NTD 1,200</p>
                      <p className="total-price mtgrey1 mb-0">NTD 1,200</p>
                    </div>
                    <div className="web-none">
                      <div className="d-flex align-items-center">
                        <button className="plus-button">
                          <img
                            className="minus-icon"
                            src="./svg/minus.svg"
                            alt=""
                          />
                        </button>
                        <p className="product-number mb-0 mx-3">1</p>
                        <button className="plus-button">
                          <img
                            className="minus-icon"
                            src="./svg/plus.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shoppingcart-product">
                web商品細節
                <div className="d-flex product-col mobile-none">
                  <div className="w1 mobile-none">
                    <input type="checkbox" />
                  </div>
                  <div className="w2 mobile-none">
                    <div className="row w-100">
                      <div className="col-4">
                        <div className="product-img-wrap">
                          <img src="./img/shopping-cart1.png" />
                        </div>
                      </div>
                      <div className="col-8 px-0">
                        <p className="product-title mb-3">
                          草嶺古道｜探索新北一日遊探索新北一日遊
                        </p>
                        <p className="product-subtitle mb-0">
                          草嶺古道單日行程
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w3 mobile-none">
                    <p className="mb-0">2023/01/01</p>
                    <p className="mb-0">&emsp;&emsp;|</p>
                    <p className="mb-0">2023/01/02</p>
                  </div>
                  <div className="w4 mobile-none">NTD 1,200</div>
                  <div className="w5 mobile-none">
                    <div className="d-flex">
                      <button className="plus-button">
                        <img
                          className="minus-icon me-3"
                          src="./svg/minus.svg"
                          alt=""
                        />
                      </button>
                      <p className="product-number mb-0 me-3">1</p>
                      <button className="plus-button">
                        <img
                          className="minus-icon"
                          src="./svg/plus.svg"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                  <div className="w6 mobile-none">NTD 1,200</div>
                  <div className="w7 mobile-none">
                    <img src="./svg/trash-2.svg" />
                  </div>
                </div>
                mobile 商品細節
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
                    <div className="web-none">
                      <p className="single-price mtgrey2 mb-0">NTD 1,200</p>
                      <p className="total-price mtgrey1 mb-0">NTD 1,200</p>
                    </div>
                    <div className="web-none">
                      <div className="d-flex align-items-center">
                        <button className="plus-button">
                          <img
                            className="minus-icon"
                            src="./svg/minus.svg"
                            alt=""
                          />
                        </button>
                        <p className="product-number mb-0 mx-3">1</p>
                        <button className="plus-button">
                          <img
                            className="minus-icon"
                            src="./svg/plus.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shoppingcart-product">
                web商品細節
                <div className="d-flex product-col mobile-none">
                  <div className="w1 mobile-none">
                    <input type="checkbox" />
                  </div>
                  <div className="w2 mobile-none">
                    <div className="row w-100">
                      <div className="col-4">
                        <div className="product-img-wrap">
                          <img src="./img/shopping-cart1.png" />
                        </div>
                      </div>
                      <div className="col-8 px-0">
                        <p className="product-title mb-3">
                          草嶺古道｜探索新北一日遊探索新北一日遊
                        </p>
                        <p className="product-subtitle mb-0">
                          草嶺古道單日行程
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w3 mobile-none">
                    <p className="mb-0">2023/01/01</p>
                    <p className="mb-0">&emsp;&emsp;|</p>
                    <p className="mb-0">2023/01/02</p>
                  </div>
                  <div className="w4 mobile-none">NTD 1,200</div>
                  <div className="w5 mobile-none">
                    <div className="d-flex">
                      <button className="plus-button">
                        <img
                          className="minus-icon me-3"
                          src="./svg/minus.svg"
                          alt=""
                        />
                      </button>
                      <p className="product-number mb-0 me-3">1</p>
                      <button className="plus-button">
                        <img
                          className="minus-icon"
                          src="./svg/plus.svg"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                  <div className="w6 mobile-none">NTD 1,200</div>
                  <div className="w7 mobile-none">
                    <img src="./svg/trash-2.svg" />
                  </div>
                </div>
                mobile 商品細節
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
                    <div className="web-none">
                      <p className="single-price mtgrey2 mb-0">NTD 1,200</p>
                      <p className="total-price mtgrey1 mb-0">NTD 1,200</p>
                    </div>
                    <div className="web-none">
                      <div className="d-flex align-items-center">
                        <button className="plus-button">
                          <img
                            className="minus-icon"
                            src="./svg/minus.svg"
                            alt=""
                          />
                        </button>
                        <p className="product-number mb-0 mx-3">1</p>
                        <button className="plus-button">
                          <img
                            className="minus-icon"
                            src="./svg/plus.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div
                id="shopping-cart-title"
                className="d-flex align-items-center mb-4"
              >
                <img src="./svg/check-circle.svg" className="" alt="" />
                <h3>訂單明細</h3>
              </div>
              <div className="input-group padding-30">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form1"
                    className="form-control"
                    placeholder="輸入優惠代碼"
                  />
                </div>
                <button type="button" className="btn btn-primary">
                  套用
                </button>
              </div>
              <div className="d-flex justify-content-between padding-30">
                <p className="p mb-0">小計</p>
                <p className="p-bold mb-0">NTD 7,200</p>
              </div>
              <div className="coupon d-flex justify-content-between padding-30 margin-30">
                <p className="p mb-0">優惠碼 HAPPY10</p>
                <p className="p mtgreen1 mb-0">-NTD 100</p>
              </div>
              <div className="d-flex justify-content-between padding-30">
                <p className="p-bold mb-0">合計</p>
                <p className="p-bold mb-0">NTD $2,330</p>
              </div>
              <button className="w-100 btn">下一步</button>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
export default IanShoppingCart1
