import React from "react";
import { useState } from "react";
import Catering from '../assets/Images/catering.svg'
import Delivery from '../assets/Images/fast-delivery.svg'
import Onlineorder from '../assets/Images/online-ordering.svg'
import Gift from '../assets/Images/gift-card.svg'
import './story&service.css'

const features = [
  {
    img: Catering,
    name: 'CATERING',
    description: 'Delight your guests with our flavors and presentation',
  },
  {
    img: Delivery,
    name: 'FAST DELIVERY',
    description: 'We deliver your order promptly to your door',
  },
  {
    img: Onlineorder,
    name: 'ONLINE ORDERING',
    description: 'Explore menu & order with ease using our Online Ordering',
  },
  {
    img: Gift,
    name: 'GIFT CARDS',
    description: 'Give the gift of exceptional dining with Foodi Gift Cards',
  }
]


export function StoryService() {
   
    return (<>
        <div className="storyservices">
            <div className="storyContainer">
                <h4>OUR STORY & SERVICES</h4>
                <h1>Our Culinary Journey<br></br>And Services</h1>
            <p>Rooted in passion, we curate unforgettable dining <br></br>experiences and offer exceptional services,<br></br>blending culinary artistry with warm hospitality.</p>
          <button className="btn">Explore</button>
        </div>
            <div className="serviceContainer">
                {features.map((features, index) => (
                    <div key={index} className="listFeaturescard">
                        <img src={features.img} />
                        <h3>{features.name}</h3>
                        <p>{features.description }</p>
                    </div>
                    
                ))}
            </div>
        </div> 
        
    </>)
}
