import React from "react";
import { useState } from "react";
import chef from '../assets/Images/cooker.png'
import forchef from '../assets/Images/forchef.svg'
import customerfeedback from '../assets/Images/customerFeedback.svg'
import star from '../assets/Images/star.svg'
import './testimonal.css'
export function Testimonial() {
    
        return (
          <>
            <div className='testimonialcontainer'>
              <div className='testicontainer1'>
                <p className="p1">😋</p>
                <img className="chefpic" src={chef} />
                <p className="p2">🍕</p>
                <div className='bestchef'>
                  <img className="comment" src={forchef} />
                  <p className="p3">Our Best Chef 😁</p>
                </div>
              </div>
              <div className='testicontainer2'>
                <h4>TESTIMONIALS</h4>
                <h1>
                  What Our Customers<br></br>Say About Us
                </h1>
                <p className="aboutus">
                  “I had the pleasure of dining at Foodi last night, and<br></br> I'm
                  still raving about the experience! The attention to <br></br>detail in
                  presentation and service was impeccable”
                </p>
                        <div className='customerfeedback'>
                            <img className='customers'src={customerfeedback} />
                            <div className="feedbackcontainer">
                                <h3>Customer Feedback</h3>
                                <div className="feedback">
                                    <img src={star} />
                                    <h3>4.9</h3>
                                    <p>(18.6k Reviews)</p>
                                </div>
                            </div>
                            
                </div>
              </div>
            </div>
          </>
        )
    
}