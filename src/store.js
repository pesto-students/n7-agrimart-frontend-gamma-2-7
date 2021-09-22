import {createStore} from "redux";
import wishlistReducer from "./Redux/reducer/wishlistReducer";



const store= createStore(wishlistReducer);



export default store;