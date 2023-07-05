import React from "react";
import AnimatedText from "./AnimatedText";
import bin2 from "../assets/bin2.jpg";

function WhyRecycle() {
  return (
    <div className=" flex flex-col mt-[5rem]  sm:flex-row-reverse justify-between  items-center  py-[5rem]  pb-[4rem] px-6 lg:px-36 bg-[#a8c8ff25]">
      <div className=" lg:flex justify-center  flex-col  sm:ml-10">
        <AnimatedText
          text={"Why Recycle?"}
          className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5x font-bold leading-7 md:leading-10"
        />

        <div className=" ">
          <p className="text-primary dark:text-secondary opacity-75 md:pr-10 my-6 md:text-lg 2xl:text-base ">
            As our population continues to grow, so does our consumption of
            resources and the waste generated. Recycling plays a critical role
            in reducing the impact of waste on the environment. It helps to
            conserve natural resources, reduce pollution and energy consumption,
            and mitigate climate change. By reusing resources, we can also
            create jobs and stimulate economic growth in communities. However,
            to achieve effective resource reuse and recycling, it is essential
            to raise consciousness and provide instruction on the significance
            of minimizing waste and adopting appropriate waste management
            procedures. At Lawma, we are set to work with all stakeholders to
            ensure a sustainable future for Lagos State.
          </p>
          <div className=" inline-flex ">
            <a href="https://buylawmabin.com">
              <button className=" sm:w-auto bg-[#4383f2] w-full hover:bg-[#3466bd] px-4 py-2 rounded-md text-white font-semibold     transition-all ease-in-out duration-100">
                Order Bin
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className=" hidden lg:flex">
        <img src={bin2} alt="binimg" className=" rounded-md lg:w-[250rem]" />
      </div>
    </div>
  );
}

export default WhyRecycle;
