import React from "react";
import AnimatedText from "./AnimatedText";
import school from "../assets/schools.jpg"

function LawmasPartnership() {
  return (
    <div className=" flex flex-col-reverse  lg:flex-row  py-[5rem] justify-between items-center  pb-[4rem] px-6 lg:px-36">
      <div className=" lg:flex flex-col mt-[30px] l:mt-0">
        <AnimatedText
          text={"Lawma's partnership with Schools"}
          className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl  font-bold leading-7 md:leading-10 "
        />
        <p className=" dark:text-secondary opacity-75 md:pr-10 my-6">
          We recognise the important role of private schools in Lagos State and
          their contribution to educating future Lagosians. As a result, we are
          committed to supporting the efforts of private schools to promote
          awareness and education on the importance of waste reduction and
          proper waste disposal practices through our Blue Bin Project for
          schools. Recyclable materials such as paper, cardboard boxes, glass,
          plastics including pet bottles and food containers are collected for
          free from participating schools along with an array of benefits
          highlighted below.
        </p>
      </div>

      <div>
        <img src={school} alt="schoolimg" className=" rounded-md lg:w-[180rem] " />
      </div>
    </div>
  );
}
export default LawmasPartnership;
