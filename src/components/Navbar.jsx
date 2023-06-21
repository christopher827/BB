import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"

function Navbar() {
const [nav,setNav]=useState(false)
const navigate=useNavigate()


const handleNav=()=>{
setNav(!nav)
  }
  return (
<div className='rounded-div flex items-center justify-between h-20 font-bold mt-5'>
<Link to='/'>
<h1 className='text-2xl'>BlueBin</h1>
</Link>
<div className='hidden md:block'>
<Link to="/" className='p-4'>Home</Link>
    <Link to="/about" className='p-4'>About Us</Link>
    <Link to="/orderabin" className='p-4'>Order A Bin</Link>
    <Link to="/contactus" className='p-4'>Contact Us</Link>
    <Link to="/ourpartners" className='p-4'>Our Partners</Link>

</div>

  <div>


  </div>

  <div className='hidden md:block'>
  <Link to='/login' className='bg-blue-600 text-white px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl'>Log In</Link>
  </div>
  


<div className='block md:hidden cursor-pointer z-10' onClick={handleNav}>
  {nav ? <AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
</div>

{/*Mobile menu*/}
<div className={nav?'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-white ease-in duration-300 z-10':'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'}>
<ul className='w-full p-4'>
<li className='border-b py-6' onClick={handleNav}><Link to="/">Home</Link></li>
<li className='border-b py-6' onClick={handleNav}><Link to="/about">About Us</Link></li>
<li className='border-b py-6' onClick={handleNav}><Link to="/ourpartners">Our Partners</Link></li>
<li className='border-b py-6' onClick={handleNav}><Link to="/orderabin">Order A Bin</Link></li>
<li className='border-b py-6' onClick={handleNav}><Link to="/contactus">Contact</Link></li>

</ul>

<div className='flex flex-col w-full p-4'>
<Link to="/login"><button onClick={handleNav} className='w-full my-2 text-white p-3 bg-blue-600 border border-secondary rounded-2xl shadow-xl'>Log In</button></Link>
</div>

</div>
</div>
  )
}
export default Navbar