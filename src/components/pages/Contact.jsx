import React from "react";
import '../../App.css';
import LouisianaOldMap from '/images/LouisianaOldMap.jpg';
import Footer from "../Footer";
import Dropdown from "../Dropdown/Dropdown";
function Contact() {
  return (
    <>
    <div className='Contact-container'>
    <img src= { LouisianaOldMap } className="Louisiana" />


    <div className="contact-title">
     <h1> CONTACT US</h1>
     </div>
    <div className="contact-content">


      <div className="Address">
        <h2>Magnolia Land Surveying </h2>
        <br />
          <h3>*** Kirby Street, Lake Charles, Louisiana 70601, United States</h3>
      </div>

    <div className="phoneEmail">
      <h2>Phone and Email</h2>
      <br />
      <h3>Office Phone: (337)429-XXXX
        <br />
        Cell: (337)304-XXXX
        <br />
        Cell: (337)377-XXXX
    
      <br />
      Email: xxxlandsurvey@***.com
      </h3>
    </div>

      <div className="Hours">
      <h2>Our normal buisiness hours are from</h2>
      
      <h3>08:00AM-04:00PM Mon-Thurs</h3>
        <br />
      <h3>08:00AM-12:00PM Friday</h3>
      <br />
      <h3>Closed Saturday and Sunday</h3>
      
      </div>
    </div>
    </div>
    
    <Footer />
    </>
  )
 
}

export default Contact