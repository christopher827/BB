import React from 'react'
import AnimatedText from './AnimatedText'

function LawmasPartnership() {
  return (
<div className="mx-auto flex flex-col items-center py-12 sm:py-10">
  <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col sm:mb-10">
    <AnimatedText
      text={"Lawma's partnership with Schools"}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-yellow font-bold leading-7 md:leading-10"
    />
    <p className="text-blue-500 dark:text-secondary opacity-75 md:pr-10 my-6 md:text-lg 2xl:text-xl text-center">
      We recognise the important role of private schools in Lagos State and their contribution to educating future Lagosians. As a result, we are committed to supporting the efforts of private schools to promote awareness and education on the importance of waste reduction and proper waste disposal practices through our Blue Bin Project for schools. Recyclable materials such as paper, cardboard boxes, glass, plastics including pet bottles and food containers are collected for free from participating schools along with an array of benefits highlighted below.
    </p>
  </div>
</div>
      )
    }
export default LawmasPartnership