import React, { useEffect } from 'react'
import Product from '../Components/Product'
import ProductCarousel from '../Components/ProductCarousel'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../Redux/action/productAction'
import { fetchCategories } from '../Redux/action/categoryAction'

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  })
  return (
    <>
        <ProductCarousel />
        <>
         <Product/>
        </>
    </>
  )
}

export default Home;