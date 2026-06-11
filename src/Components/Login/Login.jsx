import React, { useContext, useEffect, useState } from 'react'
import './Login.css'
import Footer from '../Footer/Footer'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { loginContext } from '../context/context';

const LoginURL = "https://amazonclone-loginapi.onrender.com/api/auth/login";

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [message, setMessage] = useState();

    const [Style, setStyle] = useState({ display: "none" });
    const [AlertType, setalertType] = useState("alert alert-success");

    const navigate = useNavigate();

    const { isLoggedIn, setIsLoggedIn, user, setUser } = useContext(loginContext);

    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        setFormData(prev => ({
            ...prev, [event.target.id]: event.target.value
        }))
    }


    const AuthenticateUser = async () => {
        try {

            setLoading(true);

            const res = await axios.post(LoginURL, formData, {
                headers: { "Content-Type": "application/json" }
            });

            console.log("res", res);

            const data = await res.data;

            console.log("data", data);

            if (data.auth === true) {
                setIsLoggedIn(data.token);
                setStyle({ display: "flex" });
                setMessage("Login successful");
                setalertType("alert alert-success");
                sessionStorage.setItem("login_token", data.token);
                sessionStorage.setItem("login alert", "Login successful");
                console.log("data.token", data.token);
                navigate('/');
            } else {
                setStyle({ display: "flex" });
                setMessage(data.token);
                setalertType("alert alert-danger");
                console.log("data.token", data.token);
                setTimeout(() => {
                    setStyle({ display: "none" });
                }, 3000)
            }
        } catch (error) {
            setStyle({ display: "flex" });
            setMessage("something went wrong");
            setalertType("alert alert-warning");
            console.log(error, "error while fetching API");
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <>
            <>
                <div className={`${AlertType} My_Alert`} role="alert" style={Style}>
                    {message}
                </div>
                <div className='signup-body my-3'>
                    <div className="signup-card p-5" >
                        <h2 className="fw-bold mb-4">Sign in</h2>
                        <label className="form-label">Email or mobile number</label>
                        <input placeholder="Enter your email" id='email' type="email" value={formData.email} onChange={handleChange} className="form-control mb-3" />
                        <label className="form-label">Password</label>
                        <input placeholder="Enter your password" id='password' type="password" value={formData.password} onChange={handleChange} className="form-control mb-4" />
                        <button className="btn signup-btn w-100 mb-4" disabled={loading} onClick={AuthenticateUser}>
                            {loading ?
                                (<>
                                <span
                                    className="spinner-border spinner-border-sm me-2"
                                    role="status"
                                    aria-hidden="true"
                                > </span>
                                please wait  </>) : ("Sign in")}</button>
                        <div className="d-flex align-items-center gap-3 mb-4">
                            <hr className="flex-grow-1" />
                            <span>or</span>
                            <hr className="flex-grow-1" />
                        </div>
                        <button className="btn login-btn w-100" onClick={() => navigate("/register")}>
                            Don't have an account? Sign up
                        </button>
                    </div>
                </div>
                <Footer />
            </>

        </>
    )
}

export default Login