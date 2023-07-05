import React from "react";
import bluebin from "../assets/bluebin.jpg"

function OrderABin() {
  return (
    <div className=" flex flex-col lg:flex-row justify-between lg:items-center px-6 lg:px-36 py-[5rem] bg-[#a8c8ff25]">
      <div className=" lg:flex justify-between flex-col mb-5 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          Order A Bin Today!!
        </h1>
        <p className="text-primary  dark:text-secondary opacity-75 md:pr-10 my-4 md:text-base 2xl:text-xl">
          Order for your Blue Bin today to make a positive impact on the
          environment and society and become Recycling Ambassadors for a Cleaner
          Lagos.
        </p>
        <div className=" inline-flex ">
          <a href="https://buylawmabin.com">
            <button className=" sm:w-auto bg-[#4383f2] w-full hover:bg-[#3466bd] px-4 py-2 rounded-md text-white font-semibold     transition-all ease-in-out duration-100">
              Order Bin
            </button>
          </a>
        </div>
      </div>

      <img src={bluebin} alt="bin" className=" rounded-md sm:w-[35rem]" />
    </div>
  );
}

export default OrderABin;
//#fafbfc
