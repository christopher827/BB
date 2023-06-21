import React from 'react'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import ContactImg from '../assets/contact.svg'
import FeedbackImg from "../assets/feedback.svg"

function ContactUs() {
  return (
    <div>
<section className="pt-24 text-blackOlive md:px-28 h-screen">
<div>
<h1 className='text-5xl font-nunito px-5 leading-normal'> Contact Us </h1>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
<div>
<div className="flex flex-col items-start md:p-0 p-5">
<h3 className=" leading-loose text-2xl font-nunito md:pl-5">
Location Information
</h3>
              <div className="sm:p-5 p-0">
                <p className="text-gray-700">
                  <span className="font-bold leading-loose text-lg">
                    Our Address:
                  </span>
                  <br />

                  <span className="font-normal">
                    3, Iddo-Yard, 
                    Ijora Olopa, <br /> Lagos State
                  </span>
                </p>
              </div>

              <div className="sm:px-5 p-0">
                <a href="tel:+234 8184 231609">
                  <div className="flex items-center text-gray-700">
                    <FaPhoneAlt />
                    &nbsp;  08184231609, 09133889535, 08184231592

                  </div>
</a>
<a href="mailto:bluebinproject@gmail.com">
                  <div className="flex items-center text-gray-700">
                    <FaEnvelope />
                    &nbsp; projectbluebin@buylawmabin.com
                  </div>
</a>
</div>
</div>
</div>
<div className="select-none p-5">
<img src={ContactImg} alt="" />
</div>
</div>
</section>

    </div>
  )
}

export default ContactUs
