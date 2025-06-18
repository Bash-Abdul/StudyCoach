import React, { useState } from 'react'
import { FaBrain } from "react-icons/fa";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';
import google from '../../assets/google.webp'
import Image from 'next/image';


const Auth = () => {

    const [activeTab, setActiveTab] = useState("login");



    return (
        <div className='w-screen h-screen bg-[#eee] fixed top-0 left-0 right-0'>
            <div className='w-full h-full flex items-center justify-center flex-col gap-y-5'>

                <Link href={'/'}>
                    <FaArrowLeft className='w-10 h-10 text-black fixed top-[8%] cursor-pointer left-15' />
                </Link>

                <div className='flex flex-col items-center gap-y-4 text-center'>
                    <div className="w-10 h-10 bg-[#6366F1] rounded-xl flex items-center justify-center shadow-lg">
                        {/* <span className="text-white font-bold text-lg"></span> */}
                        <FaBrain />
                    </div>

                    <span className="text-3xl font-bold text-gray-900">
                        StudyCoach
                    </span>

                    <span className='text-gray-500 text-xs font-semibold'>
                        Study smarter with AI-powered insights
                    </span>
                </div>


                <div className='bg-white p-6 rounded-sm text-gray-700'>
                    <div className='bg-gray-200 py-1 px-1 rounded-sm flex items-center gap-y-5 text-sm mb-5'>
                        <span className={`${activeTab === "login" ? "bg-white" : "bg-none"} flex-1 text-center py-1 cursor-pointer`} onClick={() => setActiveTab("login")}>Sign In</span>
                        <span className={`${activeTab === "signup" ? "bg-white" : "bg-none"} flex-1 text-center py-1 cursor-pointer`} onClick={() => setActiveTab("signup")}>Sign Up</span>
                    </div>
                    {/* <form action="" className='w-[22rem] flex flex-col gap-y-4'>



                        <div className='flex flex-col gap-y-1'>
                            <label htmlFor="" className='text-sm'>Email Address:</label>
                            <input type="email" placeholder='Enter your email' name="" id="" className='w-full border border-gray-300 py-2 px-4 text-sm rounded-sm' />
                        </div>

                        <div>
                            <label htmlFor="" className='text-sm'>Password:</label>
                            <input type="email" placeholder='Enter your password' name="" id="" className='w-full border border-gray-300 py-2 px-4 text-sm rounded-sm'/>
                        </div>

                        <div className='flex items-center justify-between text-sm'>
                            <div className='flex items-center gap-x-1'>
                                <input type="checkbox" name="" id="" className='cursor-pointer' />
                                <span>Remember me</span>
                            </div>

                            <span className='text-[#6366F1] cursor-pointer'>
                                Forgot Password?
                            </span>
                        </div>

                        <button className='bg-[#6366F1] py-2 text-sm text-white rounded-sm cursor-pointer'>Sign in to your account</button>
                    </form> */}

                    {
                        activeTab === "signup" ? <RegisterForm /> : <LoginForm />
                    }

                    {/* <LoginForm/> */}

                    {/* <span className='inline-block w-full text-sm py-4 text-center'>Or continue with</span> */}
                    <div className="flex items-center gap-4 w-full text-sm py-4 text-gray-500">
                        <div className="flex-grow h-px bg-gray-300" />
                        <span className="whitespace-nowrap">Or continue with</span>
                        <div className="flex-grow h-px bg-gray-300" />
                    </div>


                    <div className='border border-gray-300 rounded-sm py-2 text-center text-sm cursor-pointer flex items-center justify-center gap-x-2'>
                        <Image src={google} alt="Logo" width={17} height={17} className='' />

                        Continue with Google
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Auth