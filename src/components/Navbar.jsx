import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const user=false
  return (
    <div className='border shadow-md p-4'>
      <div className='flex justify-between max-w-6xl mx-auto'>
        {/* left */}
        <div className='text-2xl font-bold'><Link to='/'>ToDo Web</Link></div>

        {/* middle */}
        <ul className='flex gap-4 font-semibold text-lg '>
          <Link to='/'>
            <li>Home</li>
          </Link>

          <Link to='/todo'>
            <li>ToDO</li>
          </Link>

          <Link to='/addtask'>
            <li>Add Task</li>
          </Link>
        </ul>
        {/* right */}
        <div className='flex gap-4 font-semibold text-lg'>
          {
            user ? <button>Logout</button>:(
              <>
          <Link to='/login'>
            <button>Login</button>
          </Link>

          <Link to='/register'>
            <button>Register</button>
          </Link>
              
              </>
            )
          }




            
        </div>
      </div>
    </div>
  )
}

export default Navbar
