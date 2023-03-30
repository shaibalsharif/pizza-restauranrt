import React from 'react'

import BottomNav from '../../shared/BottomNav'

const Cart = () => {
  return (
    <div>Cart
      <div className='fixed bottom-0 w-[100vw]'>
        <BottomNav content={'cart'} />
      </div>
    </div>
  )
}

export default Cart