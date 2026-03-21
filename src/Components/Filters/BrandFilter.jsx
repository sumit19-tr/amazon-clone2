import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import DisplayBrandFilter from './DisplayBrandFilter';
import axios from 'axios';

// http://localhost:8811/filter/1?brand_id=3,2,1

const furl = "https://amazon-clone-restapi.onrender.com/filter";

const curl = "https://amazon-clone-restapi.onrender.com/catagory";//list of category wrt id

const BrandFilter = ({ category_id, ListProductWrtBrand }) => {

    const [brandList, setBrandList] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState([]);

    const fetchBrandList = async () => {
        try {
            const res = await axios.get(`${curl}/${category_id}`);
            const data = await res.data;
            setBrandList(data[0].brand);
        } catch (error) {
            console.log("error fecting brand list ", error);
        }
    }

    const brandFilter = async(event) => {
        
        console.log("brandFilter", event.target.value);
        
        const brand_id = event.target.value;
        const isChecked = event.target.checked;
        
        let updatedList = selectedBrand;
        
        console.log("isChecked ",isChecked);

        if (isChecked) {
         updatedList.push(brand_id);
        }
        else {
         updatedList = updatedList.filter(id => id!==brand_id);
        }

        setSelectedBrand(updatedList);

        console.log("updatedList", updatedList);

        const brandQuery=updatedList.join(",");

        console.log(brandQuery);
        

        let brand_url='';
        
        if(updatedList.length==0){
            console.log("updatedList length",updatedList.length);
            
            brand_url = `${furl}/${category_id}`;
            console.log("brand_url",brand_url);
        }
        else{
            brand_url = `${furl}/${category_id}?brand_id=${brandQuery}`
            console.log("brand_url",brand_url);
        }

        try {
            const res = await axios.get(brand_url);
            const data = await res.data;
            ListProductWrtBrand(data);
            console.log("brandFilter ",data);
            console.log("brand id",brand_id);
        } catch (error) {
            console.log("error fetching brand wrt cat ",error);
        }
    }

    useEffect(() => {
        fetchBrandList();
        // brandFilter();
    }, [category_id])

    return (
        <>
            <ul className="filter-block" onChange={brandFilter}>
                <DisplayBrandFilter brandList={brandList} />
            </ul>
        </>
    )
}

export default BrandFilter