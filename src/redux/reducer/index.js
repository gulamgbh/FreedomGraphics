import {combineReducers} from 'redux'

import productReducer from './product.reducer'
import cartReducer from './cart.reducer'
// import addressReducer from './address.reducer'
// import orderReducer from './order.reducer'
// import fpReducer from './forgotPassword.reducer'
// import userAuthReducer from './auth.reducer'
// import categoryReducer from './category.reducer'

const rootReducer = combineReducers({
    product : productReducer,
    // userAuth : userAuthReducer,
    // category : categoryReducer,
    
    cart : cartReducer,
    // address : addressReducer,
    // order : orderReducer,
    // forgotpassword : fpReducer,
})
export default rootReducer