import React from "react";
import pupil from "../assets/malestudent.jpg";

function BeTheLeadingSchool() {
  return (
    <div className=" flex flex-col lg:items-center justify-between  lg:flex-row md:flex-col xl:flex-row pb-[4rem] px-6 lg:px-36 py-[5rem]">
      <div className="">
        <img src={pupil} alt="heroImage" className=" rounded-md lg:w-[40rem]" />
      </div>

      <div className=" mt-3 sm:mt-0">
        <h1 className=" font-bold mb-6 mt-3  text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl">
          Be The Leading School
          <br /> In Your Community
        </h1>

        <div className="flex flex-col ">
          <p className=" text-primary opacity-75 mb-8 max-w-[597px]">
            To become the leading school in your community for sustainability
            and environmental education, join Project Blue Bin
            <br />
            To order your School’s Blue Bin and get registered today! 👇👇
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
    </div>
  );
}

export default BeTheLeadingSchool;
