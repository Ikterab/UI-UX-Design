import React from "react";
import { useState } from "react";
import mainDish from '../assets/Images/Group 22.svg'
// import mainDish from '../assets/Images/Group 22.svg'
import Breakfast from '../assets/Images/breakfast.svg'
import Dessert from '../assets/Images/desessart.svg'
import Forbrowse from '../assets/Images/forbrowse.svg'

import './categories.css'
export function Categories() {

   const products = [
      {
        img:  mainDish ,
        type: 'Main Dish',
        total: '86 dishes',
      },
      {
        img:  Breakfast ,
        type: 'Break Fast',
        total: '12 break fast',
      },
      {
        img:  Dessert,
        type: 'Dessert',
        total: '48 dessert',
        },
        {
            img: Forbrowse,
            type: 'Browse All',
            total:'255 items'
        
        }
    ]



    return (
      <>
        <div className="container-category">
          <h4>CUSTOMER FAVORITES</h4>
          <h1>Popular Catagories</h1>

          <div className='categories'>
            {products.map((products, index) => (
              <div key={index} className='product-card'>
                <img src={products.img} />
                <h3>{products.type}</h3>
                <p>({products.total})</p>
              </div>
            ))}
          </div>
        </div>
      </>
    )
}