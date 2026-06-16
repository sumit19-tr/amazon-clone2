import React, { useEffect, useState } from 'react'
import "./OrdersAndReturns.css"
import axios from 'axios'
import { useLocation } from 'react-router-dom';

const orderURL = `https://amazon-clone-restapi.onrender.com/viewOrders/${sessionStorage.getItem("userInfo")}`;
const updateOrderUrl = "https://amazon-clone-restapi.onrender.com/updateOrder";
//http://localhost:5173/order&returns?status=ordered&ORDERID=49323&date=2026-05-21&PAYMENTID=pay_SrxP34IWhqr4Nc

function OrdersAndReturns() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const location = useLocation();

    const fetchData = async () => {

        try {
            setLoading(true);
            if (location && location.search) {

                let query = location.search.split('&');

                console.log("query", query);


                if (query && query.length >= 4) {

                    let update_data = {
                        date: query[2].split('=')[1] || '',
                        payment_id: query[3].split('=')[1].split('_')[1] || '',
                        status: query[0].split('=')[1] || ''
                        // orderId: query[1].split('=')[1] || '',
                    }

                    console.log("status", query[0].split('=')[1] || '');
                    console.log("orderId", query[1].split('=')[1] || '');
                    console.log("date", query[2].split('=')[1] || '');
                    console.log("paymentId", query[3].split('=')[1].split('_')[1] || '');

                    const id = query[1].split('=')[1];

                    if (id) {
                        const res = await axios.put(`${updateOrderUrl}/${id}`, {
                            date: query[2].split('=')[1] || '',
                            payment_id: query[3].split('=')[1].split('_')[1] || '',
                            status: query[0].split('=')[1] || ''
                        })
                        const res1 = await res.data;
                        console.log("data", res1);
                        const res2 = await axios.get(orderURL);
                        const res2data = await res2.data;
                        setData(res2data);
                    }
                }
            }
            else {
                const res2 = await axios.get(orderURL);
                const res2data = await res2.data;
                setData(res2data);
            }
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [location])

    console.log(data);

    const renderData = (items, loading) => {
        if (items && !loading) {
            if (items.length > 0) {
                return items.map((item) => {
                    return (
                        <>
                            <tr>
                                <td>{item.orderId}</td>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>Rs.{item.cost}</td>
                                <td>{item.date}</td>
                                <td>{item.payment_id}</td>
                                <td>{item.status}</td>
                            </tr>
                        </>
                    )
                })
            }
            else {
                return (<>
                    <h2>no data found </h2>
                </>)
            }
        }
        else {
            return (<>
                <h2>Loading .... </h2>
            </>)
        }
    }

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
                                <th>Payment ID</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderData(data, loading)}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default OrdersAndReturns