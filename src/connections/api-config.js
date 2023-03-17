//node的路徑port
// 上面寫HOST，下面寫路徑

// hosts ---------------------------------------------------------------------------
// export const HOST = 'http://localhost:3000'
// export const HOST = 'http://localhost:3001'
//教室電腦的連線
// export const HOST = '192.168.21.84:3000'

// yichun's connect
export const HOST = 'http://192.168.71.118:3000'
// export const HOST = 'http://192.168.100.140:3000'
// export const HOST = 'http://127.0.0.1:3000'

// paths ---------------------------------------------------------------------------
// yichun's path
export const ALL_PRODUCTS = `${HOST}/products`
export const POP_PRODUCTS = `${HOST}/products_popular`
export const SUNRISE_PRODUCTS = `${HOST}/products_sunrise`
export const HOLIDAY_PRODUCTS = `${HOST}/products_holiday`
export const FLOWERS_PRODUCTS = `${HOST}/products_flowers`
export const HOTSPRING_PRODUCTS = `${HOST}/products_hotspring`
export const LOCATION_PRODUCTS = `${HOST}/products_location`
export const TEST_QUES = `${HOST}/test`
export const TEST_ANS = `${HOST}/answer`

// kexin's path
export const LOGIN = `${HOST}/login`

// LAI's path
// export const LIST_DATA = `${HOST}/member`

// someone's path
export const TRAILS_DATA = `${HOST}/trails?`
export const RATING_DATA = `${HOST}/trails/rating`
export const TRAILS_BATCH_DATA = `${HOST}/trails-batch`

// plz check ---------------------------------------------------------------------------
export const HOSTIan = 'http://localhost:3000/Ian'

export const TRAILS_SEASON = `${HOSTIan}/Season`
export const TRAILS_COMMENT = `${HOSTIan}/seasonComment`
export const TRAILS_DIFF = `${HOSTIan}/difficulty`
export const ShoppingCart = `${HOSTIan}/sc1`
