import React from 'react'
import "./OrdersAndReturns.css"

function OrdersAndReturns() {
    return (
        <>
            <div className="container mt-5 ">
                <h1 className="text-center mb-4 fw-bold">Orders</h1>

                <div className="table-responsive rounded">
                    <table className="table orders-table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Cost</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Payment ID</th>
                            </tr>
                        </thead>

                        <tbody>
                            {[...Array(10)].map((_, index) => (
                                <tr key={index}>
                                    <td>96767</td>
                                    <td>John Doe</td>
                                    <td>9876543210</td>
                                    <td>john@gmail.com</td>
                                    <td>Rs. 199</td>
                                    <td>12/01/2025</td>
                                    <td>Pending</td>
                                    <td>PAY12345</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default OrdersAndReturns