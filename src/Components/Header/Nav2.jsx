import React, { useEffect, useState } from 'react'
import Nav2Display from './Nav2Display'

const curl = 'https://amazon-clone-restapi.onrender.com/catagory';

const Nav2 = () => {

    const [category,setCategory] =  useState('');

    useEffect(()=>{
        fetch(curl,{method:'GET'})
        .then((response)=>response.json())
        .then(data => {
            setCategory(data);
            // console.log(data);
        })
        .catch((error) =>{
            console.error('Error fetching category data:',error)
        })
    },[])

    return (
        <>
            <Nav2Display category={category} />
        </>
    )
}

export default Nav2