import React from "react";
import { useState } from "react";
import logo from '../assets/Images/Logo.svg'
import facebook from '../assets/Images/facebook.svg'
import instra from '../assets/Images/🦆 icon _instagram_.svg'
import twitter from '../assets/Images/🦆 icon _twitter_.svg'
import youtube from '../assets/Images/🦆 icon _youtube_.svg'
import copyright from '../assets/Images/copyright.svg'
import './footer.css'
export function Footer() {
    return (
      <>
        <div className='footercontainer'>
          <div className='footercontainer1'>
            <div className='about'>
              <img src={logo} />
              <p>
                Savor the artistry where <br></br>every dish is a culinary<br></br> masterpiece
              </p>
            </div>
            <div className='links'>
              <h4>Useful links</h4>
              <p>About us</p>
              <p>Events</p>
              <p>Blogs</p>
              <p>FAQ</p>
            </div>
            <div className='menu'>
              <h4>Main Menu</h4>
              <p>Home</p>
              <p>Offers</p>
              <p>Menus</p>
              <p>Reservation</p>
            </div>
            <div className="contact-list">
              <h4>Contact Us</h4>
                        <p>example@email.com</p>
              <p>+64 958 248 966</p>
              <p>Social media</p>
            </div>
          </div>
          <div className='footercontainer2'>
            <div className='icon'>
              <img className='iconimg1' src={facebook} />
              <img className='iconimg2' src={instra} />
              <img className='iconimg3' src={twitter} />
              <img className='iconimg4' src={youtube} />
            </div>
            <img className="copy" src={copyright} />
          </div>
        </div>
      </>
    )
}
