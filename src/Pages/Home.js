import React, { useEffect } from 'react'
import Product from '../Components/Product'
import ProductCarousel from '../Components/ProductCarousel'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../Redux/action/productAction'

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
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