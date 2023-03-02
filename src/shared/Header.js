import React from 'react'

const Header = ({ Title = "PROJECT NAME" }) => {


  return (
    <div className='text-center bg-[#ccc]'>
      <div className='absolute '>
        <a href='/'>
          {'Logo'}
        </a>

      </div>

      <div className='text-3xl text-[#000]'>{Title}</div>
    </div>
  )
}

export default Header