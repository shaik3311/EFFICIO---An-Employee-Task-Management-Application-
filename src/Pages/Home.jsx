import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='text-white'>
        <div className="flex justify-between items-center px-5 sm:px-10 lg:px-20 py-4 bg-white">
            <img
            src="/LogoText.png"
            alt="Efficio Logo"
            className="w-40 sm:w-48 lg:w-56"
            />
        </div>
        <div className=' lg:h-[70vh] md:h-[80vh] h-[90vh] flex flex-col justify-center items-center not-lg:px-5'>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-black">
                Welcome to <span className="text-blue-600">Efficio</span>
            </h1>

            <h3 className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6">
                Smart Task Management for Modern Teams
            </h3>
            <p className="text-gray-500 max-w-2xl mb-8 leading-relaxed text-center">
                Efficio is a role-based employee task management web application
                designed to simplify how teams assign, track, and complete work —
                all with a clean, intuitive interface.
            </p>
            <Link to='/login' className="bg-black text-white px-4 sm:px-5 py-2 rounded-md font-semibold shadow-md transition active:scale-95">
            Login / Signup
            </Link>
        </div>
    </div>
  )
}

export default Home