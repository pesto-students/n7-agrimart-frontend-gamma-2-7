import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'

import FilterItem from '../Components/FilterItems'
import rent from '../assests/filter-1-rent.jpg'
import buyForFarming from '../assests/filter-2-buy for farming.jpg'
import buyFromFarmer from '../assests/filter-3-buy-from-farmer.png'
import addProduct from '../assests/filter-4- add-product-.png'
import { fetchProducts } from '../Redux/action/productAction'
import { useDispatch } from 'react-redux'

export default function FilterCategories() {
    const dispatch = useDispatch();

 const [filter,setFilter] = useState({productFor:null, seller:null});

 const categories = useSelector((state) => state.category.items);
 const [filterCategories,setFilterCategories] = useState();


    useEffect(() => {
        categories &&
        setFilterCategories(categories.filter((item) => {
            if (!filter.seller) {
                return item.productFor === filter.productFor;
            }
            return item.productFor === filter.productFor && item.seller === filter.seller;
        }))
    }, [dispatch,categories, filter.seller, filter.productFor])

    return (
        <div>
         {
                <section className="category-section">
                    <div className="container">
                        {/* <h2 className="layout-header">Explore Popular Categories</h2> */}
                        <ol className="list-group list-group-flush">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-1">
                                <input
                                    type="radio" name="main-category"
                                    id="rent" className="input-hidden"
                                    onClick={() => {
                                      setFilter({ productFor: 'RENT' })
                                      dispatch(fetchProducts({productFor: 'RENT'},'Product on Rent'));
                                    }
                                    }
                                     />
                                <label htmlFor="rent">
                                <FilterItem img={rent} filterTitle='Get product on rent for farming' />
                                </label>

                                <input
                                    type="radio" name="main-category"
                                    id="sell-by-company" className="input-hidden"
                                    onClick={(e) => {
                                    setFilter({ productFor: 'SELL', seller: 'COMPANY' });
                                    dispatch(fetchProducts({productFor: 'SELL', seller: 'COMPANY'}, 'Product for Farming'));
                                    }
                                }
                                     />
                                <label htmlFor="sell-by-company">
                                <FilterItem id="companySell" img={buyForFarming} filterTitle='Buy  product for farming' />
                                </label>

                                <input
                                    type="radio" name="main-category"
                                    id="sell-by-farmer" className="input-hidden"
                                    onClick={() => {
                                    setFilter({ productFor: 'SELL', seller: 'FARMER' })
                                    dispatch(fetchProducts({productFor: 'SELL', seller: 'FARMER'}, 'Product sell by Farmer'));
                                    }
                                    }
                                     />
                                <label htmlFor="sell-by-farmer">
                                <FilterItem id="farmerSell" img={buyFromFarmer} filterTitle='Buy  product from farmer' />
                                </label>

                                {/* <input
                                    type="radio" name="main-category"
                                    id="add-product" class="input-hidden"
                                     />
                                <label for="add-product">
                                <FilterItem img={addProduct} filterTitle='Add your products to Sell / Rent ' />
                                </label> */}

                                {/* <div onClick={() => {
                                      activeHanldel();
                                      setFilter({ productFor: 'RENT' })
                                      dispatch(fetchProducts({productFor: 'RENT'}));
                                    }
                                    }>
                                    <FilterItem img={rent} filterTitle='Get product on rent for farming' />
                                </div> */}
                                {/* <div onClick={(e) => {
                                    setFilter({ productFor: 'SELL', seller: 'COMPANY' });
                                    dispatch(fetchProducts({productFor: 'SELL', seller: 'COMPANY'}));
                                    }
                                }>
                                    <FilterItem id="companySell" img={buyForFarming} filterTitle='Buy  product for farming' />
                                </div> */}
                                {/* <div onClick={() => {
                                    setFilter({ productFor: 'SELL', seller: 'FARMER' })
                                    dispatch(fetchProducts({productFor: 'SELL', seller: 'FARMER'}));
                                    }
                                    }>
                                    <FilterItem id="farmerSell" img={buyFromFarmer} filterTitle='Buy  product from farmer' />
                                </div> */}
                                <div >
                                    <FilterItem img={addProduct} filterTitle='Add your products to Sell / Rent ' />
                                </div>
                            </div>
                        </ol>
                    </div>
                </section>
            }
            <section className="filter-category-section">
                <div className="container">
                    <ol className="list-group list-group-flush">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-1">
                            {
                                filterCategories && filterCategories.map(category => (
                                    <div key={category.id} className="col allign-middle">
                                        <input
                                            type="radio" name="sub-category"
                                            id={category.id} className="input-hidden"
                                        />
                                        <label htmlFor={category.id} className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="content-category d-flex m-auto" onClick={() => dispatch(fetchProducts({ limit: 8, category: category.id }, `Results for ${category.name} Category`))}>
                                                <img className="img-fluid  img-fluid" style={{ width: 50, height: 30 }} src={category.icon} alt="category icon" />
                                                <div className="category-title">{category.name}</div>
                                            </div>
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                    </ol>
                </div>
            </section>
        </div>
    )
}
