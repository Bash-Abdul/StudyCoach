import Link from "next/link";
import { FaBrain } from "react-icons/fa";

export default function Navbar() {
    return (
        // <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
        //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        //     <div className="flex justify-between items-center h-20">
        //       {/* Logo/Brand */}
        //       <Link href="/" className="flex items-center space-x-2">
        //         <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
        //           <span className="text-white font-bold text-lg">S</span>
        //         </div>
        //         <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        //           Smart-Coach
        //         </span>
        //       </Link>

        //       {/* Navigation Buttons */}
        //       <div className="flex items-center space-x-6">
        //         <Link
        //           href="/login"
        //           className="text-white/90 hover:text-white transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-white/10"
        //         >
        //           Login
        //         </Link>
        //         <Link
        //           href="/register"
        //           className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        //         >
        //           Sign Up
        //         </Link>
        //       </div>
        //     </div>
        //   </div>
        // </nav>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* LOGO */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-[#6366F1] rounded-xl flex items-center justify-center shadow-lg">
                            {/* <span className="text-white font-bold text-lg"></span> */}
                            <FaBrain />
                        </div>
                        <span className="text-2xl font-bold text-gray-900">
                            StudyCoach
                        </span>
                    </Link>

                    {/* NAVIGATION LINKS */}
                    <div className="flex items-center space-x-8 text-black">
                        <span className="">
                            <Link
                                href="/"
                            >
                                Features
                            </Link>
                        </span>

                        <span>
                            <Link
                                href="/"
                            >
                                Pricing
                            </Link>
                        </span>

                        <span>
                            <Link
                                href="/"
                            >
                                Contact
                            </Link>
                        </span>
                    </div>


                    {/* Navigation Buttons */}
                    <div className="flex items-center space-x-6">
                        <Link
                            href="/auth"
                            className="bg-[#6366F1] text-white px-6 py-3 rounded-sm font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Get Started
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    );
}