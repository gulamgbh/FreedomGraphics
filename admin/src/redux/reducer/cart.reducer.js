import {  cartConstants } from '../action/constants'

const initialState = {
  isLoading: false,
  cart: [],
  total_items: {},
  shipping_fee:20
};
export default (state = initialState, action) => {
  switch (action.type) {
    case cartConstants.CART_ITEM_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case cartConstants.CART_ITEM_SUCCESS:
      state = {
        ...state,
        cart:[action.payload.cart],
        loading: false,
      };
      break;
    case cartConstants.CART_ITEM_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
  }
  return state
}

