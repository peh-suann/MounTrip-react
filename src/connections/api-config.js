//node的路徑port
// export const HOST = 'http://localhost:3000'

// export const LIST_DATA = `${HOST}/member`
// export const HOST = 'http://localhost:3001'

//Lai's connect
// export const HOST = 'http://192.168.71.105:3001'
export const HOST = 'http://127.0.0.1:3001'

export const TRAILS_DATA = `${HOST}/trails?`

export const RATING_DATA = `${HOST}/trails/rating`

export const TRAILS_BATCH_DATA = `${HOST}/trails-batch`

// export const LIST_DATA = `${HOST}/member`

//教室電腦的連線
// export const HOST = '192.168.21.84:3000'

// export const LIST_DATA = `${HOST}/member`
// yichun's connect
// export const HOST = 'http://192.168.71.118:3000'
// export const HOST = 'http://192.168.71.105:3001'

//member
export const MEMBER_DATA = `${HOST}/member/api`
export const USER_DATA = (mid) => `${HOST}/member/me/${mid}`
export const USER_COMMENT = (mid) => `${HOST}/member/me/comment/${mid}`

export const ALL_PRODUCTS = `${HOST}/products`
export const POP_PRODUCTS = `${HOST}/products_popular`
export const HOTSPRING_PRODUCTS = `${HOST}/products_hotspring`
export const TEST_QUES = `${HOST}/test`
export const TEST_ANS = `${HOST}/answer`
export const LOGIN = `${HOST}/login`

export const HOSTIan = 'http://localhost:3000/Ian'

export const TRAILS_SEASON = `${HOSTIan}/Season`
export const TRAILS_COMMENT = `${HOSTIan}/seasonComment`
export const TRAILS_DIFF = `${HOSTIan}/difficulty`
export const ShoppingCart = `${HOSTIan}/sc1`
