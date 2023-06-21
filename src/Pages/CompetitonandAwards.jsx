import React from 'react'
import Guidelines from '../components/Guidelines'
import TipsandTricks from '../components/TipsandTricks'
import PrizesForGrabs from '../components/PrizesForGrabs'

function CompetitonandAwards() {
  return (
    <>
<div className=" mx-auto flex flex-col items-center py-12 sm:py-24">
<div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-blue font-black leading-7 md:leading-10">
The BlueBin Annual School<br/>Recycling Competitons </h1>
<p className="text-primary dark:text-secondary opacity-75 md:pr-10 my-6 md:text-lg 2xl:text-xl text-center">
Join us for "The BlueBin Annual School Recycling Competitions"! Mark your calendars for [date] as students compete to collect the highest amount of recyclables. Show your creativity with posters and displays, attend workshops, and enjoy interactive games. Let's make a difference and create a sustainable future together!.</p>
</div>

<Guidelines/>
<PrizesForGrabs/>
<TipsandTricks/>
</div>
    </>
  )
}

export default CompetitonandAwards
//The BlueBin Annual School<br/> Recycling Competitons