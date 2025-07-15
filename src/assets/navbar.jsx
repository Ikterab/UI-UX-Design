import React from "react";
import './navbar.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from '../assets/Images/Logo.svg'
import Search from '../assets/Images/🦆 icon _search_.svg'
import Bag from '../assets/Images/fi-rr-shopping-bag.svg'
import Phone from '../assets/Images/fi-rr-phone-call.svg'
import arrow from '../assets/Images/Group 2.svg'
import menu from '../assets/Images/Menu.svg'
import cross from '../assets/Images/corssicon.svg'
// const [sidebaropen, setSidebaropen] = useState(false)

export function Navbar() {
const [sidebaropen, setSidebaropen]=useState(false)
  return (
    <div className='navbar'>
      <ul className={`sidebar ${sidebaropen ? 'show' : ' '}`}>
        <div className='sideimg'>
          <li>
            <img className='logo' src={Logo} alt='logo' />
          </li>
          <li>
            <img
              src={cross}
              width='100%'
              onClick={() => setSidebaropen(false)}
            />
          </li>
        </div>

        <li>
          <Link  to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link  to='/menu'>
            Menu
          </Link>
        </li>
        <li>
          <Link  to='/service'>
            Services
          </Link>
        </li>
        <li>
          <Link  to='/offers'>
            Offers
          </Link>
        </li>
      </ul>
      {sidebaropen && (
        <div className='colorDrop' onClick={() => setSidebaropen(false)}></div>
      )}
      <div className='logo-conatiner'>
        <img
          className='hideicon'
          src={menu}
          onClick={() => setSidebaropen(true)}
        />
        <img className='logo' src={Logo} alt='logo' />
      </div>

      <ul className='nav-links'>
        <li><Link  to='/'>Home</Link> </li>
        <li className='li_1'><Link  to='/menu'>Menu</Link><img src={arrow} /></li>
        <li className='li_1'><Link  to='/service'>Services</Link> <img src={arrow} /></li>
        <li><Link  to='/offers'>Offers</Link></li>
      </ul>

      <div className='search-box'>
        <input type='text' />
        <img src={Search} />
        <div className='circle'>
          <img src={Bag} />
          <p>8</p>
        </div>

        <div className='contact'>
          <img className='phone' src={Phone} />
          <p>Contact</p>
        </div>
      </div>
    </div>
  )
}