import React from "react";
import Login from "../Pages/LogIn";
import { motion } from "framer-motion";
import lines from "../assets/linebg.png";
import logo from "../assets/bluebinlogo2.png";

function Hero() {
  return (
    <div className=" relative">
      <div className=" z-[50] ">
        <div className="  px-6 lg:px-36 sm:mb-6 lg:pt-[8rem] pt-[7rem] z-[50] flex items-center gap-x-10 ">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 z-40 ">
              Join Project <span className="">Blue Bins </span> today
            </h1>

            <motion.p className="sm:text-base text-gray-800 text-[12px] mb-2">
              and afford your school access to quality recycling education for
              the next generation of Lagosians.
            </motion.p>
          </div>
          <img src={logo} alt="logo" className="w-[9rem]" />
        </div>

        <div className="flex flex-col  w-full px-6 lg:px-36 lg:flex-row md:flex-col xl:flex-row pt-8 sm:items-center">
          <iframe
            src="https://www.youtube.com/embed/VDsOnBMEZ8Y"
            title="YouTube video player"
            className="mb-5 w-full sm:w-10/12 md:w-8/12 xl:w-6/12 aspect-[560/315]  overflow-hidden items-center z-[50]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen=""
            frameborder="0"
          ></iframe>

          <div className=" lg:ml-[5rem] z-[50] flex-col gap-y-4">
            <Login />
          </div>
        </div>
      </div>

      <div className="absolute top-[10rem] right-[-50px] w-[55rem] z-30 opacity-75">
        <img src={lines} alt="linebg" />
      </div>
    </div>
  );
}
export default Hero;
