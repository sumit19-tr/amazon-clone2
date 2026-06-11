import axios from "axios";
import React, { useState, useEffect } from 'react'
import { useNavigate, useNavigation } from "react-router-dom";

const curl = "https://amazon-clone-restapi.onrender.com/catagory"
const purl = "https://amazon-clone-restapi.onrender.com/product"
const productsURL = "https://amazon-clone-restapi.onrender.com/products";

function SearchBar() {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [categoriesIds, setCategoriesIds] = useState("");
    const [style, setStyle] = useState({ display: "none" });

    const [categories, setCategories] = useState([]);
    const [onFocusDisplay, setOnFocusDisplay] = useState({ display: "none" });
    const [ListOfProduct, setListOfProduct] = useState("");
    const [updatedValue,setUpdatedValue] = useState("");

    const navigation = useNavigate();

    // Toggle dropdown
    const handleAddStyle = (e) => {
        e.stopPropagation(); //prevent immediate close
        setStyle((prev) =>
            prev.display === "none" ? { display: "block" } : { display: "none" }
        );
    }

    // Select category
    const handleSelect = (cat,value,id) => {
        console.log("Selected categoriesId",id);
        setCategoriesIds(id);
        setSelectedCategory(cat);
        setStyle({ display: "none" })//hide after selecting
        fetchListOfProduct(value);
        setUpdatedValue("");
    }

    const handleOnChange = (e, value) => {
        e.stopPropagation(); //prevent immediate close  
        setOnFocusDisplay((value) =>
            value === "" ? { display: "none" } : { display: "block" }
        );
        fetchListOfProduct(value);
        setUpdatedValue(value);
        console.log(value);
    }

    const fetchListOfProduct = async (value) => {
        try {

            if (categoriesIds === "") {
                const res = await axios.get(`${purl}`);
                const data = await res.data;
                const filteredData = data.filter((user) => {
                    return value && user && user.product_name && user.product_name.toLowerCase().includes(value)
                });
                setListOfProduct(filteredData);
                console.log("typed value is ", value);
                console.log("fetchListOfProduct", data);
                console.log("filteredData", filteredData);
            }
            else {
                const res = await axios.get(`${productsURL}/${categoriesIds}`);
                const data = await res.data;
                const filteredData = await data.filter((user) => {
                    return value && user && user.product_name && user.product_name.toLowerCase().includes(value)
                });
                setListOfProduct(filteredData);
                console.log("categoriesIds ", categoriesIds);
                console.log("typed value is ", value);
                console.log("fetchListOfProduct", data);
                console.log("filteredData", filteredData);
            }
        } catch (error) {
            console.log("error while fetching a list of product ", error);
        }
    }

    const handleClick = (id,name) => {
        setOnFocusDisplay({ display: "none" } );
        navigation(`productDetails/${id}`);
        setUpdatedValue(name);
        var id =id;
        var name = name;
    }

    const SearchBarResult = (data) =>{

        if(data){
            
            return data.map((list) => {
                return(
                <>
                    <div className="suggestion-item" key={list._id} value={list.id} onClick={() => handleClick(list.id,list.product_name)}>
                            {list.product_name} <small><strong>in {list.category}</strong></small>
                    </div>
                </>
                )
            })
        }
    }

    //Close dropdown on outside click
    useEffect(() => {
        const fetchCategoryList = async () => {
            try {
                const res = await axios.get(`${curl}`);
                const data1 = await res.data;
                setCategories(data1);
                console.log("setCategoriesIds(data1.id)", data1.map((data) => data.id));
                console.log("setCategoriesIds(data1.id)", data1);
            } catch (error) {
                console.log("error fetching brand list ", error);
            }
        }

        fetchCategoryList();

        const handleClickOutside = () => {
            setStyle({ display: "none" });
        }
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [])

    return (
        <div className="search_box">
            {/* Category dropdown */}
            <div className="dropdown">
                <button className="search_cat" onClick={handleAddStyle}>
                    <span >{selectedCategory}</span>
                    <i className="fa-solid fa-caret-down" />
                    <ul className="dropdown_menu" style={style} onClick={(e) => e.stopPropagation()} >
                        {categories.map((cat) => (
                            <li value={cat.category} key={cat.category} onClick={(e) => handleSelect(cat.category, e.target.value ,cat.id)} >
                                {cat.category}
                            </li>
                        )
                        )}
                    </ul>
                </button>
            </div>
            {/* text input */}
            {/* <input type="text" placeholder="" /> */}

            <>
                {/* text input */}
                <div className="search-input-wrapper">
                    <input
                        type="text"
                        id="searchInput"
                        placeholder={`Search in ${selectedCategory}`}
                        autoComplete="off"
                        value={updatedValue}
                        onChange={(e) => handleOnChange(e, e.target.value)}
                    />
                    <div id="suggestions" className="suggestions-box" style={onFocusDisplay}>
                        {
                            SearchBarResult(ListOfProduct)
                        }
                    </div>
                </div>
            </>
            {/* magnifying-glass icon */}
            <button className="search_btn">
                <i className="fa-solid fa-magnifying-glass" />
            </button>
        </div>
    )
}

export default SearchBar