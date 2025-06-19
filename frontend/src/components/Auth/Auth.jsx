// import React, { useState, useEffect } from 'react'
// import { FaBrain } from "react-icons/fa";
// import LoginForm from './LoginForm';
// import RegisterForm from './RegisterForm';
// import { FaArrowLeft } from "react-icons/fa";
// import Link from 'next/link';
// import google from '../../assets/google.webp'
// import Image from 'next/image';
// import { useRouter } from 'next/router';


// const Auth = () => {

//     const [activeTab, setActiveTab] = useState("login");
//     const router = useRouter();

//     useEffect(() => {
//         // Wait for google.accounts.id to be available
//         function initializeGoogleSignIn() {
//           if (window.google && window.google.accounts) {
//             window.google.accounts.id.initialize({
//               client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
//               callback: handleGoogleResponse,
//             });
    
//             window.google.accounts.id.renderButton(
//               document.getElementById("googleSignInDiv"),
//               { theme: "outline", size: "large" }
//             );
    
//             // Optionally: prompt user to select account automatically
//             // window.google.accounts.id.prompt();
//           } else {
//             setTimeout(initializeGoogleSignIn, 100); // retry if google not ready
//           }
//         }
    
//         initializeGoogleSignIn();
    
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//       }, []);
    
//       function handleGoogleResponse(response) {
//         console.log("Google ID token:", response.credential);
    
//         // Send credential to backend
//         fetch("/api/auth/google", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ credential: response.credential }),
//         })
//           .then(async (res) => {
//             if (!res.ok) {
//               const err = await res.json();
//               throw new Error(err.message || "Login failed");
//             }
//             return res.json();
//           })
//           .then((data) => {
//             console.log("Backend response:", data);
//             alert(`Logged in as ${data.user.fullName}`);
//             router.push('/dashboard');
//             alert('Login successful');
//             // TODO: Save user info in state or redirect
//           })
//           .catch((err) => {
//             console.error("Google login error:", err);
//             alert("Google login failed: " + err.message);
//           });
//       }



//     return (
//         <div className='w-screen h-screen bg-[#eee] fixed top-0 left-0 right-0'>
//             <div className='w-full h-full flex items-center justify-center flex-col gap-y-5'>

//                 <Link href={'/'}>
//                     <FaArrowLeft className='w-10 h-10 text-black fixed top-[8%] cursor-pointer left-15' />
//                 </Link>

//                 <div className='flex flex-col items-center gap-y-4 text-center'>
//                     <div className="w-10 h-10 bg-[#6366F1] rounded-xl flex items-center justify-center shadow-lg">
//                         {/* <span className="text-white font-bold text-lg"></span> */}
//                         <FaBrain />
//                     </div>

//                     <span className="text-3xl font-bold text-gray-900">
//                         StudyCoach
//                     </span>

//                     <span className='text-gray-500 text-xs font-semibold'>
//                         Study smarter with AI-powered insights
//                     </span>
//                 </div>


//                 <div className='bg-white p-6 rounded-sm text-gray-700'>
//                     <div className='bg-gray-200 py-1 px-1 rounded-sm flex items-center gap-y-5 text-sm mb-5'>
//                         <span className={`${activeTab === "login" ? "bg-white" : "bg-none"} flex-1 text-center py-1 cursor-pointer`} onClick={() => setActiveTab("login")}>Sign In</span>
//                         <span className={`${activeTab === "signup" ? "bg-white" : "bg-none"} flex-1 text-center py-1 cursor-pointer`} onClick={() => setActiveTab("signup")}>Sign Up</span>
//                     </div>
//                     {/* <form action="" className='w-[22rem] flex flex-col gap-y-4'>



//                         <div className='flex flex-col gap-y-1'>
//                             <label htmlFor="" className='text-sm'>Email Address:</label>
//                             <input type="email" placeholder='Enter your email' name="" id="" className='w-full border border-gray-300 py-2 px-4 text-sm rounded-sm' />
//                         </div>

//                         <div>
//                             <label htmlFor="" className='text-sm'>Password:</label>
//                             <input type="email" placeholder='Enter your password' name="" id="" className='w-full border border-gray-300 py-2 px-4 text-sm rounded-sm'/>
//                         </div>

//                         <div className='flex items-center justify-between text-sm'>
//                             <div className='flex items-center gap-x-1'>
//                                 <input type="checkbox" name="" id="" className='cursor-pointer' />
//                                 <span>Remember me</span>
//                             </div>

//                             <span className='text-[#6366F1] cursor-pointer'>
//                                 Forgot Password?
//                             </span>
//                         </div>

//                         <button className='bg-[#6366F1] py-2 text-sm text-white rounded-sm cursor-pointer'>Sign in to your account</button>
//                     </form> */}

//                     {
//                         activeTab === "signup" ? <RegisterForm /> : <LoginForm />
//                     }

//                     {/* <LoginForm/> */}

//                     {/* <span className='inline-block w-full text-sm py-4 text-center'>Or continue with</span> */}
//                     <div className="flex items-center gap-4 w-full text-sm py-4 text-gray-500">
//                         <div className="flex-grow h-px bg-gray-300" />
//                         <span className="whitespace-nowrap">Or continue with</span>
//                         <div className="flex-grow h-px bg-gray-300" />
//                     </div>


//                     <div id="googleSignInDiv" className='border border-gray-300 rounded-sm py-2 text-center text-sm cursor-pointer flex items-center justify-center gap-x-2'>
//                         <Image src={google} alt="Logo" width={17} height={17} className='' />

//                         Continue with Google
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Auth


import React, { useState, useEffect } from 'react';
import { FaBrain, FaArrowLeft } from "react-icons/fa";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Link from 'next/link';
import google from '../../assets/google.webp';
import Image from 'next/image';
import { useRouter } from 'next/router';
import API from '@/utils/axios';
import Swal from 'sweetalert2';

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  return (
    <div className='w-screen h-screen bg-[#eee] fixed top-0 left-0 right-0'>
      <div className='w-full h-full flex items-center justify-center flex-col gap-y-5'>
        <Link href={'/'}>
          <FaArrowLeft className='w-10 h-10 text-black fixed top-[8%] cursor-pointer left-15' />
        </Link>

        <div className='flex flex-col items-center gap-y-4 text-center'>
          <div className="w-10 h-10 bg-[#6366F1] rounded-xl flex items-center justify-center shadow-lg">
            <FaBrain />
          </div>

          <span className="text-3xl font-bold text-gray-900">StudyCoach</span>

          <span className='text-gray-500 text-xs font-semibold'>
            Study smarter with AI-powered insights
          </span>
        </div>

        <div className='bg-white p-6 rounded-sm text-gray-700 w-[24rem]'>
          <div className='bg-gray-200 py-1 px-1 rounded-sm flex items-center gap-y-5 text-sm mb-5'>
            <span
              className={`${activeTab === "login" ? "bg-white" : "bg-none"} flex-1 text-center py-1 cursor-pointer`}
              onClick={() => setActiveTab("login")}
            >
              Sign In
            </span>
            <span
              className={`${activeTab === "signup" ? "bg-white" : "bg-none"} flex-1 text-center py-1 cursor-pointer`}
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </span>
          </div>

          {activeTab === "signup" ? <RegisterForm API={API} router={router} Swal={Swal} loading={loading} setLoading={setLoading} /> : <LoginForm  API={API} router={router} Swal={Swal} loading={loading} setLoading={setLoading} />}

          <div className="flex items-center gap-4 w-full text-sm py-4 text-gray-500">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="whitespace-nowrap">Or continue with</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          {/* Your custom Google button */}
          <div
            className='border border-gray-300 rounded-sm py-2 text-center text-sm cursor-pointer flex items-center justify-center gap-x-2 hover:bg-gray-100'
          >
            <Image src={google} alt="Google Logo" width={17} height={17} />
            Continue with Google
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
