import React, { useState } from 'react'
import './Section3.css'

function Section3() {

    const [slider, setSlider] = useState(null);

    const scrollSlider = (direction) => {
        if (slider) {
            const cardWidth = slider.querySelector(".slider_card").offsetWidth + 20;
            slider.scrollBy({ left: direction * cardWidth, behavior: "smooth" })
        }
    }

    return (
        <div className="deals-section-adjustment">
            <div className="appliance-section">
                <h2>Best deals on appliances</h2>
                <div className="slider-container">
                    {/* Left Arrow */}
                    <button className="slider-btn left " onClick={() => scrollSlider(-1)}
                        type="button"
                        data-bs-slide="Previous">
                        <i className='fa-solid fa-chevron-left'/>
                    </button>
                    {/* Slider */}
                    <div className="appliance-slider" id="applianceSlider" ref={setSlider}>
                        <div className="slider_card">
                            <img
                                src="https://i.ibb.co/x136hGD/Redmi-9A.jpg"
                                alt="TV"
                            />
                            <p className="title">65 / 75 inch TVs</p>
                            <p className="price">From ₹30,849*</p>
                        </div>
                        <div className="slider_card">
                            <img
                                src="https://i.ibb.co/sVrDzLr/Redmi-Note-12-5-G.jpg"
                                alt="Washing Machine"
                            />
                            <p className="title">Trending deals</p>
                            <p className="price highlight">Shop now!</p>
                        </div>
                        <div className="slider_card">
                            <img
                                src="https://i.ibb.co/p3HhQbt/Redmi-10-A.jpg"
                                alt="Fridge"
                            />
                            <p className="title">Best-selling Refrigerator</p>
                            <p className="price">From ₹9,990</p>
                        </div>
                        <div className="slider_card">
                            <img
                                src="https://i.ibb.co/p3HhQbt/Redmi-10-A.jpg"
                                alt="AC"
                            />
                            <p className="title">Lowest Price Ever</p>
                            <p className="price">From ₹19,490</p>
                        </div>
                        <div className="slider_card">
                            <img
                                src="https://i.ibb.co/ckD4950/One-Plus-Nord-CE-2-Lite-5-G.jpg"
                                alt="Microwave"
                            />
                            <p className="title">Microwave Ovens</p>
                            <p className="price">From ₹4,990</p>
                        </div>
                        <div className="slider_card">
                            <img
                                src="https://i.ibb.co/wsJF9rw/Redmi-10.jpg"
                                alt="Mixer"
                            />
                            <p className="title">Kitchen Essentials</p>
                            <p className="price">From ₹1249</p>
                        </div>
                        <div className="slider_card">
                            <img
                                src="https://i.ibb.co/sVrDzLr/Redmi-Note-12-5-G.jpg"
                                alt="Washing Machine"
                            />
                            <p className="title">Trending deals</p>
                            <p className="price highlight">Shop now!</p>
                        </div>
                        <div className="slider_card">
                            <img
                                src="https://i.ibb.co/p3HhQbt/Redmi-10-A.jpg"
                                alt="Fridge"
                            />
                            <p className="title">Best-selling Refrigerator</p>
                            <p className="price">From ₹9,990</p>
                        </div>
                        <div className="slider_card">
                            <img
                                src="https://i.ibb.co/p3HhQbt/Redmi-10-A.jpg"
                                alt="AC"
                            />
                            <p className="title">Lowest Price Ever</p>
                            <p className="price">From ₹19,490</p>
                        </div>
                        <div className="slider_card">
                            <img
                                src="https://i.ibb.co/ckD4950/One-Plus-Nord-CE-2-Lite-5-G.jpg"
                                alt="Microwave"
                            />
                            <p className="title">Microwave Ovens</p>
                            <p className="price">From ₹4,990</p>
                        </div>
                        <div className="slider_card">
                            <img
                                src="https://i.ibb.co/wsJF9rw/Redmi-10.jpg"
                                alt="Mixer"
                            />
                            <p className="title">Kitchen Essentials</p>
                            <p className="price">From ₹1249</p>
                        </div>
                        <div className="slider_card">
                            <img
                                src="https://i.ibb.co/sVrDzLr/Redmi-Note-12-5-G.jpg"
                                alt="Washing Machine"
                            />
                            <p className="title">Trending deals</p>
                            <p className="price highlight">Shop now!</p>
                        </div>
                        <div className="slider_card">
                            <img
                                src="https://i.ibb.co/p3HhQbt/Redmi-10-A.jpg"
                                alt="Fridge"
                            />
                            <p className="title">Best-selling Refrigerator</p>
                            <p className="price">From ₹9,990</p>
                        </div>
                        <div className="slider_card">
                            <img
                                src="https://i.ibb.co/p3HhQbt/Redmi-10-A.jpg"
                                alt="AC"
                            />
                            <p className="title">Lowest Price Ever</p>
                            <p className="price">From ₹19,490</p>
                        </div>
                        <div className="slider_card">
                            <img
                                src="https://i.ibb.co/ckD4950/One-Plus-Nord-CE-2-Lite-5-G.jpg"
                                alt="Microwave"
                            />
                            <p className="title">Microwave Ovens</p>
                            <p className="price">From ₹4,990</p>
                        </div>
                        <div className="slider_card">
                            <img
                                src="https://i.ibb.co/wsJF9rw/Redmi-10.jpg"
                                alt="Mixer"
                            />
                            <p className="title">Kitchen Essentials</p>
                            <p className="price">From ₹1249</p>
                        </div>
                    </div>
                    {/* Right Arrow */}
                    <button className="slider-btn right" 
                        onClick={() => scrollSlider(1)}
                        type="button" 
                        aria-label="Next">
                         <i className="fa-solid fa-chevron-right" />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Section3