import { categoryConstants } from './constants'
import axios from "../../helper/axios";


// ---------------Find All Category----------------
export const getAllCategories = (user) => {
  return async (dispatch) => {
    dispatch({
      type: categoryConstants.GET_ALL_CATEGORY_REQUEST,
    });
    await axios.get('/category/get-category').then(function (response) {
      dispatch({
        type: categoryConstants.GET_ALL_CATEGORY_SUCCESS,
        payload: {
          message: response.data.message,
          categories: response.data.categoryList
        }
      })
    }).catch(function (error) {
      dispatch({
        type: categoryConstants.GET_ALL_CATEGORY_FAILURE,
        payload: {
          error: "Data not found!",
        }
      })
    })
  }
}

// ---------------Add New Category----------------
export const addCategory = (formData) => {
  return async (dispatch) => {
    dispatch({
      type: categoryConstants.ADD_CATEGORY_REQUEST
    });
    await axios.post('/category/create-category',formData
    ).then(function (response) {
      dispatch({
        type: categoryConstants.ADD_CATEGORY_SUCCESS,
        payload: {
          message: response.data.message,
          category: response.data.category,
        }
      })
    }).catch(function (error) {
      dispatch({
        type: categoryConstants.ADD_CATEGORY_FAILURE,
        payload: {
          message: error.message,
        }
      })
    })
  }
}


// export const updatetdCategory = (formData) => {
//   return async (dispatch) => {
//     const token = localStorage.getItem('admin_token');
//     dispatch({
//       type: categoryConstants.UPDATE_CATEGORY_REQUEST
//     });
//     const categoryUpdateRes = await fetch('/admin/category/updatecategory', {
//       method: "POST",
//       headers: {
//         "Authorization": token ? `Bearer ${token}` : ''
//       },
//       body: formData,
//       ...formData
//     });
//     console.log('categoryUpdateRes', categoryUpdateRes);
//     if (categoryUpdateRes.status === 201) {
//       dispatch({
//         type: categoryConstants.UPDATE_CATEGORY_SUCCESS
//       });
//       dispatch(getAllCategories())
//     } else {
//       dispatch({
//         type: categoryConstants.UPDATE_CATEGORY_FAILURE,
//         payload: {
//           error: 'Something went wrong!!!!!',
//         }
//       });
//     }
//   }
// }


// export const deleteCategoriesByCheckedExpanded = (ids) => {
//   return async (dispatch) => {
//     dispatch({
//       type: categoryConstants.DELETE_CATEGORY_REQUEST
//     });
//     const token = localStorage.getItem('admin_token');

//     const categoryDeleteRes = await fetch('/admin/category/delete', {
//       method: "POST",
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         "Authorization": token ? `Bearer ${token}` : ''
//       },
//       body: JSON.stringify({ payload: ids })
//     });
//     if (categoryDeleteRes.status === 201) {
//       dispatch({
//         type: categoryConstants.DELETE_CATEGORY_SUCCESS
//       });
//       dispatch(getAllCategories())
//     } else {
//       dispatch({
//         type: categoryConstants.DELETE_CATEGORY_FAILURE,
//         payload: {
//           error: 'Something went wrong!!!!!',
//         }
//       });
//     }
//   }
// }