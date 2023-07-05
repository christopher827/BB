import React from "react";
import Bin from "../assets/Bin1.png";
import AnimatedText from "./AnimatedText";
import {TbSchool} from "react-icons/tb"
import {PiStudentBold, PiChalkboardTeacherBold} from "react-icons/pi"


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
      <div className="flex flex-col mt-[5rem]   py-[4rem] px-6 lg:px-36 bg-[#a8c8ff25]">
        <div className="lg:flex flex-col  mb-5 sm:mb-10">
          <AnimatedText
            text={"Benefits of Joining Project Blue Bins"}
            className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl  text-blue font-bold leading-7 md:leading-10"
          />

          <div className="flex flex-wrap justify-start  w-full pt-12  ">
            <div className=" flex flex-col max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-xl px-6 py-4 bg-[#ffffffad] shadow-[10px_32px_71px_1px_rgba(0,0,0,0.02)]">
              <div className=" flex items-center gap-x-2">
                <span className=" h-[30px] w-[30px] bg-[#4483f3] flex justify-center items-center">
                  <TbSchool color="white" size={20} />
                </span>

                <strong>Schools</strong>
              </div>
              <p className="text-primary dark:text-secondary opacity-75 md:pr-10 my-6 md:text-sm 2xl:text-base ">
                achieve global recognition as environmental ambassadors by
                establishing a recycling club which also generates additional
                income .
              </p>
            </div>

            <div className=" flex flex-col max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-xl px-6 py-4 bg-[#ffffffad] shadow-[10px_32px_71px_1px_rgba(0,0,0,0.02)]">
              <div className=" flex items-center gap-x-2">
                <span className=" h-[30px] w-[30px] bg-[#6dc1a0] flex justify-center items-center">
                  <PiStudentBold color="white" size={20}/>
                </span>

                <strong>Students</strong>
              </div>
              <p className="text-primary dark:text-secondary opacity-75 md:pr-10 my-6 md:text-sm 2xl:text-base ">
                learn about the importance of waste reduction and proper waste
                disposal practices whilst having fun
              </p>
            </div>

            <div className="flex flex-col max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-xl px-6 py-4 bg-[#ffffffad] shadow-[10px_32px_71px_1px_rgba(0,0,0,0.02)]">
              <div className=" flex items-center gap-x-2">
                <span className=" h-[30px] w-[30px] bg-[#ffc147] flex justify-center items-center">
                  < PiChalkboardTeacherBold color="white" size={20}/>
                </span>

                <strong>Teachers,Student and Parents</strong>
              </div>
              <p className="text-primary dark:text-secondary opacity-75 md:pr-10 my-6 md:text-sm 2xl:text-base">
                stands the chance to win exciting prizes such as laptops,
                tablets and cash worth over N1,000,000 in our annual School’s
                Recycling Competition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SchoolAchievements;
