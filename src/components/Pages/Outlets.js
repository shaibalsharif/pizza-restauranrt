import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BottomNav from '../../shared/BottomNav'
import SideBoard from '../../shared/SideBoard'
import Outlet from './Outlet'






const Outlets = () => {


  const [open, setOpen] = useState(false)
  const base_url = process.env.REACT_APP_BASE_URL
  const [outletData, setOutletData] = useState([])




  useEffect(() => {
    axios.get(`${base_url}/api/outlets`)
      .then(res => {
        setOutletData(res.data);
      })
  }, [])

  return (
    <div className=''>
      <div className='mb-24'>
        <div className='title'>
          <img src='./pb.png' className='mx-auto' />
        </div>
        <div className='image-slider mx-2 image-slider h-[7rem] overflow-hidden rounded-l-3xl rounded-r-[45px]'>
          <img src='./brg.png' />
        </div>
        <p className='px-3 mt-4'>Outlets</p>
        <div className='outlet-div h-96  flex flex-wrap justify-around mt-2'>
          {outletData.length?  outletData.map(el => <Outlet data={el} />):
          <>NO DATA</>}
        </div>
      </div>
      <div className='fixed bottom-0 w-[100vw]'>
        <BottomNav content={'home'} />
      </div>
    </div>
  )
}

export default Outlets