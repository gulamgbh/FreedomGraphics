import { productConstants } from '../action/constants'

const initialState = {
  products: [],
  productsByPrice: {
    under500: [],
    under5k: [],
    under10k: []
  },
  productDetails: {},
  loading: true,
  message: ''
};
export default (state = initialState, action) => {
  switch (action.type) {
    case productConstants.GET_ALL_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true
      }
      break;
    case productConstants.GET_ALL_PRODUCT_SUCCESS:
      state = {
        ...state,
        products: action.payload.findAllProduct,
        loading: false,
        message: action.payload.message
      }
      break;
    case productConstants.GET_ALL_PRODUCT_FAILURE:
      state = {
        ...initialState,
        loading: true
      }
      break;
    case productConstants.GET_PRODUCT_DETAIL_BY_ID_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productConstants.GET_PRODUCT_DETAIL_BY_ID_SUCCESS:
      state = {
        ...state,
        productDetails: action.payload.productDetails,
        message: action.payload.message,
        loading: false,
      };
      break;
    case productConstants.GET_PRODUCT_DETAIL_BY_ID_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    // case productConstants.GET_PRODUCT_BY_SLUG:
    //   state = {
    //     ...state,
    //     products: action.payload.products,
    //     productsByPrice: {
    //       ...action.payload.productsByPrice
    //     },
    //     loading: false,
    //     message: action.payload.message
    //   }
    //   break;


  }
  return state
}
