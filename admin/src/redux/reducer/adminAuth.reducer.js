import { authConstants } from '../action/constants'

const initialState = {
  token: null,
  user: {
    _id: '',
    firstname: '',
    lastname: '',
    email: '',
  },
  newuser: {
    error: null,
    message: ''
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case authConstants.REGISTER_FAILURE:
      state = {
        ...state,
      }
      break;
    case authConstants.REGISTER_SUCCESS:
      state = {
        ...state,
        user: {message:action.payload.message}
      }
      break;
    case authConstants.REGISTER_FAILURE:
      state = {
        ...state,
        user: {error:action.payload.error}
      }
      break;
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true
      }
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
        message: action.payload.message
      }
      break;
    case authConstants.LOGIN_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        message: action.payload.message,
        authenticate: false,
        authenticating: true
      }
      break;
    // case authConstants.LOGOUT_REQUEST:
    //   state = {
    //     ...state,
    //     loading: true
    //   }
    //   break;
    // case authConstants.LOGOUT_SUCCESS:
    //   state = {
    //     ...initialState,
    //   }
    //   break;
    // case authConstants.LOGOUT_FAILURE:
    //   state = {
    //     ...state,
    //     error: action.payload.error,
    //     loading: false
    //   }
    //   break;
  }
  return state
}


