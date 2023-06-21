import React from 'react'
import InstructionsandTutorials from '../components/InstructionsandTutorials'
import Gallery from '../components/gallery/Gallery'

function DIYSchoolBeautification() {
  return (
<div className=" mx-auto flex flex-col items-center py-12 sm:py-24">
<div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-blue font-black leading-7 md:leading-10">
DIY School Beautification
 </h1>
<p className="text-primary dark:text-secondary opacity-75 md:pr-10 my-6 md:text-lg 2xl:text-xl text-center">
DIY(Do It Yourself) School Beautification using recycled materials means making your school look better by using things that would have been thrown away. Instead of buying new decorations, you can use items like plastic bottles, cardboard, newspapers, and cans to create cool and useful things. It's a way of being creative, saving money, and helping the environment by reusing things that might have been thrown away. It makes your school look nicer and teaches everyone the importance of recycling and reducing waste. 
</p>


</div>
<InstructionsandTutorials/>
<Gallery/>
</div>
  )
}

export default DIYSchoolBeautification
