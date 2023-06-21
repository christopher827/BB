import React from 'react'
import Features from '../components/Features'


function LawmasPartnership() {
  return (
    <div className=" mx-auto flex flex-col items-center py-12 sm:py-24">
    <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-blue font-black leading-7 md:leading-10">
    Lawma's partnership with Schools<br/>
     </h1>
    <p className="text-primary dark:text-secondary opacity-75 md:pr-10 my-6 md:text-lg 2xl:text-xl text-center">
    We recognise the important role of private schools in Lagos State and their contribution to educating future Lagosians. As a result, we are committed to supporting the efforts of private schools to promote awareness and education on the importance of waste reduction and proper waste disposal practices through our Blue Bin Project for schools. Recyclable materials such as paper, cardboard boxes, glass, plastics including pet bottles and food containers are collected for free from participating schools along with an array of benefits highlighted below.
    </p>
    </div>
<Features/>
    </div>
      )
    }

export default LawmasPartnership
