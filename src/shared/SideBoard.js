import { HomeOutlined } from '@mui/icons-material'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import PeopleIcon from '@mui/icons-material/People';
import MailIcon from '@mui/icons-material/Mail';
import PolicyIcon from '@mui/icons-material/Policy';


import HomeIcon from '@mui/icons-material/Home';
import React from 'react'

const SideBoard = () => {
    return (
        <div className='grid grid-cols-12 h-[100vh]'>
            <div className='col-span-8 grid grid-rows-6 overflow-hidden bg-red-600'>
                <div className='side-header row-span-2 '>
                    <div className='logo w-24 h-24 mx-auto mt-8' style={{ borderRadius: '50px' }}>
                        <img className='p-1' src='./logo.png' />
                    </div>
                    <div className='user-text text-white font-semibold text-sm text-center mt-1 mb-4'>
                        <p>Welcome, <span>Guest User</span></p>
                    </div>
                </div>

                <div className='navs row-span-5 bg-white  text-xs pt-2'>
                    <ul>
                        <li className='mb-2'>
                            <div className='flex items-center pl-4 gap-2'>
                                <HomeIcon  fontSize='small' className='text-[#646060] '/>
                                <p>Home</p>
                            </div>
                        </li>
                        <li className='mb-2'>
                            <div className='flex items-center pl-4 gap-2'>
                                <ReceiptLongIcon fontSize='small' className='text-[#646060] rotate-[19deg]' />
                                <p>My Order</p>
                            </div>
                        </li>
                        <li className='mb-2'>
                            <div className='flex items-center pl-4 gap-2'>
                                <NotificationsActiveIcon fontSize='small' className='text-[#646060]' />
                                <p>Notification</p>
                            </div>
                        </li>
                        <li className='mb-2'>
                            <div className='flex items-center pl-4 gap-2'>
                                <StarIcon fontSize='small' className='text-[#646060]' />
                                <p>Feedback</p>
                            </div>
                        </li>
                        <li className='mb-2'>
                            <div className='flex items-center pl-4 gap-2'>
                                <ShareIcon fontSize='small' className='text-[#646060]' />
                                <p>Share Us</p>
                            </div>
                        </li>
                        <li className='mb-2'>
                            <div className='flex items-center pl-4 gap-2'>
                                <PeopleIcon fontSize='small' className='text-[#646060]' />
                                <p>About Us</p>
                            </div>
                        </li>
                        <li className='mb-2'>
                            <div className='flex items-center pl-4 gap-2'>
                                <MailIcon fontSize='small' className='text-[#646060]' />
                                <p>Contact Us</p>
                            </div>
                        </li>
                        <li className='mb-2'>
                            <div className='flex items-center pl-4 gap-2'>
                                <PolicyIcon fontSize='small' className='text-[#646060]' />
                                <p>Privacy Policy</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-span-4 bg-[#000]'>

            </div>

        </div>
    )
}

export default SideBoard