import React from 'react'

function Box({ children }) {
    return (
    <div className="transition cursor-pointer text-center w-48 rounded-2xl bg-primary p-6 text-secondary dark:bg-secondary dark:text-primary ring-8 ring-primary/20 dark:ring-secondary/20 text-xl hover:scale-[0.98] flex-shrink-0 flex flex-col gap-4 justify-evenly m-4 sm:m-6 font-bold">
     {children}
    </div>
    );
      }
    

function SchoolAchievements() {
  return (
<>
<div className="mx-auto flex flex-col items-center py-12 sm:py-24">
<div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-blue font-black leading-7 md:leading-10">
Benefits of Joining Project Blue Bins    </h1>
<p className="text-primary dark:text-secondary opacity-75 md:pr-10 my-6 md:text-lg 2xl:text-xl text-center">
 <strong>Schools:</strong><br/> achieve global recognition as environmental ambassadors by establishing a recycling club which also generates additional income 
.</p>

 <p className="text-primary dark:text-secondary opacity-75 md:pr-10 my-6 md:text-lg 2xl:text-xl text-center">
 <strong>Students:</strong><br/>learn about the importance of waste reduction and proper waste disposal practices whilst having fun
</p>

 <p className="text-primary dark:text-secondary opacity-75 md:pr-10 my-6 md:text-lg 2xl:text-xl text-center">
 <strong>Teachers,Student and Parents:</strong><br/>stands the chance to win exciting prizes such as laptops, tablets and cash worth over N1,000,000 in our annual School’s Recycling Competition.</p>

</div>

</div>

</>
 )
}

export default SchoolAchievements
