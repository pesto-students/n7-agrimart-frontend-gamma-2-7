import React, { useEffect } from "react";
import Product from '../Components/Product'
import { useDispatch} from 'react-redux'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
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
      <Header />
      <main >
        <FilterCategories />
        <Product />
      </main>
      <Footer />
    </>
  )
}

export default Home;