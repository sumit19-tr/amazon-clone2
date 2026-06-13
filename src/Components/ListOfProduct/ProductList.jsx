import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ProductList = (props) => {

    const renderData = ({productList}) => {

        if (productList) {
            return productList.map((items) => {
                return (
                    <>
                        <div className="col-6 col-md-4 col-lg-3">
                            <Link to={`/amazon-clone2/productDetails/${items.productId}`} className='no-link-style'>
                                <div className="product-card">
                                    <img    
                                        src={items.Image}
                                        alt={items.content}
                                        className="product-img"
                                    />
                                    <p className="price fs-5">
                                        ₹{items.Orignal_prize} <span className="old-price">₹{items.Price} </span>&nbsp; <small>({items.discount}% off</small>)
                                    </p>
                                    <p>{items.content}</p>
                                    <p className="rating">★★★★☆ ({items.Rating})</p>
                                </div>
                            </Link>
                        </div>
                    </>
                )
            })
        }
         else {
            return (
                <>
                    <h1>no data found </h1>
                </>
            )
        }

    }

    return (
        <>
            <h3 className="fw-bold mb-3">Hot New Releases</h3>
            <div className="row g-4">
                {renderData(props)}
            </div>
        </>
    )
}

export default ProductList