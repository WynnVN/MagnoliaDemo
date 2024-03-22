import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Past Projects</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src='images/Jobsite1.jpg'
                    text='A look at the equipment we use'
                    lable='Trimble'
                    path='/services'
                    />
                    <CardItem 
                    src='images/Jobsite3.jpg'
                    text='New subdivision stakeout'
                    lable='Stakeout'
                    path='/services'
                    />
                     <CardItem 
                    src='images/Jobsite2.jpg'
                    text='Setting up equipment and stakes for boundry survey'
                    lable='Boundry'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
