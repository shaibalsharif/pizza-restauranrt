import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Category = () => {
  const [categoryData, setCategoryData] = useState([])
  const base_url = process.env.REACT_APP_BASE_URL
  const navigate= useNavigate()

  useEffect(() => {
    axios.get(`${base_url}/api/categories`)
      .then(res => {
        setCategoryData(res.data);
      })
  }, [])

  const handleCategorySelection = (event, element) => {
     
      navigate(`/menu/${element}`);
  
  }

  return (
    <div className='mx-1'>
      <p className='text-center font-semibold px-1'>PizzaBurg - Shyamoli</p>
      <div className='title'>
          <img src='/pb.png' className='mx-auto' />
        </div>
      <div className='mt-8 px-1 font-semibold'>
        Category
        <div className='flex justify-around flex-wrap'>
          {categoryData.length ? categoryData.map(el => {
            return (<div className='w-[45%] text-center bg-slate-500 mb-2 rounded-lg' onClick={(e)=>{handleCategorySelection(e,el)}}>
              <img src='./brg.png' className='px-2' />
              <p>{el.split("_").join(" ").toUpperCase()}</p>
            </div>

            )
          }) : (<div>No Data</div>)}
        </div>
      </div>
    </div>
  )
}

export default Category