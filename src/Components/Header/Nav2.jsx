import React, { useEffect, useState } from 'react'
import Nav2Display from './Nav2Display'

const curl = 'https://amazon-clone-restapi.onrender.com/catagory';

const Nav2 = () => {

    const [category,setCategory] =  useState('');
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true);
        fetch(curl,{method:'GET'})
        .then((response)=>response.json())
        .then(data => {
                setCategory(data);
            // console.log(data);
        })
        .catch((error) =>{
            console.error('Error fetching category data:',error)
        })
        .finally(()=>
            setLoading(true)
        );
    },[])

    return (
        <>
            <Nav2Display category={category} loading={loading}/>
        </>
    )
}

export default Nav2