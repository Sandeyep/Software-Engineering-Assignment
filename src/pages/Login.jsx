import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-[90vh] flex justify-center items-center'>
      <div className='border shadow-md rounded-xl p-4 max-w-sm w-full'>
        <h1 className='text-teal-400 font-semibold text-3xl text-center'>Login</h1>

        <form>
            <div className='space-y-2'>
                <label htmlFor='username'>Username</label>
                <input type='text' name='username' id='username' placeholder='Enter your Username'></input>
            </div>

            <div className='space-y-2'>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id='password' placeholder='Enter your Username'></input>
            </div>

            <button className='bg-teal-500 text-white w-full py-2 rounded-md p-3 my-3'>Login</button>
            <p>Already have an Account?  
                 <Link to='/register'> Register</Link>
            </p>
        </form>
        </div>
    </div>
  )
}

export default Login
