import React from 'react';
import './Section4.css';
import { Link } from 'react-router-dom';

const Section4 = () => {
    return (
        <div className="py-4 px-2">
            <div className="row g-4">
                {/* Card 1 */}
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="deal-card">
                        <h5>Up to 70% off | Top rated finds</h5>
                        <div className="deal-grid">
                            <div className="deal-item">
                                <Link to="/amazon-clone2/products/4">
                                    <img
                                        src="https://m.media-amazon.com/images/I/71lKkzkTUeL._SL1500_.jpg"
                                        alt="Nivea Men Face Wash"
                                    />
                                <p>Nivea</p>
                                </Link>
                            </div>
                            <div className="deal-item">
                                <Link to="/amazon-clone2/products/4">
                                <img
                                    src="https://m.media-amazon.com/images/I/51SmSSOrLxL._SL1000_.jpg"
                                    alt="Himalaya Men Face "
                                />
                                <p>Himalaya</p>
                               </Link>
                            </div>
                            <div className="deal-item">
                                 <Link to="/amazon-clone2/products/4">
                                <img
                                    src="https://m.media-amazon.com/images/I/51LQ4Zuy1gS._SL1201_.jpg"
                                    alt="Mamaearth Onion Shampoo for Hair Growth & Hair Fall Control with Onion & Plant Keratin - 1 Litre"
                                />
                                <p>Mamaearth</p>
                                 </Link>
                            </div>
                            <div className="deal-item">
                                <Link to="/amazon-clone2/products/4">
                                <img
                                    src="https://m.media-amazon.com/images/I/61OppCOreuL._SL1194_.jpg"
                                    alt="Tan Removal"
                                />
                                <p>Tan Removal</p>
                                </Link>
                            </div>
                        </div>
                        <a href="/amazon-clone2/products/4">See all offers</a>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="deal-card">
                        <h5>Up to 70% off | Sports & Fitness</h5>
                        <div className="deal-grid">
                            <div className="deal-item">
                                <Link to="/amazon-clone2/products/5">
                                <img
                                    src="https://m.media-amazon.com/images/I/61jTS3G3RML._UL1200_.jpg"
                                    alt="Puma Boys Evospeed Jr V2 Cricket Shoe"
                                />
                                <p>Puma</p>
                                </Link>
                            </div>
                            <div className="deal-item">
                                <Link to="/amazon-clone2/products/5">
                                <img
                                    src="https://m.media-amazon.com/images/I/51Of5U6LWdL._AC_UL320_.jpg"
                                    alt="Nike Unisex's Superfly 6 Pro Fg Football"
                                />
                                <p>Nike</p>
                                </Link>
                            </div>
                            <div className="deal-item">
                                <Link to="/amazon-clone2/products/5">
                                <img
                                    src="https://m.media-amazon.com/images/I/51p-i2SiKJL._AC_UL320_.jpg"
                                    alt="Adidas Mens Fuse 80s Tennis Shoe"
                                />
                                <p>Adidas</p>
                                </Link>
                            </div>
                            <div className="deal-item">
                                <Link to="/amazon-clone2/products/5">
                                <img
                                    src="https://m.media-amazon.com/images/I/813NbND5naL._AC_UL320_.jpg"
                                    alt="Adidas Men's Agora 1.0 Multisport Training Shoes"
                                />
                                <p>Adidas</p>
                                </Link>
                            </div>
                        </div>
                        <a href="/amazon-clone2/products/5">See all offers</a>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="deal-card">
                        <h5>Up to 70% off | Mobiles</h5>
                        <div className="deal-grid">
                            <div className="deal-item"><Link to="/amazon-clone2/products/1">
                                <img
                                    src="https://i.ibb.co/gvs5j37/Redmi-A1-blue.jpg"
                                    alt="Redmi A1 (light blue),2GB RAM,32GB storage|Segement best A1 dual cam |…"
                                />
                                <p>Redmi</p></Link>
                            </div>
                            <div className="deal-item"><Link to="/amazon-clone2/products/1">
                                <img
                                    src="https://i.ibb.co/ckD4950/One-Plus-Nord-CE-2-Lite-5-G.jpg"
                                    alt="OnePlus Nord CE 2 Lite 5G"
                                />
                                <p>OnePlus</p></Link>
                            </div>
                            <div className="deal-item">
                                <Link to="/amazon-clone2/products/1">
                                <img
                                    src="https://m.media-amazon.com/images/I/61y7ZbTQcWL._AC_UY218_.jpg"
                                    alt="Vivo Y56 5G"
                                />
                                <p>Vivo</p></Link>
                            </div>
                            <div className="deal-item">
                                <Link to="/amazon-clone2/products/1">
                                <img
                                    src="https://m.media-amazon.com/images/I/611mRs-imxL._AC_UL320_.jpg"
                                    alt="Apple iPhone 14"
                                />
                                <p>Apples</p>
                                </Link>
                            </div>
                        </div>
                        <a href="/amazon-clone2/products/1">See all offers</a>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="deal-card">
                        <h5>Men's Fashion</h5>
                        <div className="deal-grid">
                            <div className="deal-item">
                                <Link to="/amazon-clone2/products/3">
                                <img
                                    src="https://m.media-amazon.com/images/I/71eUwDk8z+L._UL1500_.jpg"
                                    alt="Allen Solly Men's Regular Fit Polo"
                                />
                                <p>Polos</p></Link>
                            </div>
                            <div className="deal-item"> <Link to="/amazon-clone2/products/3">
                                <img
                                    src="https://m.media-amazon.com/images/I/61gb68vvjkL._UL1500_.jpg"
                                    alt="LEOTUDE Men's Overiszed Cottonblend Half Sleeve Back Printed Tshirt"
                                />
                                <p>T-Shirts</p></Link>
                            </div>
                            <div className="deal-item"> <Link to="/amazon-clone2/products/3">
                                <img
                                    src="https://m.media-amazon.com/images/I/71wPKagqx9L._AC_UL320_.jpg"
                                    alt="Neostreak Men's Slim Fit Jeans"
                                />
                                <p>Jeans</p></Link>
                            </div>
                            <div className="deal-item"><Link to="/amazon-clone2/products/3">
                                <img
                                    src="https://m.media-amazon.com/images/I/71ZyBh4LQuL._AC_UY218_.jpg"
                                    alt="Apple Watch SE (GPS + Cellular, 44mm)"
                                />
                                <p>Watch</p></Link>
                            </div>
                        </div>
                        <a href="/amazon-clone2/products/3">See all deals</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Section4