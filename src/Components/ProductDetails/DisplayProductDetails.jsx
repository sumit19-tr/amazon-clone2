import React, { useContext, useState } from 'react'
import Footer from '../Footer/Footer';
import { Tab, TabPanel, Tabs, TabList } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import axios from 'axios';
import { cartContext } from '../context/context';
import { Link, useNavigate } from 'react-router-dom';

const AddToCartUrl = "https://amazonclone-loginapi.onrender.com/api/auth/add-id";


const DisplayProductDetails = (props) => {

  const {setCartCount} = useContext(cartContext);
  let count = sessionStorage.getItem("countItems");
  const navigate = useNavigate();

  const [message, setMessage] = useState();
  const [Style, setStyle] = useState({ display: "none" });
  const [AlertType, setalertType] = useState("alert alert-success");
  const [textType, setTextType] = useState("text-success");



  const handleAddToCart = async (product) => {

    console.log("product data >>>>> ", product);
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
                setTimeout(()=>{
                  setStyle({ display:"none"});
                },2000)
                setMessage("Login successful");
                setalertType("alert alert-success");
                setTextType("text-success");
                sessionStorage.setItem("login_token", data.msg);
                sessionStorage.setItem("login alert", "Login successful");
                console.log("data.msg", data.msg);
                count++;
                setCartCount(count);
                console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>",count);                
            } else {
                setStyle({ display: "flex" });
                setMessage(data.msg);
                setalertType("alert alert-danger");
                setTextType("text-danger");
                console.log("data.msg", data.msg);
      }
      setMessage(data.msg);
      console.log(data.msg);
    } catch (error) {
      setStyle({ display: "flex" });
      setMessage("something went wrong");
      setalertType("alert alert-warning");
      setTextType("text-warning");
      console.log(error, "error while fetching API");
    }
  }

  const renderData = ({ ProductDetails }) => {
    if (ProductDetails) {
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
                  <button className="btn btn-buy btn-lg"  onClick={navigate(`/order_for/${items.productId}`)}> Buy Now</button>
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
  }

  return (
    <>
      <div className={`${AlertType} My_Alert`} role="alert" style={Style}>
        {message}
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