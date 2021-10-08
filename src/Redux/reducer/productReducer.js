import { 
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
 } from "../constant/productConstant";
 const initialState = {
    products: [],
    filterKeyword:null,
    page: 0,
    limit: 0,
    totalPages: 0,
    totalResults: 0,
    loading:null,
    error:null
}
export const fetchProudctReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return { ...state, loading: true }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading:false,
                products: [...action.payload.results],
                page: action.payload.page,
                limit: action.payload.limit,
                totalPages: action.payload.totalPages,
                totalResults: action.payload.totalResults,
                filterKeyword:action.payload.filterKeyword
            }
        case GET_PRODUCTS_FAIL:
            return { ...state,loading:false, error: action.payload }
        default:
            return state
    }
} 