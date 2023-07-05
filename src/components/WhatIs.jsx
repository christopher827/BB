import React from "react";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
import bin from "../assets/bins.jpg";
import {FaRecycle , FaTrash,} from "react-icons/fa"
import { FaHandsHolding} from "react-icons/fa6";
const textVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

function WhatIs() {
  return (
    <div className=" mt-[5rem]  flex flex-col lg:flex-row  sm:py-10 pb-[1rem] px-6 lg:px-36 items-center justify-between">
      <div className=" lg:flex justify-center  flex-col  sm:mb-10">
        <AnimatedText
          text="What is Project Blue Bin All About?"
          className="font-bold mt-10 text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl lg:w-[80%]   leading-7 md:leading-10"
        />
        <motion.p
          className="text-primary dark:text-secondary opacity-75 md:pr-10 my-6 md:text-lg 2xl:text-base  "
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          Project Blue Bin is a recycling initiative for Schools, by Lawma
          Academy and is designed to promote waste reduction and proper waste
          disposal practices among private schools in Lagos State.
        </motion.p>
      </div>
      <div className=" relative">
        <img src={bin} alt="" className=" lg:w-[70rem] rounded-md" />
        <div className=" max-[1300px]:hidden">
          <span className=" absolute h-[80px] w-[80px] flex justify-center items-center bg-[#ffa2bc] bottom-[10rem] right-[-3rem] shadow-[10px_32px_71px_1px_rgba(0,0,0,0.02)]">

            <FaRecycle color=" white" size={40}/>
          </span>
          <span className=" absolute h-[80px] w-[80px] rounded-full flex justify-center items-center bg-[#ffc147] bottom-[80px] right-[80px] shadow-[10px_32px_71px_1px_rgba(0,0,0,0.02)]">

          <FaTrash color=" white" size={35}/>
          </span>
          <span className=" absolute h-[80px] w-[80px] rounded-lg flex justify-center items-center bg-[#4483f3] bottom-[-60px] right-[3px] shadow-[10px_32px_71px_1px_rgba(0,0,0,0.02)]">

      <FaHandsHolding size={40} color="white" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default WhatIs;
