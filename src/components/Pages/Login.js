import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const handleSignIn = () => {
    /* SetUser */
    navigate('/places')
  }
  const handleSkip = () => {
    /* clear User */
    navigate('/places')
  }
  const handleSignUp = () => {
    /* clear User */
    navigate('/register')
  }
  const handleForgetPass = () => {
    console.log("suti ya");
  }


  return (
    <div className="h-[100vh] gap-8 flex flex-col bg-[url('https://bbspizzaria.com/wp-content/uploads/2017/01/bg-pizza.jpg')] z-[-1]
    bg-no-repeat bg-cover  bg-center " >
      <div className='top-section'>
        <button onClick={handleSkip} className='bg-black px-[1rem] rounded-2xl m-2 text-sm py-1 text-white'>SKIP</button>
        <div className='logo w-full '>
          <img className='w-48 mx-auto' src='./logo.png ' />
        </div>
      </div>
      <div className='bottom-section flex flex-col gap-[1.5rem] items-center bg-white h-[100%] rounded-t-3xl' style={{ 'boxAShadow': '4px 3px 10px rgb(255 255 255 / 0.5)' }}>
        <div className=' text-white font-bold bg-black px-4 pb-2 -pt-1  rounded-xl bg-opacity-40  pt-1 mt-2 text-2xl  '>Sign In</div>
        <div className='bg-[#f2f2f2] flex items-center py-[.7rem] text-lg px-2 rounded-lg'>
          <CallIcon className='text-red-500' />
          <input className='bg-[#f2f2f2] outline-none pl-2  ' type={'number'}></input>
        </div>

        <div className='bg-[#f2f2f2] flex items-center py-[.7rem] text-lg px-2 rounded-lg'>
          <LockIcon className='text-red-500' />
          <input className='bg-[#f2f2f2] outline-none pl-2  ' type={'password'}></input>
        </div>
        <div onClick={handleSignIn} className='bg-red-500 text-white rounded-xl text-sm px-[3.2rem] py-[.6rem] hover:cursor-pointer'>
          SIGN IN
        </div>
        <div className='text-xs text-center bg-white bg-opacity-60 px-2 rounded-md'>
          <p>Don't fave an account? <span className='text-red-500 hover:cursor-pointer' onClick={handleSignUp} >Sign Up</span></p>
          <p className='text-red-500 hover:cursor-pointer' onClick={handleForgetPass}>Forgot password?</p>
        </div>

      </div>
    </div>
  )
}

export default Login