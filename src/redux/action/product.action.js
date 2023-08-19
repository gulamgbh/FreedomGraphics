import { productConstants } from './constants'
import axios from 'axios';

export const getProductDetailsById = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: productConstants.GET_PRODUCT_DETAIL_BY_ID_REQUEST
    });
    const productByIdRes = await axios.get(`http://localhost:8000/api/product/${payload.params.productId}`);
    if (productByIdRes.status === 200) {
      dispatch({
        type: productConstants.GET_PRODUCT_DETAIL_BY_ID_SUCCESS,
        payload: {
          productDetails: productByIdRes.data.product
        }
      });
      // dispatch(getProducts());
    } else {
      dispatch({
        type: productConstants.GET_PRODUCT_DETAIL_BY_ID_FAILURE,
        payload: {
          error: "Api error",
        },
      });
    }
  };
};

// -------------------------------------
export const getAllProduct = () => {
  return async (dispatch) => {
    dispatch({
      type: productConstants.GET_ALL_PRODUCT_REQUEST,
    });
    const productRes = await axios.get("http://localhost:8000/api/getAllProducts");
    if (productRes.status === 200) {
      dispatch({
        type: productConstants.GET_ALL_PRODUCT_SUCCESS,
        payload: productRes.data.getAllPro
      })
    } else {
      dispatch({
        type: productConstants.GET_ALL_PRODUCT_FAILURE,
        payload: {
          message: "Api error",
        }
      })
    }
  };
}


