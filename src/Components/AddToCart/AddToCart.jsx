import React, { useEffect, useState } from 'react'
import './AddToCart.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const getItems_in_cartURL = "https://amazonclone-loginapi.onrender.com/api/auth/cart-items";// to get the items asper user what they have selected previously

const UQ_url = "https://amazonclone-loginapi.onrender.com/api/auth/updateQuantity";
// const UQ_url = "http://localhost:9091/api/auth/updateQuantity";
const Delete_url = "https://amazonclone-loginapi.onrender.com/api/auth/removeItems";

const AddToCart = () => {

    const [data,setData]= useState([]);
    const [updatedQuantityCount,setUpdatedQuantityCount] = useState();
    const [noOfItems,setNoOfItems]=useState();
    const [sumOfItems,setSumOfItems]=useState();

    const fetchData = async() =>{
        try {
            const res = await axios.get(`${getItems_in_cartURL}/${sessionStorage.getItem("userInfo")}`);
            const cartItems = await res.data.data;
            setData(cartItems);
            console.log("fetch cart data test",cartItems);
            let countItems = cartItems.length;
            sessionStorage.setItem("countItems",countItems);
            console.log("countItems",countItems);
            setNoOfItems(countItems);
            let prizeOfItems = cartItems.reduce((acc,items) => acc + items.Price,0)
            prizeOfItems = prizeOfItems.toLocaleString('en-IN');
            setSumOfItems(prizeOfItems);
            console.log("prizeOfItems",prizeOfItems);    
        } catch (error) {
            console.error('Error fetching category data',error);            
        }
    }

    const handleIncreaseQuantity= async(productId,Quantity) => {
        try {
            const updatedQuantity = Quantity+1;
            await axios.put(`${UQ_url}/${sessionStorage.getItem("userInfo")}`,{"Quantity":updatedQuantity,"productId":productId});
            setUpdatedQuantityCount(updatedQuantity);
            console.log("Quantity increased Successfully");
        } catch (error) {
            console.error("error while in adding quantity",error);
                        
        }
    }

    const handleDecreaseQuantity = async(productId,Quantity) => {
        try {
            if(Quantity===1){
                handleDelete(productId);
            }
            else{
                const updatedQuantity = Quantity-1;
                await axios.put(`${UQ_url}/${sessionStorage.getItem("userInfo")}`,{"Quantity":updatedQuantity,"productId":productId});
                setUpdatedQuantityCount(updatedQuantity);
                console.log("Quantity decreased Successfully ");   
            }
        } catch (error) {
            console.error("error while in adding quantity",error);
        }
    }

    const handleDelete = async(productId) => {
        try {
            let res = await axios.delete(`${Delete_url}/${productId}`);
            let res1 = await res.data;
            console.log(productId,res1);
            setUpdatedQuantityCount(productId);
        } catch (error) {
            console.error("error whiele removing the items from cart");
        }
    }

    useEffect(()=>{
        fetchData();
    },[updatedQuantityCount])

    const renderData = (data) =>{
        if(data){
            if(data.length>0){
                return data.map((item)=>{
                    return(
                        <>
                            <div className="cart-item d-flex">
                                <div className="me-3">
                                    <input
                                        type="checkbox"
                                        defaultChecked=""
                                        className="form-check-input mb-3"
                                    />
                                    <img
                                        src={`${item.Image}`}
                                        className="item-img"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <h5>{item.product_name}</h5>
                                    <span className="badge bg-warning text-dark">#1 Best Seller</span>
                                    <p className="text-success mt-1">In stock</p>
                                    <p className="text-muted small mb-1">Sold by Nehal Trading Company</p>
                                    <p className="small">
                                        FREE delivery <strong>Sat, 22 Nov</strong>
                                    </p>
                                    {/* Quantity */}
                                    <div className="d-flex align-items-center my-2">
                                        <div className="qty-btn" onClick={() => handleDecreaseQuantity(item.productId,item.Quantity)}>−</div>
                                        <div className="mx-3">{item.Quantity}</div>
                                        <div className="qty-btn" onClick={() => handleIncreaseQuantity(item.productId,item.Quantity)}>+</div>
                                    </div>
                                    {/* Actions */}
                                    <span className="delete-text" onClick={() => handleDelete(item.productId)}>Delete</span>
                                    <span className="save-text">Save for later</span>
                                    <span className="more-text">See more like this</span>
                                    <span className="more-text">Share</span>
                                </div>
                                <div className="text-end fw-bold fs-5">₹{item.Price.toLocaleString('en-IN')}</div>
                            </div>
                        </>
                    )
                })
            }
        }
    } 


    return (
        <>
            <div className="container-fluid py-4">
                <div className="row">
                    {/* LEFT SIDE CART ITEMS */}
                    <div className="col-lg-8">
                        <div className='Left-card'>
                            <h2 className="mb-3">Shopping Cart</h2>
                            {renderData(data)}
                        </div>
                    </div>
                    {/* RIGHT SIDE SUMMARY */}
                    <div className="col-lg-4">
                        <div className="right-card">
                            <div className="mb-2">
                                <input type="checkbox" className="form-check-input" />
                                <span className="ms-2">This order contains a gift</span>
                            </div>
                            <h5 className="fw-bold mt-3">Subtotal ({noOfItems} items): ₹{sumOfItems}</h5>
                            <Link to="/order_for" className='no-link-style'>
                                <button className="btn proceed-btn w-100 mt-3">Proceed to Buy</button>
                            </Link>
                            <div className="text-center mt-3">
                                <button
                                    className="btn btn-outline-secondary w-100"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#emi"
                                >
                                    EMI Available
                                </button>
                                <div id="email" className="collapse mt-2">
                                    <p className="small">EMI options will be displayed at checkout.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddToCart