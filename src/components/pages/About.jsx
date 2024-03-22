import React from "react";
import '../../App.css'
import LouisianaOldMap from '/images/LouisianaOldMap.jpg'
import MagnoliaLogo from '/images/manolia_logo.jpg'
import Footer from "../Footer";
function About() {
  return (

    <>
    <div className='About-container'>
    <img src= { LouisianaOldMap } className="Louisiana" />
        <h1 className="Title">GET TO KNOW US</h1>

        <div className="contents">
     <div className='magPic'>
        <img src= {MagnoliaLogo}className='MagLogo' />
     </div>

     <div className="about-writing">
        <h1>Magnolia Land  Surveying is owned and operated by Patrick Kade Van Norman, Owner, and Michael Thomas Mack, Draftsman/Field Supervisor.

          <br />
          <br />
          
           Kade Van Norman of Kinder, Louisiana attended Kinder High School and completed his bachelors degree at Louisiana College while playing baseball. He continued his education to become a Professional Land  Surveyor in the State of Louisiana and was licensed in April, 2023 (License No. 5299). He has more than 7  years of experience in the field of land surveying. 

        <br />
        <br />

         Michael Mack of Lake Charles, Louisiana attended St. Louis Catholic High School and completed his bachelors degree at McNeese State University while playing football. He plans to continue his education by going to school for his Professional Land Surveying license. He has over 3 years of land surveying experience. Magnolia Land Surveying has been providing top-notch surveying services to clients across Southwest Louisiana. Our experienced team uses the latest technology to ensure accurate results.</h1>
     </div>
</div>
</div>

<Footer />
</>
  )
}

export default About