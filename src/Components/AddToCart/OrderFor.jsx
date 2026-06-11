import React, { useEffect, useState } from 'react'
import './OrderFor.css'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from "react-toastify";

const paymentOrderurl = "https://razorpay-payment-integration-bx1l.onrender.com/api/payment/order";
const verifyPayurl = "https://razorpay-payment-integration-bx1l.onrender.com/api/payment/verify";

const pourl = "https://amazon-clone-restapi.onrender.com/placeOrder"

const OrderFor = () => {

    const navigate = useNavigate();

    const user_name = sessionStorage.getItem("userInfo")
    const orderId = Math.floor(Math.random() * 100000);

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const ids = params.get("id");
    const idArray = ids.split(",");
    const [updatedAmount, setUpdatedAmount] = useState();
    const [amount, setAmount] = useState();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        text: ""
    });
    console.log("idArray ", idArray.toString());


    const handleChange = (event) => {
        setFormData((prev) => ({
            ...prev, [event.target.id]: event.target.value
        }))
    }

    const fetchProductData = async () => {
        const res = await axios.get(`https://amazon-clone-restapi.onrender.com/products?product_ids=${idArray}`);
        const res1 = await res.data;
        console.log("res1", res1);

        const arrayOfAmount = res1.map((items) => items.Price)
        const totalAmount = arrayOfAmount.reduce((Acc, curr) => {
            return Acc + curr;
        }, 0)
        setUpdatedAmount(totalAmount.toLocaleString('en-IN'));
        setAmount(totalAmount)
        console.log("amount", totalAmount, typeof (totalAmount));
        console.log("arrayOfAmount", arrayOfAmount);
        console.log("totalAmount", totalAmount);
        setData(res1);
    }

    useEffect(() => {
        fetchProductData();
    }, [])

    const handlePlaceOrder = async () => {
        let obj = {
            user_name: user_name,
            orderId: orderId,
            name: formData.name,
            email: formData.email,
            cost: updatedAmount,
            phone: formData.number,
            address: formData.text,
            menuItem: idArray.toString(),
            amount: amount
        };

        console.log("obj", obj);

        try {

            const res = await axios.post(pourl, obj);
            const res1 = await res.data
            console.log("order placed");
            console.log(data);

        } catch (error) {

            console.log("Error while placing order", error);

        }
    }

    // handlePayment Function
    const handlePayment = async (amount) => {
        handlePlaceOrder();
        try {
            setLoading(true);
            const res = await fetch(paymentOrderurl, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    amount: amount
                })
            });

            const data = await res.json();
            console.log(data);
            console.log("Razorpay Order Response:", data);
            console.log("Order ID:", data.data.id);
            handlePaymentVerify(data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(true);
        }
    }

    // handlePaymentVerify Function
    const handlePaymentVerify = async (data) => {

        console.log("Received Data:", data);

        const options = {
            key: "rzp_test_fUyi5Tb1Uyx1Ro",
            amount: data.amount,
            currency: data.currency,
            name: user_name,
            description: "Test Mode",
            order_id: data.id,
            handler: async (response) => {
                //console.log("response", response)
                try {
                    const res = await fetch(verifyPayurl, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                        })
                    })

                    const verifyData = await res.json();
                    //console.log("verifyPayurl", verifyData);

                    if (verifyData.message) {
                        toast.success(verifyData.message);

                        const status = "ordered";

                        const date = new Date();
                        const formatedDate = date.toUTCString().split(' ').slice(1, 4).toString().replaceAll(',', '-');

                        // this.props.history.push(`/viewBooking?status=${status}&ORDERID=${this.state.orderId}&date=${formatedDate}&PAYMENTID=${response.razorpay_payment_id}`);
                        navigate(`/order&returns?status=${status}&ORDERID=${orderId}&date=${formatedDate}&PAYMENTID=${response.razorpay_payment_id}`);
                    }
                    else {
                        toast.error("Payment verification failed.");
                    }


                } catch (error) {
                    // //console.log(error);
                    console.error("Error during payment verification:", error);
                    toast.error("Error during payment verification.");
                }
            },
            theme: {
                color: "#5f63b8"
            }
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    }


    const renderItems = (data) => {

        if (data) {
            if (data.length > 0) {
                return data.map((item) => {
                    return (
                        <>
                            <img
                                src={item.Image}
                                alt={item.product_name}
                                style={{ width: "120px", borderRadius: "10px" }}
                            />
                            {/* <div>
                                <h3 className="m-0">{item.product_name}</h3>
                                <p className="fs-4 m-0">Rs.{item.Price}</p>
                            </div> */}
                        </>
                    )
                })
            }
        }

        return (
            <>

            </>
        )
    }

    return (
        <>
            <div className="container py-4  mt-4 rounded">
                <h2 className="heading">Order For</h2>

                <div className="row mt-4">
                    {/* LEFT SIDE — FORM */}
                    <div className="col-md-6">

                        <div className="row mb-4">
                            <div className="col-md-6">
                                <label className="form-label" required>First Name</label>
                                <input placeholder="Enter name" id='name' type="name" value={formData.name} onChange={handleChange} className="form-control" required/>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label" required>Email</label>
                                <input placeholder="Enter your email" id='email' type="email" value={formData.email} onChange={handleChange} className="form-control" required/>
                            </div>
                        </div>

                        <div className="row mb-5">
                            <div className="col-md-6">
                                <label className="form-label" required>Phone</label>
                                <input placeholder="Enter phone number" id='number' type="number" value={formData.number} onChange={handleChange} className="form-control" required/>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label" required>Address</label>
                                <input placeholder="Address" id='text' type="text" value={formData.text} onChange={handleChange} className="form-control" required />
                            </div>
                        </div>

                        <div className="mt-4 d-flex gap-3">
                            <button className="btn edit-btn px-4" style={idArray.length>1 ? {display:"flex"} : {display:"none"}} onClick={() => navigate("/add_to_cart")}> Edit Items in cart</button>
                            <button className="btn edit-btn px-4" style={idArray.length===1 ? {display:"flex"} : {display:"none"}} onClick={() => navigate(-1)}>back</button>
                            <button className="btn order-btn px-4" onClick={() => handlePayment(amount)} >{loading ?
                                (<>
                                    <span
                                    className="spinner-border spinner-border-sm me-2"
                                    role="status"
                                    aria-hidden="true"
                                > </span>please wait..        
                                </>) : "Place Order"} </button>
                        </div>
                    </div>

                    {/* RIGHT SIDE — PRODUCT CARD */}
                    <div className="col-md-6">
                        <h2 className="fw-bold">Total price is Rs.{updatedAmount} </h2>
                        <div className="product-box mb-4 d-flex align-items-center gap-3 p-3">
                            {renderItems(data)}
                        </div>
                        {/* TOTAL PRICE */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default OrderFor