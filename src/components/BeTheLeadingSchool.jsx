import React from 'react'
import pupil from "../assets/pupil1.png"

function BeTheLeadingSchool() {
  return (
    <div className=' flex flex-col items-center justify-around w-full px-24 lg:flex-row md:flex-col xl:flex-row'>

<div className=''>
    <img src={pupil} alt='heroImage' className='max-w-3xl h-auto' />
    </div>


<div className="text-center">
  <h1 className="text-[60px] lg:text-[72px] pt-20 font-bold mb-6 leading-[60px]">
    Be The Leading School<br/> In Your Community
  </h1>

  <div className="flex flex-col items-center">
    <p className="font-medium text-primary opacity-75 mb-2 max-w-[597px]">
      To become the leading school in your community for sustainability and environmental education, join Project Blue Bin<br/>
      To order your School’s Blue Bin and get registered today! 👇👇
    </p>

    <a href="https://buylawmabin.com" className="">
      <button className="p-2 px-6 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-green-300/30 sm:hover:scale-[1.02] transition-all ease-in-out duration-100">
        Click Here
      </button>
    </a>
  </div>
</div>


    </div>
  )
}

export default BeTheLeadingSchool
