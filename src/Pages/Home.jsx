import React from 'react';
import ContactUs from "../Pages/ContactUs"
import OrderABin from "../Pages/OrderABin"
import OurPartners from './OurPartners';
import Hero from '../components/Hero';
import Features from '../components/Features';
import BeTheLeadingSchool from '../components/BeTheLeadingSchool';
import SchoolAchievements from '../components/SchoolAchievements';
import WhyRecycle from '../components/WhyRecycle';
import WhatIs from "../components/WhatIs";
import LawmasPartnership from '../components/LawmasPartnership';

function Home() {
  
  return(
    <>
<Hero/>
<SchoolAchievements/>
<WhatIs/>
<WhyRecycle/>
<LawmasPartnership/>
<Features/>
<BeTheLeadingSchool/>
<OrderABin/>
<ContactUs/>
<OurPartners/>
    </>
  )}
export default Home;