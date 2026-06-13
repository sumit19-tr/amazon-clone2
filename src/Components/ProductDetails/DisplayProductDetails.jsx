import React, { useContext, useState } from 'react'
import Footer from '../Footer/Footer';
import { Tab, TabPanel, Tabs, TabList } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import axios from 'axios';
import { cartContext, loginContext } from '../context/context';
import { Link, useNavigate } from 'react-router-dom';

const AddToCartUrl = "https://amazonclone-loginapi.onrender.com/api/auth/add-id";


const DisplayProductDetails = (props) => {

  const { cartCount, setCartCount } = useContext(cartContext);

  let count = cartCount;
  const navigate = useNavigate();

  const [message, setMessage] = useState();
  const [Style, setStyle] = useState({ display: "none" });
  const [AlertType, setalertType] = useState("text-bg-success");
  const [textType, setTextType] = useState("text-success");
  const [showToast, setShowToast] = useState(false);
  const value = useContext(loginContext);
  const [loading,setLoading] = useState(false);

  const handleAddToCart = async (product) => {

    if (value.isLoggedIn || sessionStorage.getItem("login_token")) {
      console.log("product data and id >>>>> ", product);
      try {
        const res = await axios.post(AddToCartUrl, {
          "user_name": sessionStorage.getItem("userInfo"),
          "productId": product.productId,
          "product_name": product.product_name,
          "Image": product.Image,
          "content": product.content,
          "Price": product.Price,
          "Quantity": 1
        })

        const data = res.data;

        if (data.success === true) {
          setStyle({ display: "flex" });
          setShowToast(true);
          // setTimeout(() => {
          //   setStyle({ display: "none" });
          // }, 2000)
          setMessage("Login successful");
          setalertType("text-bg-success");
          setTextType("text-success");
          // sessionStorage.setItem("login_token", data.msg);
          // sessionStorage.setItem("login alert", "Login successful");
          console.log("data.msg", data.msg);
          count++;
          setCartCount(count);
          console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>", count);
        } else {
          setStyle({ display: "flex" });
          setShowToast(true);
          setMessage(data.msg);
          setalertType("text-bg-danger");
          setTextType("text-danger");
          console.log("data.msg", data.msg);
        }
        setMessage(data.msg);
        console.log(data.msg);
      } catch (error) {
        setStyle({ display: "flex" });
        setMessage("something went wrong");
        setalertType("text-bg-warning");
        setTextType("text-warning");
        console.log(error, "error while fetching API");
      }

    }
    else {
      navigate(`/login`);
    }
  }

  const handleBuyNow = (items) => {
    if (value.isLoggedIn || sessionStorage.getItem("login_token")) {
      navigate(`/amazon-clone2/order_for?id=${items.productId}`)
    }
    else {
      navigate(`/amazon-clone2/login`);
    }
  }

  const renderData = ({ ProductDetails , loading}) => {
    if (ProductDetails && !loading) {
      if (ProductDetails.length > 0) {
        return ProductDetails.map((items) => {

          const about = items.about;
          const splittedData = about.split('|');
          return (
            <>
              <div className="row g-4">
                {/* Left side: Main product image */}
                <div className="col-md-5 text-center">
                  <img
                    id="mainImage"
                    src={items.Image}
                    alt={items.product_name}
                    className="product-image"
                  />
                </div>
                {/* Right side: Product details */}
                <div className="col-md-7">
                  <h2>{items.content}</h2>
                  <p className="text-warning mb-1">⭐⭐⭐⭐☆ ({items.Rating})</p>
                  <div className="mb-3">
                    <span className="price-details-page">₹{items.Price}</span>
                    <span className="old-price">₹{items.Orignal_prize}</span>
                    <span className="discount">{items.discount}% off</span>
                  </div>

                  <Tabs>
                    <TabList>
                      <Tab>About this item</Tab>
                      <Tab>Title 2</Tab>
                    </TabList>
                    <TabPanel>
                      <ul>
                        {
                          splittedData.map((items2) => {
                            return (
                              <li>{items2}</li>
                            )
                          })
                        }
                      </ul>
                    </TabPanel>
                    <TabPanel>
                      {items.about}
                    </TabPanel>
                  </Tabs>
                  <div className="d-grid gap-2 mt-4">
                    <div className={`h3 pt-4 ${textType}`}>{message}</div>
                    <button className="btn btn-cart btn-lg" onClick={() => handleAddToCart(items)}>Add to Cart</button>
                    <button className="btn btn-buy btn-lg" onClick={() => handleBuyNow(items)}> Buy Now</button>
                  </div>
                  <p className="mt-3 mb-0 text-success fw-semibold">
                    Free Delivery: Tomorrow
                  </p>
                  <p className="mb-0 text-secondary">Sold by: Nobero Retail</p>
                </div>
              </div>
            </>)
        })
      }
      else {
        return (
          <>
            <h1>no data found </h1>
          </>
        )
      }
    } else {
      return(
        <>
          <h1>Loading... </h1>
        </>
      )
          
            
    }

  }

  return (
    <>
      {/* <div className={`${AlertType} My_Alert`} role="alert" style={Style}>
        {message}
      </div> */}
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          className={`toast align-items-center ${AlertType} border-0 ${showToast ? "show" : "hide"
            }`}
          role="alert"
        >
          <div className="d-flex">
            <div className="toast-body">
              {message}
            </div>

            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              onClick={() => setShowToast(false)}
            ></button>
          </div>
        </div>
      </div>
      <div className='bg-light'>
        <div className="container py-4">
          {renderData(props)}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default DisplayProductDetails