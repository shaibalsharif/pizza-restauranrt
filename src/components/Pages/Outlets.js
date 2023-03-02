import React, { useState } from 'react'
import BottomNav from '../../shared/BottomNav'
import SideBoard from '../../shared/SideBoard'
import Outlet from './Outlet'

const getRating = () => {
  const x = ((Math.random() * 10) / 2)
  let y = Math.floor(x)
  if (y < 2) {
    y += 2
  }
  return x - y > .4 ? y + .5 : y
}
const getOutlet = (locs) => {

  const x = locs.map(el => {
    return {
      name: el,
      address: `256,rd-2, hs-5, ave-7, ${el}`,
      rating: getRating()
    }
  })
  return x
}
const LOCATIONS = getOutlet(['Shyamoli', 'Khilgaon', 'Basundahra', 'Mirpur-2', 'Sony', 'DOHS', 'Mirpur-12'])

const Outlets = () => {
  const [open, setOpen] = useState(false)


  const handleToggle = {

  }

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
        {LOCATIONS.map(el=><Outlet data={el}/>)}
        </div>
      </div>
      <div className='fixed bottom-0 w-[100vw]'>
        <BottomNav />
      </div>
    </div>
  )
}

export default Outlets