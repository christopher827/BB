import React from 'react'
import AnimatedText from './AnimatedText';
import { motion } from 'framer-motion';

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
<div className=" mx-auto flex flex-col items-center py-12 sm:py-12">
    <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  sm:mb-10">
 <AnimatedText text="What is Project Blue Bin All About?" className="font-bold mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-blue  leading-7 md:leading-10" />
<motion.p className="text-primary dark:text-secondary opacity-75 md:pr-10 my-6 md:text-lg 2xl:text-xl text-center"         variants={textVariants}
        initial="initial"
        animate="animate">
Project Blue Bin is a recycling initiative for Schools, by Lawma Academy and is designed to promote waste reduction and proper waste disposal practices among private schools in Lagos State. 
</motion.p>
</div>
  
    </div>
  )
}

export default WhatIs
