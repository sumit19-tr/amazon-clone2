import React, { useEffect, useState } from 'react';
import './ProductDetails.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DisplayProductDetails from './DisplayProductDetails';


const url = "https://amazon-clone-restapi.onrender.com/details"


const ProductDetails = () => {
  
  const {productId} = useParams();    
  const[productData,setProductData] = useState();   

  const fetchProductDetails =  async() =>{  
    try {    
      let res = await axios.get(`${url}/${productId}`); 
      let data = await res.data;  
      setProductData(data);    
      console.log("fetchProductDetails ",data);  
      const url1 = `${url}/${productId}`;
      console.log("url ",url1);
      
    } catch (error) {  
      console.log("error while fetching data");   
    } 
  }

  useEffect(()=>{
    fetchProductDetails();
  },[productId])

  return (
    <>
        <DisplayProductDetails ProductDetails={productData}/>      
    </>
  )
}

export default ProductDetails