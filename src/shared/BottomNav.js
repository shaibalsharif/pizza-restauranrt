import React from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';


const BottomNav = ({ content }) => {
    const navigate = useNavigate()

    const handleHomeNav = (e) => {
        navigate('/')
    }

    const handleOrderNav = (e) => {
        navigate('/order')
    }
    const handleCartNav = (e) => {
        navigate('/cart')
    }
    const handleMoreNav = (e) => {
        navigate('/more')
    }




    return (
        <div className='h-10  bg-[#f2f2f2]'>
            <ul className='flex justify-between text-xs text-center  px-6'>
                <li>
                    <div className='px-3   flex-flex-col items-center justify-center'
                       style={{
                        'border-top-width': content === 'home' ? '3px' : '3px',
                        'border-color': content === 'home' ? ' #ff0000A5' : '3px',
                    }}
                        onClick={handleHomeNav}>
                        <HomeIcon className="text-[#ff0000A5]" />
                        <p className="text-[#ff0000A5]">Home</p>
                    </div>
                </li>

                <li>
                    <div className='px-3  flex-flex-col items-center justify-center '
                        style={{
                            'border-top-width': content === 'order' ? '3px' : '3px',
                            'border-color': content === 'order' ? ' #ff0000A5' : '3px',
                        }}
                        onClick={handleOrderNav}>
                        <AssignmentIcon className="text-[#555550b9]" />
                        <p className="text-[#555550b9]">Orders</p>
                    </div>
                </li>

                <li>
                    <div className='px-3   flex-flex-col items-center justify-center '
                        style={{
                            'border-top-width': content === 'cart' ? '3px' : '3px',
                            'border-color': content === 'cart' ? ' #ff0000A5' : '3px',
                        }}
                        onClick={handleCartNav}>
                        <ShoppingBasketIcon className="text-[#555550b9]" />
                        <p className="text-[#555550b9]">Cart</p>
                    </div>
                </li>

                <li>
                    <div className='px-3   flex-flex-col items-center justify-center '
                        style={{
                            'border-top-width': content === 'more' ? '3px' : '3px',
                            'border-color': content === 'more' ? ' #ff0000A5' : '3px',
                        }}
                        onClick={handleMoreNav}>
                        <MenuIcon className="text-[#555550b9]" />
                        <p className="text-[#555550b9]">More</p>
                    </div>
                </li>
            </ul>
        </div >
    )
}

export default BottomNav