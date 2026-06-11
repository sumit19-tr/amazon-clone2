import React from 'react'

const DisplayBrandFilter = (props) => {

    const renderData = ({ brandList ,loading}) => {

        if (brandList && !loading) {
            if (brandList.length > 0) {
                return brandList.map((items) => {
                    return (
                        <li key={items.brand_id}>
                            <label>
                                <input type="checkbox" name={items.brand_name} id={items.brand_id} value={items.brand_id} /> {`${items.brand_name}`}
                            </label>
                        </li>
                    )
                })
            }
            else {
                return (
                    <>
                        <h1>no data found</h1>
                    </>
                )
            }
        }
        else{
            return (
                    <>
                        <h1>Loading...</h1>
                    </>
                )   
        }
    }

    return (
        <>
            <h5>Brands</h5>
            {renderData(props)}
        </>
    )

}


export default DisplayBrandFilter