import React from 'react';
import '../App.css';
import {Button} from './Button';
import './NavPage.css';
// import videoGlobe from '/videos/globe.mp4.mp4'
import LouisianaOldMap from '/images/LouisianaOldMap.jpg'
function NavPage() {
  return (
    <div className='NavPage-container'>
      <img src= { LouisianaOldMap } className="Louisiana" />
        {/* <video src= {videoGlobe} autoPlay loop muted /> */}
        <h1> Buying New Property, Need To Know Boundaries, Elevations, Legal Descriptions, Ect.?</h1>
        
        <p> Call Or Email Us Today!</p>
        <div className='NavPage-btns'>
            <Button className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'>
                MORE INFORMATION
            </Button>
        </div>
      
    </div>
  )
}

export default NavPage
