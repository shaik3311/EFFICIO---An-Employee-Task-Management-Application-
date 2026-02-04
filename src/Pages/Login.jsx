import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Login = () => {

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(`Form submitted email:${email} password:${password}`);   
    }
  return (
    <div>
        <div className="flex justify-between items-center px-5 sm:px-10 lg:px-20 py-4 bg-white">
            <img
            src="/LogoText.png"
            alt="Efficio Logo"
            className="w-40 sm:w-48 lg:w-56"
            />
        </div>

        <div className="flex justify-center items-center px-4 h-[70vh]">
            <form className='w-full max-w-md bg-blue-700 rounded-xl shadow-lg p-8'>
                <h2 className="text-3xl font-bold text-center text-white mb-2">
                    Welcome Back
                </h2>
                <p className="text-center text-gray-200 mb-6">
                    Login to continue to Efficio
                </p>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-200 mb-1">
                        Email
                    </label>
                    <input
                    type="email"
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                    placeholder="Email"
                    className="w-full px-4 py-2 bg-white rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-200 mb-1">
                        Password
                    </label>
                    <input
                    type="password"
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}  
                    placeholder="••••••••"
                    className="w-full px-4 py-2 bg-white rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>


                <button
                onClick={(e)=>{
                    submitHandler(e);
                }}
                type="submit"
                className="w-full bg-blue-400 hover:bg-blue-500 text-white py-2 rounded-md font-semibold transition active:scale-95">
                    Login
                </button>


                <p className="text-sm text-center text-gray-200 mt-6">
                    Don’t have an account?
                    <Link
                    to="/signup"
                    className="text-white font-semibold ml-1 hover:underline">
                        Signup
                    </Link>
                </p>
            </form>
        </div>
    </div>
  )
}

export default Login