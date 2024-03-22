import React, {useState, useEffect}from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { Button } from './Button'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="social-media">
                    <div className='footer-logo'>
                    <div className="MPLS">
                    <Link to='/' className='social-logo'>
                    Magnolia P.L.S. &copy; 2024
                    </Link>
                    </div>
                    <div>
                        <Link to='/'>
                    <img className="Maglogo" src="./images/manolia_logo.jpg" alt="Magnolia-logo" />
                     </Link>
                     </div>

                     <div className='social-icons'>
                        <Link className="social-icon-link facebook"
                        to="https://www.facebook.com/people/Magnolia-Land-Surveying-LLC/100093876676836/"
                        target="_blank"
                        aria-label='Facebook'
                        >
                           <i className='fab fa-facebook-f' /> 
                        </Link>
                     </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;