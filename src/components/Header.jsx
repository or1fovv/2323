import React from 'react'
import "../App.css"
import logo from "../assets/Logo.png"
import Button from './Button'
const Header = () => {
  return (
    <header className='mycon' >
      <div className='div  bg-[#FF9500] flex justify-center text-[white] items-center gap-[23px] h-[55px]  '>
        <h1>Free Courses 🌟 Sale Ends Soon, Get It Now </h1>

      </div>
      <nav className='navbar'>
        <div className="nav-left">
          <img src={logo} alt="" />
        </div>

        <ul className="nav-center">
          <li><a href="#">Home</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#" className="contact">Contact</a></li>
        </ul>

        <div className="nav-right">
          <Button />
        </div>
       






      </nav>
    </header>

  )
}

export default Header
