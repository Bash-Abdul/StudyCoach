// import { useState } from "react";
// import Link from "next/link";

// export default function RegisterForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: Connect to backend
//     alert("Registration not implemented yet!");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-80 space-y-4">
//       <h2 className="text-2xl font-bold text-center mb-4">Create Account</h2>
//       <input
//         type="email"
//         className="w-full border p-2 rounded"
//         placeholder="Email"
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         className="w-full border p-2 rounded"
//         placeholder="Password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//         required
//       />
//       <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
//         Register
//       </button>
//       <div className="text-center">
//         <span>Already have an account? </span>
//         <Link href="/" className="text-green-600 hover:underline">Login</Link>
//       </div>
//     </form>
//   );
// }

import React from 'react'

const RegisterForm = () => {
  return (
    <form action="" className='w-[22rem] flex flex-col gap-y-4'>

<div className='flex flex-col gap-y-1'>
        <label htmlFor="" className='text-sm'>Full Name</label>
        <input type="text" placeholder='Enter your full name' name="" id="" className='w-full border border-gray-300 py-2 px-4 text-sm rounded-sm' />
    </div>

    <div className='flex flex-col gap-y-1'>
        <label htmlFor="" className='text-sm'>Email Address:</label>
        <input type="email" placeholder='Enter your email' name="" id="" className='w-full border border-gray-300 py-2 px-4 text-sm rounded-sm' />
    </div>

    <div>
        <label htmlFor="" className='text-sm'>Password:</label>
        <input type="email" placeholder='Enter your password' name="" id="" className='w-full border border-gray-300 py-2 px-4 text-sm rounded-sm'/>
    </div>

    <div>
        <label htmlFor="" className='text-sm'>Confirm Password:</label>
        <input type="email" placeholder='Confirm your password' name="" id="" className='w-full border border-gray-300 py-2 px-4 text-sm rounded-sm'/>
    </div>
    <div className='flex items-center justify-between text-sm'>
        <div className='flex items-center gap-x-1'>
            <input type="checkbox" name="" id="" className='cursor-pointer' />
            <p>I agree to the <span className='text-[#6366F1] cursor-pointer'>Terms of Service</span> and <span className='text-[#6366F1] cursor-pointer'>Privacy Policy</span></p>
        </div>
    </div>

    <button className='bg-[#6366F1] py-2 text-sm text-white rounded-sm cursor-pointer'>Sign in to your account</button>
</form>
  )
}

export default RegisterForm