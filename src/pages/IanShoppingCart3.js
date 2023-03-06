import React from 'react'
import './../html/css/shoppingCart3.css'

function IanShoppingCart3() {
  return (
    <>
      <div className="bg-image">
        <div className="container">
          <section className="row shopping-cart-process justify-content-center mobile-none">
            <img src="./svg/shopping-cart3.svg" />
            <div className="d-flex justify-content-center mb-42">
              <p className="me-142 mtgrey3">確認訂單</p>
              <p className="me-142 mtgrey3">填寫資料</p>
              <p className="me-142 mtgrey1">付款頁面</p>
              <p className="mtgrey3">完成訂單</p>
            </div>
          </section>

          <section className="row shopping-cart-process justify-content-center web-none">
            {/* 購物車流程png & li */}
            <img src="./svg/shopping-cart3-mobile.svg" />
            <div className="d-flex justify-content-center mb-42">
              <p className="me-27 mtgrey3 mb-0">確認訂單</p>
              <p className="me-27 mtgrey3 mb-0">填寫資料</p>
              <p className="me-27 mtgrey1 mb-0">付款頁面</p>
              <p className="mtgrey3 mb-0">完成訂單</p>
            </div>
          </section>
        </div>

        <div className="wrap-container shopping-cart-contain mb-50">
          <div
            id="shopping-cart-title"
            className="d-flex align-items-center mb-28"
          >
            <img src="./svg/credit-card.svg" className="me-12" alt="" />
            <h3>付款方式</h3>
          </div>
          <div className="d-flex mb-50 credit-card-type">
            <img src="./svg/Visa.svg" alt="" className="me-20" />
            <img src="./svg/Mastercard.svg" alt="" className="me-20" />
            <img src="./svg/Linepay.svg" alt="" />
          </div>
          <form className="form-inline mb-88" action="">
            <div className="form-group col-12 mb-20">
              <label for="creditcard">信用卡號碼</label>
              <input
                type="tel"
                maxlength="16"
                className="form-control"
                id="creditcard"
                placeholder="4512&nbsp;&nbsp;&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;&nbsp;&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;&nbsp;&nbsp;-&nbsp;-&nbsp;-&nbsp;-"
              />
            </div>
            <div className="row justify-content-between mb-20">
              <div className="form-group col-8">
                <label
                  for="
              expirationdate"
                >
                  有效期限
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="expirationdate"
                  name="expirationdate"
                />
              </div>
              <div className="form-group col-4">
                <label for="CVV2">末三碼</label>
                <input
                  type="tel"
                  maxlength="3"
                  className="form-control"
                  id="CVV2"
                  name="CVV2"
                />
              </div>
            </div>
          </form>
          <p className="description mb-50">
            請注意本平台不會向您收取任何平台交易手續費，但你下單時使用的信用卡或第三方支付平台可能會向您收取相關手續費，請參考其相關服務政策和規定，並向你所選的交易服務商取得更多資訊。
          </p>
        </div>

        <div className="pd-40">
          <button type="button" className="btn btn-primary">
            確認訂單
          </button>
        </div>
      </div>
    </>
  )
}
export default IanShoppingCart3
