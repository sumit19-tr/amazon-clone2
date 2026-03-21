import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            {/* Footer */}
            <footer>
                {/* Back to top */}
                <div className="footer-top">
                    <a href="#">Back to top</a>
                </div>
                {/* Main Footer Links */}
                <div className="container footer-links">
                    <div className="row text-center text-md-start">
                        <div className="col-6 col-md-3 mb-4">
                            <h5>Get to Know Us</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">About Amazon</a>
                                </li>
                                <li>
                                    <a href="#">Careers</a>
                                </li>
                                <li>
                                    <a href="#">Press Releases</a>
                                </li>
                                <li>
                                    <a href="#">Amazon Science</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <h5>Connect with Us</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">Facebook</a>
                                </li>
                                <li>
                                    <a href="#">Twitter</a>
                                </li>
                                <li>
                                    <a href="#">Instagram</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <h5>Make Money with Us</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">Sell on Amazon</a>
                                </li>
                                <li>
                                    <a href="#">Sell under Amazon Accelerator</a>
                                </li>
                                <li>
                                    <a href="#">Protect and Build Your Brand</a>
                                </li>
                                <li>
                                    <a href="#">Amazon Global Selling</a>
                                </li>
                                <li>
                                    <a href="#">Supply to Amazon</a>
                                </li>
                                <li>
                                    <a href="#">Become an Affiliate</a>
                                </li>
                                <li>
                                    <a href="#">Fulfilment by Amazon</a>
                                </li>
                                <li>
                                    <a href="#">Advertise Your Products</a>
                                </li>
                                <li>
                                    <a href="#">Amazon Pay on Merchants</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <h5>Let Us Help You</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">Your Account</a>
                                </li>
                                <li>
                                    <a href="#">Returns Centre</a>
                                </li>
                                <li>
                                    <a href="#">Recalls and Product Safety Alerts</a>
                                </li>
                                <li>
                                    <a href="#">100% Purchase Protection</a>
                                </li>
                                <li>
                                    <a href="#">Amazon App Download</a>
                                </li>
                                <li>
                                    <a href="#">Help</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Bottom Section */}
                <div className="footer-bottom">
                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
                        <div className="footer-logo">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                                alt="Amazon Logo"
                            />
                        </div>
                        <div className="lang-country d-flex gap-2">
                            <select>
                                <option>🌐 English</option>
                            </select>
                            <select>
                                <option>🇮🇳 India</option>
                            </select>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className=" text-center text-lg-start text-white">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <p className="text-center">© Sumit Mehra Intern Trainee at edureka.</p>
                        </div>
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <div className="d-flex justify-content-center">
                                <a
                                    href="https://www.linkedin.com/in/sumit-mehra-76484a131/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="me-4"
                                >
                                    <i className="fab fa-linkedin" style={{ fontSize: 32 }} />
                                </a>
                                <a
                                    href="https://github.com/sumit19-tr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-github" style={{ fontSize: 32 }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>


    )
}

export default Footer