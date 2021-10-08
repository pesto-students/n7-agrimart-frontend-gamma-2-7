
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {wishlistReducer} from "./Redux/reducer/wishlistReducer";
import {userLoginReducer,userRegisterReducer,} from './Redux/reducer/UserReducer'
import {fetchProudctReducer} from './Redux/reducer/productReducer';
import {fetchCategoryReducer} from './Redux/reducer/categoryReducer';


const reducer = combineReducers({
    userLogin: userLoginReducer,
    items:wishlistReducer,
    userRegister: userRegisterReducer,
    product:fetchProudctReducer,
    category:fetchCategoryReducer
})
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null
const initialState = {  
    userLogin: { userInfo: userInfoFromStorage }
}
const middleware = [thunk]
const store= createStore(reducer,initialState,(applyMiddleware(...middleware)));



export default store;