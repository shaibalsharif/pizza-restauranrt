import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';


const Register = () => {

  const navigate = useNavigate()
  const handleSignIn = () => {
  
    navigate('/login')
  }
  const handleSkip = () => {
    /* clear User */
    navigate('/places')
  }
  const handleSignUp = () => {
    /* clear User */
    /* Add User */
    navigate('/login')
  }



  return (
    <div className="h-[100vh] gap-8 flex flex-col bg-[url('https://bbspizzaria.com/wp-content/uploads/2017/01/bg-pizza.jpg')] z-[-1]
    bg-no-repeat bg-cover  bg-center " >
      <div className='top-section'>
        <button className='bg-black px-[1rem] rounded-2xl m-2 text-sm py-1 text-white hover:cursor-pointer' onClick={handleSkip}>SKIP</button>
        <div className='logo w-full '>
          <img className='w-48 mx-auto' src='./logo.png ' />
        </div>
      </div>

      <div className='bottom-section flex flex-col gap-[1.5rem] items-center bg-[#fff] h-[100%] rounded-t-3xl' >
        <div className=' text-white font-bold bg-black px-4 pb-2 -pt-1  rounded-xl bg-opacity-40  pt-1 mt-2 text-2xl  '>SIGN UP</div>


        <div className='bg-[#f2f2f2] flex items-center py-[.7rem] text-lg px-2 rounded-lg'>
          <PersonIcon className='text-red-500' />
          <input className='bg-[#f2f2f2] outline-none pl-2' placeholder='Full Name' type={'text'}></input>
        </div>


        <div className='bg-[#f2f2f2] flex items-center py-[.7rem] text-lg px-2 rounded-lg'>
          <CallIcon className='text-red-500' />
          <input className='bg-[#f2f2f2] outline-none pl-2' placeholder='Mobile Number' type={'number'}></input>
        </div>

        <div className='bg-[#f2f2f2] flex items-center py-[.7rem] text-lg px-2 rounded-lg'>
          <LockIcon className='text-red-500' />
          <input className='bg-[#f2f2f2] outline-none pl-2' placeholder='Password' type={'password'}></input>
        </div>



        <div className='bg-red-500 text-white rounded-xl text-sm px-[3.2rem] py-[.6rem] hover:cursor-pointer' onClick={handleSignUp}>
          SIGN UP
        </div>
        <div className='text-xs text-center bg-white bg-opacity-60 px-2 rounded-md'>
          <p>Already have an account? <span className='text-red-500 hover:cursor-pointer' onClick={handleSignIn}>Sign In</span></p>
        </div>

      </div>
    </div>
  )
}

export default Register