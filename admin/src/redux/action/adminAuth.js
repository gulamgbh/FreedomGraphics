import axios from "axios";
import { authConstants } from "./constants";
// const instance = axios.create();

// Create Admin user
export const registerAdminUser = (adminData) => {
  let { email, first_name, last_name, role, _password } = adminData
  return async (dispatch) => {
    dispatch({
      type: authConstants.REGISTER_REQUEST
    });
    await axios.post(`/admin/create-user`, {
      email,
      _password,
      first_name,
      last_name,
      role
    }).then(function (response) {
      dispatch({
        type: authConstants.REGISTER_SUCCESS,
        payload: {
          message: response.data.message
        }
      })
    }).catch(function (error) {
      console.log(error);

      dispatch({
        type: authConstants.REGISTER_FAILURE,
        payload: {
          errors: error.response.data.errors,
        }
      })
    });
  }
}


// Admin login
export const adminLogin = (admin_Login_Data) => {
  let { email, _password } = admin_Login_Data
  return async (dispatch) => {
    dispatch({
      type: authConstants.LOGIN_REQUEST
    });
    const authRes = await axios.post(`/admin/signin`, {
      email,
      _password
    }).then(function (response) {
      console.log("res",response);
      const token = response.data.token;
      const user = response.data.data;
      localStorage.setItem('admin_token', token);
      localStorage.setItem('admin_user', JSON.stringify(user));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
          message: response.data.message
        }
      })
    }).catch(function (error) {
      console.log("err",error);

      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: {
          message: error.response.data.errors,
          error: error.response.data.message
        }
      })
    });
  }
}


// this code solve this issue
export const isUserLoggedIn = () => {
  return async dispatch => {
    const token = localStorage.getItem('admin_token');
    if (token) {
      const user = JSON.parse(localStorage.getItem('admin_user'));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user
        }
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: {
          message: 'Failed to login!!!'
        }
      })
    }
  }
}