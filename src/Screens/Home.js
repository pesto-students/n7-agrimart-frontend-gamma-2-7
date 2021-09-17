import React from 'react';
import Product from '../Components/Product'
import ProductCarousel from '../Components/ProductCarousel'


const Home = () => {

  return (
    <>
        <ProductCarousel />
      <h1>Latest Products</h1>
        <>
         <Product/>
        </>
    </>
  )
}

export default Home;