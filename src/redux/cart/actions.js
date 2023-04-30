import CartActionTypes from './action-types'

export const addProductToCart = payload => ({
  type: CartActionTypes.addProduct,
  payload
})
