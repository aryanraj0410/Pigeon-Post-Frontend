import React, { useState } from 'react'

const Login = () => {
  const[isLogin,setIsLogin] = useState(true);

const loginSignupHandler = ()=> {
  setIsLogin(!isLogin);
}

  return (
    <div>
      <div className='w-screen h-screen flex items-center justify-center'>
        <div className='flex items-center justify-evenly w-[35%]'>
          <img className='ml-1' width={"500px"} src="https://logopond.com/logos/6b309aa83be5cc279fd2a7483ca6f8c4.png" />
        </div>
        <div>
          <div className='my-5'>
            <h1 className='font-bold text-6xl'>Happening now.</h1>

          </div>
          <h1 className='mt-4 mb-2 text-2xl font-bold'>
           {isLogin ? "Login" : "Signup"} 
          </h1>
          <form className='flex flex-col w-[55%] '>
            {
              !isLogin && (<>
              
              <input type="text" placeholder='Name' className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold' />
              <input type="text" placeholder='Username' className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold' />
              </>)
            }
            <input type="text" placeholder='Email' className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold' />
            <input type="text" placeholder='Password' className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold' />
            <button className='bg-[#dd4018] border-none py-1 my-4 rounded-full text-lg text-white'>{isLogin ? "Login" : "Create Account"}</button>
          <h1>{ isLogin ? "Do not have an account?" : "Already have an account?"} <span onClick={loginSignupHandler} className='font-bold text-blue-600 cursor-pointer'> {isLogin ? "Signup" : "Login" }</span></h1>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login