import React from 'react'

const footer = () => {
  return (
    <div className='flex flex-col gap-12  md:flex md:flex-row md:justify-between'>
      <ul className='flex gap-16 font-lato text-gray-400'>
        <li>
          <a href="*">Facebook</a>
        </li>
        <li>
          <a href="*">Instagram</a>
        </li>
        <li>
          <a href="*">Twitter</a>
        </li>
      </ul>
      <div className='flex gap-2'>
        <img src="./assests/Help-Avatar.svg" alt="avat"/>
        <div>
        <p className='font-playfair font-thin'>Have any Questions?</p>
        <a href="" className='font-lato font-medium'>Talk to a specialist</a>
      </div>
      </div>
    </div>
  )
}

export default footer