import axios from "axios";
import { authConstants } from "./constants";

// Admin login
export const adminLogin = (admin_Login_Data) => {
  let { email, password } = admin_Login_Data
  return async (dispatch) => {
    dispatch({
      type: authConstants.LOGIN_REQUEST
    });
    await axios.post(`/admin/signin`, {
      email,
      password
    }).then(function (response) {
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
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: {
          error: error.response.data.errors,
        }
      })
    });
  }
}

//Admin Signout 
export const signout = () => {
  return async dispatch => {
    dispatch({
      type: authConstants.LOGOUT_REQUEST
    });
    const token = localStorage.getItem('admin_token');
    const logoutRes = await fetch('http://localhost:8000/api/admin/signout', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}` : ''
      },
    });
    const logoutData = await logoutRes.json();
    if (logoutRes.status === 200) {
      localStorage.removeItem('admin_user');
      localStorage.removeItem('admin_token');
      dispatch({
        type: authConstants.LOGOUT_SUCCESS,
        payload: {
          message: 'Logout Successfully...'
        }
      });
      // dispatch({
      //   type: cartConstants.RESET_CART,
      // });
    } else {
      dispatch({
        type: authConstants.LOGOUT_FAILURE,
        payload: {
          error: logoutData.data.error
        }
      });
    }
  }
}

// Checking admin login or not
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

