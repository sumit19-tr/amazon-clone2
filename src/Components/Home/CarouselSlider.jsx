import React from 'react'

const CarouselSlider = () => {
    return (
        <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src="https://i.ibb.co/Cszd6hQ4/Aug-ART-BB-deals-PC-H1-live-now-2x-CB804831867.jpg"
                        className="d-block w-100"
                        alt="..."
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://i.ibb.co/m5Y2KbMT/M36-ME-Category-PC-Hero-3000x1200-Lifestyle-1-CB805027017.jpg"
                        className="d-block w-100"
                        alt="..."
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://i.ibb.co/7tMGk7pp/GW-Hero-Pc-Indoor-plants-for-home-CB805216263.jpg"
                        className="d-block w-100"
                        alt="..."
                    />
                </div>
            </div>
            <button
                className="carousel-control-prev s_carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon s_carousel-control-prev-icon"
                    aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next s_carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon s_carousel-control-next-icon"
                    aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}

export default CarouselSlider