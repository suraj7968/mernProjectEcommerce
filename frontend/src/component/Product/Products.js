import React, { Fragment, useEffect, useState } from 'react';
import "./Products.css";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import ProductCard from '../Home/ProductCard';
import { useParams } from "react-router-dom"; // Import useParams hook
import Pagination from "react-js-pagination";

const Products = () => {
    const { keyword } = useParams();
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const setCurrentPageNo = (e)=>{
        setCurrentPage(e);
    }
    const {products,loading,error,ProductsCount, resultPerPage} = useSelector(state=> state.products)
    useEffect(() => {
      dispatch(getProduct(keyword));
    }, [dispatch,keyword])
    
  return (
    <Fragment>
        {loading? <Loader/> : <Fragment> 
        <h2 className="productsHeading">Products</h2>
        <div className="products">
            {products && 
            products.map((product)=>(
                <ProductCard key={product._id} product={product} />
            ))
            }
        </div>
        <div className="paginationBox">
            <Pagination
            activePage={currentPage}
            itemsCountPerPage={resultPerPage}
            totalItemsCount={ProductsCount}
            onChange={setCurrentPageNo}
            nextPageText="Next"
            prevPageText="Prev"
            firstPageText="1st"
            lastPageText="Last"
            itemClass="page-item"
            linkClass="page-link"
            activeClass="pageItemActive"
            activeLinkClass="pageLinkActive"
            />
        </div>
        </Fragment>}
    </Fragment>
  )
}

export default Products