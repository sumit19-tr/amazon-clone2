import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import "./index.css"
import Filters from "./Filters/Filters";
import ProductDetails from "./ProductDetails/productDetails";
import AddToCart from "./AddToCart/AddToCart";
import OrderFor from "./AddToCart/OrderFor";
import OrdersAndReturns from "./AddToCart/OrdersAndReturns";
import Login from "./Login/Login";
import Product from "./ListOfProduct/Product";
import Register from "./Login/Register";
import { cartContext,loginContext } from "./context/context";
import { useState } from "react";


const Routing = () => {
    const [isLoggedIn,setIsLoggedIn]= useState("");
    const [user,setUser]=useState(null);
    const [cartCount,setCartCount] = useState(sessionStorage.getItem("countItems"));

    return (
        <>
            <loginContext.Provider value={{isLoggedIn,setIsLoggedIn,user,setUser}}>
            <cartContext.Provider value={{cartCount,setCartCount}}>
            <Header/>
            <Routes>
                <Route path="/amazon-clone2" element={<Home/>}/>
                <Route path="/amazon-clone2/products/:category_id" element={<Product/>}/>
                <Route path="/amazon-clone2/productDetails/:productId" element={<ProductDetails/>}/>
                <Route path="/amazon-clone2/add_to_cart" element={<AddToCart/>}/>
                <Route path="/amazon-clone2/order_for"     element={<OrderFor/>}/>
                <Route path="/amazon-clone2/order&returns" element={<OrdersAndReturns/>}/>
                <Route path="/amazon-clone2/login" element={<Login/>}/>
                <Route path="/amazon-clone2/register" element={<Register/>}/>
            </Routes>
            </cartContext.Provider>
            </loginContext.Provider>
            {/* <Footer/> */}
        </>
    )
}

export default Routing;