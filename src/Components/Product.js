import React from "react";
import {useSelector } from "react-redux";
import ProductItem from "./productItem";
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../Redux/action/productAction';
import Loader from './Loader';

const Product =() =>{
    const dispatch = useDispatch();
    const productState = useSelector((state) => state.product);
    return (
        <>
        {/* product listing */}
        {productState.loading && <Loader />}
      <section className="product-section">
        <div className="container-fluid">
          <p className="layout-header">{productState.filterKeyword ? productState.filterKeyword : 'Featured Products'}</p>
          <div className="container-fluid bg-trasparent " style={{ position: 'relative' }}>
            <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-3">
              {
                productState && productState.products.map((product) => {
                 return (<ProductItem
                        key={product.id}
                        id={product.id}
                        img={product.images[0]}
                        title={product.title}
                        price={product.price}
                        venderName={product && product.productOwner.userType === 'FARMER' ? 'FARMER' : product.productOwner.name}
                        venderAddress={product.productOwner.address.city}
                        venderPhoneNumber={product.productOwner.phones[0]}
                    />)
                })
              }
            </div>
          </div>
          <div className="d-flex justify-content-end pt-2">
            <p className="view-more" onClick={()=>dispatch(fetchProducts({limit:productState.limit+8}))}><i className="fa fa-chevron-circle-down"/> View More Products</p>
          </div>
        </div>
      </section>
        </>
    ) 
}


export default Product;

