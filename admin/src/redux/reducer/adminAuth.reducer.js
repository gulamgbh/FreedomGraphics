import { authConstants } from '../action/constants'

const initialState = {
  token: null,
  user: {
    _id: '',
    firstname: '',
    lastname: '',
    email: '',
    avtar: '',
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: ''
};
const AAR = (state = initialState, action) => {
  switch (action.type) {
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
        authenticate: false,
        authenticating: true
      }
      break;
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
        loading: true
      }
      break;
    case authConstants.LOGOUT_SUCCESS:
      state = {
        ...initialState,
      }
      break;
    case authConstants.LOGOUT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false
      }
      break;
    default: state = {
      ...state,
    }
  }
  return state
}

export default AAR;
