import axios from 'axios';
import { 
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
} from "../constant/categoryConstant";

export const fetchCategories = () => async (dispatch) => {
try{
    dispatch({
        type:GET_CATEGORIES_REQUEST
    })
    const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.get(
        `https://agro-mart-master-mci3mdx9yjmzf.herokuapp.com/v1/categories`,
        config
      ) 
      console.log(data, 'categories from api');
      dispatch({
        type: GET_CATEGORIES_SUCCESS,
        payload: data,
      })
}
catch (error) {
    dispatch({
      type: GET_CATEGORIES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
}
}