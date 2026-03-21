import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";

const getUserData_url = "https://amazonclone-loginapi.onrender.com/api/auth/userinfo";

const Nav1 = () => {

    const [style, setStyle] = useState({ display: "none" });
    const [cartStyle, setCartStyle] = useState({ display: "none" });
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [userData, setUserData] = useState({});
    const location = useLocation();
    const navigation = useNavigate();


    const categories = [
        "All",
        "Electronics",
        "Books",
        "Fashion",
        "Mobiles",
        "Home & Kitchen"
    ]

    useEffect(() => {

        const token = sessionStorage.getItem("login_token");

        if (!token) {
            setUserData({});
            return;
        }

        const getUserData = async () => {
            try {
                if (token) {

                    const res = await axios.get(getUserData_url, {
                        headers: {
                            'x-access-token': token
                        }
                    })
                    const data = res.data;
                    setUserData(data);
                    setCartStyle({display:"block"});
                    console.log("userData>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", data);
                }

            } catch (error) {
                console.log(error, "error while fetching login userData");
            }
        }
        getUserData();

    }, [location])


    const logOut = () => {
        sessionStorage.removeItem("login_token");
        setUserData({});
        navigation('/');
        sessionStorage.setItem("login alert", "Logged Out");
        setCartStyle({display:"none"});
    }

    const handleOrders = (e) =>{
        if(!sessionStorage.getItem("login_token")){
            navigation('/login');
            console.log("/login");
            
        }
        else{
            navigation('/order&returns');
            console.log("/order&returns");
        }
    }


    const conditionalHeader = () => {
        if (userData?.name) {

            console.log("userData.name", userData.name);

            const fullname = userData.name;
            sessionStorage.setItem("userInfo",fullname);
            console.log("fullname ", fullname);

            let firstName = fullname.split(' ')[0];

            console.log("firstname", firstName);

            const capitalizeFirstname1stchar = firstName.charAt(0).toUpperCase() + firstName.slice(1);

            console.log("capitalizeFirstname1stchar", capitalizeFirstname1stchar);

            const name = capitalizeFirstname1stchar;

            return (
                <>
                    <div className="choose_country S_border" onClick={logOut}>
                        LogOut
                    </div>
                    <Link to="/login" className="no-link-style">
                        <div className="ac_info S_ln-height S_border">
                            <p className="first-line">Hello,{name}</p>
                            <p className="second-line">
                                Accounts &amp; Lists&nbsp;
                                <i className="fa-solid fa-caret-down"/>
                            </p>
                        </div>
                    </Link>
                </>
            )
        }
        else {
            // setCartStyle({display: "none"} );
            return (
                <>
                    <div className="choose_country S_border">
                        <img src="https://flagcdn.com/w20/in.png" alt="India flag" height={20} /> IN
                        EN US
                    </div>
                    <Link to="/login" className="no-link-style">
                        <div className="ac_info S_ln-height S_border">
                            <p className="first-line">Hello, sign in</p>
                            <p className="second-line">
                                Accounts &amp; Lists&nbsp;
                                <i className="fa-solid fa-caret-down" />
                            </p>
                        </div>
                    </Link>
                </>
            )
        }
    }

    // Toggle dropdown
    const handleAddStyle = (e) => {
        e.stopPropagation(); //prevent immediate close
        setStyle((prev) =>
            prev.display === "none" ? { display: "block" } : { display: "none" }
        );
    }

    // Select category
    const handleSelect = (cat) => {
        setSelectedCategory(cat);
        setStyle({ display: "none" })//hide after selecting
    }

    

    //Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = () => {
            setStyle({ display: "none" });
        }

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);

    }, [])

    return (
        <>
            <nav className="s_Nav">
                {/* Logo */}
                <Link to="/" className="no-link-style">
                    <div className="logo">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                            alt="Amazon logo"
                            className="amazon-logo"
                        />
                        <span>.in</span>
                    </div>
                </Link>
                {/* Location */}
                <div className="set_location S_ln-height S_border">
                    <p className="first-line">Delivering to 800020</p>
                    <p className="second-line">
                        <i className="fa-solid fa-location-dot" />
                        &nbsp;Update location
                    </p>
                </div>

                {/* ========== SEARCH ========= */}
                <div className="search_box">
                    {/* Category dropdown */}
                    <div className="dropdown">
                        <button className="search_cat" onClick={handleAddStyle}>
                            <span >{selectedCategory}</span>
                            <i className="fa-solid fa-caret-down" />
                            <ul className="dropdown_menu" style={style} onClick={(e) => e.stopPropagation()}>
                                {categories.map((cat) => (
                                    <li key={cat} onClick={() => handleSelect(cat)} >
                                        {cat}
                                    </li>
                                )
                                )}
                            </ul>
                        </button>
                    </div>
                    {/* text input */}
                    <input type="text" placeholder="Search Amazon.in" />
                    {/* magnifying-glass icon */}
                    <button className="search_btn">
                        <i className="fa-solid fa-magnifying-glass" />
                    </button>
                </div>
                {/* Language / Country */}

                {/* Account */}
                {conditionalHeader()}
                {/* <Link to="/login" className="no-link-style">
                <div className="ac_info S_ln-height S_border">
                    <p className="first-line">Hello, sign in</p>
                    <p className="second-line">
                        Accounts &amp; Lists&nbsp;
                        <i className="fa-solid fa-caret-down" />
                    </p>
                </div>
                </Link> */}
                {/* Orders */}
                <Link to={sessionStorage.getItem("login_token") ? "/order&returns" : "/login"} className="no-link-style" style={cartStyle}>
                    <div  className="orders S_ln-height S_border" >
                        <p className="first-line">Returns</p>
                        <p className="second-line">&amp; Orders</p>
                    </div>
                </Link>
                {/* Cart */}
                
                <Link to={sessionStorage.getItem("login_token") ? "/add_to_cart" : "/login"} className="no-link-style" style={cartStyle} >
                    <div className="cart-container cart S_border">
                        <div className="cart-icon-wrapper">
                            <i className="fa-solid fa-cart-shopping" />
                            <span className="cart-count">{ sessionStorage.getItem("countItems")?sessionStorage.getItem("countItems"):0}</span>
                        </div>
                        <p className="cart-text">
                            Cart
                        </p>
                    </div>
                </Link>
            </nav>
        </>
    )
}

export default Nav1