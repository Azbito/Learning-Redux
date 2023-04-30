import CartActionTypes from './action-types'

const initialState = {
  products: [],
  productsTotalPrice: 0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.addProduct:
      // verify if the product is already in the cart
      const isProductAlreadyInCart = state.products.some(
        product => product.id === action.payload.id
      )
      // if it is, increase its quantity by one
      if (isProductAlreadyInCart) {
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.payload.id
              ? {
                  ...product,
                  quantity: product.quantity + 1
                }
              : product
          )
        }
      }
      // else, add it
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }]
      }

    default:
      return state
  }
}

export default cartReducer
