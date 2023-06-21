import React from 'react'
import WhyRecycle from '../components/WhyRecycle'
import LawmasPartnership from '../components/LawmasPartnership'

function About() {
  return (
<div>
  
<div className=" mx-auto flex flex-col items-center py-12 sm:py-24">
<div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-blue font-black leading-7 md:leading-10">
What is Project Blue Bin All About?<br/>
 </h1>
<p className="text-primary dark:text-secondary opacity-75 md:pr-10 my-6 md:text-lg 2xl:text-xl text-center">
Project Blue Bin is a recycling initiative for Schools, by Lawma Academy and is designed to promote waste reduction and proper waste disposal practices among private schools in Lagos State. 
</p>
</div>
<WhyRecycle/>
<LawmasPartnership/>
</div>
    </div>
  )
}

export default About
