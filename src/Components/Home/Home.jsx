import React, { useEffect, useState } from 'react'
import Section1 from './Section1'
import CarouselSlider from './carouselSlider'
import Section2 from './Section2'
import "./Home.css"
import Section3 from './Section3'
import Section4 from './Section4'
import Footer from '../Footer/Footer'
import Breakpoints from './Breakpoints'
import Nav1 from '../Header/Nav1'
import { useLocation } from 'react-router-dom'

const Home = () => {

  const [message, setMessage] = useState();

  const [Style, setStyle] = useState({ display: "none" });
  const [AlertType, setAlertType] = useState("alert alert-success");

  const location = useLocation();

  useEffect(() => {
    const msg = sessionStorage.getItem("login alert");
    console.log("msg", msg);

    if (msg==="Login successful") {
      setStyle({ display: "flex" })
      setMessage("Login successful");
      setAlertType("alert alert-success");
      sessionStorage.removeItem("login alert");
      setTimeout(() => {
        setStyle({ display: "none" });  
      }, 3000)
    } 
    else if(msg==="Logged Out"){
      setStyle({ display: "flex" })
      setMessage("Logged Out");
      setAlertType("alert alert-danger");
      sessionStorage.removeItem("login alert");
      setTimeout(() => {
        setStyle({ display: "none" });
      }, 3000)
    }
  }, [location])

  return (
    <>
      <div className={`${AlertType} My_Alert`} role="alert" style={Style}>
       
          {message}
        
      </div>
      <Section1 />
      <CarouselSlider />
      <div className='container2'>
        <Section2 />
        <Section3 />
        <Section4 />
        <Breakpoints />
        <Footer />
      </div>
    </>
  )
}

export default Home