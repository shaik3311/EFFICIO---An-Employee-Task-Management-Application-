import React, { useContext, useEffect, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { DataContext } from '../Context/DataProvider';

const Signup = () => {
    const{employees,admins,addEmployee,addAdmin} = useContext(DataContext);
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[isAdmin,setIsAdmin] = useState(false);
    const[userNameAvailability,setUserNameAvailability] = useState(false);
    const[userNameAvailabilityMsg,setUserNameAvailabilityMsg] = useState(null);
    const navigate = useNavigate();

    // console.log(employees,admins,addAdmin,addEmployee);
    //-------------------------------------- Unique name search start ---------------------------------------------------------
    const checkUserNameAvailability = (name)=>{
        setUserNameAvailability(false);
        if(name.length<4){
            setUserNameAvailabilityMsg(
                <p className='text-red-600'>Username must be at least 4 characters</p>
            );
            return;
        }
        const taken = employees.some(emp=>emp.userName == name) || admins.some(admin=>admin.userName == name);

        if(taken){
            setUserNameAvailabilityMsg(
                <p className='text-red-600'>Username is already taken</p>
            );
        }else{
            setUserNameAvailabilityMsg(
                <p className='text-green-600'>Username is available</p>
            );
            setUserNameAvailability(true);
        }
    }
    //-------------------------------------- Unique name search end ---------------------------------------------------------

    
    //-------------------------------------- sigup handling start ------------------------------------------------------
    const validateForm = (form)=>{
        if(!form.userName || !form.email || !form.password || !userNameAvailability){
            alert("Enter the proper details to proceed");
            return false;
        }
        return true;
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(`Account created with Name:${name} email:${email} password:${password} IsAdmin:${isAdmin}`);
        if(isAdmin){
            const newAdmin = {
                "userName":name,
                "email":email,
                "password":password,
                "isAdmin":isAdmin
            }
            if(validateForm(newAdmin)){
                addAdmin(newAdmin);
                navigate('/login');
            }else{
                alert("Enter details properly");
            }
            
        }else{
            const newEmployee = {
                "userName":name,
                "email":email,
                "password":password,
                "isAdmin":isAdmin,
                "tasks":[]
            }
            if(validateForm(newEmployee)){
                addEmployee(newEmployee);
                navigate('/login');
            }  else{
                alert("Enter details properly");
            }
        }
        
        setName('');
        setEmail('');
        setPassword('');
        setIsAdmin(false);
        setUserNameAvailabilityMsg(null);
    }
    //-------------------------------------- sigup handling end ------------------------------------------------------




  return (
    <div className=''>
        <div className="flex justify-between items-center px-5 sm:px-10 lg:px-20 py-4 bg-white">
            <img
            onClick={()=>{
                navigate('/');
            }}
            src="/LogoText.png"
            alt="Efficio Logo"
            className="w-40 sm:w-48 lg:w-56 cursor-pointer"
            />
        </div>

        <div className="flex justify-center items-center px-4 h-[70vh] lg:mt-10 mt-20">
            <form className='w-full max-w-md bg-blue-700 rounded-xl shadow-lg p-8'>
                <h2 className="text-3xl font-bold text-center text-white mb-2">
                    Welcome to, EFFICIO
                </h2>
                <p className="text-center text-gray-200 mb-6">
                    Sigup to continue to Efficio
                </p>

                {/* Name input  */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-200 mb-1">
                        Username
                    </label>
                    <input
                    type="text"
                    value={name}
                    onChange={(e)=>{
                        setName(e.target.value);
                        checkUserNameAvailability(e.target.value)
                    }}
                    placeholder="Username"
                    className="w-full px-4 py-2 bg-white rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {userNameAvailabilityMsg}
                </div>

                {/* Email input  */}
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
                
                {/* password input  */}
                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-200 mb-1">
                        Password
                    </label>
                    <input
                    type="password"
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}  
                    placeholder="••••••••"
                    className="w-full px-4 py-2 bg-white rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Admin checkbox  */}
                <div className="flex items-center gap-2 mb-5">
                    <input
                        type="checkbox"
                        id="admin"
                        checked={isAdmin}
                        onChange={(e) => setIsAdmin(e.target.checked)}
                        className="w-4 h-4 cursor-pointer"/>
                    <label htmlFor="admin" className="text-md text-gray-200 cursor-pointer">
                        Register as Admin
                    </label>
                </div>


                <button
                onClick={(e)=>{
                    submitHandler(e);
                }}
                type="submit"
                className="w-full bg-blue-400 hover:bg-blue-500 text-white py-2 rounded-md font-semibold transition active:scale-95">
                    Signup
                </button>


                <p className="text-sm text-center text-gray-200 mt-6">
                    Already have an account?
                    <Link
                    to="/login"
                    className="text-white font-semibold ml-1 hover:underline">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    </div>
  )
}

export default Signup