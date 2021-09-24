import axios from 'axios';
import { 
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
} from "../constant/productConstant";

export const fetchProducts = () => async (dispatch) => {
try{
    dispatch({
        type:GET_PRODUCTS_REQUEST
    })
    const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.get(
        `http://localhost:3001/v1/products`,
        config
      ) 
      console.log(data, 'data from api');
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: data,
      })
}
catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
}
}