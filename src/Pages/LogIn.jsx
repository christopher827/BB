import React from "react";
import { Link } from "react-router-dom";

function LogIn() {
  function handleClick(e) {
    e.preventDefault();
    alert("You clicked the login button");
  }
  return (
    <div>
      <div className="font-sans">
        <div className=" sm:max-w-sm ">
          <div className=" rounded-xl px-6 py-4 bg-white shadow-[10px_32px_71px_1px_rgba(0,0,0,0.04)]">
            <label
              htmlFor=""
              className="block mt-3 text-sm text-gray-900 text-center font-medium"
            >
              You get your login details once you order a bin
            </label>

            <form method="#" action="#" className="mt-6">
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  className="mt-1 block w-full border-[1px] border-gray-600 outline-none  bg-gray-100 h-11 rounded-md  hover:bg-blue-100  focus:ring-0 px-3"
                />
              </div>

              <div className="mt-7">
                <input
                  type="password"
                  placeholder="Password"
                  className="mt-1 block w-full border-[1px] border-gray-600  outline-none bg-gray-100 h-11 rounded-md  hover:bg-blue-100  focus:ring-0 px-3"
                />
              </div>

              <div className="mt-7">
                <button
                  onClick={handleClick}
                  className="bg-[#4383f2] hover:bg-[#3466bd] w-full py-3 rounded-md text-white  focus:outline-none transition duration-200 ease-in-out "
                >
                  Login
                </button>
              </div>

              <div className="flex my-1 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <span className=" mx-2">or</span>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>

              <div className="">
                <a href="https://buylawmabin.com">
                  <button className="bg-[#4383f2] w-full hover:bg-[#3466bd] px-4 py-3 rounded-md cursor-pointer text-white  transition duration-200 ease-in-out ">
                    Order a Bin{" "}
                  </button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
