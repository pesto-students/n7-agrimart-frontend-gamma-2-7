import { 
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
 } from "../constant/productConstant";


export const fetchProudctReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return { loading: true }
        case GET_PRODUCTS_SUCCESS:
            return { loading: false, product: action.payload }
        case GET_PRODUCTS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
} 