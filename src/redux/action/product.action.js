import { productConstants } from './constants'
import axios from "../helper/axios";

// -------------------------------------
export const getAllProduct = () => {
  return async (dispatch) => {
    dispatch({
      type: productConstants.GET_ALL_PRODUCT_REQUEST,
    });
    await axios.get("/product/get-products").then(
      function (response) {
        dispatch({
          type: productConstants.GET_ALL_PRODUCT_SUCCESS,
          payload: {
            message: response.data.message,
            findAllCat: response.data.findAllCat,
            findAllProduct: response.data.findAllProduct
          }
        })
      }).catch(function (error) {
        dispatch({
          type: productConstants.GET_ALL_PRODUCT_FAILURE,
          payload: {
            error: "Product is not found!",
          }
        })
      })
  };
}

//-------------------------------------
export const getProductDetailsById = (payload) => {
  const { productId } = payload.params
  return async (dispatch) => {
    dispatch({
      type: productConstants.GET_PRODUCT_DETAIL_BY_ID_REQUEST
    });
    await axios.post(`/product/get-product-by-id`, {
      productId
    }).then((response) => {
      dispatch({
        type: productConstants.GET_PRODUCT_DETAIL_BY_ID_SUCCESS,
        payload: {
          productDetails: response.data.product,
          message: response.data.message
        }
      });
    }).catch((error) => {
      dispatch({
        type: productConstants.GET_PRODUCT_DETAIL_BY_ID_FAILURE,
        payload: {
          error: "Technical error",
        },
      });
    })

  };
};
