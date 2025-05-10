import React from 'react'

const body = () => {
  return (
    <div className='-space-y-4 lg:flex'>
      <div className='flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end'>
        <img src="./assests/Blue-Shape.svg" alt="img" className='-rotate-45 h-64 md:h-72 lg:h-[400px]'/>
        <img src="./assests/Pink-Shape.svg" alt="img" className='absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]'/>
        <img src="./assests/Purple-Shape.svg" alt="img" className='absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]'/>
        <img src="./assests/Hero-Model.png" alt="img" className='absolute h-64 md:h-72 lg:h-[400px]'/>
      </div >
      <div className='lg:flex-1 lg:order-1'>
       <h1 className='font-playfair text-5xl font-bold leading-tight'>Host your website in less than 5 minutes.</h1>
       <p className='font-lato text-gray-400'>With Hosterr, get your website up and running in no less than 5 minutes with the most competitive pricing packages available online.</p>
       <form action="" className='flex flex-col gap-4 md:flex-row'>
        <input className='rounded-md px-4 py-3 placeholder:text-gray-400' type="Email" placeholder='Enter Email Address...'/>
        <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
       </form>
      <div className='flex gap-2'>
        <img src="./assests/Checkmark.svg" alt="check"/>
        <p className='font-lato text-gray-400'>No Spam,ever.Unsubscribe anytime</p>
      </div>
    </div>
  </div>
  )
}

export default body