import React from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';


const BottomNav = () => {
  return (
    <div className='h-10  bg-[#f2f2f2]'>
        <ul className='flex justify-between text-xs text-center  px-6'>
            <li>
                <div className='px-3  border-t-[3px] border-[#ff0000A5] flex-flex-col items-center justify-center '>
                    <HomeIcon className="text-[#ff0000A5]"/>
                    <p className="text-[#ff0000A5]">Home</p>
                </div>
            </li>

            <li>
                <div className='px-3  flex-flex-col items-center justify-center '>
                    <AssignmentIcon className="text-[#555550b9]"/>
                    <p className="text-[#555550b9]">Orders</p>
                </div>
            </li>

            <li>
                <div className='px-3  flex-flex-col items-center justify-center '>
                    <ShoppingBasketIcon className="text-[#555550b9]"/>
                    <p className="text-[#555550b9]">Cart</p>
                </div>
            </li>

            <li>
                <div className='px-3  flex-flex-col items-center justify-center '>
                    <MenuIcon className="text-[#555550b9]"/>
                    <p className="text-[#555550b9]">More</p>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default BottomNav