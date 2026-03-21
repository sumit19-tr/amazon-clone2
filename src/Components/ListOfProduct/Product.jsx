import React, { useEffect, useState } from 'react'
import BrandFilter from '../Filters/BrandFilter'
import { useParams } from 'react-router-dom';
import './Product.css';
import ProductList from './ProductList';
import Footer from '../Footer/Footer';

const curl = "https://amazon-clone-restapi.onrender.com/catagory";//list of category wrt id

const furl = "https://amazon-clone-restapi.onrender.com/filter";

const Product = () => {

    const [brandList, setBrandList] = useState([]);
    const [productList,setProductList] = useState([]);
    const {category_id} = useParams();

    const fetchBrandData =async ()=>{
        try {
            const res = await fetch(`${curl}/${category_id}`,{method:'GET'})
            const data = await res.json();
            setBrandList(data);
        } catch (error) {
            console.log("Error Fetching Brand",error);            
        }
    }

    const fetchProducts_data_On_Fist_render =async ()=>{
        try {
            const res = await fetch(`${furl}/${category_id}`,{method:'GET'})
            const data = await res.json();
            setProductList(data);
        } catch (error) {
            console.log("Error Fetching Brand",error);            
        }
    }

    const setDatawrtFilter = (data) =>{
        setProductList(data);
    }
    console.log("category_id test",category_id);
    
    useEffect(()=>{
        fetchBrandData();
        fetchProducts_data_On_Fist_render();
        
    },[category_id])

  return (
    <>
        <div className="container-fluid mt-1">
                <div className="row">
                    {/* LEFT FILTER SECTION */}
                    <aside className="col-12 col-md-3 col-lg-2 filter-sidebar">
                            <BrandFilter category_id={category_id} brandList={brandList} ListProductWrtBrand={(data)=>setDatawrtFilter(data)}/>
                        <ul className="filter-block">
                            <h5>Ratings</h5>
                            <li><label>
                                <input type="checkbox" /> ★★★★☆ &amp; above
                            </label></li>
                            <li><label>
                                <input type="checkbox" /> ★★★☆☆ &amp; above
                            </label></li>
                            <li><label>
                                <input type="checkbox" /> ★★☆☆☆ &amp; above
                            </label></li>
                        </ul>
                        <ul className="filter-block">
                            <h5>Discounts</h5>
                            <li><label>
                                <input type="checkbox" /> 10% off or more
                            </label></li>
                            <li><label>
                                <input type="checkbox" /> 25% off or more   
                            </label></li>
                            <li><label>
                                <input type="checkbox" /> 50% off or more   
                            </label></li>
                        </ul>
                        <ul className="filter-block">
                            <h5>Price</h5>
                            <li><label>
                                <input type="checkbox" /> Under ₹1,000    
                            </label></li>
                            <li><label>
                                <input type="checkbox" /> ₹1,000 – ₹5,000   
                            </label></li>
                            <li><label>
                                <input type="checkbox" /> ₹5,000 – ₹10,000  
                            </label></li>
                            <li><label>
                                <input type="checkbox" /> ₹10,000 &amp; above   
                            </label></li>
                        </ul>
                    </aside>
                    {/* RIGHT PRODUCT GRID */}
                    <main className="col-12 col-md-9 col-lg-10">
                        <ProductList productList={productList}/>
                    </main>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default Product