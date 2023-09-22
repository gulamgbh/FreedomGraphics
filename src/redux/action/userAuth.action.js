import axios from "../helper/axios";
import { authConstants, cartConstants } from "./constants";

// ----------------Create User-------------------
export const registerUser = (adminData) => {
  const { email, password, confirm_pwd, contact_number, first_name, last_name } = adminData
  return async (dispatch) => {
    dispatch({
      type: authConstants.REGISTER_REQUEST
    });
    await axios.post(`/signup`, {
      email, password, confirm_pwd, contact_number, first_name, last_name
    }).then(function (response) {
      dispatch({
        type: authConstants.REGISTER_SUCCESS,
        payload: {
          message: response.data.message
        }
      })
    }).catch(function (error) {
      dispatch({
        type: authConstants.REGISTER_FAILURE,
        payload: {
          error: error.response.data.errors,
        }
      })
    });
  }
}

// --------------User login------------------------
export const userLogin = (user_Login_Data) => {
  let { email, password } = user_Login_Data
  return async (dispatch) => {
    dispatch({
      type: authConstants.LOGIN_REQUEST
    });
    await axios.post(`/signin`, { email, password }).then(function (response) {
      const token = response.data.token;
      const user = response.data.data;
      localStorage.setItem('user_token', token);
      localStorage.setItem('user_info', JSON.stringify(user));
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

// ----------User Login or not
export const isUserLoggedIn = () => {
  return async dispatch => {
    const token = localStorage.getItem('user_token');
    if (token) {
      const user = JSON.parse(localStorage.getItem('user_info'));
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


export const signout = () => {
  return async dispatch => {
    dispatch({
      type: authConstants.LOGOUT_REQUEST
    });
    // const token = localStorage.getItem('guest_token');
    // const logoutRes = await fetch('/user/signout', {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Authorization": token ? `Bearer ${token}` : ''
    //   },
    // });
    // const logoutData = await logoutRes.json();
    // if (logoutRes.status === 200) {
    // localStorage.removeItem('guest_user');
    // localStorage.removeItem('guest_token');
    localStorage.clear()
    dispatch({
      type: authConstants.LOGOUT_SUCCESS,
      payload: {
        message: 'Logout Successfully...'
      }
    });
    dispatch({
      type: cartConstants.RESET_CART_SUCCESS,
    });
    // } else {
    //   dispatch({
    //     type: authConstants.LOGOUT_FAILURE,
    //     payload: {
    //       error: logoutData.data.error
    //     }
    //   });
    // }

  }
}