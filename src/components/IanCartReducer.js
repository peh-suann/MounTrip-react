export const initialState = {
  items: [],
  isEmpty: true,
  totalItems: 0,
  cartTotal: 0,
}

const addItem = (state, action) => {
  // console.log('addItem state:', state)
  // console.log('addItem action:', action)
  const ItemIndex = state.items.findIndex(
    (item) => item.sid === action.payload.sid
  )
  // console.log(ItemIndex)

  const payloadQuantity = action.payload.quantity

  if (ItemIndex > -1) {
    const item = state.items[ItemIndex]
    const id = item.sid
    // console.log(item.quantity)

    const quantity = payloadQuantity
      ? item.quantity + payloadQuantity
      : item.quantity + 1
    // console.log(quantity)
    const action = {
      type: 'UPDATE_ITEM',
      payload: { id, quantity },
    }
    return updateItem(state, action)
  }
  console.log('沒找到')
  console.log([...state.items, action.payload])
  return [...state.items, action.payload]
}

const removeItem = (state, action) => {
  return state.items.filter((item) => item.sid !== action.payload.id)
}

const updateItem = (state, action) => {
  // console.log('updatestate:', state)
  // console.log('updateaction:', action)

  const ItemIndex = state.items.findIndex(
    (item) => item.sid === action.payload.id
  )
  // console.log('updateItemIndex:', ItemIndex)

  if (ItemIndex > -1) {
    const newState = [...state.items]
    newState[ItemIndex] = {
      ...newState[ItemIndex],
      ...action.payload,
    }
    // console.log(newState)
    return newState
  }

  return [...state.items]
}

const plusItemQuantityOnce = (state, action) => {
  const ItemIndex = state.items.findIndex(
    (item) => item.sid === action.payload.id
  )
  console.log(ItemIndex)
  if (ItemIndex > -1) {
    const item = state.items[ItemIndex]
    const id = item.sid
    const quantity = item.quantity + 1

    const action = {
      type: 'UPDATE_ITEM',
      payload: { id, quantity },
    }
    return updateItem(state, action)
  }
  return [...state.items]
}

const minusItemQuantityOnce = (state, action) => {
  const ItemIndex = state.items.findIndex(
    (item) => item.sid === action.payload.id
  )

  if (ItemIndex > -1) {
    const item = state.items[ItemIndex]
    const id = item.id
    const quantity = item.quantity > 1 ? item.quantity - 1 : 1
    const action = {
      type: 'UPDATE_ITEM',
      payload: { id, quantity },
    }
    return updateItem(state, action)
  }

  return [...state.items]
}

const calculateItemTotals = (items) =>
  items.map((item) => ({
    ...item,
    itemTotal: item.price * item.quantity,
  }))

const calculateTotal = (items) =>
  items.reduce((total, item) => total + item.quantity * item.price, 0)

const calculateTotalItems = (items) =>
  items.reduce((sum, item) => sum + item.quantity, 0)

const generateCartState = (state, items) => {
  // console.log(state)
  // console.log(items)
  const isEmpty = items.length === 0

  return {
    ...initialState,
    ...state,
    items: calculateItemTotals(items),
    totalItems: calculateTotalItems(items),
    cartTotal: calculateTotal(items),
    isEmpty,
  }
}

export const init = (items) => {
  // console.log('init:', items)
  return generateCartState({}, items)
}

export const reducer = (state, action) => {
  // console.log('reducer')
  // console.log('state:', state)
  // console.log('action:', action)
  switch (action.type) {
    case 'ADD_ITEM':
      return generateCartState(state, addItem(state, action))
    case 'REMOVE_ITEM':
      return generateCartState(state, removeItem(state, action))
    case 'UPDATE_ITEM':
      return generateCartState(state, updateItem(state, action))
    case 'PLUS_ONE':
      return generateCartState(state, plusItemQuantityOnce(state, action))
    case 'MINUS_ONE':
      return generateCartState(state, minusItemQuantityOnce(state, action))
    case 'CLEAR_CART':
      return initialState
    default:
      throw new Error('No action specified')
  }
}
