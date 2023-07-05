import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ContactImg from "../assets/contact.svg";

function ContactUs() {
  return (
    <div>
      <section className=" px-6 lg:px-36 py-[5rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 sm:items-center ">
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

          <div className="select-none hidden sm:flex">
            <img src={ContactImg} alt="contact" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
