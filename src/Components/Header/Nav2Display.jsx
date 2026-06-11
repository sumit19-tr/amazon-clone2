import React from 'react'
import { Link } from 'react-router-dom'

const Nav2Display = (props) => {

    const categoriesList = ({ category, loading }) => {
        if (category && loading) {
            if (category.length > 0) {
                return category.map((items) => {
                    return (
                        <li className="nav-item" key={items._id}>
                            <Link className="nav-link S_nav-link S_border" to={`/products/${items.id}`}>
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
                    <h1>Loading...</h1>
                </>
            )
        }
    }

    return (
        <nav className="navbar s_navbar navbar-expand-sm S_navbar-expand-sm navbar-dark s_bg-dark">
            <div className="container-fluid s_container-fluid">
                <button
                    className="navbar-toggler s_navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mynavbar"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <a className="navbar-brand S_border" href="javascript:void(0)">
                    All
                </a>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav S_navbar-nav me-auto">

                        <li className="nav-item ">
                            <a
                                className="nav-link S_nav-link S_border"
                                href="javascript:void(0)"
                            >
                                Amazon miniTV
                            </a>
                        </li>
                        {categoriesList(props)}
                    </ul>
                    <form className="d-flex s_nav-right">
                        <a className="nav-imageHref">
                            <img
                                alt="Join Prime Now"
                                src="https://i.ibb.co/0bHGmYs/PC-SWM-400x39-3-CB791269750.jpg"
                            />
                        </a>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Nav2Display