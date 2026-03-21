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


const Routing = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products/:category_id" element={<Product/>}/>
                <Route path="/productDetails/:productId" element={<ProductDetails/>}/>
                <Route path="/add_to_cart" element={<AddToCart/>}/>
                <Route path="/order_for" element={<OrderFor/>}/>
                <Route path="/order&returns" element={<OrdersAndReturns/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
            {/* <Footer/> */}
        </>
    )
}

export default Routing;