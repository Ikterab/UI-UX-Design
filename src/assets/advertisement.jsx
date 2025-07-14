import React from "react";
import { useState } from "react";
import './advertisement.css'
import  rectangle from '../assets/Images/Rectangle 24.svg'
import watchved from '../assets/Images/Group 23.svg'
import bigImg from '../assets/Images/Group 22.png'
import star from '../assets/Images/Group6.svg'
import spicy from '../assets/Images/image 14.png'
import vegetable from '../assets/Images/image 13.png'
export function Advertisement() {

    return (
      <>
        <div className='container'>
          <div className='container1'>
            <h1>
              {' '}
              Dive into Delights <br></br>Of Delectable <span>Food</span>
            </h1>
            <br></br>
            <p>
              Where Each Plate Weaves a Story of Culinary<br></br> Mastery and
              Passionate Craftsmanship
            </p>
            <br></br>
            <div className='buttonAdjust'>
              <button>Order Now</button>
              <div className='ved'>
                <label>Watch Video</label>
                <img src={watchved} />
              </div>
            </div>
          </div>
          <div className='container2'>
            <div className='model'>
              <div className='containerChili'>
                <img src={rectangle} />
                <p>Hot spicy Food 🌶</p>
              </div>
              <img className='bigimage' src={bigImg} />
            </div>
            <div className="foodcontainer">
              <div className='spicyContainer'>
                <img src={spicy} />
                <div className='product1'>
                  <p className="sp1">Spicy noodles</p>
                  <img src={star} />
                  <p className="sp2">$18.00</p>
                </div>
              </div>
              <div className='saladContainer'>
                <img src={vegetable} />
                <div className='product2'>
                  <p className="sp1">Vegetable salad</p>
                  <img src={star} />
                  <p className="sp2">$23.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}
