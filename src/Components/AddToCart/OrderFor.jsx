import React from 'react'
import './OrderFor.css'

const OrderFor = () => {
    return (
        <>
            <div className="container py-4  mt-4 rounded">
                <h2 className="heading">Order For</h2>

                <div className="row mt-4">
                    {/* LEFT SIDE — FORM */}
                    <div className="col-md-6">

                        <div className="row mb-4">
                            <div className="col-md-6">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" />
                            </div>
                        </div>

                        <div className="row mb-5">
                            <div className="col-md-6">
                                <label className="form-label">Phone</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Address</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>

                        <div className="mt-4 d-flex gap-3">
                            <button className="btn edit-btn px-4">Edit Items</button>
                            <button className="btn order-btn px-4">Place Order</button>
                        </div>
                    </div>

                    {/* RIGHT SIDE — PRODUCT CARD */}
                    <div className="col-md-6">
                        <div className="product-box mb-4 d-flex align-items-center gap-3 p-3">
                            <img
                                src="https://i.ibb.co/gvs5j37/Redmi-A1-blue.jpg"
                                alt="Redmi A1"
                                style={{ width: "120px", borderRadius: "10px" }}
                            />
                            <div>
                                <h3 className="m-0">Redmi A1</h3>
                                <p className="fs-4 m-0">Rs. 5699</p>
                            </div>
                        </div>

                        {/* TOTAL PRICE */}
                        <h2 className="fw-bold">Total price is Rs. 5,699</h2>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OrderFor