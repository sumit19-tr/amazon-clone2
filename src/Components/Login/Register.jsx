import axios from 'axios';
import React, { useState } from 'react'
import './Register.css'
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';


const registerUser_URL = "https://amazonclone-loginapi.onrender.com/api/auth/register";

const Register = () => {

    const [formData, setFormData] = useState({});
    const [popupStyle, setPopupStyle] = useState({ display: "none" })
    const [popupMessage, setPopupMessage] = useState("");
    const [userData,setUserData] = useState("");
    const navigate = useNavigate();


    const handleChange = (event) => {
        setFormData(prev => ({
            ...prev, [event.target.id]: event.target.value
        }))
    }


    const createUser = async () => {
        try {
            let res = await axios.post(registerUser_URL, formData, {
                headers: { "Content-Type": "application/json" }
            })
            let data = await res.data;
            setUserData(data);
            setPopupMessage(data.msg);
            setPopupStyle({display:"flex"});
            console.log("createUser ", data);
        } catch (error) {
            setPopupMessage("something went wrong");
            setPopupStyle({display:"flex"})
            console.log(error, "Error while fetching user Data");
        }
    }

    const closePopup = () =>{
        if(userData.auth===false)
        {
            setPopupStyle({display:"none"});
        }
        else{
            navigate('/login');
        }
    }
   
    console.log("formData", formData);

    return (
        <>
            <div id="popup" className="popup" style={popupStyle}>
                <div className="popup-content">
                    <p id="popupMessage"> {popupMessage} </p>
                    <button onClick={closePopup}>OK</button>
                </div>
            </div>
            <div className='signup-body my-3'>
                <div className="signup-card p-5" >
                    <h2 className="fw-bold mb-4">Create Account</h2>
                    <label className="form-label">Full Name</label>
                    <input placeholder="Enter your name" id='name' type="text" value={formData.name} onChange={handleChange} className="form-control mb-3" />
                    <label className="form-label">Email</label>
                    <input placeholder="Enter your email" id='email' type="email" value={formData.email} onChange={handleChange} className="form-control mb-3" />
                    <label className="form-label">Password</label>
                    <input placeholder="Enter your password" id='password' type="password" value={formData.password} onChange={handleChange} className="form-control mb-4" />
                    <label className="form-label">Phone Number</label>
                    <input placeholder="phone" id="phone" name='phone' value={formData.phone} onChange={handleChange} className="form-control mb-3" />
                    <button className="btn signup-btn w-100 mb-4" onClick={createUser}>Create Account</button>
                    <div className="d-flex align-items-center gap-3 mb-4">
                        <hr className="flex-grow-1" />
                        <span>or</span>
                        <hr className="flex-grow-1" />
                    </div>
                    <button className="btn login-btn w-100" >
                        Already have an account? Sign in
                    </button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register