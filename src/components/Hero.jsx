import React from 'react'
import Login from "../Pages/LogIn"
import { motion } from 'framer-motion'

function Hero() {
  return (
    <>
<h1 className="text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold  mb-6">Join Project <span className="text-blue-600"> Blue Bins</span> today</h1>
<motion.p className="text-xl text-center text-white mb-2">and afford your school access to quality recycling education for the next generation of Lagosians.</motion.p>
   
<div className='flex flex-col justify-around w-full px-14 lg:flex-row md:flex-col xl:flex-row pt-8'>
<iframe src="https://www.youtube.com/embed/VDsOnBMEZ8Y" title="YouTube video player" className="mb-5 w-11/12 sm:w-10/12 md:w-8/12 xl:w-6/12 aspect-[560/315] rounded-xl overflow-hidden items-center" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen="" frameborder="0"></iframe>

<div>
<Login/>
</div>
</div>  

     </>
  )
}
export default Hero