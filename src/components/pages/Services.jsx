import React from "react";
import '../../App.css'
import LouisianaOldMap from '/images/LouisianaOldMap.jpg'
import Footer from "../Footer";


function Services() {
  return (
    <>
    <div className='Services-container'>
        <img src= { LouisianaOldMap } className="Louisiana" />
        <div className='services-title'>
         <h1>What we do!</h1>
         </div>

         <div className="serv-contents">
          <ul>
            <li>Subdivisions and ALTA Surveys</li>
            <br />
                <li>Topographical Surveys</li>
            <br />
                <li>FEMA Elevation Certificates & Freeboard Elevation</li>
            <br />
                <li>Construction Staking & Layouts</li>
                <br />
                <li>Boundary Surveys for Residential, Commercial & Agricultural Land (all classifications) </li>
                <br />
                <li> Survey Platting & Mapping </li>
                <br />
                <li>No Work Affidavits </li>
                <br />
                <li> Division of large acreage tracts</li>
                <br />
                <li>Preparation of Legal Descriptions</li>
                <br />
                <li>Title and Deed research</li>
        </ul>
        </div>
    </div>

    <Footer />
    </>
  )
    
  
}

export default Services
