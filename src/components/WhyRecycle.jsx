import React from 'react'
import AnimatedText from './AnimatedText'

function WhyRecycle() {
  return (
<div className="mx-auto flex flex-col items-center py-12 sm:py-2">
  <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col ">
<AnimatedText text={"Why Recycle?"} className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-blue font-bold leading-7 md:leading-10'/>
    <p className="text-primary dark:text-secondary opacity-75 md:pr-10 my-6 md:text-lg 2xl:text-xl text-center">
      As our population continues to grow, so does our consumption of resources and the waste generated. Recycling plays a critical role in reducing the impact of waste on the environment. It helps to conserve natural resources, reduce pollution and energy consumption, and mitigate climate change. By reusing resources, we can also create jobs and stimulate economic growth in communities. However, to achieve effective resource reuse and recycling, it is essential to raise consciousness and provide instruction on the significance of minimizing waste and adopting appropriate waste management procedures. At Lawma, we are set to work with all stakeholders to ensure a sustainable future for Lagos State.
    </p>
    <a href="https://buylawmabin.com">
      <button className="w-full sm:w-auto p-2 px-6 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-green-300/30 sm:hover:scale-[1.02] transition-all ease-in-out duration-100">
        Order Bin
      </button>
    </a>
  </div>
</div>
    )
}

export default WhyRecycle
