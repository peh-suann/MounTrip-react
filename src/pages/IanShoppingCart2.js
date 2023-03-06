import React from 'react'
import './../html/css/shoppingCart2.css'

function IanShoppingCart2() {
  return (
    <>
      <div className="bg-image">
        <div className="container">
          <section className="row shopping-cart-process justify-content-center mobile-none">
            <img src="./svg/shopping-cart2.svg" />
            <div className="d-flex justify-content-center mb-42">
              <p className="me-142 mtgrey3">確認訂單</p>
              <p className="me-142 mtgrey1">填寫資料</p>
              <p className="me-142 mtgrey3">付款頁面</p>
              <p className="mtgrey3">完成訂單</p>
            </div>
          </section>

          <section className="row shopping-cart-process justify-content-center web-none">
            {/* 購物車流程png & li */}
            <img src="./svg/shopping-cart2-mobile.svg" />
            <div className="d-flex justify-content-center mb-42">
              <p className="me-27 mtgrey3 mb-0">確認訂單</p>
              <p className="me-27 mtgrey1 mb-0">填寫資料</p>
              <p className="me-27 mtgrey3 mb-0">付款頁面</p>
              <p className="mtgrey3 mb-0">完成訂單</p>
            </div>
          </section>
        </div>

        <div className="wrap-container shopping-cart-contain mb-88">
          <div
            id="shopping-cart-title"
            className="d-flex align-items-center mb-28"
          >
            <img src="./svg/user.svg" className="me-12" alt="" />
            <h3>訂購人資料</h3>
          </div>
          <form className="form-inline" action="">
            <div className="row justify-content-between mb-20">
              <div className="form-group col-6">
                <label for="firstName">名字</label>
                <input type="text" className="form-control" id="firstName" />
              </div>
              <div className="form-group col-6">
                <label for="lastName">姓氏</label>
                <input type="text" className="form-control" id="lastName" />
              </div>
            </div>
            <div className="form-group col-12 mb-20">
              <label for="phone">聯絡電話</label>
              <input type="tel" className="form-control" id="phone" />
            </div>
            <div className="form-group col-12 mb-88">
              <label for="email">電子郵件信箱</label>
              <input type="email" className="form-control" id="email" />
            </div>
          </form>

          <div
            id="shopping-cart-title"
            className="d-flex align-items-center mb-28"
          >
            <img src="./svg/users.svg" className="me-12" alt="" />
            <h3>旅客資料</h3>
          </div>
          <div className="row order-detail align-items-center">
            <div className="col-1">
              <img src="./svg/chevron-down.svg" />
            </div>
            <div className="col-11">
              <p className="order-title">草嶺古道｜探索新北一日遊探索</p>
              <div className="d-flex order-title-detail">
                <p className="order-title-detail-number">
                  <img className="" src="./svg/users_grey.svg" />
                  <span>2張</span>
                </p>
                <p>
                  <img className="" src="./svg/calendar_grey.svg" />
                  <span>2022/01/01 - 2022/01/03</span>
                </p>
              </div>
            </div>
          </div>
          <form className="form-inline mb-50" action="">
            <div className="row justify-content-between mb-20">
              <div className="form-group col-6">
                <label
                  for="
              traveler1-firstName"
                >
                  名字
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="traveler1-firstName"
                />
              </div>
              <div className="form-group col-6">
                <label for="traveler1-lastName">姓氏</label>
                <input
                  type="text"
                  className="form-control"
                  id="traveler1-lastName"
                />
              </div>
            </div>
            <div className="form-group col-12 mb-20">
              <label for="traveler1-phone">聯絡電話</label>
              <input type="tel" className="form-control" id="traveler1-phone" />
            </div>
            <div className="form-group col-12 mb-20">
              <label for="traveler1-email">電子郵件信箱</label>
              <input
                type="email"
                className="form-control"
                id="traveler1-email"
              />
            </div>
            <div className="row justify-content-between mb-20">
              <div className="form-group col-6">
                <label
                  for="
              traveler1-id"
                >
                  身分證字號
                </label>
                <input type="text" className="form-control" id="traveler1-id" />
              </div>
              <div className="form-group col-6">
                <label for="traveler1-birthday">出生年月日</label>
                <input
                  type="date"
                  className="form-control"
                  id="traveler1-birthday"
                />
              </div>
            </div>
            <div className="mb-48">
              <input type="checkbox" id="sameOrder" name="sameOrder" />
              <label className="checkmark grey2" for="sameOrder">
                同訂購人資料
              </label>
            </div>

            <div className="row justify-content-between mb-20">
              <div className="form-group col-6">
                <label
                  for="
            traveler1-firstName"
                >
                  名字
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="traveler1-firstName"
                />
              </div>
              <div className="form-group col-6">
                <label for="traveler2-lastName">姓氏</label>
                <input
                  type="text"
                  className="form-control"
                  id="traveler2-lastName"
                />
              </div>
            </div>
            <div className="form-group col-12 mb-20">
              <label for="traveler2-phone">聯絡電話</label>
              <input type="tel" className="form-control" id="traveler2-phone" />
            </div>
            <div className="form-group col-12 mb-20">
              <label for="traveler2-email">電子郵件信箱</label>
              <input
                type="email"
                className="form-control"
                id="traveler2-email"
              />
            </div>
            <div className="row justify-content-between mb-20">
              <div className="form-group col-6">
                <label
                  for="
            traveler2-id"
                >
                  身分證字號
                </label>
                <input type="text" className="form-control" id="traveler2-id" />
              </div>
              <div className="form-group col-6">
                <label for="traveler2-birthday">出生年月日</label>
                <input
                  type="date"
                  className="form-control"
                  id="traveler2-birthday"
                />
              </div>
            </div>
          </form>

          <div className="row order-detail align-items-center mb-40">
            <div className="col-1">
              <img src="./svg/chevron-down-right.svg" />
            </div>
            <div className="col-11">
              <p className="order-title mb-15">
                草嶺古道｜探索新北一日遊探索新北一日遊
              </p>
              <div className="d-flex order-title-detail">
                <p className="order-title-detail-number">
                  <img className="" src="./svg/users_grey.svg" />
                  <span>2張</span>
                </p>
                <p>
                  <img className="" src="./svg/calendar_grey.svg" />
                  <span>2022/01/01 - 2022/01/03</span>
                </p>
              </div>
            </div>
          </div>

          <div className="row order-detail align-items-center pd-40">
            <div className="col-1">
              <img src="./svg/chevron-down-right.svg" />
            </div>
            <div className="col-11">
              <p className="order-title mb-15">
                草嶺古道｜探索新北一日遊探索新北一日遊
              </p>
              <div className="d-flex order-title-detail">
                <p className="order-title-detail-number">
                  <img className="" src="./svg/users_grey.svg" />
                  <span>2張</span>
                </p>
                <p>
                  <img className="" src="./svg/calendar_grey.svg" />
                  <span>2022/01/01 - 2022/01/03</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pd-40 mobile-button-width">
          <button type="button" className="btn btn-primary">
            前往付款
          </button>
        </div>
      </div>
    </>
  )
}
export default IanShoppingCart2
