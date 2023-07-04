import React from 'react'
import { Link } from 'react-router-dom'

function LogIn() {
  function handleClick(e){
    e.preventDefault()
    alert("You clicked the login button")
  }
  return (
    <div>
<div className="font-sans">

<div className=" sm:max-w-sm ">
<div className=" rounded-3xl  px-6 py-4 bg-gray-100 shadow-md mt-10 ">

<label htmlFor="" className="block mt-3 text-m text-gray-900 text-center font-semibold">
You get your login details once you order a bin
  </label>

<form method="#" action="#" className="mt-10">
<div>
<input type="text" placeholder="Username" className="mt-1 block w-full outline-none border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
            </div>

<div className="mt-7">
<input type="password" placeholder="Password" className="mt-1 block w-full border-none outline-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
            </div>

<div className="mt-7">
<button onClick={handleClick} className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
Login
</button>
</div>

<div className="flex mt-7 items-center text-center">
<hr className="border-gray-300 border-1 w-full rounded-md" />
<hr className="border-gray-300 border-1 w-full rounded-md" />
            </div>

<div className="flex mt-7 justify-center w-full">
<Link to="/orderabin">
<button  className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
Order a Bin                </button>
              </Link>
</div>
</form>

</div>
</div>
</div>  
</div>)
}

export default LogIn
