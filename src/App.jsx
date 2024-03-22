// import { useState } from 'react'
import React from 'react';
import './App.css'
import NavBar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';

function App() {
 const handleComponentError = (error, errorInfo) => {
  console.error('error caought:', error, errorInfo);
 }
  return (
    <>
        <NavBar />
     
        <Routes>
          <Route path='/'element={<Home />} onError={handleComponentError} />
          <Route path='/about'element={<About />} onError={handleComponentError} />
          <Route path='/services'element={<Services />}onError={handleComponentError} />
          <Route path='/contact'element={<Contact />}onError={handleComponentError} />
          </Routes>
          
       
    </>
  )
}

export default App
