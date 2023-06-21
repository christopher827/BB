import React from 'react'
import FeedbackImg from "../assets/feedback.svg"

function FeedBack() {
    const handleClick=(e)=>{
e.preventDefault();
    }
  return (
<section className="pt-24 md:px-28 text-blackOlive pb-20">
<div>
<h1 className="text-5xl font-nunito px-5 leading-normal">Send us your feedback</h1>
        </div>
<div className="grid grid-cols-1 md:grid-cols-2 justify-items-center w-full gap-4">
<div className="select-none p-5">
<img src={FeedbackImg} width="500px" alt="" />
</div>
<div>
<form className="w-full max-w-lg p-6">
<div className="flex flex-wrap -mx-3 md:mb-6">
<div className="w-full px-3 mb-6 md:mb-0">
<label className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >First Name<input name="firstName" className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="first-name" type="text"
                      placeholder="Your First Name"
                    />
                  </label>
                  <label
                    className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    
                  >
                    Last Name
                    <input
                      className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-xl py-3 mb-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="last-name"
                      type="text"
                      placeholder="Your Last Name"
                    />
                  </label>
                  <label
                    className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                    <input
                      className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-xl py-3 mb-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="email"
                      type="email"
                      placeholder="Your Email Address"
                    />
                  </label>
                  <label
                    className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   
                  >
                    Feedback
                    <textarea
                      name="message"
                      className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="feedback"
                      type="text"
                      placeholder="Your Suggestions here please"
                      style={{ height: '10rem' }}
                    />
                  </label>
</div>
</div>
<button className="bg-blue-500 rounded-xl w-full  text-white font-bold py-2 px-4 focus:shadow-outline   shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105" onClick={handleClick}>Send</button>
</form>
</div>
</div>
</section>
  )
}

export default FeedBack
