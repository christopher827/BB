import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"

function Footer(params) {
  return(
<div className='flex flex-col md:flex-row justify-between items-center my-12 py-8 border rounded-2xl shadow-xl px-2 max-w-[1140px] w-full mx-auto'>
  <div className="flex items-center mb-4 md:mb-0">
    <h1 className="text-2xl font-bold">Blue Bin</h1>
  </div>

  <div className="flex items-center space-x-4 mb-4 md:mb-0">
    <a href="#" className="text-primary hover:text-primary-dark">
      <i className="fab fa-facebook-f text-xl"></i>
    </a>
    <a href="#" className="text-primary hover:text-primary-dark">
      <i className="fab fa-twitter text-xl"></i>
    </a>
    <a href="#" className="text-primary hover:text-primary-dark">
      <i className="fab fa-instagram text-xl"></i>
    </a>
  </div>

  <div className="flex items-center space-x-4">
    <div className="flex items-center space-x-2">
      <i className="fas fa-phone"></i>
      <a href="tel:+234 8184 231609">
<span className="hidden md:inline-block font-bold">Customer Support</span></a>
    </div>
    <div className="flex items-center space-x-2">
      <i className="far fa-envelope text-xl"></i>
<a href="mailto:bluebinproject@gmail.com"><span className="hidden md:inline-block font-bold">Email</span></a>
    </div>
  </div>
</div>

  )
}
export default Footer;
