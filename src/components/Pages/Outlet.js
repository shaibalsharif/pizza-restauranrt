import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useNavigate } from 'react-router-dom';

const Outlet = ({ data }) => {
    const navigate = useNavigate()
const handleOutletSelection = (e) => {
        navigate('/items')
    }
    return (
        <div className=' p-2 mb-2 text-center  w-[45%] bg-[#f2f2f2] rounded-lg shadow-md border-4 border-b-[#a1a0a0]'
        onClick={handleOutletSelection}>
            <img src={'./brg.png'} className=' h-20 rounded-xl shadow-sm mb-1' />
            <p className='text-xs font-semibold'>Pizzaburg - {data.name}</p>
            <p className='px-2 text-xs truncate'>{data.address}</p>
            <div className='flex justify-between items-center'>
                <div>

                    {[...Array(Math.floor(data.rating))].map((elementInArray, index) => (
                        <StarIcon className='text-red-600' fontSize='xs' />
                    ))}
                    {Math.ceil((Math.ceil(data.rating) - Math.floor(data.rating))) ? <StarHalfIcon className='text-red-600' fontSize='xs' /> : <></>}
                    {[...Array(5 - Math.ceil(data.rating))].map((elementInArray, index) => (
                        <StarOutlineIcon className='text-red-600' fontSize='xs' />
                    ))}
                </div>
                <button onClick={handleOutletSelection} className='text-xs px-2 py-1 rounded-lg bg-green-500'>Open</button>
            </div>
        </div>
    )
}

export default Outlet