//node的路徑port
// 上面寫HOST，下面寫路徑

// hosts ---------------------------------------------------------------------------
// export const HOST = 'http://localhost:3001'
export const HOST = 'http://localhost:3002'

//Lai's connect
// export const HOST = 'http://192.168.71.105:3001'
// export const HOST = 'http://127.0.0.1:3002'
// // // export const HOST = 'http://192.168.71.105:3001'

// export const HOST = 'localhost:3002'

// 兩台電腦連線時，要用筆電wiki的ip，才能使用localstorage

// export const HOST = 'http://192.168.71.118:3001'

//教室電腦的連線
// export const HOST = '192.168.21.84:3002'

// yichun's connect
// export const HOST = 'http://192.168.71.118:3001'

// export const HOST = 'http://192.168.71.105:3001'

//member
export const MEMBER_DATA = `${HOST}/member/api`
export const USER_DATA = (mid) => `${HOST}/member/me/${mid}`
export const USER_DATA_UPDATE = (mid) => `${HOST}/member/me/${mid}/update`
export const USER_COMMENT = (mid) => `${HOST}/member/me/comment/${mid}`
export const USER_UPLOAD = `${HOST}/member/me/upload`
export const USER_AVATAR = `${HOST}/uploads/`
export const USER_COUPON = `${HOST}/member/me/coupon`
export const USER_FAV = `${HOST}/member/me/favorite`
export const USER_FAV_DELETE = `${HOST}/member/me/favorite/delete`
export const USER_FAV_ADD = `${HOST}/member/me/favorite/add`
export const USER_LEVEL_UPDATE = `${HOST}/member/me/member-level/update`
export const USER_ORDER = `${HOST}/member/me/order`
export const USER_ORDER_SUCCESS = `${HOST}/member/me/order/success`
export const USER_ORDER_DETAIL = `${HOST}/member/me/order/product-detail`

// paths ---------------------------------------------------------------------------
// yichun's path
export const SEARCH_PRODUCTS = `${HOST}/search`
export const ALL_PRODUCTS = `${HOST}/products`
export const POP_PRODUCTS = `${HOST}/products_popular`
export const SUNRISE_PRODUCTS = `${HOST}/products_sunrise`
export const HOLIDAY_PRODUCTS = `${HOST}/products_holiday`
export const FLOWERS_PRODUCTS = `${HOST}/products_flowers`
export const HOTSPRING_PRODUCTS = `${HOST}/products_hotspring`
export const LOCATION_PRODUCTS = `${HOST}/products_location`
export const WEATHER_LOCATION = `${HOST}/weather_location`
export const TEST_QUES = `${HOST}/test`
export const TEST_ANS = `${HOST}/answer`
export const TEST_PLAY = `${HOST}/test_play`
export const TEST_INSERT_PLAY = `${HOST}/insert_play`
export const TEST_INSERT_COUPON = `${HOST}/insert_coupon`
export const MEMBER_INSERT_COUPON = `${HOST}/member_insert_coupon`

// kexin's path
export const LOGIN = `${HOST}/login`
export const SIGNIN = `${HOST}/signin`
export const PASSWORD = `${HOST}/resetPassword`
export const VERIFY = `${HOST}/vertify`
export const SELECT_COUNTY = `${HOST}/select_products`
export const SELECT_COMMENT = `${HOST}/select_comment`
export const SELECT_BATCH = `${HOST}/select_batch`
export const SELECT_MEMBER = `${HOST}/select_member`

// // LAI's path
// export const LIST_DATA = `${HOST}/member`

// someone's path

export const TRAILS_DATA = `${HOST}/trails`

export const RATING_DATA = `${HOST}/trails/rating`

export const TRAILS_BATCH_DATA = `${HOST}/trails/batch`

export const TRAILS_FILTER_DATA = `${HOST}/trails-filter`

export const FILTER_ALL_DATA = `${HOST}/trails-filter/all`

// plz check ---------------------------------------------------------------------------
// export const HOST = 'http://localhost:3000'

export const TRAILS_SEASON = `${HOST}/season`
export const TRAILS_COMMENT = `${HOST}/seasonComment`
export const TRAILS_DIFFHARD = `${HOST}/difficultyHard`
export const TRAILS_DIFFMEDIUM = `${HOST}/difficultyMedium`
export const TRAILS_DIFFEASY = `${HOST}/difficultyEasy`
export const ORDER_COUPON = `${HOST}/SC1`
export const ORDER_HISTORY = `${HOST}/history`
export const ORDER_HISTORY2 = `${HOST}/history2`
export const ORDER_HISTORY3 = `${HOST}/history3`
export const ORDER_DATE = `${HOST}/orderDates`
export const ORDERUSER_DATA = (mid) => `${HOST}/${mid}`
