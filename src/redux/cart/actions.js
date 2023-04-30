import CartActionTypes from './action-types'

export const addProductToCart = payload => ({
  type: CartActionTypes.addProduct,
  payload
})

export const removeProductsFromCart = payload => ({
  type: CartActionTypes.removeProduct,
  payload
})

export const increaseProductQuantity = payload => ({
  type: CartActionTypes.increaseQuantity,
  payload
})

export const decreaseProductQuantity = payload => ({
  type: CartActionTypes.decreaseQuantity,
  payload
})
