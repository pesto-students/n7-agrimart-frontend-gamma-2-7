import React, { useEffect } from "react";
import Product from '../Components/Product'
import { useDispatch } from 'react-redux'

import FilterCategories from "../Components/filterCategories";
import { fetchProducts } from '../Redux/action/productAction'
import { fetchCategories } from '../Redux/action/categoryAction'


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts({limit:8}));
    dispatch(fetchCategories());
  
  });


  return (
    <>
      <FilterCategories/>
      <Product />
    </>
  )
}

export default Home;