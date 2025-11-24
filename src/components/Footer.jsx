import React from 'react'
import logo from '../assets/Logo.png'
import buttonpng from '../assets/Button.png'
import icon from '../assets/Icon1.png'
import img from '../assets/in.png'


const Footer = () => {
  return (
    <footer className='footer'>

       <div className='flex2'>
         <div className="email">
          <img className='cla' src={logo} alt="" />
          <p>📩 hello@skillbridge.com</p>
          <p>📞 +91 91813 23 2309</p>
          <p>📍Somewhere in the World</p>


         </div>

        <div className="mediaa">
           <div className="text-footer">
            <h1>Home</h1>
            <p>Benefits</p>
            <p>Our Courses</p> 
            <p>Our Testimonials</p>
            <p>Our FAQ</p>

            

         </div>

         <div className="text-footer2">
          <h1>About Us</h1>
          <p>Company</p>
          <p>Achievements</p>
          <p>Our Goals</p>

         </div>

         <div className="social">
          <h1>Social Profiles</h1>
         <div className="max">
           <img className='cla' src={buttonpng} alt="" />
          <img className='cla' src={icon} alt="" />
          <img className='cla' src={img} alt="" />
         </div>


         </div>
        </div>

       </div>

       <hr className='hr'/>

       <p className='p1'>© 2023 Skillbridge. All rights reserved.</p>

    </footer>
  )
}

export default Footer
