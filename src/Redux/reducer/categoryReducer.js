import { 
    GET_CATEGORIES_REQUEST,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,
 } from "../constant/categoryConstant";


export const fetchCategoryReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_CATEGORIES_REQUEST:
            return {...state}
        case GET_CATEGORIES_SUCCESS:
            return { items: action.payload }
        case GET_CATEGORIES_FAIL:
            return { error: action.payload }
        default:
            return state
    }
} 