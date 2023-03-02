import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const handleSignIn = () => {
    /* SetUser */
    navigate('/login')
  }
  const handleSkip = () => {
    /* clear User */
    navigate('/places')
  }
  const handleSignUp = () => {
    /* clear User */
    navigate('/register')
  }

  return (
    <div className="h-[100vh]  bg-[url('https://bbspizzaria.com/wp-content/uploads/2017/01/bg-pizza.jpg')] z-[-1]
     bg-no-repeat bg-cover  bg-center " >
      <div className='bg-[#f70d0d7a] h-[100vh]'>
        <div className='logo w-full flex justify-center items-center pt-24'>
          <img className='w-56 ' src='./logo.png ' />
        </div>
       {/*  <div className='news'>
          <img className='w-36 h-24 ' src='./pizza.png' />
        </div> */}

        <div className='pt-36 pb-2  text-center sub-header text-[#fff] text-3xl font-bold tracking-wider'>
          <p>Craving for PIZZZA's</p>
        </div>
        <div className=' btn-panel flex flex-col gap-4 justify-center w-full items-center'>
          <button className='w-[75%] text-md py-2 rounded-md text-red-500 bg-slate-50' onClick={handleSignIn}>SIGN IN</button>

          <button className='w-[75%] text-md py-2 rounded-md text-red-500 bg-slate-50' onClick={handleSkip}>SKIP</button>
          <p className='bg-[#f7f6f625] px-2'> Don't have an account? <a className='underline' onClick={handleSignUp}>SIGN UP</a></p>
        </div>
      </div>

    </div>
  )
}

export default Home