import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/bluebinlogo2.png";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Footer(params) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-3 md:py-8 rounded-2xl px-14  w-full">
      <div className="flex flex-col items-start">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            {" "}
            Contact Us{" "}
          </h1>
        </div>
        <div className="sm:py-3 pt-4">
          <p className="text-gray-700">
            <span className="font-semibold leading-loose text-lg">
              Our Address:
            </span>
            <br />

            <span className="font-normal">
              3, Iddo-Yard, Ijora Olopa, <br /> Lagos State
            </span>
          </p>
        </div>

        <div className="sm:py-3 pt-4">
          <a href="tel:+234 8184 231609">
            <div className="flex items-center text-gray-700">
              <FaPhoneAlt />
              &nbsp; 08184231609, 09133889535, 08184231592
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

      <div className=" flex justify-between w-full mt-7">
        <div className="flex items-center ">
          <img src={logo} alt="logo" className=" w-[4rem] md:w-[6rem]" />
        </div>

        <div className="flex items-center space-x-4 ">
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
              <span className="hidden md:inline-block font-bold">
                Customer Support
              </span>
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <i className="far fa-envelope text-xl"></i>
            <a href="mailto:bluebinproject@gmail.com">
              <span className="hidden md:inline-block font-bold">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
