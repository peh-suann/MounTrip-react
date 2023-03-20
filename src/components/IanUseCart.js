import {
  createContext,
  useState,
  useReducer,
  useEffect,
  useContext,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { reducer, init } from './IanCartReducer'
import useLocalStorage from './IanUselocalstorage'

const CartContext = createContext(null)

export default CartContext

export const CartContextProvider = ({
  children,
  initialCartItems = [],
  localStorageKey = 'cart',
}) => {
  let items = initialCartItems
  const navigate = useNavigate()
  // 預設為未登入狀態

  if (!items.length) {
    try {
      const item = window.localStorage.getItem(localStorageKey)
      items = item ? JSON.parse(item) : []
    } catch (error) {
      items = []
      console.log(error)
    }
  }
  const [state, dispatch] = useReducer(reducer, items, init)

  const [storedValue, setValue] = useLocalStorage(localStorageKey, items)

  useEffect(() => {
    if (JSON.stringify(state.items) !== storedValue) {
      setValue(state.items)
    }
  }, [state])

  const addItem = (item) => {
    console.log(item)
    dispatch({
      type: 'ADD_ITEM',
      payload: item,
    })
  }

  const removeItem = (id) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: {
        id,
      },
    })
  }

  const updateItem = (item) => {
    dispatch({
      type: 'UPDATE_ITEM',
      payload: item,
    })
  }

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    })
  }

  const isInCart = (id) => {
    return state.items.some((item) => item.id === id)
  }

  const plusOne = (id) => {
    console.log('dispatch', id)
    return dispatch({
      type: 'PLUS_ONE',
      payload: {
        id,
      },
    })
  }

  const minusOne = (id) => {
    return dispatch({
      type: 'MINUS_ONE',
      payload: {
        id,
      },
    })
  }

  return (
    <CartContext.Provider
      value={{
        cart: state,
        items: state.items,
        addItem,
        removeItem,
        updateItem,
        clearCart,
        isInCart,
        plusOne,
        minusOne,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
