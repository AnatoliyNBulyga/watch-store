import {constantCart} from '../redusers/cart';

export const addWatchToCart = (watchObj) => ({
  type: constantCart.ADD_WATCH_CART,
  payload: watchObj
})

export const clearCart = () => ({
  type: constantCart.CLEAR_CART
})

export const removeCartItem = (id) => ({
  type: constantCart.REMOVE_CART_ITEM,
  payload: id
})

export const plusItem = (id) => ({
  type: constantCart.PLUS_ITEM,
  payload: id
})

export const minusItem = (id) => ({
  type: constantCart.MINUS_ITEM,
  payload: id
})