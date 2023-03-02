import React from 'react'

const Category = () => {
  return (
    <div className='mx-1'>
      <p className='text-center font-semibold px-1'>PizzaBurg - Shyamoli</p>
      <div className='mt-8 px-1 font-semibold'>
        Category
        <div className='flex justify-around flex-wrap'>
          <div className='w-[45%] text-center bg-slate-500 mb-2 rounded-lg'>
            <img src='./brg.png' className='px-2'/>
            <p>Pizza</p>
          </div>
          <div className='w-[45%] text-center bg-slate-500 mb-2 rounded-lg'>
            <img src='./brg.png'/>
            <p>Burger & Fries</p></div>
            <div className='w-[45%] text-center bg-slate-500 mb-2 rounded-lg'>
            <img src='./brg.png'/>
            <p>Set Menu</p></div>
        </div>
      </div>
    </div>
  )
}

export default Category