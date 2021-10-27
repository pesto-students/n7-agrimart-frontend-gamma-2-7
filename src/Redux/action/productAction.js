import axios from 'axios';
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
} from "../constant/productConstant";

export const fetchProducts = (filter, filterKeyword) => async (dispatch) => {
  try {
    if (!filter.limit) {
      filter.limit = 8;
    }
    let URL = `https://agro-mart-master-mci3mdx9yjmzf.herokuapp.com/v1/products?&limit=${filter.limit}`;

    if (filter.limit > 8) {
      const getfilter = JSON.parse(localStorage.getItem('filter'));
      getfilter.limit = filter.limit;
      filter = getfilter;
    };
    if (filter.category) {
      URL = `https://agro-mart-master-mci3mdx9yjmzf.herokuapp.com/v1/products?&categories=${filter.category}&limit=${filter.limit}`
    }

    if (filter.productFor) {
      URL = `https://agro-mart-master-mci3mdx9yjmzf.herokuapp.com/v1/products?&productFor=${filter.productFor}&limit=${filter.limit}`
    }

    if (filter.productFor && filter.seller) {
      URL = `https://agro-mart-master-mci3mdx9yjmzf.herokuapp.com/v1/products?&productFor=${filter.productFor}&seller=${filter.seller}&limit=${filter.limit}`
    }

    if (filter.queryString) {
      URL = `https://agro-mart-master-mci3mdx9yjmzf.herokuapp.com/v1/products?&queryString=${filter.queryString}&limit=${filter.limit}`
    }

    localStorage.setItem('filter', JSON.stringify(filter));

    dispatch({
      type: GET_PRODUCTS_REQUEST
    })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.get(
      URL,
      config
    )
    if (filterKeyword) {
      data.filterKeyword = filterKeyword;
    }

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