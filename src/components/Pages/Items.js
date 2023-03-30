import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHref, useNavigate } from 'react-router-dom'

const Items = () => {

  const base_url = process.env.REACT_APP_BASE_URL
  const category = useHref().split('/')[useHref().split('/').length - 1]
  const [items, setItems] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${base_url}/api/menu?category=${category}`)
      .then(res => {
        setItems(res.data);
      })
  }, [])


  const handleItem = (item) => {
    console.log(item);
    navigate(`/${item.category}/${item.id}`)

  }


  return (<div className='text-center items-center'>
    <div className='title'>
          <img src='/pb.png' className='mx-auto' />
        </div>
    {items && items.map(el => {
      return (<div className=' mx-auto p-2 mb-2 text-center  w-[45%] bg-[#f2f2f2] rounded-lg shadow-md border-4 border-b-[#a1a0a0]'
        onClick={() => { }}>
        <img src={'/brg.png'} className=' h-20 rounded-xl shadow-sm mb-1' />
        <p className='text-xs font-semibold'>{el.name}</p>
        <p className='px-2 text-xs truncate'>{el.description}</p>
        <div className='flex justify-between items-center'>
          <div>
          </div>
          <button onClick={() => { handleItem(el) }} className='text-xs px-2 py-1 rounded-lg bg-green-500'>Add</button>
        </div>
      </div>)
    })}
  </div>

  )
}

export default Items