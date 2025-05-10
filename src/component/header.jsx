import React from 'react'
import { FaBars } from "react-icons/fa";
const header = () => {
  return (
    <div className="flex justify-between">
        <div className="flex items-center justify-center gap-2">
            <img src="./assests/Logo.svg" alt="l1"/>
            <button className=".h-14 bg-gradient-to-r from-orange-300 to-pink-400 rounded-full h-6 px-2.5 text-xs text-white">Hosterr is hiring</button>

        </div>
        <ul className='hidden lg:flex items-center justify-between font-lato text-gray-400 gap-6'>
          <li><a href="#">Plans</a></li>
          <li><a href="#">Find Domain</a></li>
          <li><a href="#">Why hoster</a></li>
        </ul>
        <div className='hidden lg:flex justify-center items-center font-lato gap-6'>
          <a href="#" className='text-gray-400'>Sign in</a>
          <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
        </div>
        <div className='lg:hidden'>
           <FaBars />
        </div>
    </div>
  )
}

export default header
