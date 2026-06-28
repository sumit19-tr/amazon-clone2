import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Section1.css';

const curl = 'https://amazon-clone-restapi.onrender.com/catagory';

const Section1 = () => {
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(curl, { method: 'GET' })
            .then((response) => response.json())
            .then(data => {
                setCategory(data);
                // console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching category data:', error)
            })
            .finally(() =>
                setLoading(true)
            );
    }, [])



    const categoriesList = (category, loading) => {
        if (category && loading) {
            if (category.length > 0) {
                return category.map((items) => {
                    return (
                        <li key={items._id}>
                            <Link to={`/amazon-clone2/products/${items.id}`}>
                                {items.category}
                            </Link>
                        </li>
                    )
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
        else {
            return (
                <>
                    <li className="nav-item placeholder-glow" >
                        <Link className="nav-link placeholder">
                        </Link>
                    </li>
                    <li className="nav-item placeholder-glow" >
                        <Link className="nav-link placeholder">
                        </Link>
                    </li>
                    <li className="nav-item placeholder-glow" >
                        <Link className="nav-link placeholder">
                        </Link>
                    </li><li className="nav-item placeholder-glow" >
                        <Link className="nav-link placeholder">
                        </Link>
                    </li>
                    <li className="nav-item placeholder-glow" >
                        <Link className="nav-link placeholder">
                        </Link>
                    </li>
                </>
            )
        }
    }

    return (
        <div className="quickLink">
            <div className="quickLink-left">
                <h2>Amazon Fashion</h2>
                <ul>
                    {categoriesList(category, loading)}
                </ul>
            </div>
            <div className="quickLink-right">
                <h2>30 DAY RETURNS</h2>
                <p>Restrictions Apply</p>
            </div>
        </div>
    )
}

export default Section1