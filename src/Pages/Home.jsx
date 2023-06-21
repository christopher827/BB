import React, { useState, useEffect } from 'react';
import Bin from '../assets/wastebin7.jpg';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image4 from '../assets/img4.jpg';
import image5 from '../assets/img5.jpg';

import SchoolAchievements from "../components/SchoolAchievements"
import HomeVideoClip from "../components/HomeVideoClip"
import LeadingSchool from "../components/LeadingSchool"

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2,image4,image5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
<div className="relative h-screen mt-9">
  <img
    src={images[currentImageIndex]}
    alt="Image"
    className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
  />
  <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">Join Project <span className="text-blue-600"> Blue Bins</span> today</h1>
    <p className="text-xl text-white mb-2">and afford your school access to quality recycling education for the next generation of Lagosians.</p>
    <a href="https://buylawmabin.com/" className="p-2 px-6 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-green-300/30 sm:hover:scale-[1.02] transition-all ease-in-out duration-100 scale-75 -mr-6 md:mr-0 sm:scale-100">Get Started</a>
  {/*text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-blue font-black leading-7 md:leading-10 */}
  </div>
</div>
<SchoolAchievements/>
<HomeVideoClip/>
<LeadingSchool/>
</>
);
}

export default Home;
