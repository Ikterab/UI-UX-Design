import React from 'react'
import { useState } from 'react'
import './specialDish.css'
import Fattoush from '../assets/Images/Fattoush salad.svg'
import Vegetable from '../assets/Images/vegetable salad.svg'
import Eggsalad from '../assets/Images/Egg salad.svg'
import leftarrow from '../assets/Images/leftArrow.svg'
import rightarrow from '../assets/Images/rightArrow.svg'
import backWhite from '../assets/Images/backWhitegreenleaf.svg'
import borderWhite from '../assets/Images/borderWhitegreenleaf.svg'
import star from '../assets/Images/star.svg'
const specialProduct = [
  { img:backWhite,
    img1: Fattoush,
    name: 'Fattoush salad',
    description: 'Description of the item',
    price: 24.0,
    rate: 4.9,
  },
  { img:borderWhite,
    img1: Vegetable,
    name: 'Vegetable salad',
    description: 'Description of the item',
    price: 26.0,
    rate: 4.6,
  },
  { img:borderWhite,
    img1: Eggsalad,
    name: 'Egg vegi salad',
    description: 'Description of the item',
    price: 23.0,
    rate: 4.5,
  },
]

export function SpecialDish() {
  return (
    <>
      <div className='specialContainer'>
        <h4>SPECIAL DISHES</h4>
        <div className='arrowsection'>
          <h1>
            Standout Dishes<br></br>From Our Menu
          </h1>
          <div className='arrow'>
            <img className='arrowdesign1' src={leftarrow} />
            <img className='arrowdesign2' src={rightarrow} />
          </div>
        </div>
        <div className='items'>
          {specialProduct.map((products, index) => (
            <div key={index} className='itemcard'>
              <div className='itmeimg'>
                <img className='itemimg0' src={products.img} />
                <img className='itemimg1' src={products.img1} />
              </div>

              <h2>{products.name}</h2>
              <p>{products.description}</p>
              <div className='price-rate'>
                <h2><span>$</span>{products.price}</h2>
                <div className='forRate'>
                  <img src={star} />
                  <h3>{products.rate}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
